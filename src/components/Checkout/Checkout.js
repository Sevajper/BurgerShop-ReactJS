import React from 'react'
import './Checkout.css'

const Checkout = (props) => {
  return (
    <div className='Checkout'>
      <div className='TitleAndClose'>
        <button className='CloseButton' onClick={props.closeClicked}> Close </button>
        <h2 className='YourOrder'>Your Order</h2>
      </div>
      <h4>One juicy burger with the following ingredients</h4>
      <div>
        {props.ingredients}
      </div><br />
      <div className='CheckoutPrice'>
        {'Price: ' + parseFloat(props.price).toFixed(2) + '$'}
      </div>
      <button className='ConfirmCheckout' onClick={props.confirmClicked}> Confirm </button>

    </div>
  )
}
export default Checkout
