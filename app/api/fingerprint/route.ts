import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Ambil IP dari header (prioritas x-forwarded-for jika ada proxy)
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
             request.headers.get('x-real-ip') || 
             'unknown'; // Fallback jika tidak ada

  // Ambil data dari header standar saja
  const userAgent = request.headers.get('user-agent') || '';
  const acceptLanguage = request.headers.get('accept-language') || '';

  // Buat fingerprint sederhana dengan hash dari data
  const fingerprintData = `${userAgent}-${acceptLanguage}`;
  const fingerprint = Buffer.from(fingerprintData).toString('base64'); // Hash sederhana

  return NextResponse.json({ ip, fingerprint });
}