import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Contant from './components/contant/Contant.jsx'; 
import Dialog from './components/dialogs/Dialog.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App({state}) {
  return (
    <div className="wrap">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch> 
        <Route exact path='/' render={()=> <Contant data={state.post.postsName} />}/>
        <Route exact path='/contant' render={()=> <Contant data={state.post.postsName} />}/>
        <Route exact path='/dialogs' render={()=> <Dialog data2={state.dialog.dialogName} data3={state.dialog.dialogMes}/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
// ошибка только тут
export default App;
