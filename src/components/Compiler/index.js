import React from 'react';
import './style.css';

export class Compiler extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dir: '',
            text: ':/',
            lastWord: '',
            cursorVisible: true
        };
        this.cursorChar = '|';
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.KEYCODE = {
            backspace : 8,
            enter: 13,
            space: 32
        };
        this.commandPattern = /^[a-zA-Z]+(\s+(\d|[a-zA-Z])+)*$/;
    }

    changeCursorVisibility() {
        this.setState({ cursorVisible: !this.state.cursorVisible });
    }

    handleKeyDown(event) {
        event.preventDefault();
        let updatedLastWord = this.state.lastWord, updatedText = this.state.text;
        if (event.keyCode === this.KEYCODE.backspace) {
            if (this.state.lastWord.length > 0) {
                updatedLastWord = this.state.lastWord.slice(0, -1);
            }
        } else if (event.keyCode === this.KEYCODE.enter) {
            if (this.state.lastWord !== '') {
                updatedText = this.state.text + this.state.lastWord + ' :/';
                this.uploadToHistory(this.state.lastWord);
                updatedLastWord = '';
                this.setState({ text: updatedText, lastWord: updatedLastWord });
                this.executeCommand(this.state.lastWord, updatedText);
                return;
            }
        } else if (event.keyCode === this.KEYCODE.space) {
            updatedLastWord = this.state.lastWord + ' ';
        } else {
            const keyChar = String.fromCharCode(event.keyCode).toLocaleLowerCase();
            updatedLastWord = this.state.lastWord + keyChar;
        }
        this.setState({ text: updatedText, lastWord: updatedLastWord });
    }

    executeCommand(command, cur_text) {
        command = command.trim();
        let cmd_geth_matches = this.commandPattern.exec(command);
        if (cmd_geth_matches === null) {
            this.executeCmdUnknown();
            return;
        }
        let cmd_parts = cmd_geth_matches[0].split(' ').filter(str => str.length > 0);
        command = cmd_parts[0];
        switch (command) {
            case 'clear':
                this.executeCmdClear();
                break;
            case 'geth':
                this.executeCmdGeth(parseInt(cmd_parts[1]));
                break;
            case 'print':
                this.executeCmdPrint(cmd_parts.slice(1).join(' '));
                break;
            default:
                this.executeCmdUnknown();
        }
    }

    executeCmdUnknown() {
        this.executeCmdPrint('unknown command');
    }

    executeCmdClear() {
        this.setState({ text: ':/' });
    }

    executeCmdGeth(id) {
        let output = '';
        if (id < 0) return output;
        fetch("/history/" + String(id)).then(response => {
            return response.json();
        }).then(json_data => {
            output = 'command: ' + json_data.command + ', date: ' + json_data.date;
            this.setState({ text: this.state.text + ' ' + output + ':/' });
        });
    }

    executeCmdPrint(mess) {
        this.setState({ text: this.state.text + this.state.lastWord + ' ' + mess + ' :/' });
    }

    uploadToHistory(lastCommandText) {
        let today = new Date(); // date example from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
        let dd = today.getDate().toString().padStart(2, '0');
        let mm = (today.getMonth() + 1).toString().padStart(2, '0');
        let yyyy = today.getFullYear();
        let h = today.getHours();
        let m = today.getMinutes();

        let data = {
            "date": mm + '/' + dd + '/' + yyyy + ' ' + h + ':' + m,
            "command": lastCommandText
        };
        fetch("/history", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    componentDidMount() {
        this.cursorTimer = setInterval(
            () => this.changeCursorVisibility(),
            500
        );
    }

    componentWillUnmount() { 
        clearInterval(this.cursorTimer);
    }

    render() {
        return <h1 class="compiler" onKeyDown={this.handleKeyDown} tabIndex="0">{this.state.text + this.state.lastWord}{this.state.cursorVisible && this.cursorChar}</h1>;
    }
}