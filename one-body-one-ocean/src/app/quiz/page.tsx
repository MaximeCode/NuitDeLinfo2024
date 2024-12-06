"use client"

// src/app/quiz/page.tsx
import Survey from "../survey/page"

export default function Quiz() {
  return (
    <div className="container w-1/2 mx-auto pt-24">
      <h1 className="text-center text-4xl">Quiz</h1>

      <div className="mt-8">
        <Survey />
      </div>
    </div>
  )
}
