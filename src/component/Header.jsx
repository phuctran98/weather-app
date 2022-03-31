import React from 'react'
import Search from './Search'

export default function Header({searchCity}) {
  return (
    <div>
        <Search searchCity={searchCity}></Search>
    </div>
  )
}
