import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/KboPlayerList.css"; // KboPlayerList.css 파일을 가져옴

export default function KboPlayerList() {
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await axios.get("/KboPlayers");
                setPlayerList(response.data);
            } catch (error) {
                console.error("데이터 가져오기 실패", error);
            }
        };

        fetchPlayerData();
    }, []);

    // 날짜 형식 변경 함수
    const formatBirthDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="container"> {/* 컨테이너 스타일 적용 */}
            <h1>KBO Player List</h1>
            <ul>
                {playerList.map((player) => (
                    <li key={player.playerId} className="player-list-item"> {/* 클래스 이름을 추가 */}
                        <span className="player-list-item-heading">선수번호 :</span>
                        <span className="player-list-item-content">{player.player_Num}</span>
                        <br />
                        <span className="player-list-item-heading">선수이름 :</span>
                        <span className="player-list-item-content">{player.player_Name}</span>
                        <br />
                        <span className="player-list-item-heading">Position :</span>
                        <span className="player-list-item-content">{player.player_Position}</span>
                        <br />
                        <span className="player-list-item-heading">생년월일 :</span>
                        <span className="player-list-item-content">{formatBirthDate(player.player_Birth)}</span>
                        <br />
                        <span className="player-list-item-heading">키/몸무게 :</span>
                        <span className="player-list-item-content">{player.player_Physical}</span>
                    </li>
                ))}
                <li>안녕하세요 선수 리스트입니다.</li>
            </ul>
        </div>
    );
}
