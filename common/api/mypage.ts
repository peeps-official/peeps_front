import axios from 'axios'
import { axiosWithAuth } from './instance'

export async function fetchUserProfileData() {
  const { data } = await axiosWithAuth.get('/login/check')
  return data
}
