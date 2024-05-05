import { WebClient } from '@slack/web-api';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const token = process.env.SLACK_SECRET;
  const conversationId = '#books';
  const data = await req.formData();
  const value: any = data.get('mail');
  const web = new WebClient(token);
  console.log(value);
  try {
    const result = await web.chat.postMessage({
      channel: '#books',
      text: 'Ding Dong',
      blocks: [
        { type: 'divider' },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `Someone Signed Up ${value}`,
          },
        },
      ],
    });
    console.log(
      `Successfully send message ${result.ts} in conversation ${conversationId}`
    );
    return NextResponse.json({
      done: 'yes',
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}
