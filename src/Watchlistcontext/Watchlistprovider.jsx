import {createContext,useState} from 'react'

export const Watchlistcontext = createContext()

const Watchlistprovider = ({children}) => {

    const [watchlist , setwatchlist] = useState([])

    const toogle = (movie) => {

        const index = watchlist.findIndex((m)=>m.id == movie.id)

        if(index == -1)
        {
            setwatchlist([...watchlist,movie])
        }
        else
        {
            setwatchlist([...watchlist.slice(0,index),...watchlist.slice(index+1)])
        }

    }

    return(
        <Watchlistcontext.Provider value={{watchlist,toogle}}>
            {children}
        </Watchlistcontext.Provider>
    )
} 

export default Watchlistprovider;