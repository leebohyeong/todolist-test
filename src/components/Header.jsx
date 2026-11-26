import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1>✈️ 나의 여행 위시리스트</h1>
        <p>{new Date().toDateString()}</p>
    </header>
  )
}

export default Header