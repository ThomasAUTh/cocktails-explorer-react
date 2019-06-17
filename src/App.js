import React from 'react';
import './App.css';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import { Route } from 'react-router-dom'
import DrinksListContainer from './components/DrinksListContainer';


function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={CocktailCategoriesContainer} />
        <Route exact path="/category/:category" component={DrinksListContainer} />
      </main>
    </div>
  );
}

export default App;
