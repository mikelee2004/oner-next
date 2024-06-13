"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";

const SignInButton = () => {
    const { data: session } = useSession();

    if (session && session.user) 
    return (
        <div className="flex gap-4 ml-auto">
            <p className="text-sky-600">{session.user.name}</p>
            <Link href={"/src/app/api/auth/signout"} className="flex gap-4 ml-auto text-red-600">
                Выйти
            </Link>
        </div>
    );

    return (
        <div>
            <Link href="/login">Вход</Link> /{' '}
            <Link href="/registration">Регистрация</Link>
        </div>
    )
}

export default SignInButton;