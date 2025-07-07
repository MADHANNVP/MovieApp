import React,{useContext,useEffect,useState} from 'react'
import { Watchlistcontext } from '../Watchlistcontext/Watchlistprovider'
import Movielist from '../components/Movielist'
import Genre from '../components/Genre.jsx'

const Watchlist = () => {
  const {watchlist} = useContext(Watchlistcontext)
  const [genres , setgenres] = useState([])
  const [search , setsearch] = useState("")
  const [usergenres , setusergenres] = useState("")

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=35c78c3a9af7aee3963ff5546cb82afe`)
    .then((rev) => rev.json())
    .then((data)=>setgenres(data.genres))
  },[])


  const filtemovie = watchlist.filter((m)=>m.title.toLowerCase().includes(search.toLowerCase()))
  .filter((movie) => !usergenres || movie.genre_ids?.includes(Number(usergenres)))


  return (
    <>
     <div className='flex justify-center w-full fixed top-16 z-10'>
           <input type="text" placeholder='Search Movies...' className='mt-2 border border-gray-700 rounded-md p-2 w-3/6 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white px-4 ' onChange={(e)=>{setsearch(e.target.value)}}/>
        </div>
    <div className='mt-36 flex justify-center'>
      <Genre genres={genres} setusergenres={setusergenres}/>
    </div>
   
     <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            filtemovie.map((movie)=>(
              <Movielist key={movie.id} movie={movie}/>
            ))
          }
        </div>
    </>
  )
}

export default Watchlist