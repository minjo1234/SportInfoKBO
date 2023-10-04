import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

export default function KboHitterLIst(){
    const [hitterData, setHitterData] = useState([])


    useEffect(() => {
        const fetchPitcherData = async() => {
            try{
                const response = await axios.get("/KboHitters")
                setHitterData(response.data)
            } catch(error){
                console.error("데이터 가져오기 실패" , error);
            }
        }
        fetchPitcherData();
    }, []);

    return (
        <div className="container">
            <h1>KBO Hiiter List</h1>
            <ul>
                {hitterData.map((hitter) => (
                    <li key={hitter.player_Id} className="player-list-item"> {/* 클래스 이름을 추가 */}
                        <span className="player-list-item-heading">선수이름 :</span>
                        <span className="player-list-item-content">{hitter.player_Name}</span>
                        <br/>
                        <span className="player-list-item-heading"> 소속 :</span>
                        <span className="player-list-item-content">{hitter.player_Team}</span>
                        <br/>
                        <span className="player-list-item-heading"> 평균 :</span>
                        <span className="player-list-item-content">{hitter.player_AVG}</span>
                        <br/>
                        <span className="player-list-item-heading"> 경기 :</span>
                        <span className="player-list-item-content">{hitter.player_Game}</span>
                        <br/>
                        <span className="player-list-item-heading"> 타수 :</span>
                        <span className="player-list-item-content">{hitter.player_AB}</span>
                        <br/>
                        <span className="player-list-item-heading"> 득점 :</span>
                        <span className="player-list-item-content">{hitter.player_R}</span>
                        <br/>
                        <span className="player-list-item-heading"> 안타 :</span>
                        <span className="player-list-item-content">{hitter.player_H}</span>
                        <br/>
                        <span className="player-list-item-heading"> 2루타 :</span>
                        <span className="player-list-item-content">{hitter.player_2B}</span>
                        <br/>
                        <span className="player-list-item-heading"> 3루타 :</span>
                        <span className="player-list-item-content">{hitter.player_3B}</span>
                        <br/>
                        <span className="player-list-item-heading"> 홈런 :</span>
                        <span className="player-list-item-content">{hitter.player_HR}</span>
                        <br/>
                    </li>

                ))}
                <li>안녕하세요 선수 리스트입니다.</li>
            </ul>
        </div>
    )
}