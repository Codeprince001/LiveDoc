"use client"
import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import Header from '@/components/Header'
import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Editor } from '@/components/editor/Editor'



const CollabrativeRoom = () => {
  return (
    <RoomProvider id="my-room">
    <ClientSideSuspense fallback={<div>Loading…</div>}>
      <div className='collaborative-roon'>
      <Header className='flex w-fit items-center justify-center gap-2'>
        <div>
        <p className='document-title'>Application Title</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor/>
      </div>
    </ClientSideSuspense>
  </RoomProvider>
  )
}

export default CollabrativeRoom