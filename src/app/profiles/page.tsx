'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function ProfilesPage() {
  const router = useRouter()
  const [data, setData] = useState('Nothing to show')
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout Success')
      router.push('/login')
    } catch (error: any) {
      console.log(error)
      toast.error('Logout Failed')
    }
  }

  const getUserDetails = async () => {
    const response = await axios.get('/api/users/user')
    console.log(response.data)
    setData(response.data.data._id)
  }
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex-col flex-center min-h-screen py-2">
        <h1>Profiles Page</h1>
        <hr />
        <h2 className="p-4 bg-zinc-800/60 rounded-full border-2">
          {data === 'Nothing to show' ? (
            'No user'
          ) : (
            <Link href={`/profiles/${data}`}>{data}</Link>
          )}
        </h2>
        <button
          className="border-2 border-red-900 rounded-full  text-white font-semibold py-2 px-6 mt-4 transition hover:bg-red-900"
          onClick={getUserDetails}
        >
          Get User
        </button>

        <button
          className="border-2 border-red-900 rounded-full bg-red-900 text-white font-semibold py-2 px-6 mt-4 transition hover:bg-black"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default ProfilesPage
