import React from 'react'
import '../BuildControls/BuildControls.css'

const labelArray = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className='MainControls'>
    {labelArray.map(el => (
      <div className='Controls' key={Math.random() * 100}>
        <div className='Label' key={el.label}>{el.label}</div>
        <div className='Buttons'>
          <button
            className='Less'
            key={'Less' + el.label}
            onClick={() => props.lessClicked(el.type)}
            disabled={props.disabled[el.type]}>Less</button>
          <button
            className='More'
            key={'More' + el.label}
            onClick={() => props.moreClicked(el.type)}>More</button>
        </div>
      </div>
    ))}
  </div>
)

export default buildControls
