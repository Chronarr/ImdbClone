import React from 'react'
import MenuItem from "@/components/MenuItem"
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
    return (
        <div className='flex justify-between mx-2 py-5 max-w-5xl sm:mx-auto items-center '>
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome} />
                <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className="flex items-center space-x-4">
                <DarkModeSwitch />
                <Link href="/">
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-3 px-2 rounded-lg mr-1'>IMDb</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}
