'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/login', user)
      console.log('Login Successful', response.data)
      toast.success('Login Success!')
      router.push('/profiles')
    } catch (error: any) {
      console.log('Login Failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex-center flex-col min-h-screen py-2">
        <p className="text-center text-4xl">Login page</p>
        <hr />

        {/* Email Input */}
        <label htmlFor="email">email</label>
        <input
          className="p-2 border-2 border-slate-500 rounded-lg mb-4 text-slate-900 focus:outline-none focus:border-blue-900"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email"
        />

        {/* Password Input */}
        <label htmlFor="password">password</label>
        <input
          className="p-2 border-2 border-slate-500 rounded-lg mb-4 text-slate-900 focus:outline-none focus:border-blue-950"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter Password"
        />

        <button
          onClick={onLogin}
          className={`${
            buttonDisabled
              ? 'border-gray-900 text-gray-900 cursor-not-allowed '
              : 'border-blue-950 active:border-blue-950 hover:border-blue-950 hover:bg-blue-950'
          } w-[250px] py-3 rounded-lg border-2  font-semibold  transition`}
          disabled={buttonDisabled}
        >
          Login
        </button>
        <Link href="/signup">Visit Signup Page</Link>
      </div>
    </>
  )
}

export default LoginPage
