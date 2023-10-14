import React from "react";
import CurrentKboGameList from "../Game/CurrentKboGameList";

export default function Menu() {

    function goToMain() {
        window.location.href = "/main";
    }

    function goToList() {
        window.location.href = "/kboPlayersList";
    }

    function goToDetail() {
        window.location.href = "/player-detail";
    }
    function goPitcherData() {
        window.location.href = "/KboPitcherList"
    }
    function goHitterData() {
        window.location.href = "/KboHitterLIst"
    }
    function KboPitcherCopyTest() {
        window.location.href = "/KboPitcherCopyTest"
    }

    function Join() {
        window.location.href = "/join";
    }
    function Login() {
        window.location.href = "/login";
    }

    function Game() {
        window.location.href = "/game";
    }

    function GameDetail() {
        window.location.href = "/game/Detail";
    }

    function CurrentKbo() {
        window.location.href = "/game/CurrentKbo";
    }

    function CurrentCahtBatting() {
        window.location.href = "/current/GameChatBatting"
    }

    function CurrentKboGameList() {
        window.location.href = "/current/kboGameList"
    }

    function Test() {
        window.location.href = "/test";
    }

    function ComunityMain() {
        window.location.href = "/comunityMain"
    }
    return (
        <div className="box">

            <button onClick={goToMain}>메인 페이지로 이동</button>
            <button onClick={goToList}>플레이어 리스트 이동</button>
            <button onClick={goPitcherData}>투수의 정보를 확인></button>
            <button onClick={goHitterData}>타자의 정보를 확인</button>
            <button onClick={KboPitcherCopyTest}>카피본</button>

            {/* Member */}
            <button onClick={Join}>회원가입</button>
            <button onClick={Login}>로그인</button>
            {/* Game */}
            <button onClick={Game}>게임경기판</button>
            <button onClick={GameDetail}>경기디테일</button>
            {/* CurrentGame */}
            <button onClick={CurrentKbo}>실시간경기</button>
            <button onClick={CurrentCahtBatting}>실시간채팅방 승패예측 </button>
            <button onClick={CurrentKboGameList}>찐 오늘의 경기 리스트</button>

            <br/>
            <button onClick={Test}>Test하러가기</button> <br/>
            <button onClick={ComunityMain}>Comunity</button>
        </div>
    );
}
