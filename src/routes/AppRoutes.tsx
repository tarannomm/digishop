import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from '../components/template/Sign'
import ProductsList from '../components/template/productsList'
import ProductDetails from '../components/template/productDetails'

const AppRoutes:React.FC=()=> {
  return (
   <Routes>
    <Route path='/login' element={<Sign/>}/>
    <Route path='/signup' element={<Sign/>}/>
    <Route path='/productDetails/:id' element={<ProductDetails/>}/>
    <Route path='/' element={<ProductsList/>}/>
   </Routes>
  )
}

export default AppRoutes
