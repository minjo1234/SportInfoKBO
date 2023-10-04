import React from "react";
import {useState , useEffect} from "react";
import axios from "axios";

export default function KboPitcherList(){
    const [pitcherData , setPitcherData ] = useState([])

    useEffect(() => {
        const fetchPitcherData = async() => {
            try{
                const response = await axios.get("/KboPitchers")
                setPitcherData(response.data)
            } catch(error){
                console.error("데이터 가져오기 실패" , error);
            }
        }
        fetchPitcherData();
    }, []);

    return (
        <div className="container"> {/* 컨테이너 스타일 적용 */}
            <h1>KBO Pitcher List</h1>
            <ul>
                {pitcherData.map((pitcher) => (
                    <li key={pitcher.player_Id} className="player-list-item"> {/* 클래스 이름을 추가 */}
                        <span className="player-list-item-heading">선수이름 :</span>
                        <span className="player-list-item-content">{pitcher.player_Name}</span>
                        <br/>
                        <span className="player-list-item-heading"> 소속 :</span>
                        <span className="player-list-item-content">{pitcher.player_Team}</span>
                        <br/>
                        <span className="player-list-item-heading"> 평균자책점 :</span>
                        <span className="player-list-item-content">{pitcher.player_ERA}</span>
                        <br/>
                        <span className="player-list-item-heading"> 경기 :</span>
                        <span className="player-list-item-content">{pitcher.player_Game}</span>
                        <br/>
                        <span className="player-list-item-heading"> 승 :</span>
                        <span className="player-list-item-content">{pitcher.player_Win}</span>
                        <br/>
                        <span className="player-list-item-heading"> Save :</span>
                        <span className="player-list-item-content">{pitcher.player_Save}</span>
                        <br/>
                        <span className="player-list-item-heading"> 홀드 :</span>
                        <span className="player-list-item-content">{pitcher.player_HLD}</span>
                        <br/>
                        <span className="player-list-item-heading"> 승률 :</span>
                        <span className="player-list-item-content">{pitcher.player_WPCT}</span>
                        <br/>
                    </li>

                ))}
                <li>안녕하세요 선수 리스트입니다.</li>
            </ul>
        </div>
    );
}