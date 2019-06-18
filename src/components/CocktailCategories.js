import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CocktailCategories extends Component {
    
    renderCocktailCategories = cocktailCategories => {
        return (
            <ul>
                {cocktailCategories.map(cocktailCategory => {
                    const formatCategory = encodeURIComponent(cocktailCategory.split(" ").join("_"))
                    return (

                        <li key={formatCategory}>
                            <Link to={`/category/${formatCategory}`}>{cocktailCategory}</Link>
                        </li>
                    )
                })}
        
            </ul>
        )
    }

    render () {
        const { cocktailCategories } = this.props
        return (
            <div className="cocktails-categories">

                <h1>Cocktail Categories</h1>

                { !cocktailCategories && 'Loading...'}

                { cocktailCategories && this.renderCocktailCategories(cocktailCategories)}

            </div>
        )
    }
}