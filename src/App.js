import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Contant from './components/contant/Contant.jsx'; 
import Dialog from './components/dialogs/Dialog.jsx';
import Friends from './components/friends/Friends.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App({state, addPost}) {
  return (
    <div className="wrap">
      <BrowserRouter>
      <Header/>
      <Navbar dataF={state.navbar.friends}/>
      <Switch> 
        <Route exact path='/' render={()=> <Contant data={state.post.postsName} addPost={addPost}/>}/>
        <Route exact path='/contant' render={()=> <Contant data={state.post.postsName} addPost={addPost}/>}/>
        <Route exact path='/dialogs' render={()=> <Dialog data2={state.dialog.dialogName} data3={state.dialog.dialogMes}/>}/>
        <Route exact path='/friends' render={()=> <Friends />}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
// ошибка только тут
export default App;
