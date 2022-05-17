import styled from '@emotion/styled/macro'

export const MeatballsPopUp = ({ options, ...props }) => {
   return (
      <MenuContainer {...props}>
         {options &&
            options.map((option) => (
               <MenuItem key={option.title} onClick={option.action}>
                  {option.icon}
                  <span>{option.title}</span>
               </MenuItem>
            ))}
      </MenuContainer>
   )
}

const MenuItem = styled.p`
   padding: 10px 5px;
   display: flex;
   justify-content: space-between;
   background-color: white;
   border-bottom: 1px solid #c4c4c4;
   line-height: 20px;
   font-size: 14px;
   font-weight: 400;
   width: 100%;
   cursor: pointer;
   &:last-child {
      border-bottom: none;
   }
   span {
      width: 100%;
      padding-left: 10px;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: #232323;
   }
`
const MenuContainer = styled.div`
   position: absolute;
   top: ${({ isRejected }) => (isRejected ? '53px' : '36px')};
   right: ${({ isRejected }) => (isRejected ? '24px' : '6px')};
   width: ${({ width }) => width || '183px'};
   height: fit-content;
   padding: 10px 20px;
   min-width: 140px;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   background-color: white;
`
