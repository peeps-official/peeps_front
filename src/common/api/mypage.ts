import axios from 'axios'
import { axiosWithAuth } from './instance'
import { UserProfile_T } from '../types/user'

export async function fetchUserProfileData() {
  const { data } = await axiosWithAuth.get<UserProfile_T>('/login/check')

  return data
}
