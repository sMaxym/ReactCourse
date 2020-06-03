import React from 'react';
import './style.css';

import textMainDescription from "./../../texts/home/Description";
import textPdp11 from "./../../texts/library/PDP-11";
import textAppleI from "./../../texts/library/AppleI";
import textZXSpectrum from "./../../texts/library/ZXSpectrum";
import textAmstradCPC from "./../../texts/library/AmstradCPC";
import textHistory from "./../../texts/map/History"

import { Header } from './../Header';
import { Footer } from './../Footer';
import { Compiler } from './../Compiler';
import { List } from './../List';
import { Topic } from './../Topic';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';

export const initialStyleState = {
  mainColor: '#001f3f',
  secondColor: '#85144b',
  textColor: '#dddddd'
};

const STYLE_RESET = {
  type: 'STYLE_RESET'
};
const STYLE_FAB = {
  type: 'STYLE_FAB'
};
const STYLE_FORMAL = {
  type: 'STYLE_FORMAL'
};

const styleReducer = (state = initialStyleState, action) => {
  switch (action.type) {
    case "STYLE_FAB":
      return {
        mainColor: '#111',
        secondColor: '#222',
        textColor: '#333'
      };
    case "STYLE_FORMAL":
      return {
        mainColor: '#fff',
        secondColor: '#fff',
        textColor: '#fff'
      };
    default:
      return initialStyleState;
  }
};

export function App() {
  let store = createStore(styleReducer, initialStyleState);
  const navItems = [["домашня", ""], ["карта", "map"], ["бібліотека", "library"]];
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header title="retrocomputing" navItems={navItems}></Header>
          <main class="main">
            <Compiler />
            <Switch>
              <Route path="/library">
                <Library />
              </Route>
              <Route path="/map">
                <Topic title="Map of Computing" text={textHistory} imgUrl={process.env.PUBLIC_URL + 'bg-imgs/history.jpeg'} />
              </Route>
              <Route exact path="/">
                <Topic title="Computing" text={textMainDescription} imgUrl={process.env.PUBLIC_URL + 'bg-imgs/mainbg.jpg'} />
              </Route>
            </Switch>
          </main>
          <Footer navTitle="retrocomputing"
            navItems={navItems}
            author="Maksym Shumakov"
            email="shumakov@ucu.edu.ua"
            place="Ukrainian Catholic University">
          </Footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

function Library() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <List items={ [{ name:'PDP-11', year:'1970' },
                         { name:'APPLE I', year:'1976' },
                         { name:'ZX Spectrum', year:'1982' },
                         { name:'Amstrad CPC', year:'1984' }] } curUrl={`/library`} />
        </Route>
        <Route path={`${path}/PDP-11`}><Topic title="PDP-11" text={textPdp11} imgUrl={process.env.PUBLIC_URL + '/bg-imgs/pdp-11.jpg'} /></Route>
        <Route path={`${path}/APPLEI`}><Topic title="APPLE I" text={textAppleI} imgUrl={process.env.PUBLIC_URL + '/bg-imgs/applei.jpg'} /></Route>
        <Route path={`${path}/ZXSpectrum`}><Topic title="ZX Spectrum" text={textZXSpectrum} imgUrl={process.env.PUBLIC_URL + '/bg-imgs/zxspectrum.jpg'} /></Route>
        <Route path={`${path}/AmstradCPC`}><Topic title="Amstrad CPC" text={textAmstradCPC} imgUrl={process.env.PUBLIC_URL + '/bg-imgs/amstradcpc.jpg'} /></Route>
      </Switch>
    </div>
  );
}