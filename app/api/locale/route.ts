import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const lang = searchParams.get('lang');

  const locale = lang === 'ru' ? 'ru' : 'en';

  const res = NextResponse.json({success: true, locale});

  res.cookies.set('locale', locale, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 год
  });

  return res;
}
