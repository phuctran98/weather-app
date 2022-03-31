import { Button, makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React, { useState } from 'react'
import '../styles/Search.css'

export default function Search({searchCity}) {
  const [currentCity,setCurrentCity] = useState('')
  
  function handleChangeCity(event){
    setCurrentCity(event.target.value)
  }
  function handleSubmit(){
    searchCity(currentCity)
  }
  function handleKeyPress(e){
    if(e.key === 'Enter') handleSubmit()
  }
  return (
    <div className='search'>
     
        <input className='input' 
              placeholder='search capital'
              value={currentCity}
              onChange={handleChangeCity}
              onKeyPress={handleKeyPress}
              >
        </input>
      <Button color='secondary' variant='contained' size='large' onClick={handleSubmit}>
        Sreach
      </Button>
    </div>
  )
}
