import React from 'react'
import { Meteors } from "@/components/ui/meteors";

export default function page() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h1>
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
        
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="mt-1 p-3 block w-full shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              className="mt-1 p-3 block w-full shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              className="mt-1 p-3 block w-full shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <Meteors number={20} />
        </form>
      </div>
    </div>
  );
}
