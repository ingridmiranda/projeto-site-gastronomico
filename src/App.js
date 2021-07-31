import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contato from './pages/Contato';
import Culinaria from './pages/Culinaria';
import Home from './pages/Home';
import Programacao from './pages/Programacao';
import './styles.css'

import Header from './components/Header'


const Routes = () =>{
  return (
    <BrowserRouter>

    <Header />

      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/contato" component={Contato}/>
        <Route path="/culinaria" component={Culinaria}/>
        <Route path="/programacao" component={Programacao}/>
      </Switch>

    </BrowserRouter>
  )
}

export default Routes;