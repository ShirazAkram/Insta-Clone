import './App.css';
import Landing_page from './Component/LandingPage/Landing_page';
import Post_View from './Component/PostView/Post_View';
import {BrowserRouter , Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className='App-container'>
      <BrowserRouter>
         <Routes>
          <Route path='/' Component={Landing_page} />
          
          <Route path='/Post_View' Component={Post_View} />
         </Routes>
      </BrowserRouter>
    </div>
  )
   
}

export default App;
