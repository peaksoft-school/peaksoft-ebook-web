import React from 'react'
import styled from '@emotion/styled'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as PortalIcon } from '../../assets/icons/portal.svg'
import { ReactComponent as BecomeVendorImage } from '../../assets/icons/become-vendor-image.svg'
import { ReactComponent as BecomeVendorIcon } from '../../assets/icons/knowledge-cuate 1.svg'
import FirstPhoto from '../../assets/images/first-photo.jpg'
import SecontPhoto from '../../assets/images/second-photo.jpg'
import ThirdPhoto from '../../assets/images/third-photo.jpg'
import FourthPhoto from '../../assets/images/fourth-photo.jpg'
import FivePhoto from '../../assets/images/five.jpg'
import SixPhoto from '../../assets/images/six.jpg'
import { logout } from '../../store/auth-slice'
import { Button } from '../../components/UI/Buttons/Button'
import { UserFooter } from '../../components/User/UserFooter'
import { Logo } from '../../components/UI/Logo/Logo'
import { SIGN_IN_QUERY_PARAMS } from '../../utils/constants/general'

export const BecomeVendor = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [, setSearchParams] = useSearchParams()
   const navigateToSignIn = () => {
      setSearchParams({ [SIGN_IN_QUERY_PARAMS]: true })
   }
   const navigateToProfile = () => {
      return isAuthorized ? navigate('/client-profile') : navigateToSignIn()
   }
   const navigateHandler = () => {
      dispatch(logout(navigateToSignIn))
   }

   return (
      <BecomeVendorContainer>
         <MainContent>
            <BecomeVendorHeader>
               <StyledLogo />
               <Button onClick={navigateToProfile}>Личный кабинет</Button>
            </BecomeVendorHeader>
            <ImageContent>
               <PortalText>
                  <PortalIcon />
                  <p>Начните продавать свои книги на eBook</p>
                  <Button onClick={navigateHandler}>Стать продавцом</Button>
               </PortalText>
               <BecomeVendorImage />
               <GirlImage>
                  <BecomeVendorIcon />
               </GirlImage>
            </ImageContent>
            <QuetionContent>
               <Quetion>Как начать продавать на eBook?</Quetion>
               <div>
                  <ConditionsContainerWrapper>
                     <ConditionsContainer>
                        <img src={FirstPhoto} alt="" />
                        <p>
                           Первый способ требует максимальных вложений как со
                           стороны времени, так и денег, но при этом он является
                           и наиболее выгодным. Он заключается в следующем: вы
                           создаете страницу, используя собственное доменное имя
                           и на ней выставляете на продажу вашу eBook.
                        </p>
                     </ConditionsContainer>
                     <ConditionsContainer>
                        <img src={SecontPhoto} alt="" />
                        <p>
                           Это потребует от вас умения создавать веб-сайты или
                           желания учиться новому. На вашем месте я бы не
                           слишком пугался отсутствия умения создавать сайты,
                           потому что для продажи eBook ничего сложного от вас
                           не потребуется.
                        </p>
                     </ConditionsContainer>
                     <ConditionsContainer>
                        <img src={ThirdPhoto} alt="" />
                        <p>
                           Второй способ связан с первым. Он заключается в
                           продаже вашей eBook через партнерскую сеть, например,
                           ClickBank. Этот сервис также требует от вас создания
                           простого веб-сайта.За вас это сделают другие люди.
                        </p>
                     </ConditionsContainer>
                  </ConditionsContainerWrapper>
                  <Quetion>Условия</Quetion>
                  <ConditionsContainerWrapper>
                     <ConditionsContainer>
                        <img src={FourthPhoto} alt="" />
                        <p>
                           Они сами заплатят необходимые на рекламу деньги, за
                           что в итоге в случае продажи вашей eBook получат
                           комиссию. Правда, эта комиссия очень высока, порой
                           она может доходить до 75%
                        </p>
                     </ConditionsContainer>
                     <ConditionsContainer>
                        <img src={FivePhoto} alt="" />
                        <p>
                           Последний и наиболее простой из способов заключается
                           в продаже вашей eBook одному из больших eBook-сайтов.
                           Это очень просто. Все, что от вас потребуется —
                           отправить им вашу eBook.
                        </p>
                     </ConditionsContainer>
                     <ConditionsContainer>
                        <img src={SixPhoto} alt="" />
                        <p>
                           Последний и наиболее простой из способов заключается
                           в продаже вашей eBook одному из больших eBook-сайтов.
                           Это очень просто. Все, что от вас потребуется —
                           отправить им вашу eBook.
                        </p>
                     </ConditionsContainer>
                  </ConditionsContainerWrapper>
               </div>
            </QuetionContent>
            <SubmitButton>
               <Button onClick={navigateHandler}>Стать продавцом</Button>
            </SubmitButton>
         </MainContent>
         <UserFooter />
      </BecomeVendorContainer>
   )
}
const BecomeVendorContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
`
const MainContent = styled.div`
   width: 100%;
   padding: 0 80px;
`
const BecomeVendorHeader = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: #ffffff;
   button {
      width: 180px;
      height: 45px;
      border: 1px solid #c4c4c4;
      color: #969696;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      margin-top: 30px;
      background: #ffffff;
   }
`
const ImageContent = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 50px;
   align-items: center;
`
const PortalText = styled.div`
   p {
      padding: 20px 10px 100px 0;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
   }
   button {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;
      color: #222222;
      background: #f8df00;
   }
`
const GirlImage = styled.div`
   position: absolute;
   right: 250px;
   top: 230px;
`

const QuetionContent = styled.div``
const Quetion = styled.div`
   padding: 150px 10px 50px 0;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 130%;
`
const StyledLogo = styled(Logo)`
   margin-right: 30px;
`
const ConditionsContainerWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
`
const ConditionsContainer = styled.div`
   width: 403px;
   height: 309px;

   img {
      width: 413px;
      height: 203px;
      object-fit: cover;
      object-position: center;
   }
   p {
      margin-top: 30px;
      color: #000000;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.1em;
   }
`
const SubmitButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 200px 0px 100px 0;
   button {
      width: 258px;
      height: 51px;
      right: 561px;
      bottom: 344px;
      background: #f8df00;
      color: #000000;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
   }
`
