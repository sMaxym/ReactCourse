import React from 'react';

import './App.css';
import './Styles.css';
import './components/RegBtn.css';
import './components/Compiler.css';

import Header from './components/Header';
import BgImg from './components/BgImg';
import Footer from './components/Footer';
import RegBtn from './components/RegBtn';
import Computer from './components/CompBlock';
import Compiler from './components/Compiler';

import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

function App() {
  const navItems = [["домашня", "home"], ["карта", "map"], ["бібліотека", "library"]];
  send_data({data:'hello'});
  get_data();
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="retrocomputing" navItems={navItems}></Header>
        <main class="main">
          <Compiler />
          <Switch>
            <Route path="/library">
              <p>
                There will be library of computers in future
              </p>
            </Route>
            <Route path="/map">
              <p>
                There will be map of computing in future
              </p>
            </Route>
            <Route path="/">
              <h1>PDP-11</h1>
              <BgImg />
              <br />
              <RegBtn href="/library" type="submit" value="Find more on PDP-11" /><br/><br/>
              <RegBtn href="/map" type="important" value="Map of computing" />
              <p>
                Retrocomputing is the use of older computer hardware and software in modern times.
                Retrocomputing is usually classed as a hobby and recreation rather than a practical application of technology;
                enthusiasts often collect rare and valuable hardware and software for sentimental reasons. However, some do make use of it.
                The personal computer has been around since approximately 1976. But in that time, numerous technological revolutions have left
                generations of obsolete computing equipment on the junk heap. Nevertheless, in that time, these otherwise useless computers
                have spawned a sub-culture of vintage computer collectors, who often spend large sums to acquire the rarest of these items,
                not only to display but restore to their fully functioning glory, including active software development and adaptation to modern
                uses. This often includes so-called hackers who add-on, update and create hybrid composites from new and old computers for uses
                for which they were otherwise never intended. Ethernet interfaces have been designed for many vintage 8-bit machines to allow limited
                connectivity to the Internet; where users can access user groups, bulletin boards and databases of software. Most of this hobby centers
                on those computers manufactured after 1960, though some collectors specialize in pre-1960 computers as well. 
              </p>
            </Route>
          </Switch>
    </main>
    <Footer navTitle="retrocomputing" navItems={navItems} author="Maksym Shumakov" email="shumakov@ucu.edu.ua" place="Ukrainian Catholic University"></Footer>
      </div>
    </BrowserRouter>
  );
}

function get_data() {
  fetch("/users").then(response => {
    return response.json();
  }).then(json_data => {
    console.log(json_data)
  });
}

function send_data(data) {
  fetch("/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

export default App;
