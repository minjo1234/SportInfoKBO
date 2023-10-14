// Login.js

import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; // React Router의 useHistory를 임포트
import axios from "axios";
import '../CSS/Join.css'
export default function Login() {
    const navigate = useNavigate(); // useHistory 훅을 사용하여 라우터의 이동을 관리
    const [user, setUser] = useState({
        id: '',
        password: ''
    });


    const handleChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [fieldName]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                id: user.id,
                password: user.password
            };
            const response = await axios.post("/Login/login", userData);
            const message = response.data.message;
            const sessionData = response.data.sessionData;
            if (message === "로그인 성공") {
                console.log("로그인 성공!");
                navigate('/Login/main',{state :  {userId: sessionData}});
            } else {
                console.error("로그인 실패");
            }
        } catch (error) {
            console.error("로그인 실패:", error);
        }
    };

    return (
        <form className="loginForm" onSubmit={handleLogin}>
            <div className="inputContainer">
                <label>Id:</label>
                <input
                    type="text"
                    name="id"
                    value={user.id}
                    onChange={handleChange}
                />
            </div>
            <div className="inputContainer">
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">로그인</button>
        </form>
    );
}
