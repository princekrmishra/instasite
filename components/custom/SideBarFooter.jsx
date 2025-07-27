import { HelpCircle, icons, LogOut, Settings, Wallet } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function SideBarFooter() {
    const options = [
        {
            name: "Settings",
            icons: Settings
        },
        {
            name: "Help Center",
            icons: HelpCircle
        },
        {
            name: "My Subscription",
            icons: Wallet
        },
        {
            name: "Sign Out",
            icons: LogOut
        },

    ]
  return (
    <div className='p-2 mb-10'>
        {options.map((options, index) => (
            <Button variant='ghost' className='w-full flex justify-start my-3' key={index}>
                <options.icons/>
                {options.name}
            </Button>
        ))}
    </div>
  )
}

export default SideBarFooter