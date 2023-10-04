import React from 'react';

export default function PlayerItem({player}) {
    return (
        <li key={player.player_Id} className="player-list-item">
        <span className="player-list-item-content">선수이름 :</span>
        <span className="player-list-item-content">{player.player_Name}</span>
        <br/>
        <span className="player-list-item-content">소속:</span>
        <span className="player-list-item-content">{player.player_Team}</span>
        <br/>
        </li>
            )
}
