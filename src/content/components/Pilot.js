import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Pilot(props) {
    let [pilotData, setPilotData] = useState([])
    
    async function getPilotData() {
        let pilotArray= []

        for(let i= 0; i<props.pilotUrls.length; i++) {
            const response = await axios.get(props.pilotUrls[i])
            pilotArray.push(response.data)
        }
        setPilotData(pilotArray)
    }

    useEffect(()=> {
        getPilotData()
    }, [])

    return(
        <div class="pilotDiv">
            <div>
                <h3>Pilots:</h3>
            </div>
            <div>
                {pilotData && pilotData.map((p,idx) => {
                    return (<div key={idx}><p>{p.name}</p></div>)
                })}
            </div>
        </div>
    )
}

export default Pilot;