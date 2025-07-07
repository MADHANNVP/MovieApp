import React from 'react'

const Genre = ({genres , setusergenres}) => {
  return (
    <>
        <select className='bg-gray-700 p-2 text-white' onChange={(e)=>{setusergenres(e.target.value)}}>
            <option>All Categories</option>
            {
                genres.map((genre)=>(
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))
            }
        </select>
        
    </>
  )
}

export default Genre