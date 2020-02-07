import { IQuiz } from '../IQuiz'

export const ocpIntro1: IQuiz = {
  name: 'ocp-intro-1',
  question: 'В чём заключается суть принципа открытости-закрытости?',
  variants: [
    {
      text:
        'Проектировать модули так, чтобы их функциональность могла быть дополнена с помощью других модулей, если изменятся требования'
    },
    {
      text: 'Проектировать модули так, чтобы в идеале их код не требовалось менять при изменении требований'
    },
    {
      text:
        'Проектировать модули так, чтобы приходилось вводить как можно меньше новых сущностей при изменении требований',
      description: 'Наоборот, принцип предполагает, что любое изменение вносится через создание новых сущностей'
    },
    {
      text:
        'Проектировать модули так, чтобы они были связаны друг с другом через абстракции, а не конкретную реализацию'
    }
  ],
  meta: {
    correctAnswers: [0, 1, 3]
  }
}
