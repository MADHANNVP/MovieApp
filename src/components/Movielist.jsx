import React,{useContext , useState} from 'react'
import {FaHeart , FaRegHeart} from 'react-icons/fa'
import { Watchlistcontext } from '../Watchlistcontext/Watchlistprovider'

const Movielist = ({movie}) => {
    const {watchlist,toogle} = useContext(Watchlistcontext);

    const heart = watchlist.some((m)=> m.id === movie.id)
    const handfavirote = () => {
      toogle(movie)
    }
  return (
    <div className='bg-gray-700 p-4 text-white rounded-sm relative'>
        <img src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-full object-contain h-80' />
        <h2 className='mt-2 text-xl'>{movie.title}</h2>
        <p className='text-sm text-gray-500 mt-1'>{movie.release_date}</p>
        <button className='absolute text-red-600 top-2 right-2' onClick={()=>{handfavirote(movie)}}>{heart?<FaHeart/>:<FaRegHeart/>}</button>
    </div>
  )
}

export default Movielist