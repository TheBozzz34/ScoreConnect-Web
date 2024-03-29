// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase.utils';
import { User } from 'firebase/auth/cordova';

import { Button, Card, CardHeader, CardBody, CardFooter, Avatar, Image, Link, Snippet, Code, Kbd, Divider, Spacer } from "@nextui-org/react";
import { Navbar } from '@/app/components/nav-bar.component';
import { title, subtitle } from '@/app/components/primitives';
import { GithubIcon } from './components/icons';
import { siteConfig } from '@/config/site';
import { button as buttonStyles } from "@nextui-org/theme";


export default function Page() {

    const [userAccount, setUserAccount] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAccount(user);
            } else {
                setUserAccount(null);
            }
        });
    }, []);


    return (
        <div>
            <Navbar />
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Make&nbsp;</h1>
                    <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
                    <br />
                    <h1 className={title()}>
                        displays regardless of your design experience.
                    </h1>
                    <h4 className={subtitle({ class: "mt-4" })}>
                        Beautiful, fast and modern projector control app.
                    </h4>
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        href={siteConfig.links.docs}
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                    >
                        Documentation
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({ variant: "bordered", radius: "full" })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20} />
                        GitHub
                    </Link>
                </div>

                <div className="mt-8">
                    <Snippet hideSymbol hideCopyButton variant="bordered">
                        <span>
                            Get started by emailing <Code color="primary">{/*siteConfig.contact[0].email*/}very epic contact email </Code>
                        </span>
                    </Snippet>
                </div>
            </section>

            <Divider />

            <section id="feature-cards" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Features</h1>
                    <h4 className={subtitle({ class: "mt-4" })}>
                        Built with modern technologies, ScoreConnect is packed with features to make your life easier.
                    </h4>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <div className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 transform hover:scale-105 transition duration-300 ease-in-out border-4 border-violet-600 border-opacity-0 hover:border-opacity-100" radius='md'>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src="https://www.upvoty.com/wp-content/uploads/2020/09/features.png"
                                radius='md'
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 rounded-b-md">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="app icon"
                                        className="rounded-full w-11 h-11 bg-black"
                                        src="https://sc.necrozma.xyz/_next/image?url=%2Fyorha-no-2-type-b-1.png&w=256&q=75"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-medium text-white/60">Powerful</p>
                                        <p className="text-medium text-white/60">Create beautiful displays with ease.</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>

                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 transform hover:scale-105 transition duration-300 ease-in-out border-4 border-violet-600 border-opacity-0 hover:border-opacity-100" radius='md'>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src="https://modulabs.co.kr/wp-content/uploads/2023/10/nextjs14-1536x864.png"
                                radius='md'
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-b-md">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="app icon"
                                        className="rounded-full w-20 bg-black"
                                        src="https://sc.necrozma.xyz/_next/image?url=%2Fyorha-no-2-type-b-1.png&w=256&q=75"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-medium text-white/60">Modern</p>
                                        <p className="text-medium text-white/60">ScoreConnect is built with modern technologies and has a beautiful interface.</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>

                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 transform hover:scale-105 transition duration-300 ease-in-out border-4 border-violet-600 border-opacity-0 hover:border-opacity-100" radius='md'>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src="https://img.freepik.com/premium-photo/abstract-neon-lights-background-colorful-design_910135-4906.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais"
                                radius='md'
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-b-md">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="app icon"
                                        className="rounded-full w-11 h-11 bg-black"
                                        src="https://sc.necrozma.xyz/_next/image?url=%2Fyorha-no-2-type-b-1.png&w=256&q=75"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-medium text-white/60">Fast.</p>
                                        <p className="text-medium text-white/60">ScoreConnect is fast. Really fast.</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <Divider />

            <Spacer y={20} />



            <footer className="rounded-t-lg shadow mx-4 bg-gradient-to-r from-[#3E187A] to-[#994ECC]">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm">© 2024 <a href="https://necrozma.xyz" className="hover:underline">ScoreConnect</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>




        </div>

    );
}
