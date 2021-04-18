import Header from 'components/Header';
import React, { useEffect } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/todo';

function App() {
  useEffect(()=>{
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };

      const productList = await productApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, [])

  return (
    <div className="app">
      <Header />
    
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
