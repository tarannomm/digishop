import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from '@heroui/react'
import CartTable from '../modules/CartTable';
import LottieWrapper from '../../utility/lotties/lottieWrapper';
import LottieDesign from '../../utility/lotties/LottieDesign';

const ShopCart:React.FC = () => {
const cartItems = useSelector((state:any) => state.myArray.cartItem);
  return (
    <div className='box p-5 m-5 flex-col lg:flex-row'>
      {cartItems.length>0 ?
      <>
        <CartTable/>
        <div className='box flex-col border-2 w-full lg:w-fit mt-3 border-light'>
            <h1 className='titleText'>مجموع کل سبد خرید</h1>
            <div className='p-3 space-y-3'>
                <div className='flex'>
                <p className='pText'>قیمت کل نهایی:</p>
                <span className='describText'>{}</span>
                </div>
                <hr/>
                <>
                 <p className='pText mb-2'>حمل و نقل :</p>
                <span className='describText'>
                ارسال با پست پیشتاز 
                تحویل کالا 3-4 روز کاری بعد از ثبت سفارش
                <i className='block text-orange-800 py-2'> هزینه ارسال : 490,000 ریال</i>
                </span>
                </>
                <hr/>
                < div className='flex'> 
                <p className='pText'>مجموع :</p>
                <span className='describText'>ddddd</span>
                </div>
                <Button className='btn !mt-10 !text-sm'>اقدام به پرداخت</Button>
              
            </div> 
           </div>
      </>
      :
      <div className=' w-full'>
       <LottieDesign text="سبد خرید شما خالی میباشد !" link="/" animation="shopcart" linkText="هدایت به فروشگاه"/>
      </div>
      }
         

      

   
      
    </div>
  )
}

export default ShopCart
