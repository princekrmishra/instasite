"use client"
import Hero from '@/components/custom/Hero'
import SignInDialog from '@/components/custom/SignInDialog'
import { UserDetailContext } from '@/context/UserDetails.context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

/**
 * Dashboard page component that renders the dashboard hero and ensures the user is authenticated.
 *
 * If the current user's detail object lacks a `name`, the component redirects to the root path (`/`).
 * Uses UserDetailContext to read user details and Next.js `useRouter` for navigation.
 *
 * @returns {JSX.Element} The dashboard view (renders the Hero component).
 */
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
