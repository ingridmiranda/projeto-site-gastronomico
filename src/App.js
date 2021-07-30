import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contato from './pages/Contato';
import Culinaria from './pages/Culinaria';
import Home from './pages/Home';
import Programacao from './pages/Programacao';
import Unidades from './pages/Unidades';

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
        <Route path="/unidades" component={Unidades}/>
      </Switch>

    </BrowserRouter>
  )
}

export default Routes;