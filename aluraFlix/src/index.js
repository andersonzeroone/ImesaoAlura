import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch,Route} from  'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import Home from './pages/Home/';

const Pagina404 = () => (<div>Pagina 4040</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>  
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
