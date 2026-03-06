"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { greaterOrLess } from "@/app/utils/Service"

export default function GreaterOrLess(){

const [num1,setNum1] = useState("")
const [num2,setNum2] = useState("")
const [result,setResult] = useState("")

const handleCompare = async () => {
const res = await greaterOrLess(Number(num1),Number(num2))
setResult(res)
}

return(

<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">Greater Or Less</h1>

<TextInput
className="w-72"
placeholder="Enter first number"
value={num1}
onChange={(e)=>setNum1(e.target.value)}
/>

<TextInput
className="w-72"
placeholder="Enter second number"
value={num2}
onChange={(e)=>setNum2(e.target.value)}
/>

<div className="flex gap-4">
<Button onClick={handleCompare}>Compare</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-3xl text-center max-w-md">{result}</p>

</div>

)
}