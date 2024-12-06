"use client"

import React from "react"
// import { useState } from "react"

interface AnswerProps {
  text: string
  id: number
  selectedOption: number | null
  isCorrect: boolean | null
  isIncorrect: boolean
  onClick: () => void
}

export default function Answer({
  text,
  id,
  selectedOption,
  isCorrect,
  isIncorrect,
  onClick,
}: AnswerProps) {
  const isSelected = selectedOption === id
  return (
    <div
      onClick={onClick}
      className={`p-4 text-center text-xl rounded-lg border-4 transition-all duration-300 ease-in-out cursor-pointer
      ${isSelected ? "font-bold" : ""}
      ${isCorrect ? "border-green-500" : ""}
      ${isIncorrect ? "border-red-500" : ""}
      ${isSelected && !isCorrect && !isIncorrect ? "border-sky-500" : ""}
      ${
        !isSelected &&
        !isIncorrect &&
        !isCorrect &&
        "bg-transparent border-transparent"
      }
      ${!isSelected && "hover:border-sky-500"}`}>
      {text}
    </div>
  )
}
