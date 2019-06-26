import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Checkout from './../../components/Checkout/Checkout'
import Backdrop from '../../components/Backdrop/Backdrop'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuild extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      price: 1,
      orderDisable: false,
      checkoutClick: false
    }
  }

  addIngredientsHandler (type) {
    const oldIngredients = this.state.ingredients[type]
    const newIngredients = oldIngredients + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newIngredients
    const checkPrice = INGREDIENT_PRICES[type]
    const oldPrice = this.state.price
    const newPrice = oldPrice + checkPrice

    this.setState({
      price: newPrice,
      ingredients: updatedIngredients })
  }

  removeIngredientsHandler (type) {
    const oldIngredients = this.state.ingredients[type]
    if (oldIngredients <= 0) {
      return
    }
    const newIngredients = oldIngredients - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newIngredients
    const checkPrice = INGREDIENT_PRICES[type]
    const oldPrice = this.state.price
    const newPrice = oldPrice - checkPrice

    this.setState({
      price: newPrice,
      ingredients: updatedIngredients })
  }

  checkoutOpenHandler () {
    this.setState({
      checkoutClick: true
    })
  }

  checkoutCloseHandler () {
    this.setState({
      checkoutClick: false
    })
  }

  render () {
    const disabledCheck = {
      ...this.state.ingredients
    }

    let counter = 0
    let bool = false

    for (let i in disabledCheck) {
      disabledCheck[i] = disabledCheck[i] === 0
      if (disabledCheck[i] === true) {
        counter = counter + 1
        if (counter === 4 ? bool = true : bool = false) {}
      }
    }
    // console.log(disabledCheck)
    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
          price={this.state.price}
          orderDisable={bool}
          checkoutClicked={this.checkoutOpenHandler.bind(this)} />
        <BuildControls
          lessClicked={this.removeIngredientsHandler.bind(this)}
          moreClicked={this.addIngredientsHandler.bind(this)}
          disabled={disabledCheck} />
        {this.state.checkoutClick
          ? <Checkout
            closeClicked={this.checkoutCloseHandler.bind(this)}
            ingredients={Object.keys(this.state.ingredients).map(key => {
              return <li key={Math.random() * 1000} style={{ textTransform: 'capitalize' }}> {key} : {this.state.ingredients[key]}</li>
            })}
            price={this.state.price} />
          : null}
        {this.state.checkoutClick ? <Backdrop backdropClicked={this.checkoutCloseHandler.bind(this)} /> : null}
      </Aux>
    )
  }
}

export default BurgerBuild
