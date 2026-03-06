"use client"
import { useState } from "react"
import { Button, TextInput } from "flowbite-react"
import Link from "next/link"
import { madLib } from "@/app/utils/Service"

export default function MadLib(){

const [noun,setNoun] = useState("")
const [adjective,setAdjective] = useState("")
const [verb,setVerb] = useState("")
const [story,setStory] = useState("")

const handleMadLib = async () => {
const result = await madLib(noun,adjective,verb)
setStory(result)
}

return(

<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-900">

<h1 className="text-6xl">MadLib</h1>

<TextInput className="w-72" placeholder="Enter a noun" value={noun} onChange={(e)=>setNoun(e.target.value)} />

<TextInput className="w-72" placeholder="Enter an adjective" value={adjective} onChange={(e)=>setAdjective(e.target.value)} />

<TextInput className="w-72" placeholder="Enter a verb" value={verb} onChange={(e)=>setVerb(e.target.value)} />

<div className="flex gap-4">
<Button onClick={handleMadLib}>Generate</Button>
<Link href="/"><Button color="gray">Back</Button></Link>
</div>

<p className="text-2xl text-center max-w-xl">{story}</p>

</div>

)
}