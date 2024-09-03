'use client'

import BadgeItemContainer from './BadgeItemContainer'

const dummy = [
  {
    bdg_id: 0,
    name: '한경국립대학교',
    image:
      'https://i.namu.wiki/i/rlymHGzGkXgtwPzlj9jmLbyqGFcykXgKxesKDZ6bBtdVi9dsunCmoQzcSo7Yib6T7Y4rCbzxcZOZmsw-c89Fng.svg',
    auth: {
      id: 0,
      email: {
        isAuth: true,
        description: '학교 이메일 인증 받았습니다!',
        authDay: '2024-09-02T05:46:13.656Z',
        detail: [
          {
            title: '인증 아이디',
            content: 'zzp1318',
            isPublic: false,
          },
          {
            title: '메일 주소',
            content: '@hknu.ac.kr',
            isPublic: true,
          },
        ],
      },
      login: {
        isAuth: false,
      },
      file: {
        isAuth: true,
        file_url:
          'https://specter.s3.amazonaws.com/media/education/evidence/2024/08/14/24_7_%E1%84%8C%E1%85%A2%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%86%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A5.jpeg',
        description: '',
        authDay: '2024-08-14T05:46:13.656Z',
        detail: [
          {
            title: '이름',
            content: '엄현준',
            isPublic: true,
          },
          {
            title: '생년월일',
            content: '2000-01-01',
            isPublic: false,
          },
          {
            title: '학과',
            content: '컴퓨터공학과',
            isPublic: true,
          },
          {
            title: '학번',
            content: '201911111',
            isPublic: true,
          },
          {
            title: '학적상태',
            content: '재학',
            isPublic: true,
          },
          {
            title: '학년',
            content: '2학년',
            isPublic: true,
          },
          {
            title: '발급일',
            content: '2024-08-14T05:46:13.656Z',
            isPublic: true,
          },
        ],
      },
      blockchain: {
        isAuth: false,
      },
    },
  },
]

export default function Badge() {
  return (
    <div className="kr-bold-14 flex flex-col gap-[2rem]">
      <div>
        <div className="mb-[1rem]">뱃지 관리</div>
        <div className="flex flex-col gap-[1rem]">
          <BadgeItemContainer item={dummy[0]} />
        </div>
      </div>
    </div>
  )
}
