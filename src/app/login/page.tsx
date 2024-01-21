'use client';

import GoogleButton from 'react-google-button'
import { auth, signInWithGooglePopup } from "@/utils/firebase.utils";
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/navigation'
import { Navbar } from '../components/nav-bar.component';

export default function Page() {
    const router = useRouter()
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        if (response?.user) {
            router.push('/account')
        }
    }
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <Navbar />
            <h1 className="text-3xl font-semibold text-center text-foreground/90">Sign in to {siteConfig.name}</h1>
            <GoogleButton
                className="w-full"
                onClick={logGoogleUser}
            />
        </div>
    )
}


