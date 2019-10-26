import * as React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';
import List from '../List/ListContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        {/* TODO change switch to switchanimated  */}
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path="/list/:id" component={List} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;