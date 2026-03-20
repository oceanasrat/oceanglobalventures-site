"use client"

import { useState } from "react"

export default function Contact() {

  const [form,setForm] = useState({
    name:"",
    company:"",
    website:"",
    email:"",
    message:""
  })

  async function submit(e:any){
    e.preventDefault()

    await fetch("/api/contact",{
      method:"POST",
      body:JSON.stringify(form)
    })

    alert("Partnership request submitted")
  }

  return (

    <main className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Brand Partnership Inquiry
        </h1>

        <form
          onSubmit={submit}
          className="flex flex-col gap-6"
        >

          <input
            placeholder="Contact Name"
            className="p-3 bg-gray-900 border border-gray-800"
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input
            placeholder="Company / Brand Name"
            className="p-3 bg-gray-900 border border-gray-800"
            onChange={(e)=>setForm({...form,company:e.target.value})}
          />

          <input
            placeholder="Brand Website"
            className="p-3 bg-gray-900 border border-gray-800"
            onChange={(e)=>setForm({...form,website:e.target.value})}
          />

          <input
            placeholder="Email Address"
            className="p-3 bg-gray-900 border border-gray-800"
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <textarea
            placeholder="Tell us about your brand"
            className="p-3 bg-gray-900 border border-gray-800"
            onChange={(e)=>setForm({...form,message:e.target.value})}
          />

          <button className="bg-yellow-500 text-black py-3 font-semibold">
            Submit Partnership Request
          </button>

        </form>

      </div>

    </main>
  )
}