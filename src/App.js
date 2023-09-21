import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Contant from './components/contant/Contant.jsx'; 
import Dialog from './components/dialogs/Dialog.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="wrap">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch> 
        <Route exact path='/' component={Contant}/>
        <Route exact path='/contant' component={Contant}/>
        <Route exact path='/dialogs' component={Dialog}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
