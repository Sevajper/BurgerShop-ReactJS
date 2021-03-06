import React from 'react'
import './Backdrop.css'

const backdrop = (props) => {
  return (
    <div className='Backdrop' onClick={props.backdropClicked} />
  )
}

export default backdrop
