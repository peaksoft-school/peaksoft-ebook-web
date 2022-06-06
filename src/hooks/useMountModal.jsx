import { useEffect, useState } from 'react'

export const useMountModal = (isMounted, onUnmount, delay) => {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      let timeoutId

      if (isMounted && !isVisible) {
         setIsVisible(true)
         onUnmount()
      } else if (!isMounted && isVisible) {
         timeoutId = setTimeout(() => setIsVisible(false), delay)
      }

      return () => clearTimeout(timeoutId)
   }, [isVisible, isMounted, delay, onUnmount])

   return isVisible
}
