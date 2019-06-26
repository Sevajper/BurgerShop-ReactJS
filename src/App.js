import React from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuild from './containers/BurgerBuild/BurgerBuild'

function App () {
  return (
    <div>
      <Layout>
        <BurgerBuild />
      </Layout>
    </div>
  )
}

export default App
