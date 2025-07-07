import {useState,useEffect} from 'react'
import Movielist from '../components/Movielist.jsx'

const Home = () => {

  const [movies , setmovies] = useState([])
  const [page , setpage] = useState(1)
  const [search , setsearch] = useState("")

  useEffect(()=>{
    let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=35c78c3a9af7aee3963ff5546cb82afe`
    if(search)
    {
      url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=35c78c3a9af7aee3963ff5546cb82afe`
    }
    fetch(url)
    .then((rev)=>rev.json())
    .then((data)=>setmovies(data.results))

  },[page , search])
  return (
    <> 
        <div className='flex justify-center w-full fixed top-16 z-10'>
           <input type="text" placeholder='Search Movies...' className='mt-2 border border-gray-700 rounded-md p-2 w-3/6 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white px-4 ' onChange={(e)=>{setsearch(e.target.value)}}/>
        </div>

        <div className='mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            movies.map((movie)=>(
              <Movielist key={movie.id} movie={movie}/>
            ))
          }
        </div>

        <div className='flex justify-between p-2' > 
          <button className='bg-gray-700 py-2 px-4 rounded-md text-white' onClick={()=>{setpage(page-1)}} disabled={page==1}>PREV</button>
          <button className='bg-gray-700 py-2 px-4 rounded-md text-white' onClick={()=>{setpage(page+1)}}>NEXT</button>
        </div>

    </>
  )
}

export default Home