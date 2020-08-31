import React, { useEffect } from "react";
import axios from "axios";

const PilotList = (props) => {
  let pilotUrls = props.pilot;
  console.log(props.pilots);
  const getPilots = async (urls) => {
    const getUrls = urls.map(async (url) => {
      const response = await axios.get(pilotUrls).then((res) => {
        return <p>hi</p>;
      });
      const pilots = await Promise.all(getUrls);
      console.log("hey");
    });
  };

  return <div>{PilotList}</div>;
};

export default PilotList;
