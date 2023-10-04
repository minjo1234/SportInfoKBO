// src/main/frontend/src/App.js
import PlayersInfo from "./Component/PlayersInfo";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter , Route , Routes} from  'react-router-dom'
import Menu from "./Component/Menu";
import KboPlayerList from "./Component/KboPlayerList";
import KboPitcherList from "./Component/KboPitcherList";
import KboHitterLIst from "./Component/KboHitterLIst";
import KboPitcherCopyTest from "./Component/KboPitcherCopyTest";
import Join from "./JoinAndLogin/Join";
function App() {



  return (
      <BrowserRouter>

          <Routes>
              <Route exact path="/" element={<Menu/>}/>
              <Route exact path="/players" element={<PlayersInfo/>}/>
              <Route exact path="/kboPlayersList" element={<KboPlayerList/>}/>
              <Route exact path="/KboPitcherList" element={<KboPitcherList/>}/>
              <Route exact path="/KboHitterList"  element={<KboHitterLIst/>}/>
              <Route exact path="/KboPitcherCopyTest" element={<KboPitcherCopyTest/>}/>
              <Route exact path="join" element={<Join/>}/>
          </Routes>

      </BrowserRouter>

  );
}

export default App;