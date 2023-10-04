import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerItem from "./PlayerItem"; // PlayerItem 컴포넌트를 불러옵니다.

export default function KboPitcherList() {
    const [pitcherData, setPitcherData] = useState([]);

    useEffect(() => {
        const fetchPitcherData = async () => {
            try {
                const response = await axios.get("/KboPitchers");
                setPitcherData(response.data);
            } catch (error) {
                console.error("데이터 가져오기 실패", error);
            }
        };
        fetchPitcherData();
    }, []);

    return (
        <div className="container">
            <h1>KBO Pitcher List</h1>
            <ul>
                {pitcherData.map((pitcher) => (
                    <PlayerItem key={pitcher.player_Id} player={pitcher} />
                ))}
                <li>안녕하세요 선수 리스트입니다.</li>
            </ul>
        </div>
    );
}
