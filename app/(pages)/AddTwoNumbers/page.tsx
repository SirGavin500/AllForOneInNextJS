"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { addNumbers } from "@/app/utils/Service"

export default function AddTwoNumbers(){

const [num1,setNum1] = useState("")
const [num2,setNum2] = useState("")
const [answer,setAnswer] = useState("")

const handleAdd = async () => {
const result = await addNumbers(Number(num1),Number(num2))
setAnswer(result)
}

return(
<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">Add Two Numbers</h1>

<div className="flex gap-4">
<TextInput placeholder="First Number" value={num1} onChange={(e)=>setNum1(e.target.value)} />
<TextInput placeholder="Second Number" value={num2} onChange={(e)=>setNum2(e.target.value)} />
</div>

<div className="flex gap-4">
<Button onClick={handleAdd}>Calculate</Button>
<Link href="/">
<Button color="gray">Back</Button>
</Link>
</div>

<p className="text-3xl">{answer}</p>

</div>
)
}