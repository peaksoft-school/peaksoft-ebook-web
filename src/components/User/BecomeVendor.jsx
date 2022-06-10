import React from 'react'
import styled from '@emotion/styled'
import { Logo } from '../UI/Logo/Logo'
import { Button } from '../UI/Buttons/Button'
import { ReactComponent as PortalIcon } from '../../assets/icons/portal.svg'
import { ReactComponent as BecomeVendorImage } from '../../assets/icons/become-vendor-image.svg'
import { ReactComponent as BecomeVendorIcon } from '../../assets/icons/knowledge-cuate 1.svg'

export const BecomeVendor = () => {
   return (
      <div>
         <div>
            <StyledLogo />
            <Button>Личный кабинет</Button>
         </div>
         <div>
            <PortalIcon />
            <BecomeVendorImage />
            <Button>Стать продавцом</Button>
            <BecomeVendorIcon />
         </div>
         <div>
            <p>Как начать продавать на eBook?</p>
            <div>
               <p>
                  В целом, конечно, экономическая повестка сегодняшнего дня
                  прекрасно подходит для реализации переосмысления
                  внешнеэкономических политик.
               </p>
            </div>
            <div>
               <p>
                  В целом, конечно, экономическая повестка сегодняшнего дня
                  прекрасно подходит для реализации переосмысления
                  внешнеэкономических политик.
               </p>
            </div>
            <div>
               <p>
                  В целом, конечно, экономическая повестка сегодняшнего дня
                  прекрасно подходит для реализации переосмысления
                  внешнеэкономических политик.
               </p>
            </div>
         </div>
      </div>
   )
}

const StyledLogo = styled(Logo)`
   margin-right: 30px;
`
