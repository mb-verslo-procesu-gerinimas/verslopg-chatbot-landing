import { Righteous } from 'next/font/google'

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
})

export function Logo({ className, ...props }) {
  return (
    <div className={`flex items-center text-2xl ${className}`} {...props}>
      <div
        className={`${righteous.className} rounded-md bg-red-600 pl-2 pr-0 py-1 text-white`}
      >
        ERP
      </div>
      <span className="ml-0 font-medium">rompt</span>
    </div>
  )
}