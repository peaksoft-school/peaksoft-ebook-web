import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGenres } from '../../../../store/vendor-slice'
import { ReactComponent as ArrowDrop } from '../../../../assets/icons/arrow_drop.svg'
import { PopUpBackdrop } from '../../../UI/PopUp/PopUpBackdrop'

export const SelectGenreDropdown = ({
   onSelectGenre,
   selectedGenre,
   onChange,
}) => {
   const { genresList } = useSelector((state) => state.vendor.genres)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllGenres())
   }, [])
   const [isVisible, setIsVisible] = useState(false)

   const changeIsVisibleOptions = () => {
      setIsVisible((isVisible) => !isVisible)
   }
   const changeOptionHandler = (option) => {
      onSelectGenre(option)
      changeIsVisibleOptions()
      onChange(option.name)
   }
   return (
      <SelectGenreDropdownContainer>
         <SelectedGenreContainer onClick={changeIsVisibleOptions}>
            {selectedGenre.rusName ? (
               <SelectedGenre isActive>{selectedGenre.rusName}</SelectedGenre>
            ) : (
               <SelectedGenre>Литература, роман, стихи...</SelectedGenre>
            )}
            <ArrowDrop />
         </SelectedGenreContainer>
         {isVisible && (
            <>
               <PopUpBackdrop onClose={() => setIsVisible(false)} />
               <OptionsContainer>
                  {genresList.map((genre) => (
                     <OptionContainer
                        onClick={() => changeOptionHandler(genre)}
                        key={genre.id}
                     >
                        <Option>{genre.rusName}</Option>
                        <Line />
                     </OptionContainer>
                  ))}
               </OptionsContainer>
            </>
         )}
      </SelectGenreDropdownContainer>
   )
}

const SelectGenreDropdownContainer = styled.div`
   width: 100%;
   font-family: 'Open Sans';
   position: relative;
`

const SelectedGenreContainer = styled.div`
   background-color: #f8f8f8;
   padding: 10px 18px;
   font-size: 16px;
   border: 1px solid #c4c4c4;
   display: flex;
   align-items: center;
   svg {
      cursor: pointer;
   }
`
const SelectedGenre = styled.p`
   margin: 0;
   text-align: start;
   color: ${({ isActive }) => (isActive ? '#232323' : '#969696')};
   width: 100%;
`
const OptionsContainer = styled.div`
   position: absolute;
   top: 110%;
   width: 100%;
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   border: 1px solid #c4c4c4;
   max-height: 250px;
   overflow-y: scroll;
   z-index: 99;
   &::-webkit-scrollbar {
      background-color: transparent;
      width: 0.3rem;
      border-radius: 10rem;
   }
   &::-webkit-scrollbar-thumb {
      border: 4px solid #c4c4c4;
      border-radius: 5px;
      transform: rotate(90deg);
   }
   &::-webkit-scrollbar-thumb:hover {
      border: 4px solid #bdbdbd;
   }
`
const OptionContainer = styled.div`
   display: flex;
   flex-direction: column;
`
const Option = styled.div`
   padding: 10px 18px;
   font-size: 16px;
   &:hover {
      background-color: #f8f8f8;
      cursor: pointer;
      color: #232323;
   }
`

const Line = styled.div`
   height: 1px;
   background-color: #f8f8f8;
   width: 100%;
   padding: 0 18px;
`
