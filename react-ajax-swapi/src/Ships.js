import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Ship from './Ship'

const Ships = (props) => {
    let ships
    if (props.starship.length != 0) { 
        console.log(props.starship[3])
        ships = props.starship[3].map((ship, i) => {
            return (
                <li key={i}>
                    <Link to={{
                        pathname: `/ship/${ship.name}`,
                        state: {ships:ship}
                    }}>{ship.name}</Link>
                </li>
            )
        }); 
    } 
    return(
            <div>
                <h1>Star Wars Ships</h1>
                <Switch>
                    <Route
                        path='/'
                    >
                        {ships}
                    </Route>
                    <Route
                        path='/ship/:name'
                        render={({location}) => <Ship location={location}/>}
                        />
                        {ships}
                    <Route/>
                </Switch>
            </div>

    )
}

export default Ships;