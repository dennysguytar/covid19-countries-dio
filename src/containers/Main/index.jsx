import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() 
{
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => 
    {
      Api.getCountry(country)
        .then(data => setData(data))
        
        //console.log("getCovidData: " + country + " - " + Date().toLocaleString());
    }, []
  )

  useEffect(() => 
    {    
      getCovidData(country)
    }, [getCovidData, country]
  )

  const handleChange = ({ target }) => 
  {
    //debugger
    const country = target.value    
    setCountry(country)
  }

  
  useEffect(() => {
    const intervalId = setInterval(() => {
                          Api.getCountry(country)
                          .then(data => setData(data))

                          //console.log("Data: " + Date().toLocaleString() );
                        }, 10000);

    return () => clearInterval(intervalId);
  }, [country, data]);
  
  


  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
      
    </ContainerStyled>
  )
}

export default memo(Main)