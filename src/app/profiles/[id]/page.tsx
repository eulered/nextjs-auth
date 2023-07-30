import React from 'react'
import { Toaster } from 'react-hot-toast'

function ProfilePage({ params }: any) {
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="flex-center min-h-screen">
        <p className="text-bold text-5xl font-mono">
          Profile Page{' '}
          <span className="p-2 rounded-lg text-black bg-white font-medium font-mono">
            id: {params.id}
          </span>
        </p>
      </div>
    </>
  )
}

export default ProfilePage
