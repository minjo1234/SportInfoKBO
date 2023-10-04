import React from "react";

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

    return (
        <div className="box">
            <button onClick={goToMain}>메인 페이지로 이동</button>
            <button onClick={goToList}>플레이어 리스트 이동</button>
            <button onClick={goPitcherData}>투수의 정보를 확인></button>
            <button onClick={goHitterData}>타자의 정보를 확인</button>
            <button onClick={KboPitcherCopyTest}>카피본</button>
            <button onClick={Join}>회원가입</button>
        </div>
    );
}
