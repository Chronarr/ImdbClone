import React from 'react'
import MenuItem from "@/components/MenuItem"
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
    return (
        <div className='flex justify-between mx-2 max-w-4xl sm:mx-auto items-center '>
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome} />
                <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className="">
                <Link href="/">
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}
