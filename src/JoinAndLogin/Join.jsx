import React, {useState} from 'react';
import axios from "axios";
export default function Join(){
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {fieldName , value} = e.target
        setUser({ ...user , [fieldName]: value})
    //  ...user means using user.value
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const userData = {
                name: user.name,
                email: user.email,
                password: user.password
            };
            const response = await axios.post("/LoginSave" , userData);
            console.log(response)
        } catch(error){
            console.log(error)
        }
    };

     return(
         <form className="loginForm" onSubmit={handleSubmit}>
             <div>
                 <label>Name:</label>
                 <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                 />
             </div>
             <div>
                 <label>Email:</label>
                 <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                 />
             </div>
             <div>
                 <label>Password:</label>
                 <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                 />
             </div>
             <button type="submit">회원가입</button>
         </form>
    );
}