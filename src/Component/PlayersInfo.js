import React, {useState , useEffect} from "react";
import axios from "axios";
export default function PlayersInfo() {
    const [PlayersInfo , SetPlayersInfo] = useState("");

    useEffect(() => {
        axios.get('/playersInfo')
    }, []);
    return (
        <div>
            <ul>
                <li>
                    안녕하세요 여기에서 선수의 정보를 보여줄 예정입니다.
                </li>
            </ul>
        </div>
    );
}
