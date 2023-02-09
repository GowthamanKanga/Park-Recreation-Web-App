import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <div class="bg-gray-800 p-6 flex items-center">
                <Logo class="h-8 w-8 mr-2"/>
                <span class="text-white font-semibold text-xl mr-6">GBC - Park & Recreation</span>
                <div class="flex justify-between flex-grow">
                    <Navbar/>
                    <a href="#" class="inline-block items-center text-gray-100 text-sm  px-3 py-2 rounded hover:border-transparent hover:text-gray-100 hover:bg-gray-700">Log In</a>
                </div>
            </div>
        </>
    )
}

export default Header;