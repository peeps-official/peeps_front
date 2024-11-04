export const naverUrl =
  'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
  process.env.NEXT_PUBLIC_NAVER_ID +
  '&state=STATE_STRING&redirect_uri=' +
  process.env.NEXT_PUBLIC_NAVER_CALLBACK +
  '&state=1234'

export const naverImgUrl =
  'https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg'

export const kakaoUrl =
  'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' +
  process.env.NEXT_PUBLIC_KAKAO_ID +
  '&redirect_uri=' +
  process.env.NEXT_PUBLIC_KAKAO_CALLBACK

export const kakaoImgUrl = 'https://file.alphasquare.co.kr/media/images/stock_logo/kr/035720.png'

export const seoul42Url =
  'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-60d4b63d5d3caa6e41d2caafa563d5f9d278c8310735c747683de90d6b639972&redirect_uri=http%3A%2F%2Flocalhost%3A9090%2Flogin%2F42&response_type=code'

export const googleUrl =
  'https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=' +
  process.env.NEXT_PUBLIC_SERVER_ADDR +
  '/login/google' +
  '&response_type=code&client_id=' +
  process.env.NEXT_PUBLIC_GOOGLE_ID +
  '&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'

export const googleImgUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMRfPG0jDCgRXhVxPy6STfjlV-c7UrD9tAQ&s'

export const youtubeUrl =
  'https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=' +
  process.env.NEXT_PUBLIC_SERVER_ADDR +
  '/login/youtube' +
  '&response_type=code&client_id=' +
  process.env.NEXT_PUBLIC_GOOGLE_ID +
  '&scope=https://www.googleapis.com/auth/youtube.readonly&access_type=offline'

export const youtubeImgUrl =
  'https://img.freepik.com/premium-vector/round-youtube-logo-isolated-white-background_469489-983.jpg'
