import React from 'react';
import './Game.css';
import CurrentBatIcon from "../CurrentChat /CurrentBatIcon"; // CSS 파일을 import

function GameInfo(props) {
    return (
        <div className="game-info">
            <div className="league-name">{props.leagueName}</div>
            <div className="game-home-name">{props.homeTeam}</div>
            <div className="game-away-name">{props.awayTeam}</div>
            <div className="game-datetime" dangerouslySetInnerHTML={{ __html: props.datetime }} />
            <div className="game-home-icon"><CurrentBatIcon/></div>
            <div className="game-away-icon"><CurrentBatIcon/></div>
            <div className="game-home-score">{props.homeScore}</div>
            <div className="game-away-score">{props.awayScore}</div>
            <div className="game-vs-score">:</div>
        </div>
    );
}

function createGameData(leagueName, homeTeam, awayTeam, datetime, homeTeamIcon, awayTeamIcon, homeScore, awayScore) {
    return {
        leagueName,
        homeTeam,
        awayTeam,
        datetime,
        homeTeamIcon,
        awayTeamIcon,
        homeScore,
        awayScore,
    };
}

export default function CurrentKboGameList() {

    // 게임 데이터 생성 및 배열에 저장
    const gameDataArray = [
        createGameData("[호주] NBL 플레이오프",
            "태즈매니아",
            "시드니 킹스",
            "10-06<br>17:30",
            "https://logo.ofof.live/data/team/14282.png?v=0",
            "https://logo.ofof.live/data/team/17257.png?v=0",
            0,
            0),
        // 다른 게임 데이터 추가
    ];

    return (
        <div className="app">
            <h1>게임 정보</h1>
            {/* 게임 데이터 배열을 매핑하여 렌더링 */}
            {gameDataArray.map((gameData, index) => (
                <GameInfo key={index} {...gameData}  />
            ))}
            <CurrentBatIcon/>


        </div>
    );
}
