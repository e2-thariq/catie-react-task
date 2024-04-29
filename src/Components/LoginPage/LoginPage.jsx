import './LoginPage.css'
import { useState } from 'react'

export default function LoginPage () {
    const [userId, setUserId] = useState('https://e2testing.mycatie.com/catie/api/user/tvLogin');
    const [roomNo, setRoomNo] = useState('');

    async function handleSubmit (event) {
        event.preventDefault();

        try {
            // post request:
            const response = await fetch(userId, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ roomNo })
            });

            const data = await response.json();
            console.log(data)

        } catch (error) {
            console.error('Error', error) 
            // console.log(error)
        }
    }

    return (
        <>
        <h1>Catie login</h1>

        <form onSubmit={handleSubmit}>
            <label>User ID</label><br />
            <input 
                type='text' 
                name='user_id' 
                value={userId}
                onChange={(event) => setUserId(event.target.value) } 
                placeholder='Enter User ID' /
            ><br />

            <label>Room No</label><br />
            <input 
                type='text' 
                name='room_no' 
                value={roomNo}
                onChange={(event) => setRoomNo(event.target.value)} 
                placeholder='Enter Room No' 
            /><br />

            <button type='submit'>Login</button>
            <button type='reset'>Cancel</button>
        </form>
        </>

    )
}

