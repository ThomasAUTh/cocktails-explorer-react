import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './DrinksList.css'

export default class DrinkList extends Component {
render(){    
    const { drinks } = this.props;
    return (
      <div>
        <h1>Cocktail images</h1>
        <Link to='/'>Go back to the cocktail categories</Link>
        <div>
          {!drinks && 'Loading...'}
          {drinks &&
            drinks.map(drink => (
              <div className='drink' key={drink.id}>
                <img src={drink.image} alt={drink.title} />
                <p>{drink.title}</p>
                <Link to={`/drinks/${drink.id}`}></Link>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
