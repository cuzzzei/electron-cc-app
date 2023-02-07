import { createAvatar } from '@dicebear/core'
import { useEffect, useState } from 'react'
import { shapes } from '@dicebear/collection'

interface AvatarProps {
   seed: string
   className?: string
   style?: React.CSSProperties
}

export const Avatar = ({ seed, className, style }: AvatarProps) => {
   const [src, setSrc] = useState('')

   useEffect(() => {
      const avatar = createAvatar(shapes, {
         seed,
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
