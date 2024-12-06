"use client"
import React, { useState } from 'react';
import HumanBodyNavbar from "../components/Navbar";
import Wreck from "../components/Wreck";
import Waste from "../components/Waste"
import FishDead from "../components/FishDead"

export default function app() {

  return (
    <>
    <div className="flex justify-center items-center mt-10 bg-white/40 w-max mx-auto p-2 rounded-lg hover:scale-105 hover:rotate-3 transform transition-all duration-300 ease-in-out">
      <h1
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 
          drop-shadow-lg font-outline-4"
      >
        One Body, One Ocean
      </h1>
  </div>

      <HumanBodyNavbar />
      <Wreck />
      <Waste />
      <FishDead />
    </>
  )
}