import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home'

function Content() {
    let [starShips, setStarShips] = useState('')

    useEffect( () => {
        
        axios.get(`https://swapi.dev/api/starships/`).then(res => {
            setStarShips(res.data)
            console.log(starShips)
        }).catch(err => console.log('Error',err))
        
    },[])
    

    return(
        <main>
            <Switch>
                { starShips &&
                    <Route exact path="/" render={()=> <Home starShips={starShips} />} />
                } 
            </Switch>
        </main>
    )
}

export default Content;