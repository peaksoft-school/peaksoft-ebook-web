import React, { forwardRef } from 'react'

const Audio = forwardRef(({ src }, ref) => {
   return (
      <audio ref={ref} src={src}>
         <source type="audio/*" />
         <track kind="captions" />
      </audio>
   )
})

export default Audio
