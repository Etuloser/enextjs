'use client'
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-row justify-center">
        <Link href={"/forms"}>Forms</Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link href={"/flexboxAndGrid"}>Flexbox&Grid</Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link href={"/layouts"}>Layouts</Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link href={"/position"}>Position</Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link href={"/spacing"}>Spacing</Link>
      </div>
    </main>
  )
}