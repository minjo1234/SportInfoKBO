import React, { useState, useEffect } from 'react';
import { FiAlignJustify } from "react-icons/fi";

export default function ComunityMain() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [showPosts , setShowPosts] = useState(false) ; // 새로운 상태추가
    const addPost = () => {
        if (newPost.trim() !== '') {
            const updatedPosts = [...posts, newPost];
            setPosts(updatedPosts);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            setNewPost('');
        }
    };

    // 게시물 목록을 불러오기
    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        if (savedPosts) {
            const parsedPosts = JSON.parse(savedPosts);
            setPosts(parsedPosts);
        }
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    const togglePosts = () => {
        setShowPosts(!showPosts);
    }

    return (
        <div>
            <FiAlignJustify style={{ fontSize: '50px' , cursor: 'pointer'}} onClick={togglePosts}/>
            <h1>Bulletin Board</h1>
                <div>
            <input
                type="text"
                placeholder="Add a new post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            />
            <button onClick={addPost}>Add</button>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
            {showPosts && (  // showPosts 상태에 따라 버튼 4개를 표시
                <div>
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                    <button>Button 4</button>
                </div>
            )}

    </div>
    )};
