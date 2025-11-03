import { NextResponse } from 'next/server';

export async function GET() {
  const jobs = [
    { id: 1, status: 'running' },
    { id: 2, status: 'success' },
  ];
  
  return NextResponse.json(jobs);
}
