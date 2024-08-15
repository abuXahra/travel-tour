import React from 'react'
import { PaymentModeContent, PaymentModeWrapper, PDetailWrapper, RadioCheck, RadioItem, RadioItemWrapper } from './PaymentModes.style'
import { FaCircle } from 'react-icons/fa'



export default function PaymentModes({
    paystack,
    paystackBrColor,
    paystackCheckColor,

    barter,
    barterBrColor,
    barterCheckColor,

    paypal,
    paypalBrColor,
    paypalCheckColor,

    paySmall,
    paySmallBrColor,
    paySmallCheckColor,

    handlePaymentMode

}) {
  return (<PDetailWrapper>
    <PaymentModeWrapper>
                     
    {/* PayStack */}
     <PaymentModeContent>
       <span>
         <p>{paystack}</p>
       </span>
       <span>
         <RadioItemWrapper onClick={()=>handlePaymentMode(paystack)}>
           <RadioItem brColor={paystackBrColor}>
             <RadioCheck checkColor={paystackCheckColor}>
               <FaCircle />
             </RadioCheck>
           </RadioItem>
       </RadioItemWrapper>  
       </span>
     </PaymentModeContent>

     {/* Barter (Flutter Wave) */}
     <PaymentModeContent>
       <span>
         <p>{barter}</p>
       </span>
       <span>
         <RadioItemWrapper onClick={()=>handlePaymentMode(barter)}>
           <RadioItem brColor={barterBrColor}>
             <RadioCheck checkColor={barterCheckColor}>
               <FaCircle />
             </RadioCheck>
           </RadioItem>
       </RadioItemWrapper>  
       </span>
     </PaymentModeContent>

     {/* Paypal */}
     <PaymentModeContent>
       <span>
         <p>{paypal}</p>
       </span>
       <span>
         <RadioItemWrapper onClick={()=>handlePaymentMode(paypal)}>
           <RadioItem brColor={paypalBrColor}>
             <RadioCheck checkColor={paypalCheckColor}>
               <FaCircle />
             </RadioCheck>
           </RadioItem>
       </RadioItemWrapper>  
       </span>
     </PaymentModeContent>

     {/* Pay Small */}
     <PaymentModeContent>
       <span>
         <p>{paySmall}</p>
       </span>
       <span>
         <RadioItemWrapper onClick={()=>handlePaymentMode(paySmall)}>
           <RadioItem brColor={paySmallBrColor}>
             <RadioCheck checkColor={paySmallCheckColor}>
               <FaCircle />
             </RadioCheck>
           </RadioItem>
       </RadioItemWrapper>  
       </span>
     </PaymentModeContent>

 </PaymentModeWrapper>
 </PDetailWrapper>
  )
}
