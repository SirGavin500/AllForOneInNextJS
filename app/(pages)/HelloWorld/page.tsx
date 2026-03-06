"use client"

import Link from "next/link"
import { Button } from "flowbite-react"
import { useState } from "react"
import { getHello } from "@/app/utils/Service"

export default function Page(){

const[result,setResult]=useState("")

async function handleClick(){
const data = await getHello()
setResult(data)
}

return(

<div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 text-white">

<h1 className="text-5xl">Hello World</h1>

<Button onClick={handleClick}>Get Hello</Button>

<p className="text-xl">{result}</p>

<Button as={Link} href="/">Back Home</Button>

</div>

)

}