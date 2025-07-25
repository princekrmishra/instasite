"use client"
import { MessagesContext } from '@/context/Messages.context';
import { UserDetailContext } from '@/context/UserDetails.context';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { ArrowRight, Link } from 'lucide-react';
import lookup from '@/data/Lookup';
import Colors from '@/data/Colors';

function ChatView() {
  const {id} = useParams();
  const convex = useConvex();
  const {userDetail, setUserDetail} = useContext(UserDetailContext)
  const {messages, setMessages} = useContext(MessagesContext)
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    id && GetWorkspaceData();
  }, [id])
  const GetWorkspaceData =  async() => {
    const result = await convex.query(api.workspace.GetWorkspace, {
      workspaceId: id
    });
    setMessages(result?.messages)
    console.log(result)
  } 
  return (
    <div className='relative h-[85vh] flex flex-col'>
      <div className='flex-1 overflow-y-scroll'>
        {messages?.map((msg, index) => (
          <div key={index}
          className='bg-gray-700 p-3 rounded-lg mb-2 flex gap-3 items-start'
          >
            {msg?.role == 'user' && 
            <Image src = {userDetail?.picture} alt='userImage'
            width={35} height={35} className='rounded-full'/>}
            <h2>{msg.content}</h2>
          </div>
        ))}
      </div>

       <div className='p-5 border rounded-xl max-w-xl w-full mt-3'
      style={{
        backgroundColor:Colors.BACKGROUND
      }}
      >
        <div className='flex gap-2'>
          <textarea 
            placeholder={lookup.INPUT_PLACEHOLDER} 
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
    </div>
  )
}

export default ChatView