import { Button } from '@heroui/react'
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, State } from '../../stores/store';


const AddShop:React.FC<any>= ({product}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state:any) => state.myArray.cartItem);
    const AddToCartHandler=()=>{
     dispatch(addToCart(product))
    }
  return (
    <div className='w-full px-5'>
        {cartItems.includes(product)?
        <div className='flex justify-between items-end px-2 my-1 '>
            <Button size='sm' className='smallbtn'>+</Button>
            <span className='text-2xl pb-[6px] text-orangeLight font-bold'>0</span>
            <Button size='sm' className='smallbtn'>-</Button>
        </div>
        : 
        <Button className="btn !text-tiny group relative" onPress={AddToCartHandler}>
            <span className="group-hover:hidden">افزودن به سبد خرید</span>
            <FaShoppingCart className="icons hidden group-hover:block text-lg" />
        </Button>
        }

{/* <Button className="btn !bg-green-700 !text-tiny group relative" onPress={AddToCartHandler}>
      <span className="group-hover:hidden">به سبد خرید افزوده شد</span>
      <div className='flex'>
      <FaTrash className="icons hidden group-hover:block text-lg mx-2" />
      <span className="hidden group-hover:block">حذف از سبد خرید</span>
       
      </div>
      
      </Button> */}
    
    </div>
  )
}

export default AddShop;
