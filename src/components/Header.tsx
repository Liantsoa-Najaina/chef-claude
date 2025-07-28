import type { JSX } from 'react'
import chefClaudeIcon from '../images/ChefClaudeIcon.png' 

export default function Header(): JSX.Element {
    return (
        <header className='flex items-center justify-center  shadow-md h-16 bg-white gap-2.5'>
            <img src={chefClaudeIcon} alt="Chef Claude Icon" className='w-10 aspect-auto'/>
            <h1 className='text-center font-sans text-3xl font-normal text-gray-800'>Chef Claude</h1>
        </header>
    )
}