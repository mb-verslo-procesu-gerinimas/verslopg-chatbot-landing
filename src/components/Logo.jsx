import Image from 'next/image'
import { Roboto } from 'next/font/google'
import iconSvg from '@/images/icon.svg'

const textLeft = Roboto({
  subsets: ['latin'],
  weight: '700',
  style: 'normal'
})

const textRight = Roboto({
  subsets: ['latin'],
  weight: '500',
  style: 'normal'
})

export function Logo({ className, ...props }) {
  return (
    <div className={`flex items-center text-3xl ${className}`} {...props}>
      <Image src={iconSvg} alt="erprompt logo" className="mr-1 text-red-600" />
      <span
        className={`${textLeft.className} text-red-600`}
      >
        erp
      </span>
      <span className={`${textRight.className}`}>rompt</span>
    </div>
  )
}