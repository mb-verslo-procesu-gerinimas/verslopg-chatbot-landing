import { Righteous } from 'next/font/google'

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
})

export function Logo({ className, ...props }) {
  return (
    <div
      className={`flex items-baseline rounded-md bg-red-600 px-2 py-1 text-2xl text-white ${className}`}
      {...props}
    >
      <span className={`${righteous.className}`}>ERP</span>
      <span className="font-medium">rompt.lt</span>
    </div>
  )
}
