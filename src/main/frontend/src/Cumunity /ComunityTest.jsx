import React , {useState , useEffect } from 'react';

export default function ComunityMain(){
    const [posts , setPosts]  = useState([]);
    const [newPost , setNewPost] = useState([]);

    const addPost = () => {
        if(newPost.trim() !== ''){
            const updatePosts = [...posts , setPosts];
            setPosts(updatePosts)
            localStorage.setItem('posts' , updatePosts);
            setNewPost('');
        }
    }


    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        if(savedPosts){
            const parsePosts = JSON.parse(savedPosts);
            setPosts(parsePosts);
        }
    }, []);

    return(
        <div>
            <h1> Comunity Main </h1>
            <input
                type="text"
                placeholder="Add a new post"
                value = {newPost}
                onChange = {(e) =>  setNewPost(e.target.value)}
            />
            <button onClick={addPost}></button>
            {posts.map((post , index) => (
                <li key={index}>post</li>
            )) }
        </div>

    )
}