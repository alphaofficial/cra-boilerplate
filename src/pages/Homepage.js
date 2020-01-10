import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HomePage() {

    const [jokes, setJokes] = useState("")

    useEffect(()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            setJokes(res.data.value)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return <div>Chuck norris joke: {jokes}</div>
}


  
export default HomePage