"use client";
import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import Link from "next/link";
import { guessEasy, guessHard, guessMedium } from "@/app/utils/Service";

export default function GuessIt() {
  const [easyGuess, setEasyGuess] = useState("");
  const [mediumGuess, setMediumGuess] = useState("");
  const [hardGuess, setHardGuess] = useState("");

  const [easyResult, setEasyResult] = useState("");
  const [mediumResult, setMediumResult] = useState("");
  const [hardResult, setHardResult] = useState("");

  const handleEasy = async () => {
    const res = await guessEasy(Number(easyGuess));
    setEasyResult(res);
  };

  const handleMedium = async () => {
    const res = await guessMedium(Number(mediumGuess));
    setMediumResult(res);
  };

  const handleHard = async () => {
    const res = await guessHard(Number(hardGuess));
    setHardResult(res);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-gray-900">
      <h1 className="text-6xl">Guess It</h1>

      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl">Easy (1-10)</h2>

        <TextInput
          className="w-72"
          placeholder="Enter number"
          value={easyGuess}
          onChange={(e) => setEasyGuess(e.target.value)}
        />

        <Button onClick={handleEasy}>Guess</Button>

        <p className="text-xl">{easyResult}</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl">Medium (1-50)</h2>

        <TextInput
          className="w-72"
          placeholder="Enter number"
          value={mediumGuess}
          onChange={(e) => setMediumGuess(e.target.value)}
        />

        <Button onClick={handleMedium}>Guess</Button>

        <p className="text-xl">{mediumResult}</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl">Hard (1-100)</h2>

        <TextInput
          className="w-72"
          placeholder="Enter number"
          value={hardGuess}
          onChange={(e) => setHardGuess(e.target.value)}
        />

        <Button onClick={handleHard}>Guess</Button>

        <p className="text-xl">{hardResult}</p>
      </div>

      <Link href="/">
        <Button color="gray">Back</Button>
      </Link>
    </div>
  );
}
