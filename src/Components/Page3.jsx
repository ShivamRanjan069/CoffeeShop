import React from 'react'
import frame from '../assets/open-2.webp'

const Page3 = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl  font-bold leadi sm:text-6xl">Open Everyday
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">What did the Brazilian coffee say to the Indonesian coffee? What’s Sumatra with you?
				 
			</p>
			
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src={frame} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Page3