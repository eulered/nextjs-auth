import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await NextResponse.json({
      message: 'Logout Succesful',
      success: true,
    })

    //clears the cookie
    response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
