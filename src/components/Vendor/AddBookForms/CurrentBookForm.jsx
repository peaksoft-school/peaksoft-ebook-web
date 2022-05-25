import { TYPES_OF_BOOKS } from '../../../utils/constants/general'

export const CurrentBookForm = ({ type }) => {
   const renderCurrentForm = () => {
      switch (type) {
         case TYPES_OF_BOOKS.PAPER.type: {
            return <div>Бумажная</div>
         }
         case TYPES_OF_BOOKS.AUDIO.type: {
            return <div>Аудиокнига</div>
         }
         case TYPES_OF_BOOKS.ELECTRONIC.type: {
            return <div>Электронная книга</div>
         }
         default: {
            return <div>Default</div>
         }
      }
   }
   return renderCurrentForm()
}
