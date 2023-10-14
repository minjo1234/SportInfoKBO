import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/CurrentKbo.css';

export default function CurrentKbo() {
    const [TodayGameData, setTodayGameData] = useState([]);

    useEffect(() => {
        axios.get("/CurrentGameController")
            .then((res) => {
                const data = res.data;
                const parsedData = JSON.parse(data.replace(/'/g, "\""));
                setTodayGameData(parsedData);
            })
            .catch(error => {
                console.error("데이터 가져오기 실패", error);
            });
    }, []);

    const leftTeamInfo = [];
    const rightTeamInfo = [];

    // 데이터를 반복하여 leftTeamInfo 및 rightTeamInfo에 추가
    TodayGameData.forEach((game , index) => {
        leftTeamInfo.push({label: "팀 정보", data: game.leftTeam,});
        leftTeamInfo.push({label: "타자 정보", data: game.leftVestHitter,});
        leftTeamInfo.push({label: "투수 정보" , data: game.leftVestPitcher,});

        // 나머지 필드도 필요에 따라 추가

        rightTeamInfo.push({
            label: "팀 정보",
            data: game.rightTeam,
        });
        rightTeamInfo.push({
            label: "타자 정보",
            data: game.rightVestHitter,
        });
        // 나머지 필드도 필요에 따라 추가
    });

    return (
        <div className="container">
            {leftTeamInfo.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <font>{section.label}</font>
                    <ul>
                        {section.data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
