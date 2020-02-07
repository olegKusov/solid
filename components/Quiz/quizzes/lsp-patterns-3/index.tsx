import { IQuiz } from '../IQuiz'
import Variant3 from './variant-3.mdx'

export const lspPatterns3: IQuiz = {
  name: 'lsp-patterns-3',
  question: 'В чём польза приёма с извлечением суперкласса в примере выше?',
  variants: [
    {
      text: 'Предотвращает дублирование, инкапсулируя повторяющуюся функциональность в себе'
    },
    {
      text: 'Помогает спроектировать более точную иерархию сущностей, основываясь на предметной области',
      description:
        'При проектировании системы иерархия — не самоцель, лишь побочный инструмент. Хорошая модель описывает поведение сущностей и их отношения друг с другом'
    },
    {
      text: <Variant3 />
    }
  ],
  meta: {
    correctAnswers: [0, 2]
  }
}
