"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { oddOrEven } from "@/app/utils/Service"

export default function OddOrEven(){

const [number,setNumber] = useState("")
const [result,setResult] = useState("")

const handleCheck = async () => {
const res = await oddOrEven(Number(number))
setResult(res)
}

return(

<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">Odd Or Even</h1>

<TextInput className="w-72" placeholder="Enter a number" value={number} onChange={(e)=>setNumber(e.target.value)} />

<div className="flex gap-4">
<Button onClick={handleCheck}>Check</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-3xl">{result}</p>

</div>

)
}