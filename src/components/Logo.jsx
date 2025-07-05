import { Righteous } from 'next/font/google'

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
})

export function Logo({ className, ...props }) {
  return (
    <div className={`flex items-baseline text-2xl ${className}`} {...props}>
      <span className={`${righteous.className} text-red-600`}>ERP</span>
      <span className="font-medium">rompt.lt</span>
    </div>
  )
}