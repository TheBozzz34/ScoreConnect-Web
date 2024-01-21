'use client';

import GoogleButton from 'react-google-button'
import { auth, signInWithGooglePopup } from "@/utils/firebase.utils";
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/navigation'
import { User } from 'firebase/auth/cordova';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardFooter, Button, Image } from '@nextui-org/react';
import { Navbar } from '@/app/components/nav-bar.component';
import {CircularProgress} from "@nextui-org/react";

export default function Page() {
    const router = useRouter()
    const [userAccount, setUserAccount] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAccount(user);
            } else {
                router.push('/login');
            }
            setLoading(false);
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <CircularProgress aria-label="Loading..." />;
    }
    if (!userAccount) {
        return null;
    }
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
                    <Navbar />
                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[310px]" shadow="sm" isBlurred>
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <div className="relative col-span-6 md:col-span-4">
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        height={200}
                                        shadow="md"
                                        src={userAccount?.photoURL || ''}
                                        width="100%"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-semibold font-semibold leading-none text-foreground/90">{userAccount?.displayName}</h4>
                                    <h5 className="text-medium tracking-tight text-foreground/80">{userAccount?.email}</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardFooter className="gap-3">
                            <Button
                                className="w-full text-semibold"
                                color="primary"
                                onClick={() => {
                                    auth.signOut();
                                    router.push('/')
                                }}
                            >
                                Sign Out
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
    )
}


