"use client"
import { MessagesContext } from '@/context/Messages.context';
import { UserDetailContext } from '@/context/UserDetails.context';
import Colors from '@/data/Colors';
import Lookup from '@/data/Lookup'
import { ArrowRight, Link } from 'lucide-react'
import React, { useContext, useState } from 'react'
import SignInDialog from './SignInDialog';

function Hero() {
  const [userInput, setUserInput] = useState();
  const {messages, setMessages} = useContext(MessagesContext);
  const [userDetail, setUserDetail] = useState(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);

  const onGenerate = (input) => {
    if(!userDetail?.name){
      setOpenDialog(true);
      return;
    }
    setMessages({
      role: 'user',
      content: input
    })
  }
  return (
    <div className='flex flex-col items-center gap-2 mt-36 xl:mt-52'>
      <h2 className='font-bold text-4xl'>{Lookup.HERO_HEADING}</h2>
      <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>
      <div className='p-5 border rounded-xl max-w-xl w-full mt-3'
      style={{
        backgroundColor:Colors.BACKGROUND
      }}
      >
        <div className='flex gap-2'>
          <textarea 
            placeholder={Lookup.INPUT_PLACEHOLDER} 
            onChange={(event) => setUserInput(event.target.value)}
            className='outline-none bg-transparent w-full h-32 max-h-56 resize-none'
          />
          {userInput && <ArrowRight 
            onClick={() => onGenerate(userInput)}
            className='bg-blue-500 p-2 h-10 w-8 rounded-md cursor-pointer' />}
      </div>
      <div>
        <Link className='w-5 h-5'/>
      </div>
      </div>
      <div className='flex mt-8 flex-wrap max-w-2xl justify-center'>
        {Lookup?.SUGGESTIONS.map((suggesstion, index) => (
          <h2 
            className='p-1 px-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer' 
            key={index}
            onClick={() => onGenerate(suggesstion)}
          >{suggesstion}</h2>
        ))}
      </div>
      <SignInDialog openDialog={openDialog} closeDialog={(v) => setOpenDialog(v)} />

    </div>
  )
}

export default Hero