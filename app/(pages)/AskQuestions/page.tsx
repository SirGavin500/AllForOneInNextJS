"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { askQuestion } from "@/app/utils/Service"

export default function Ask(){

const [question,setQuestion] = useState("")
const [answer,setAnswer] = useState("")

const handleAsk = async () => {
const result = await askQuestion(question)
setAnswer(result)
}

return(

<div className="flex flex-col items-center justify-center min-h-screen gap-6  bg-gray-900">

<h1 className="text-6xl">Ask Question</h1>

<TextInput className="w-72" placeholder="Ask something..." value={question} onChange={(e)=>setQuestion(e.target.value)} />

<div className="flex gap-4">
<Button onClick={handleAsk}>Ask</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-3xl">{answer}</p>

</div>

)
}