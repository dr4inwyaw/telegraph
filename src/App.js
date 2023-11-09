import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Contant from './components/contant/Contant.jsx'; 
import Dialog from './components/dialogs/Dialog.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App({data, data2, data3}) {
  return (
    <div className="wrap">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch> 
        <Route exact path='/' render={()=> <Contant data={data} />}/>
        <Route exact path='/contant' render={()=> <Contant data={data} />}/>
        <Route exact path='/dialogs' render={()=> <Dialog data2={data2} data3={data3}/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
