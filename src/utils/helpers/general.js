export const getTimeAsString = (seconds) => {
   const min = Math.floor(seconds / 60)
   const stringSec = String(seconds)
   const sec = Math.floor(seconds / 60 - min <= 0.15)
      ? `0${stringSec[stringSec.length - 1]}`
      : `${seconds - 60 * min}`
   return `${min} : ${sec}`
}
