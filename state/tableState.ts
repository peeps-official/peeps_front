import { atom } from 'recoil'

/**
 * key = react-query와 recoil 공통 key
 * url = fetch될 데이터의 url
 * atom, fetch될 data type, tableHead 등 테이블과 관련된 상태를 관리하는 파일
 */

export const adminDatakey: string = 'adminDataKey'

export const userDataUrl: string = 'http://localhost:9090/user/admin'

export const uerData = atom<Array<UserData>>({
  key: adminDatakey,
  default: [
    {
      id: '',
      nickname: '',
      profileImage: null,
      backgroundImage: null,
      info: null,
      mobile: '',
      name: '',
      birthday: '',
      birthyear: '',
      boards: [],
    },
  ],
})

export interface UserData {
  id: string
  nickname: string
  profileImage: string | null
  backgroundImage: string | null
  info: string | null
  mobile: string
  name: string
  birthday: string
  birthyear: string
  boards: any[]
}

export const tableHead: (keyof UserData)[] = [
  'id',
  'nickname',
  'profileImage',
  'backgroundImage',
  'info',
  'mobile',
  'name',
  'birthday',
  'birthyear',
  'boards',
]
