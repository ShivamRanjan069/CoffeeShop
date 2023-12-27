import React from 'react'
import contact from '../assets/contact.webp'
const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-green-200 text-gray-800">
	<div className="flex flex-col justify-between">
		<img src={contact} alt="" />
	</div>
	<form novalidate="" className="space-y-6">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded bg-gray-100" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-orange-600 text-gray-50">Send Message</button>
	</form>
</div>
  )
}

export default Contact