"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { restaurantPicker } from "@/app/utils/Service"

export default function Restaurant(){

const [category,setCategory] = useState("")
const [result,setResult] = useState("")

const handlePick = async () => {
const res = await restaurantPicker(category)
setResult(res)
}

return(
<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">Restaurant Picker</h1>

<TextInput
className="w-72"
placeholder="chinese / mexican / italian"
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<div className="flex gap-4">
<Button onClick={handlePick}>Pick Restaurant</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-3xl text-center max-w-md">{result}</p>

</div>
)
}