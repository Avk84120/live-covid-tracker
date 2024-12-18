import React, { useEffect, useState } from 'react'

const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () =>{
        try {
            const res  = await fetch('https://api.covid19api.com/all')
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect = (()=>{
        getCovidData();
    }, []);

  return (
    <>
    <section>
      <h1> LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <ul>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> OUR</span> COUNTRY</p>
                    <p className='card__total card__small'> INDIA</p>
                </div>
            </div>
        </li>
      </ul>
      </section>
    </>
  )
}

export default Covid
