import styled from '@emotion/styled/macro'

export const PopUp = ({ options, ...props }) => {
   return (
      <MenuContainer {...props}>
         {options &&
            options.map((option) => (
               <MenuItem key={option.id} onClick={() => option.action()}>
                  {option.title}
               </MenuItem>
            ))}
      </MenuContainer>
   )
}

const MenuItem = styled.p`
   padding: 10px 70px 10px 10px;
   background-color: white;
   border-bottom: 1px solid #c4c4c4;
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
   position: absolute;
   top: ${({ top }) => top || '50px'};
   right: ${({ right }) => right || '-5px'};
   width: ${({ width }) => width || '140px'};
   box-shadow: 0 5px 10px 3px rgba(226, 219, 219, 0.5);
   padding: 5px 20px;
   min-width: 140px;
   display: flex;
   flex-direction: column;
   background-color: white;
`
