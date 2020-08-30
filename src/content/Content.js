import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home'
import StarShipDetails from './pages/StarShipDetails'

function Content() {
    let [starShips, setStarShips] = useState('')

    useEffect( () => {
        axios.get(`https://swapi.dev/api/starships/`).then(res => {
            setStarShips(res.data.results)
        }).catch(err => console.log('Error',err))
        
    },[])

    return(
        <main>
            <Switch>
                { starShips &&
                    <Route exact path="/" render={()=> <Home starShips={starShips} />} />
                } 
                    
                <Route path="/starShipDetails" render={(props)=> <StarShipDetails {...props} />} />
            </Switch>
        </main>
    )
}

export default Content;