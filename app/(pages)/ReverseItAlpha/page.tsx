"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { reverseAlpha } from "@/app/utils/Service"

export default function ReverseAlpha(){

const [text,setText] = useState("")
const [result,setResult] = useState("")

const handleReverse = async () => {
const res = await reverseAlpha(text)
setResult(res)
}

return(
<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">Reverse It (Alpha)</h1>

<TextInput className="w-72" placeholder="Enter text" value={text} onChange={(e)=>setText(e.target.value)} />
    

<div className="flex gap-4">
<Button onClick={handleReverse}>Reverse</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-3xl">{result}</p>

</div>
)
}