import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  console.log("______________________________________________________");
  console.log("NextResponse", request.nextUrl);
  console.log("______________________________________________________");
  try {
    await delay(100);
    return NextResponse.json({});
  } catch (error) {
    console.error("*** [api/homepage] *** ", error);
    return NextResponse.json(
      { message: "Something unexpected happened" },
      { status: 500 }
    );
  }
}
