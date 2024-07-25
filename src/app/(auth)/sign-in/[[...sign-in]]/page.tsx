import {SignIn} from "@clerk/nextjs"
import React from 'react'

const page = () => {
  return (
    <main className='auth-oage'>
      <SignIn/>
    </main>
  )
}

export default page