import React from 'react'
import Aux from '../../hoc/Auxilliary'
import './Layout.css'
import Toolbar from './../Navigation/Toolbar'

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className='Content'>{props.children}</main>
    </Aux>
  )
}

export default layout
