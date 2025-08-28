import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetails.context'
import Link from 'next/link'
import { LucideDownload, Rocket, LogOut, HelpCircle, Settings, DollarSign } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ActionContext } from '@/context/ActionContext'
import SignInDialog from '@/components/custom/SignInDialog'

// shadcn dropdown menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { setAction } = useContext(ActionContext);
  const path = usePathname();

  const [openDialog, setOpenDialog] = useState(false);

  const onActionBtn = (action) => {
    setAction({
      actionType: action,
      timeStamp: Date.now(),
    })
  }

  // 🔹 Handle Sign Out
  const handleSignOut = () => {
    setUserDetail(null);
    localStorage.clear(); 
    sessionStorage.clear(); 
    window.location.href = "/";
  };

  return (
    <div className='p-4 flex justify-between items-center'>
      <Link href='/'>
        <Image src={'/logo.png'} alt='Logo' width={120} height={100}/>
      </Link>

      {!userDetail?.name ? (
        <div className="flex gap-5">
          <Button 
            className='text-white cursor-pointer bg-blue-400 hover:bg-blue-300 hover:text-gray-900'
            onClick={() => setOpenDialog(true)}
          >
            Get Started
          </Button>
        </div>
      ) : (
        <div className='flex gap-3 items-center'>
          {path?.includes('workspace') && (
            <>
              <Button  
                variant='ghost' 
                className='cursor-pointer' 
                onClick={() => onActionBtn('export')}
              >
                <LucideDownload /> Export
              </Button>
              <Button 
                className='bg-blue-500 text-white hover:bg-blue-600 cursor-pointer' 
                onClick={() => onActionBtn('deploy')}
              >
                <Rocket /> Deploy
              </Button>
            </>
          )}

          {/* 🔹 User Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image 
                src={userDetail?.picture} 
                alt='user' 
                width={35} 
                height={35}
                className='rounded-full w-[35px] cursor-pointer border border-gray-300'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <Link href="/help">
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4"/> Help
                </DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4"/> Settings
                </DropdownMenuItem>
              </Link>
              <Link href="/pricing">
                <DropdownMenuItem>
                  <DollarSign className="mr-2 h-4 w-4"/> Pricing
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4"/> Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <SignInDialog openDialog={openDialog} closeDialog={setOpenDialog} />
    </div>
  )
}

export default Header
