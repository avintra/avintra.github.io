import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axios';

const Edit = () => {
    const [bot, setBot] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem('access') ? 'JWT ' + localStorage.getItem('access') : null,
                'Content-Type' : 'application/json; charset=UTF-8',
                accept: 'application/json'  
            }
        };
        fetch('http://127.0.0.1:8000/api/bot/manage/?bid=18', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            console.log(data)
            setBot(data)

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

        })
        .catch(error => {
            
            console.error('There was an error!', error);
        });
    },[]);
   const history = useNavigate()



const handleChange = (e) => {
    setBot({
        ...bot,
        [e.target.name]: e.target.value.trim(),
    })
}
    const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(bot)
    //     // image: bot.image,
    //     // welcome: bot.welcome,
    //     // id:bot.id,
    // }
    // .then((res) => {
    //     history('/')
    //     console.log(res)
    //     console.log(res.data)
    // })
}

    return <div>
          <center>
 <form action="">
                <input type="text" 
                placeholder='email' 
                id="email" 
                name="email"
                defaultValue={bot.email}
                onChange={handleChange}
                required
                />
            </form>
            <br />
            <form action="">
                <input type="text" 
                placeholder='name' 
                id="name" 
                name="name"
                defaultValue={bot.name}
                onChange={handleChange}
                required
                />
            </form>
            <br />
            <br /><form action="">
                <input type="text" 
                placeholder='colour' 
                id="colour" 
                name="colour"
                defaultValue={bot.colour}
                onChange={handleChange}
                required
                />
            </form>
            <br />
            <form action="">
                <input type="text" 
                placeholder='image link' 
                id="image" 
                name="image"
                defaultValue={bot.image}
                onChange={handleChange}
                required
                />
            </form>
            <br />
            <form action="">
                <input type="text" 
                placeholder='welcome message' 
                id="welcome" 
                name="welcome"
                defaultValue={bot.welcome}
                onChange={handleChange}
                required
                />
            </form>
            <br />
            <button type='submit' onClick={handleSubmit}>Create Chatbot</button>
        </center>
    </div>
}

export default Edit