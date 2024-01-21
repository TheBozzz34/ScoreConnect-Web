// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase.utils';
import { User } from 'firebase/auth/cordova';

import { Button, Card, CardHeader, CardBody, CardFooter, Avatar, Image, Link, Snippet, Code, Kbd } from "@nextui-org/react";
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
        </div>

    );
}
