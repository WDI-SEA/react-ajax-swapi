import React, { useState, useEffect } from "react";
import axios from "axios";
const PilotList = (props) => {
  const [pilots, setPilots] = useState([])
  let pilotUrls = props.pilots;

  async function getPilots(urls) {
    const promises = urls.map((url) =>
      axios
        .get(url)
        .then((res) => <li key={res.data.name}>{res.data.name}</li>)
    );
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
  }
  useEffect(() => {
  if(pilotUrls.length > 0) {
  getPilots(pilotUrls)
    .then((res) => {
      setPilots(res)
    })
    .catch((error) => {
      console.log(error);
    });
  } else {
    setPilots(['There are no Pilots'])
  }
}, [])
  return(
    <div>
      <h5>Pilots</h5>
      <ul>
        {pilots}
      </ul>
    </div>
  )
};

export default PilotList;
