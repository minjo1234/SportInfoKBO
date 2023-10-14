import React, { useState } from 'react';
import './Game.css';
import CurrentKbo from "./CurrentKbo"; // CSS 파일을 import

function GameInfo(props) {
    return (
        <div className="game-info">
            <img
                className="nation-flag"
                src={props.nationFlag}
                alt="Nation Flag"
                onError={(e) => {
                    e.target.src = '/images/1bet1/main_livesports/empty_team_icon.png';
                }}
            />
            <div className="label">{props.label}</div>
            <div className="datetime" dangerouslySetInnerHTML={{ __html: props.datetime }}></div>
            <div className="match">
                <img className="game-home-icon" src={props.homeTeamIcon} alt="home team icon" onError={(e) => {e.target.src = '/images/1bet1/main_livesports/empty_team_icon.png'}} onClick={props.openModal}/>
                <div className="game-home-name">{props.homeTeam}</div>
                <div className="game-home-score _hs">{props.homeScore}</div>
                <div className="vs">:</div>
                <div className="game-away-score _as">{props.awayScore}</div>
                <div className="game-away-name">{props.awayTeam}</div>
                <img className="game-away-icon" src={props.awayTeamIcon} alt="away team icon" onError={(e) => {e.target.src = '/images/1bet1/main_livesports/empty_team_icon.png'}} onClick={props.openModal} />
            </div>

        </div>

    );
}

export default function GameDetail() {
    // 모달 열기/닫기 상태를 관리하는 상태
    const [modalOpen, setModalOpen] = useState(false);

    // 모달 열기 함수
    const openModal = () => {
        setModalOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setModalOpen(false);
    };

    // 게임 데이터
    const gameData = {
        // 이전 코드...
        homeTeamIcon: "https://logo.ofof.live/data/team/649.png?v=0", // KT 위즈 이미지
        homeTeam: "KT 위즈",
        homeScore: 0,
        awayScore: 0,
        awayTeam: "Kia 티거스",
        awayTeamIcon: "https://logo.ofof.live/data/team/643.png?v=0", // Kia 티거스 이미지
    };


    return (
        <div id="board_list3">
            <GameInfo {...gameData} openModal={openModal} />
            {/* 모달이 열렸을 때 모달 컴포넌트를 렌더링 */}

            <div className="current-kbo">
                <CurrentKbo />
            </div>
            {modalOpen && (
                <div className="modal">
                    {/* 모달 내용 */}
                    <div className="modal-content">
                        <h2>게임 상세 정보</h2>
                        <p>홈팀: {gameData.homeTeam}</p>
                        <p>어웨이팀: {gameData.awayTeam}</p>
                        <p>홈팀 스코어: {gameData.homeScore}</p>
                        <p>어웨이팀 스코어: {gameData.awayScore}</p>
                        {/* 기타 게임 상세 정보를 여기에 추가하세요 */}
                    </div>
                    {/* 모달 닫기 버튼 */}
                    <button className="modal-close" onClick={closeModal}>닫기</button>
                </div>
            )}
        </div>
    );
}
