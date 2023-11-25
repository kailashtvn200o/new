"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Main from './pages'

const index = () => {
//   const router = useRouter()
//   useEffect(() => {
//     if(router) {
//       router.push('/home')
//     }
// }, [router]);
  return (
    <div>
      <Main/>
    </div>
  )
}

export default index

