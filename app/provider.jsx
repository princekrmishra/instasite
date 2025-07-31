"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from '@/components/custom/Header';
import { MessagesContext } from '@/context/Messages.context';
import { UserDetailContext } from '@/context/UserDetails.context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useConvex } from 'convex/react';
import { api } from "@/convex/_generated/api";
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSideBar from '@/components/custom/AppSideBar';
import { usePathname } from 'next/navigation';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { ActionContext } from '@/context/ActionContext';

function Provider({children}) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail] = useState();
  const [action, setAction] = useState();
  const convex = useConvex();
  const pathname = usePathname();

  // Define which routes should have sidebar
  const sidebarRoutes = ['/workspace', '/codeview'];
  const shouldShowSidebar = sidebarRoutes.some(route => pathname?.startsWith(route));

  useEffect(() => {
    isAuthenticated();
  }, [])

  const isAuthenticated = async () => {
    if(typeof window !== 'undefined'){
      const user = JSON.parse(localStorage.getItem('user'));
      if(user?.email) {
        //fetch from db
        const result = await convex.query(api.users.GetUser, {
          email: user?.email
        });
        setUserDetail(result);
        console.log(result);
      }
    }
  }

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_KEY}>
      <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
      <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
        <MessagesContext.Provider value={{messages, setMessages}}>
          <ActionContext.Provider value={{action, setAction}}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              {/* Header - always visible */}
              <Header />
              
              {/* Conditional Layout */}
              {shouldShowSidebar ? (
                // Layout with sidebar for specific pages
                <SidebarProvider defaultOpen={false}>
                  <div className="flex min-h-[calc(100vh-80px)]">
                    <AppSideBar />
                    <main className="flex-1 overflow-auto">
                      {children}
                    </main>
                  </div>
                </SidebarProvider>
              ) : (
                // Full width layout for landing page and other pages
                <main className="w-full">
                  {children}
                </main>
              )}
            </div>
          </NextThemesProvider>
          </ActionContext.Provider>
        </MessagesContext.Provider>
      </UserDetailContext.Provider>
      </PayPalScriptProvider>
    </GoogleOAuthProvider>
  )
}

export default Provider;