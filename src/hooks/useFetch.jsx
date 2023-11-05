import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
      fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("La solicitud fetch no se pudo completar");
            }
          })
          .then((response) => {
            setData(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
   
  return {data}
}

export default useFetch