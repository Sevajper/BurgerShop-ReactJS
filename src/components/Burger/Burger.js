import React from 'react'
import './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map(key => {
      // console.log(props.ingredients['cheese'])
      return [...Array(props.ingredients[key])].map((temp, index) => {
        return <BurgerIngredients key={key + index} type={key} />
      })
    }).reduce((prev, current) => {
      return prev.concat(current)
    }, [])
  if (ingredients.length === 0) {
    ingredients = <p> Add some ingredients!</p>
  }
  // console.log(Ingredients)
  return (
    <div className='AllComps'>
      <div className='Burger'>
        <BurgerIngredients type='bread-top' />
        {ingredients}
        <BurgerIngredients type='bread-bottom' />
      </div>
      <div className='Price'> Price: {Number(props.price).toFixed(2)}$</div>
      <button
        disabled={props.orderDisable}
        className='OrderButton'
        onClick={props.checkoutClicked}
      >ORDER NOW</button>
    </div>
  )
}

export default burger
