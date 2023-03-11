import { createAvatar } from '@dicebear/core'
import { useEffect, useState } from 'react'
import { initials } from '@dicebear/collection'

interface AvatarProps {
   seed: string
   className?: string
   style?: React.CSSProperties
}

const colors = [
   'b6e3f4',
   'c6f6d5',
   'fbb6ce',
   'FED7D7',
   'c0aede',
   'd1d4f9',
   'ffd5dc',
   'ffdfbf',
]

function hash(str: string): number {
   let value = 0

   for (var i = 0; i < str.length; i++) {
      const v = str.charCodeAt(i)
      value += v
   }

   return value % colors.length
}

export const Avatar = ({ seed, className = '', style }: AvatarProps) => {
   const [src, setSrc] = useState('')

   useEffect(() => {
      const avatar = createAvatar(initials, {
         seed,
         scale: 75,
         backgroundColor: [colors[hash(seed)]],
      })
      avatar.toDataUri().then(setSrc)
   }, [seed])

   if (!src) return null

   return (
      <img
         src={src}
         alt='avatar'
         className={`${className}`}
         style={style}
      />
   )
}
