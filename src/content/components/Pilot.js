import React, {useState, useEffect} from 'react';
import axios from 'axios'


function Pilot(props) {
    let [pilotData, setPilotData] = useState([])
    let axiosArray = [];
    let pilots
    //console.log(props.pilotUrls)
    useEffect(()=> {
        
        
        pilots = props.pilotUrls.map((p,idx) => {
            return (
                <div>
                    {axios.get(p).then(response => {
                        let tempData = [...pilotData, response]
                        setPilotData(tempData);
                        console.log(tempData)
                    }).catch(err => console.log(err))}
                </div>
                
            )
        })
    }, [])


    // axiosArray = [...axiosArray, `axios.get(${p})`]
    //             axios.all(axiosArray).then(axios.spread((...responses) => {
    //                         setPilotData(responses)
    //                     })).catch(err => console.log('Error',err))




    // axios.get(p).then(response => {
    //     let tempData = [...pilotData, response]
    //     setPilotData(tempData);
    //     //console.log(tempData)
    // })

    // useEffect(() => {
    //     axios.all(props.pilotUrls).then(axios.spread((...responses) => {
    //         setPilotData(responses)
    //     })).catch(err => console.log('Error',err))
        
        
    // }, [])

    console.log(pilotData)

    return(
        <div>
            {pilotData && pilotData.map((p,idx) => {
                return (<div key={idx}><p>{p.data.name}</p></div>)
            })}

            {!pilotData && <p>Runs on Autopilot</p>}
            
        </div>
    )
}

export default Pilot;