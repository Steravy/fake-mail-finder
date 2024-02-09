/* 
    Created by Stefan Vitoria on 2/9/24
*/

import Link from "next/link";

export default function Header() {

    return (
        <header className="flex justify-between items-center p-4 z-10 fixed w-full bg-white">
            <div className="flex items-center space-x-4">
                {/*<Image src="/next.svg" alt="logo" width={48} height={48} />*/}
                <Link href='/'>
                    <h1 className="text-xl font-semibold">Fake Mail Finder</h1>
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}