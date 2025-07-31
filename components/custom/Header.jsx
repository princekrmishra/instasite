import React, { useContext } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetails.context'
import Link from 'next/link'
import { CloudUpload, LucideDownload, Rocket } from 'lucide-react'
import { useSidebar } from '../ui/sidebar'
import { usePathname } from 'next/navigation'
import { ActionContext } from '@/context/ActionContext'

function Header() {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const {action, setAction} = useContext(ActionContext);
  // const {toggleSidebar} = useSidebar();
  const path = usePathname();
  console.log(path?.includes('workspace'));

  const onActionBtn = (action) => {
    setAction({
      actionType: action,
      timeStamp: Date.now(),

    })
  }
  
  return (
    <div className='p-4 flex justify-between items-center'>
      <Link href='/'>
        <Image src={'/logo.png'} alt='Logo' width={120} height={100}/>
        </Link>
        {!userDetail?.name ? 
          <div className="flex gap-5">
              <Button variant='ghost'>
                Sign In
              </Button>
              <Button 
                className='text-white' 
                style={{ backgroundColor:Colors.BLUE }}>
                  Get Started
              </Button>
          </div>:
          path?.includes('workspace')&&<div className='flex gap-2 items-center'>
            <Button  variant='ghost' className='cursor-pointer' onClick={() => onActionBtn('export')}><LucideDownload />Export</Button>
            <Button className='bg-blue-500 text-white hover:bg-blue-600 cursor-pointer' onClick={() => onActionBtn('deploy')}><Rocket/>Deploy</Button>
            {userDetail && <Image src={userDetail?.picture} alt='user' width={30} height={30}
            className='rounded-full w-[30px] cursor-pointer'
            // onClick={toggleSidebar}
            />
            }
          </div>
        }
    </div>

  )
}

export default Header