import axios from 'axios'

export async function fetchUserProfileData() {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_SERVER_ADDR + '/login/check',
    {
      withCredentials: true, // 쿠키를 포함시키기 위해 설정
    }
  )
  return data
}
