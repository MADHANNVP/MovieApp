import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Watchlistcontext } from '../Watchlistcontext/Watchlistprovider'

const Navbar = () => {
  const {watchlist} = useContext(Watchlistcontext)
  return (
    <div className='bg-gray-900 text-white p-4 flex justify-between text-xl items-center fixed top-0 w-full z-10'>
         <Link to={'/'}>Movie App</Link>
         <Link to={'/Watchlist'}>Watchlist({watchlist.length})</Link>
    </div>
  )
}

export default Navbar