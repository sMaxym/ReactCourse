import React from 'react';

class Compiler extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            dir: '',
            text: ':/',
            lastWord: '',
            constTextLength: 2,
            cursorVisible: true
        };
        this.cursorChar = '|';
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.KEYCODE = {
            backspace : 8,
            enter: 13,
            space: 32
        };
    }

    changeCursorVisibility() {
        this.setState({ cursorVisible: !this.state.cursorVisible });
    }

    handleKeyDown(event) {
        let updatedText;
        if (event.keyCode === this.KEYCODE.backspace) {
            if (this.state.text.length > this.state.constTextLength) {
                updatedText = this.state.text.slice(0, -1);
            } else {
                updatedText = this.state.text;
            }
        } else if (event.keyCode === this.KEYCODE.enter) {
            this.state.constTextLength += this.state.lastWord.length;
            updatedText = this.state.text + ' :/';
        } else if (event.keyCode === this.KEYCODE.space) {
            updatedText = this.state.text + ' ';
        } else {
            const keyChar = String.fromCharCode(event.keyCode).toLocaleLowerCase();
            updatedText = this.state.text + keyChar;
        }
        this.setState({ text: updatedText });
    }

    // static getDerivedStateFromProps(nextProps, prevState) { }
    // getSnapshotBeforeUpdate(prevProps, prevState) { }
    // componentDidUpdate() { }

    componentDidMount() {
        this.cursorTimer = setInterval(
            () => this.changeCursorVisibility(),
            500
        );
    }

    componentWillUnmount() { 
        clearInterval(this.cursorTimer);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.text !== nextState.text;
    // }

    render() {
        return <h1 class="compiler" onKeyDown={this.handleKeyDown} tabIndex="0">{this.state.text}{this.state.cursorVisible && this.cursorChar}</h1>;
    }
}

export default Compiler