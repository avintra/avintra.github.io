import React, { useEffect,useState } from 'react'

const List = () => {
    const [bots, setBots] = useState("")
    useEffect(() => {
        const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: localStorage.getItem('access') ? 'JWT ' + localStorage.getItem('access') : null,
            'Content-Type' : 'application/json; charset=UTF-8',
            accept: 'application/json'  
        },  
    };
    fetch('https://api-avintra.azurewebsites.net/api/bot/list/', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            console.log(data)
            setBots(data)

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

        return <div>
            <a href="/manage/18">ChatBot: 18</a>
         

    </div>;
}
export default List