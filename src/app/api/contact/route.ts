import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    console.log("New partnership request:", body)

    return NextResponse.json({
      success: true,
      message: "Inquiry received",
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    )
  }
}