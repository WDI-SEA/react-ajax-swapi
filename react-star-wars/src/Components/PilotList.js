import React, { useEffect } from "react";
import axios from "axios";

const PilotList = (props) => {
  let pilotUrls = props.pilots;
  const funcAsync = async () => {
    const asyncUrls = await Promise.all(
      pilotUrls.map(async (pilot, i) => {
        try {
          let results = await axios
            .get(pilot)
            .then((res) => {
              return res;
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      })
    );
  };
  funcAsync();
  return <div>{PilotList}</div>;
};

export default PilotList;
