"use client"
import Hero from '@/components/custom/Hero'
import SignInDialog from '@/components/custom/SignInDialog'
import { UserDetailContext } from '@/context/UserDetails.context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function DashboardPage() {
    const {userDetail} = useContext(UserDetailContext);
    const router = useRouter();

    useEffect(() => {
        if(!userDetail?.name){
            router.replace('/');
        }
    },[userDetail, router]);

  return (
    <Hero />
  )
}
