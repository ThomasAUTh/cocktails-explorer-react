import React, { Component } from 'react'
import * as request from 'superagent'
import CocktailCategories from './CocktailCategories';

export default class CocktailCategoriesContainer extends Component {
state = { cocktailCategories: [] }

    componentDidMount () {
        request
            .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then(response => this.updateCocktailCategories(Object.values(response.body.drinks)))
            .catch(console.error)
    }

    updateCocktailCategories(categories) {
        this.setState({
            cocktailCategories: categories.map(x => Object.values(x)[0])
        })
    }

    render() {
        return <CocktailCategories cocktailCategories={this.state.cocktailCategories} />
    }
}