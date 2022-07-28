import React, { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";


const Manage = () => {
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
   
    const handleClick =()=>{
    
    navigate("/edit/" + 18);
    }
    return <div>
        {bot.name} <br/>
        {bot.email} <br/>
        {bot.welcome} <br/>
        {bot.image} <br/>
        {bot.colour} <br/>
        {bot.link} <br/>
        <button type='submit' onClick={handleClick}>
            Edit ChatBot
        </button>
    </div>
}

export default Manage