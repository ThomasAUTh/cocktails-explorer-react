import React from 'react';
import './App.css';
import CocktailCategories from './components/CocktailCategories';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';

function App() {
  return (
    <div className="App">
      <main>
        <CocktailCategoriesContainer />
      </main>
    </div>
  );
}

export default App;
