import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './pages/Navbar.jsx'
import Watchlist from './pages/Watchlist.jsx'
import Watchlistprovider from './Watchlistcontext/Watchlistprovider.jsx'

function App() {

  return (
    <>
    <Watchlistprovider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
           <Route path={'/'} element={<Home/>}/>
           <Route path={'/Watchlist'} element={<Watchlist/>}/>
      </Routes>
    </BrowserRouter>
    </Watchlistprovider>
    </>
  )
}

export default App
