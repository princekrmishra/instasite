// "use client"
// import { MessagesContext } from '@/context/Messages.context';
// import { UserDetailContext } from '@/context/UserDetails.context';
// import Colors from '@/data/Colors';
// import Lookup from '@/data/Lookup'
// import { ArrowRight, Image, Link } from 'lucide-react'
// import React, { useContext, useState } from 'react'
// import SignInDialog from './SignInDialog';
// import { useMutation } from 'convex/react';
// import { api } from '@/convex/_generated/api';
// import { useRouter } from 'next/navigation';
// import { Mail, Phone, Globe } from 'lucide-react'

// function Hero() {
//   const [userInput, setUserInput] = useState();
//   const {messages, setMessages} = useContext(MessagesContext);
//   const {userDetail, setUserDetail} = useContext(UserDetailContext);
//   const [openDialog, setOpenDialog] = useState(false);
//   const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
//   const router = useRouter();

//   const onGenerate = async(input) => {
//     if(!userDetail?.name){
//       setOpenDialog(true);
//       return;
//     }

//     const msg = {
//       role: 'user',
//       content: input
//     } 

//     setMessages(msg);
    
//     const workspaceId = await CreateWorkspace({
//       user: userDetail._id,
//       messages: [msg]
//     });
//     console.log(workspaceId);
//     router.push('/workspace/'+workspaceId);
//   }

//   return (
//     <div className='flex flex-col h-screen max-h-screen overflow-hidden'>
//       {/* Main Content - Takes most of the viewport */}
//       <div className='flex-1 flex flex-col items-center justify-center px-4 py-8'>
//         <div className='text-center mb-6'>
//           <h2 className='font-bold text-3xl md:text-4xl mb-2'>{Lookup.HERO_HEADING}</h2>
//           <p className='text-gray-400 font-medium text-sm md:text-base'>{Lookup.HERO_DESC}</p>
//         </div>
        
//         <div className='p-4 border rounded-xl max-w-xl w-full mb-6'
//         style={{
//           backgroundColor:Colors.BACKGROUND
//         }}
//         >
//           <div className='flex gap-2'>
//             <textarea 
//               placeholder={Lookup.INPUT_PLACEHOLDER} 
//               onChange={(event) => setUserInput(event.target.value)}
//               className='outline-none bg-transparent w-full h-24 max-h-32 resize-none text-sm'
//             />
//             {userInput && <ArrowRight 
//               onClick={() => onGenerate(userInput)}
//               className='bg-blue-500 p-2 h-8 w-7 rounded-md cursor-pointer flex-shrink-0' />}
//           </div>
//           <div>
//             <Link className='w-4 h-4'/>
//           </div>
//         </div>

//         {/* Suggestions - Compact */}
//         <div className='flex flex-wrap max-w-2xl justify-center gap-2 mb-4'>
//           {Lookup?.SUGGESTIONS.map((suggesstion, index) => (
//             <h2 
//               className='py-1 px-3 border rounded-full text-xs text-gray-400 hover:text-white cursor-pointer whitespace-nowrap' 
//               key={index}
//               onClick={() => onGenerate(suggesstion)}
//             >{suggesstion}</h2>
//           ))}
//         </div>
        
//         <SignInDialog openDialog={openDialog} closeDialog={(v) => setOpenDialog(v)} />
//       </div>

//        <footer className='mt-auto py-8 px-4 border-t border-gray-800'>
//         <div className='max-w-6xl mx-auto'>
//           <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
//             {/* Brand and Copyright */}
//             <div className='flex items-center gap-2'>
//               <img src='logo.png' className='w-[150px] h-[50px]'/>
//               <span className='text-gray-400'>© {new Date().getFullYear()}</span>
//             </div>
            
//             {/* Contact Information */}
//             <div className='flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400'>
//               <div className='flex items-center gap-2 hover:text-white transition-colors cursor-pointer'>
//                 <Mail className='w-4 h-4' />
//                 <span>kmishraprince.com</span>
//               </div>
//               <div className='flex items-center gap-2 hover:text-white transition-colors cursor-pointer'>
//                 <Phone className='w-4 h-4' />
//                 <span>+91 7667214106</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Additional Links (Optional) */}
//           <div className='flex justify-center mt-4 pt-4 border-t border-gray-800'>
//             <div className='flex gap-6 text-sm text-gray-400'>
//               <a href="/privacy" className='hover:text-white transition-colors'>Privacy Policy</a>
//               <a href="/terms" className='hover:text-white transition-colors'>Terms of Service</a>
//               <a href="/support" className='hover:text-white transition-colors'>Support</a>
//             </div>
//           </div>
//         </div>
//       </footer>
    
//     </div>
//   )
// }

// export default Hero






"use client"
import { MessagesContext } from '@/context/Messages.context';
import { UserDetailContext } from '@/context/UserDetails.context';
import Colors from '@/data/Colors';
import Lookup from '@/data/Lookup'
import { ArrowRight, Link } from 'lucide-react'
import React, { useContext, useState } from 'react'
import SignInDialog from './SignInDialog';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';

function Hero() {
  const [userInput, setUserInput] = useState();
  const {messages, setMessages} = useContext(MessagesContext);
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);
  const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
  const router = useRouter();

  const onGenerate = async(input) => {
    if(!userDetail?.name){
      setOpenDialog(true);
      return;
    }
    if(userDetail?.token < 10){
      toast('You dont have enough token!');
      return;
    }

    const msg = {
      role: 'user',
      content: input
    } 

    setMessages(msg);
    
    const workspaceId = await CreateWorkspace({
      user: userDetail._id,
      messages: [msg]
    });
    console.log(workspaceId);
    router.push('/workspace/'+workspaceId);
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