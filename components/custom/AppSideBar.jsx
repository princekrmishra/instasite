import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '../ui/button'
import { MessageCircleCode } from 'lucide-react'
import WorkspaceHistory from './WorkspaceHistory'
import SideBarFooter from './SideBarFooter'
import Link from 'next/link'

function AppSideBar() {
  return (
    <Sidebar>
      <SidebarHeader className='p-5 pr-10 cursor-pointer'>
        <Link href="/">
        <Image src={'/logo.png'} alt='logo' width={120} height={100} className=''/>
        </Link>
      </SidebarHeader>
      <SidebarContent className='p-5'>
       <Button className='mt-5'><MessageCircleCode/>Start New Chat</Button>
        <SidebarGroup>
            <WorkspaceHistory />
        </SidebarGroup>
        {/* <SidebarGroup /> */}
      </SidebarContent>
      <SidebarFooter>
        <SideBarFooter/>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar