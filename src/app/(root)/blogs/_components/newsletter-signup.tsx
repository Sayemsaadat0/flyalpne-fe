'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const NewsletterSignup = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        // console.log('Submitted email:', email)
        // Reset the form
        setEmail('')
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">
                Email address
            </label>
            <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-700 focus:ring-white"
                >
                    Notify me
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </form>
    )
}

export default NewsletterSignup ; 