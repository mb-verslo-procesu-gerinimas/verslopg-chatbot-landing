import { Righteous } from 'next/font/google'

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
})

export function Logo({ className, ...props }) {
  return (
    <div className={`flex items-center text-2xl ${className}`} {...props}>
      <div
        className={`${righteous.className} rounded-md bg-red-600 px-2 py-1 text-white`}
      >
        ER
      </div>
      <span className="ml-2 font-medium">Prompt.lt</span>
    </div>
  )
}