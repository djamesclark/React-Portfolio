import React from 'react'
import Navbar from './Navbar'

export default function Header({page, setPage}) {
  return (
    <div>
        <div>
            <h1 onClick={()=> setPage('about')}>Danny Clark</h1>
        </div>
        <Navbar page={page} setPage={setPage} />
    </div>
  )
}
