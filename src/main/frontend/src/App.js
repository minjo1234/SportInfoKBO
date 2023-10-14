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
import Login from "./JoinAndLogin/Login";
import Main from "./JoinAndLogin/Main";
import Game from "./Game/Game";
import GameDetail from "./Game/GameDetail";
import CurrentKbo from "./Game/CurrentKbo";
import CurrentChatBatting from "./CurrentChat /CurrentChatBatting";
import CurrentKboGameList from "./Game/CurrentKboGameList";
import Test from "./Game/Test"
import ComunityMain from "./Cumunity /ComunityMain";
function App() {



  return (
      <BrowserRouter>

          <Routes>
              <Route exact path="/" element={<Menu/>}/>

              {/* PlayerRouter */}
              <Route exact path="/players" element={<PlayersInfo/>}/>
              <Route exact path="/kboPlayersList" element={<KboPlayerList/>}/>
              <Route exact path="/KboPitcherList" element={<KboPitcherList/>}/>
              <Route exact path="/KboHitterList"  element={<KboHitterLIst/>}/>
              <Route exact path="/KboPitcherCopyTest" element={<KboPitcherCopyTest/>}/>

              {/* Memeber */}
              <Route exact path="/join" element={<Join/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/Login/main" element={<Main/>}/>

              {/* Game */}
              <Route exact path="/game" element={<Game/>}/>
              <Route exact path="/game/Detail" element={<GameDetail/>}/>
              <Route exact path="/game/CurrentKbo" element={<CurrentKbo/>}/>

              {/* CurrentChat*/}
              <Route exact path="/current/GameChatBatting" element={<CurrentChatBatting/>}/>
              <Route exact path="/current/kboGameList" element={<CurrentKboGameList/>}/>

                {/* Test   */}
              <Route exact path="/test" element={<Test/>}/>

               {/*  Comunity   */}
              <Route exact path="/comunityMain" element={<ComunityMain/>}/>
          </Routes>

      </BrowserRouter>

  );
}

export default App;