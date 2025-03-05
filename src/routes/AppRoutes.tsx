import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from '../components/template/Sign'
import ProductsList from '../components/template/productsList'
import ProductDetails from '../components/template/productDetails'
import NotFound from '../components/template/NotFound'
import ShopCart from '../components/template/ShopCart'

const AppRoutes:React.FC=()=> {
  return (
   <Routes>
    <Route path='/login' element={<Sign/>}/>
    <Route path='/signup' element={<Sign/>}/>
    <Route path='/shop' element={<ProductsList/>}/>
    <Route path='/shopcart' element={<ShopCart/>}/>
    <Route path='/productDetails/:id' element={<ProductDetails/>}/>
    <Route path='/notfound' element={<NotFound/>}/>
    <Route path='/*' element={<NotFound/>}/>
    <Route path='/' element={<ProductsList/>}/>
   </Routes>
  )
}

export default AppRoutes
