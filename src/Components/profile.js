import React, { useEffect,useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState("")
    useEffect(() => {
        const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: localStorage.getItem('access') ? 'JWT ' + localStorage.getItem('access') : null,
            'Content-Type' : 'application/json; charset=UTF-8',
            accept: 'application/json'  
        },  
    };
    fetch('https://api-avintra.azurewebsites.net/api/user/profile/', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            console.log(data)
            setProfile(data)

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
        {profile.id} <br />
        {profile.email} <br />
        {profile.name} <br />

    </div>;
}
export default Profile