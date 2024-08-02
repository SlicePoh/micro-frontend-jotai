import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="z-30 fixed bg-black/20 w-full flex  items-center justify-between px-20 py-4">
            <Link to="/" className="self-center text-2xl font-semibold font-mono whitespace-nowrap dark:text-white">Animation Showcase</Link>


            <ul className="text-xl gap-5 font-semibold flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/modal" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Modal
                    </Link>
                </li>
                {/* <li>
                    <Link to="/loader" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Loader
                    </Link>
                </li>
                <li>
                    <Link to="/parallax" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Parallax
                    </Link>
                </li> */}
                <li>
                    <Link to="/text" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Text Reveal
                    </Link>
                </li>
                {/* <li>
                    <Link to="/skeleton" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Skeleton
                    </Link>
                </li> */}
            </ul>
        </div>

    )
}
