export interface AnswerType {
  id: number
  answer: string
  isCorrect: boolean
}

export interface QuizType {
  id: number
  question: string
  answers: AnswerType[]
}
