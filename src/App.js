
import './App.css';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import SearchPage from './components/layout/SearchPage';
import { Modal } from '@mui/material';
const App=()=> {
  return (
   
     < Router>
      <div className="App">
         <Header/>
            <Switch>
               <Route path='/'  exact>
                 <Home/>
               </Route>

             <Route path='/Search'>
                <SearchPage/>
             </Route>
      
      </Switch>
      <Route path='/'>
          <Modal />
          
        </Route>
      <Footer/>
      </div>
   </Router>
  
  );
}

export default App;
