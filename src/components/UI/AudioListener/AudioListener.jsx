import styled from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { ReactComponent as PauseIcon } from '../../../assets/icons/pause.svg'
import { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg'
import { getTimeAsString } from '../../../utils/helpers/general'
import Audio from './Audio'

export const AudioListener = ({ audio }) => {
   const [wave, setWave] = useState(null)

   const [audioDuration, setAudioDuration] = useState(0)

   const [timeOfAudio, setTimeOfAudio] = useState(0)

   const [isAudioPlaying, setIsAudioPlaying] = useState(false)

   const audioRef = useRef()

   const waveformRef = useRef()

   const play = () => {
      setIsAudioPlaying(true)
      wave.on('audioprocess', () => {
         setTimeOfAudio(Math.floor(audioDuration - wave.getCurrentTime()))
      })
      return wave.play()
   }

   const pause = () => {
      setIsAudioPlaying(false)
      return wave.pause()
   }

   useEffect(() => {
      const waveform = WaveSurfer.create({
         container: '#waveform',
         barWidth: 1,
         barRadius: 1,
         barGap: 4,
         barMinHeight: 1,
         scrollParent: false,
         backend: 'WebAudio',
         height: 32,
         progressColor: 'rgba(255, 76, 0, 1)',
         responsive: true,
         waveColor: 'rgba(150, 150, 150, 1)',
      })
      setWave(waveform)
      waveform.load(audioRef.current)
      waveform.on('ready', () => {
         setAudioDuration(Math.floor(waveform.getDuration()))
         setTimeOfAudio(Math.floor(waveform.getDuration()))
      })
      return () => waveform.destroy()
   }, [audioRef])

   const timeUp = useCallback(() => {
      if (wave && timeOfAudio === 0) {
         wave.stop()
         setTimeOfAudio(audioDuration)
         setIsAudioPlaying(false)
      }
   }, [timeOfAudio, wave])

   useEffect(() => {
      timeUp()
   }, [timeUp])

   return (
      <AudioListenerContainer>
         {isAudioPlaying ? (
            <PauseIcon onClick={pause} />
         ) : (
            <PlayIcon onClick={play} />
         )}
         <div id="waveform" ref={waveformRef} />
         <span>{getTimeAsString(timeOfAudio)}</span>
         <Audio src={audio} ref={audioRef} />
      </AudioListenerContainer>
   )
}

const AudioListenerContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: fit-content;
   & svg {
      &:first-of-type {
         cursor: pointer;
      }
   }
   div {
      width: 185px;
      margin: 0 16px;
   }
   span {
      font-size: 14px;
      line-height: 130%;
      font-family: 'Open Sans';
      color: #969696;
      width: max-content;
   }
`
