// import Pricing from '@/app/(main)/pricing/page'
import lookup from '@/data/Lookup'
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { UserDetailContext } from '@/context/UserDetails.context'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Image from 'next/image'
// import { data } from 'autoprefixer'

function PricingModel() {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    const UpdateToken = useMutation(api.users.UpdateToken);
    const [selectedOption, setSelectedOption] = useState();
    const onPaymentSuccess = async() => {
        const token = userDetail?.token+Number(selectedOption?.value);
        console.log(token);
        await UpdateToken({
            token: token,
            userId: userDetail?._id,
        })
    }


  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {lookup.PRICING_OPTIONS.map((prining, index) => (
            <div key={index} className="border p-7 rounded-xl flex flex-col gap-3" >
                <h2 className='font-bold text-2xl'>{prining.name}</h2>
                <h2 className='font-medium text-lg'>{prining.token}</h2>
                <p className='text-gray-400'>{prining.desc}</p>
                <h2 className='font-bold text-4xl text-center mt-6'>${prining.price}</h2>

                {/* <Button>Upgrade to {prining.name}</Button> */}
                <PayPalButtons style={{ layout: "horizontal" }} 
                onClick={()=>{setSelectedOption(prining); console.log(prining.value)}}
                disabled={!userDetail}
                onApprove={() => onPaymentSuccess()}
                onCancel={() => console.log("Payment Canceled")}
                createOrder={(data,actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: prining.price,
                                    currency_code: 'USD'
                                }
                            }
                        ]
                    })
                }} />
            </div>
        ))}
        
    </div>
  )
}

export default PricingModel