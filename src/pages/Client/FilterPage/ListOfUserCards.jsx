import styled from '@emotion/styled'
import React from 'react'
import { UserBookCard } from '../../../components/UI/Card/UserBookCard'
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/black-arrow-down-icon.svg'
import vector from '../../../assets/icons/vector.svg'

export const ListOfUserCards = () => {
   return (
      <ListOfUserCardsContainer>
         <SortContainer>
            <BreadCrambsContainer>
               <BreadCrambs>
                  <p>Зарубежная литература</p>
                  <img src={vector} alt="x" />
               </BreadCrambs>
               <BreadCrambs>
                  <p>Русский язык</p>
                  <img src={vector} alt="x" />
               </BreadCrambs>
            </BreadCrambsContainer>
            <OptionContainer>
               <p>Сортировать</p>
               <ArrowDownIcon />
            </OptionContainer>
         </SortContainer>
         <CardContainer>
            <UserBookCard
               imageURL=" https://s3-alpha-sig.figma.com/img/66ac/38f9/629144e6ce4042ef47b5cc9c75a8714b?Expires=1655683200&Signature=aslgS3yAggXR2Mj5Z~aiQ3I68XApL3lgGwgLXi0HTrsf3r7t6j~7zBN~0Q7a0jEr-tTRYXKNIlb7E1IBScuD2MzClHXWQynRbFEzoWahKBeR7BRzDm7NxDKqjL~sENpaAK8vddXCUkPYhf-0DBnJYbTy~CH7FwRM~3wxv9O-uq4A4M6GcDNE8QGqmwbKgapc3G~3L~IxAzRBC3ZtRUq2mFn0IHJF0oKDrJuYoKQhcVn164G1XTYhXulSh9lZhh7OSOHtHc17qEFK2IJWiBlGvGIX15nay0warXFmD4x-vdJf1MjvIius8Mc0~e0HuzDEgrfkJ-XE2kt0OPy8aXSnCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="Гарри Поттер и тайная комната "
               author="Роулинг Джоан Кэтлин"
               price="220"
               promocode="22"
               discount="11"
            />

            <UserBookCard
               imageURL=" https://s3-alpha-sig.figma.com/img/5485/c0c9/8a3c093891f4501e8ae42eb81b716745?Expires=1656288000&Signature=KFVE8-m1J9YfalHqIe2vzZiqJuv4MVpuFzHu0YkAr0H1UlriTu7cV2RssKv0A90Uj1gAFU2d67-tVqtxMm-~mj7F1Gd8jVvnCeaArIzS~J1ww0N7P0dbv9ik8I3T-pnA4bbKw6qM9DtcyUICOsOJ3vBREcdne~fwctDRlSGPOQ2A42jBJt-4oaeqaOkm4tj1sTWEtWTf1hoQc2sJmjU5CMUMzC3Uh66O12DkTxhIvRTDtSrMWspfJsgzI0DgeTuuW4l03JWKSXpGvMCOk5QDZUdMFO9pO~Dhp6dmcnSt3c19M2bX1G4kcOSLRFSCI7V5j4~3O92rN8S8MHvzEWnupw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="История Книги "
               author="Э. Эггер, А. Бахтияров"
               price="340"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/67740462-andrey-bulychev-eger-imperatricy-krym.jpg"
               bookId="2"
               name=" Егерь Императрицы. Крым "
               author="Андрей Булычев"
               price="720"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://s3-alpha-sig.figma.com/img/5832/f113/509dad26f63c503c63d2317244d87089?Expires=1656288000&Signature=L3JJwUa1cokyIM61vnr3d9zLgivmGNARf18s6s3RCgtoVAXVjH9YjRjkS00g4HeWxTPBtzSHR0YC3yqOdjnxdXS9fGbe0hPpKmGETsjR7LJH7ORKEmqwBTYzjNUbCgSbpP6FAaM5WK6scM8QsMQKtVxRFm7xYVmD2i2kzDyVmSwo7I0A6hGOjQ9MWOPJLoqneANUZ7uYruuqdT2aQaO047-q9Q6ctj5w2vg~xRkZEz4bzfVpqXANaq3~xCPcA6XnPTFm5pwgeyOfe7VZLNtMwgMfuTRSDP8tTGd052st~5Td1zbIIQFZrLHUauLN6987EtP9ZArkzoci7Dm6-69ptw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="Тонкое искусство пофигизма "
               author="Роулинг Джоан Кэтлин"
               price="760"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://s3-alpha-sig.figma.com/img/4a07/b8f7/16293e7eca4ced7e99fbcb7b44ad071f?Expires=1656288000&Signature=EnodpqnPF1~CIxU~rytH3WjXeqa9stwrw4dev8ALEiIlqMGC9iJ5K1nJPFw~irYKS4Kg7KhXuM6u-vkIBmSw6nzGwH6Zvs9smavA0lgAnpvFdtwL4fM8qzVhw8hZRCcfw-4X5z9qv9xy3cDFSFSxBg7KlRkZnAoDI02qXiordcuf6TNzU9OBEWqEdOQh~8AUPusA1UaD1TTXk4YloWfVA7CSq90kJo-tLA0YaQ3TbChmvcBB3V0SNuhuteMbDk3t2FY9UUFjHAr1MKgMy1P7mSjYrv~xFWedEp2MVlURthlbaGMtJXIbm-LN032ANBEIMwpr-6Y4T910~Qw1yKpQ4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="Женщина, у который есть план"
               author="Роулинг Джоан Кэтлин"
               price="920"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://s3-alpha-sig.figma.com/img/9e67/98c6/5c6d15dd6fcd2ba6d137cf6116c35f25?Expires=1656288000&Signature=WvyTNOJituXqyYkRCpke-S83xEbsgbZQDbJQg4CzXaJJQ8XJbInJon5-5R-OY01xFoBntdiFA3Ne2vfxiKqS7yfZ-ksXBQNJH80njb2hTNMIkVkILbN8EOB8eRczsyRnNetvroUxoNY-DSf3GgHB8ieRZYfTozMFk9Aom4dCHauML4fDnuYnc2~kLe~Lgrw7GEqsSjGNMPZuh~T-Cy5oyt~NrzD8Obdm7i3xrE9oQvRjl1LFpJ-7sGCqzneXU4QhbF3FzsLoYoSbayQQr8DQyglavNdgBMJJf5I1lyr~YUc9xrdLhqIDnBpqLIr0EF9vRIvqaa3EFFlxWeX3eY4p4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="Зеленый свет "
               author="Мэттью Макконахи"
               price="230"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_415/25280333-mihail-labkovskiy-hochu-i-budu-prinyat-sebya-polubit-zhizn-i-stat-schastlivym.jpg"
               bookId="2"
               name="Хочу и буду: Принять себя, полюбить жизнь и стать счастливым"
               author="Михаил Лабковский"
               price="500"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://s3-alpha-sig.figma.com/img/1e96/90b8/c05c4c533378c50bf3e6ad7824b1940b?Expires=1656288000&Signature=AqWWgncUwoQrP2rLnSPDD0vqFN1N77aw9PboQ2~K05XX~JolXBQP1CaNI0uQm4u29MBtU06WumD7M1l0SINTOFLwGXcGE~4VFwNWNkngLz-V3yxdW4scCb~KWiyjRNvs5N1QvFbA~NawD~abiywH5YpL~lb9h~32iX1nnBntrkclqQ~dMe18wn14XVmOBddiLGlyPmtOaDwtgwsogI3Bmu6So06c~nkARzZUjtPTpviyyaGcgIECyRUyYnNJ7Jcj9o2jqvlJ54BFc8Au1cqK2sr6uZqqSNyto2TYGeDq~Pmu44fiffNssw37qjE-hHhuN371lEnifdzRtT8AnfyQmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA "
               bookId="2"
               name="НИ СЫ "
               author="Джен Синсеро"
               price="980"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL=" https://s3-alpha-sig.figma.com/img/a3c5/14f1/79600b54881553e0f25203dc337ab423?Expires=1656288000&Signature=YY1EKvxuZVFDiT046iV19UZa2SnOwNx7QfPsk~1v~MEYBblDz4JHFyn4C736SeB-Auo3tuNckmU6piChSd-Vm75AfZt4fi4srD-LS8BhR8MkU0NbgSbuIirqPctK-Phib6d~P73o~~FspmAxNwT08D6UMb79kTvMtscyFaD9jVv7dy87M5FXnbodsspHhuVH7fCq07F8gJskahrBLpBmQJTKdKVEfDBkRzbXYW6Cy97XebeF2S2ceM-7117NagjFHVwIrZFE-eDIbj5A1xhP43mdP-tVc3Pl2lKfjkV5UKvw4om7D2cEEXzZtmirSIMVjnyU5vlYLglao9uAWq0bnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="Земля обетованная "
               author="Эрих Мария Ремарк"
               price="1220"
               promocode="22"
               discount="11"
            />
            <UserBookCard
               imageURL="https://s3-alpha-sig.figma.com/img/e29e/8ffc/e5725482e9b1192aa5381721fac45e0d?Expires=1656288000&Signature=ciAZfds~9qMeKe8ERSA4A2~m4wspHSFis3Fbc40btZy5ERuh4RMBrVeB4pYl4uTplKBlpEzF9OCHBl6i7WPtIjSP8yCT9ASbuP6G8jgsg78GPH4VfVVJL5kSlM~6xogpKiugVa-ddJlSx3~Mu9j4P6WgS~XNwJockvPBJEXlxOAifdnVeLS6Gyo0G3m~gxWzmqa0LgfiynaFUA9esMfvY~J3nqiZ3QNlzn95-IhZrzPM0CuxFuZsVnoPa7kQM0ZEZI1odUNMBm0QfZ8I04S~UmGfQNdBMEVjZRN18M4vsVegIcPs34PaHHe7dMVC-RofXah7KNFlZSFVyOodXC5RCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               bookId="2"
               name="Империя млечного пути "
               author="Книга 3. Пилигрим."
               price="500"
               promocode="22"
               discount="11"
            />

            <UserBookCard
               imageURL=" https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/63028197-fredrik-bakman-trevozhnye-ludi.jpg"
               bookId="2"
               name="Тревожные люди"
               author="Фредрик Бакман"
               price="900"
               promocode="22"
               discount="11"
            />
         </CardContainer>
      </ListOfUserCardsContainer>
   )
}
const ListOfUserCardsContainer = styled.div`
   margin: 60px 0;
`
const SortContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1120px;
   padding: 20px 0 0 10px;
`
const CardContainer = styled.div`
   display: grid;
   width: 1150px;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   margin: 35px;
`
const BreadCrambs = styled.div`
   display: flex;
   background: #f8f8f8;
   padding: 10px 24px;
   border: 1px solid #c4c4c4;
   align-items: center;
   img {
      width: 9px;
      height: 9px;
      margin-left: 15px;
   }
`
const BreadCrambsContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   padding-left: 25px;
`
const OptionContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      margin-right: 12px;
   }
`
