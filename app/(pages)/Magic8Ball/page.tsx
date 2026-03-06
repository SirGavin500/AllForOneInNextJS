"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { magic8 } from "@/app/utils/Service"

export default function Magic8Ball(){

const [question,setQuestion] = useState("")
const [answer,setAnswer] = useState("")

const handleAsk = async () => {
const res = await magic8(question)
setAnswer(res)
}

return(
<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">Magic 8 Ball</h1>

<TextInput className="w-72" placeholder="Ask your question" value={question} onChange={(e)=>setQuestion(e.target.value)} />

<div className="flex gap-4">
<Button onClick={handleAsk}>Ask</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-3xl text-center max-w-md">{answer}</p>

</div>
)
}