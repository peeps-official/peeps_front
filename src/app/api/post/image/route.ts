import aws from 'aws-sdk';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const fileName = searchParams.get('file');

  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'ap-northeast-2',
    signatureVersion: 'v4',
  });

  const s3 = new aws.S3();
  const data = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: { key: fileName },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 10485760], //파일용량 10MB 까지 제한
    ],
  });

  return Response.json(data);
}
