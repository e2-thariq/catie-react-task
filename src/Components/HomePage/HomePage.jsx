import './HomePage.css'
import { useState, useEffect } from 'react'

export default function HomePage () {
    const[data, setData] = useState([]);

    useEffect(() => {
        async function fetchData () {
            // GET request :
            try {
                const response = await fetch('https://e2testing.mycatie.com/catie/appadmin/contentManagement/scheduleTemplateTv.do?roomNumber={{ctv4_e2test}}');
                const jsonData = await response.json();
                setData(jsonData)
            } catch (error) {
                console.error('ERROR', error)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <h1> Home page landed...!</h1>
            <ul>
                {
                    data.map((item) =>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </>

    )
}