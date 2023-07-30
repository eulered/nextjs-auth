'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { axios } from 'axios'

function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const onLogin = async () => {}
  return (
    <>
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
          className="w-[250px] py-3 rounded-lg border-2 border-blue-950 font-semibold active:border-blue-950 hover:border-blue-950 hover:bg-blue-950 transition"
        >
          Login
        </button>
        <Link href="/signup">Visit Signup Page</Link>
      </div>
    </>
  )
}

export default LoginPage
