import React from 'react';
import { useLocation } from 'react-router-dom'
import Menu from "../Component/Menu";
export default function Main(){
    const { state } = useLocation();
    const userId = state.userId;
    console.log(userId);
    return (
        <div>
            <h1>환영합니다, {userId}님</h1>
            <Menu/>
        </div>
    );
}