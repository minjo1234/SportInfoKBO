import React, { useState } from "react";
import Game from "../Game/Game"
import CurrentBatIcon from "./CurrentBatIcon";
export default function CurrentChatBatting() {
    const [selectedIcon, setSelectedIcon] = useState();
    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
        console.log(`아이콘 "${iconName}"에 배팅하셨습니다.`);
    };



    return (
        <div>
            <h2>배팅할 아이콘 선택:</h2>
            <Game handleIconClick={handleIconClick} />
            <CurrentBatIcon/>


        </div>
    );


}
