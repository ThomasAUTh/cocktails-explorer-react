import React, { Component } from 'react'

export default class CocktailCategories extends Component {
    
    renderCocktailCategories(category) {
        return <li key={category}>{category}</li>
    }

    render () {
        const { cocktailCategories } = this.props
        return (
            <div className="cocktails-categories">

                <h1>Cocktails Categories</h1>

                { !cocktailCategories && 'Loading...'}

                { cocktailCategories && <ul>{ cocktailCategories.map(this.renderCocktailCategories) }</ul>}

            </div>
        )
    }
}