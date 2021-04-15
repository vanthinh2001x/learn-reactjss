import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/album';
import TodoFeature from './features/todo';

function App() {
  return (
    <div className="App">
      Header
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound}/>
      </Switch>
      Footer
    </div>
  );
}

export default App;
