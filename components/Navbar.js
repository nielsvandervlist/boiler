// app/components/Navbar.js
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Menu from "@components/Animations/Menu";
import SearchInput from "@components/Forms/SearchInput";

export default function Navbar() {
    const {data: session} = useSession();

    return <div className="navbar bg-base-100">
        <div className="navbar-start">
            <Menu/>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end gap-4">
            <SearchInput/>
            {session ? (
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>{session.user.name}</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Profile</a></li>
                                    <li>
                                        <button className={'btn'} onClick={() => signOut()}>Logout</button>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                ) : (
                <button className={'btn'} onClick={() => signIn()}>Sign in
        </button>
        )}
    </div>
</div>
}
