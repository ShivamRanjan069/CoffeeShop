import React from 'react'
import pizza from '../assets/open-1.webp'
const Page2 = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={pizza} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">The Best Day Start Here
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Did you hear about the guy who put World War II figures in his coffee every morning? He heard that the best part of waking up was soldiers in your cup.

			</p>
    
		</div>
	</div>
</section>
  )
}

export default Page2