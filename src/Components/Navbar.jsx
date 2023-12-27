import React from 'react'
import logo from "../assets/chailogo.png"
const Navbar = () => {
  return (
	<header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex">
			<a rel="noopener noreferrer"  aria-label="Back to homepage" className="flex items-center p-2">
					<img src={logo} alt="" className='w-52' />
			</a>
			<ul className="items-stretch hidden space-x-3 lg:flex">
				<li className="flex">
					<a rel="noopener noreferrer" className="flex items-center px-4 -mb-1 dark:border-transparent">Home</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400">About Us</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 dark:border-transparent">Menu</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer"  className="flex items-center px-4 -mb-1  dark:border-transparent">Blog</a>
				</li>
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold rounded dark:bg-transparent border-2 dark:text-gray-900">Get Started</button>
		</div>
		<button className="p-4 lg:hidden">
			
		</button>
	</div>
</header>
  )
}

export default Navbar