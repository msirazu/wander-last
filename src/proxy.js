import { NextResponse } from 'next/server'

import { auth } from './lib/auth';
import { headers } from 'next/headers';


export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return NextResponse.redirect(new URL('/user/login', request.url))
    }

    return NextResponse.next()

}
 
export const config = {
  matcher: ['/destination-detail/:path*', '/my-bookings', '/user/profile'],
}