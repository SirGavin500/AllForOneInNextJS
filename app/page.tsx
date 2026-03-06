"use client"

import Link from "next/link"
import { Button } from "flowbite-react"

export default function Home(){

return(

<div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-900 text-white">

<h1 className="text-5xl">All For One in Next.Js with flowbite</h1>

<div className="flex flex-wrap justify-center gap-4">

<Button as={Link} href="/HelloWorld">Hello World</Button>
<Button as={Link} href="/AddTwoNumbers">Add Numbers</Button>
<Button as={Link} href="/AskQuestions">Ask Question</Button>
<Button as={Link} href="/Madlib">MadLib</Button>
<Button as={Link} href="/OddOrEven">Odd Or Even</Button>
<Button as={Link} href="/ReverseItAlpha">Reverse Alpha</Button>
<Button as={Link} href="/ReverseItNumber">Reverse Number</Button>
<Button as={Link} href="/Magic8Ball">Magic 8 Ball</Button>
<Button as={Link} href="/RestaurantPicker">Restaurant Picker</Button>
<Button as={Link} href="/GreaterOrLess">Greater Or Less</Button>
<Button as={Link} href="GuessIt">Guess It</Button>

</div>

</div>

)

}