import React, { useState } from "react"
import { QuizType } from "../../types/quizType"
import questions from "../data/questions.json"
import Answer from "./answer"
import Link from "next/link"

export default function Survey() {
  const [count, setCount] = useState(0) // Nb of questions answered
  const [quiz, setquiz] = useState<QuizType>(questions[count]) // Current question
  const [selectedOption, setSelectedOption] = useState<number | null>(null) // Answer selected
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null) // Answer validation
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]) // Incorrect answers

  function handleSelectOption(id: number) {
    setSelectedOption(id)
  }

  function handleValidateAnswer(theAnswerId: number) {
    const isGoodAnswer = quiz.answers.find(
      (answer) => answer.id === theAnswerId
    )?.isCorrect

    if (isGoodAnswer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
      setIncorrectAnswers([...incorrectAnswers, theAnswerId])
    }
  }

  return (
    <>
      <div className="space-y-12">
        {count <= questions.length ? (
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl text-center">
                Question {quiz.id} / {questions.length} :
              </h2>
              <h2 className="text-2xl text-center italic">{quiz.question}</h2>
            </div>

            <div className="space-y-6">
              {quiz.answers.map((answer) => (
                <Answer
                  key={answer.id}
                  text={answer.answer}
                  id={answer.id}
                  selectedOption={selectedOption}
                  isCorrect={answer.isCorrect && isCorrect}
                  isIncorrect={incorrectAnswers.includes(answer.id)}
                  onClick={() => handleSelectOption(answer.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="text-center text-2xl">
              Bravo, vous avez terminé le quiz !
            </div>
            <Link href="/">Retour à l&apos;accueil</Link>
          </>
        )}

        {isCorrect !== true && (
          <div
            className={`w-max mx-auto p-4 text-center text-xl rounded-md transition-all duration-300 ease-in-out border-2 border-green-500 hover:bg-green-500 bg-transparent cursor-pointer ${
              selectedOption || selectedOption == 0 ? "block" : "hidden"
            }`}
            onClick={() => handleValidateAnswer(selectedOption)}>
            Valider ma réponse
          </div>
        )}

        {isCorrect === true ? (
          <div className="space-y-6">
            <div className="w-1/2 mx-auto text-center text-2xl text-green-500 bg-green-900/50 rounded-full">
              Bonne réponse !
            </div>
            <div
              className="flex justify-center items-center gap-4 w-max mx-auto p-4 text-xl rounded-md transition-all duration-300 ease-in-out border-2 border-blue-700 hover:bg-blue-500 bg-transparent cursor-pointer"
              onClick={() => {
                setCount(count + 1)
                setquiz(questions[count + 1])
                setSelectedOption(null)
                setIsCorrect(null)
                setIncorrectAnswers([])
              }}>
              Question suivante
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        ) : isCorrect === false ? (
          <div className=" flex flex-col w-1/2 mx-auto text-center text-2xl text-red-500 bg-red-900/50 rounded-full">
            <span>Mauvaise réponse !</span>
            <span>Le prochaine essai sera le bon 😉 !</span>
          </div>
        ) : null}
      </div>

      <div className="absolute top-10 left-10 flex items-center justify-center rounded-md p-3 border border-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
        <svg
          className="w-8 h-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
        <Link href="/">Retour à l&apos;accueil</Link>
      </div>
    </>
  )
}
