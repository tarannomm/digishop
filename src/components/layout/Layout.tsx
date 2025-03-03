import React from 'react'
import Header from '../modules/Header'
import { LayoutProps } from '../../types/AppTypes'

const Layout:React.FC<LayoutProps>=({children})=>{
  return (
    <div>
        <Header/>
        {children}
      
    </div>
  )
}

export default Layout
