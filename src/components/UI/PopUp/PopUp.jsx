import styled from '@emotion/styled/macro'
import { PopUpBackdrop } from './PopUpBackdrop'

export const PopUp = ({ options, onCloseBackDrop, ...props }) => {
   return (
      <>
         <PopUpBackdrop onClose={onCloseBackDrop} />
         <MenuContainer {...props}>
            <StyledOptions {...props}>
               {options &&
                  options.map((option) => {
                     return (
                        <MenuItem
                           key={option.id}
                           onClick={() => {
                              option.action(option.value)
                           }}
                        >
                           {option.title}
                        </MenuItem>
                     )
                  })}
            </StyledOptions>
         </MenuContainer>
      </>
   )
}

const StyledOptions = styled.div`
   padding: ${({ padding }) => padding || ''};
`

const MenuItem = styled.div`
   padding: 10px 0px 10px 10px;
   background-color: white;
   border-bottom: 1px solid #d4d4d4;
   line-height: 20px;
   cursor: pointer;
   font-size: 14px;
   font-weight: 400;
   width: 100%;
   &:last-child {
      border-bottom: none;
   }
`
const MenuContainer = styled.div`
   animation: POPUP 0.05s;
   @keyframes POPUP {
      from {
         height: 0;
      }
      to {
         height: 100px;
      }
   }
   position: absolute;
   top: ${({ top }) => top || '50px'};
   right: ${({ right }) => right || '-5px'};
   width: ${({ width }) => width || '140px'};
   box-shadow: ${({ boxShadow }) =>
      boxShadow || '0px 4px 9px rgba(0, 0, 0, 0.1)'};
   padding: 5px 20px;
   min-width: 140px;
   display: flex;
   flex-direction: column;
   background-color: white;
   z-index: 99;
`
