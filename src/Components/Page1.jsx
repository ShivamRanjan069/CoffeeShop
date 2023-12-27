import React from 'react'

const Page1 = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-orange-400" >10</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Shoes
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-orange-400">06</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Year Exprience
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-orange-400">169+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
           Coffe
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-orange-400">1669</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
           Review
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page1