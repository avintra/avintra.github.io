import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axios';

export default function Create() {
    const history = useNavigate()
    const initialFormData = Object.freeze({
        email:'',
        colour:'',
        image:'',
        welcome:'',
        name:'',
    })

const [formData, updateFormData] = useState(initialFormData)

const handleChange = (e) => {
    updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    axiosInstance.post('bot/create/', {
        email: formData.email,
        name: formData.name,
        colour: formData.colour,
        image: formData.image,
        welcome: formData.welcome,
    })
    .then((res) => {
        history('/')
        console.log(res)
        console.log(res.data)
    })
}

    return (
        <div>
        <center>
 <form action="">
                <input type="text" 
                placeholder='email' 
                id="email" 
                name="email"
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
                onChange={handleChange}
                required
                />
            </form>
            <br />
            <button type='submit' onClick={handleSubmit}>Create Chatbot</button>
        </center>
           
        </div>
    )
}

