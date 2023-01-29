interface AvatarProps {
   seed: string
   className?: string
   style?: React.CSSProperties
}

export const Avatar = ({ seed, className, style }: AvatarProps) => {
   const apiURL = 'https://api.dicebear.com/5.x/thumbs/svg?seed='

   return (
      <img
         src={`${apiURL}${seed}`}
         alt='avatar'
         className={className}
         style={style}
      />
   )
}
