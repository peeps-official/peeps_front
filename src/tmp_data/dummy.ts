import { PopupProfilePage_T, UserProfile_T } from '../common/types/user'

export const badgeData = {}

export const popUpData: PopupProfilePage_T = {
  profile: {
    user_name: '김민우',
    profileMessage: '입시 & 교육 컨텐츠 크리에이터',
    profile_img: '/images/dummy/minu_profile.png',
    mainBadge: {
      id: '1',
      name: '유튜브',
      image: '/images/dummy/badge_Youtube.png',
      content: '유튜브 크리에이터',
    },
    phone: '010-1234-5678',
    email: 'ks8553v@gmail.com',
    url: 'www.instagram.com/p/CpCs-VZy1Li/',
    addr: '경기도 안성시 야앙동 한경대학교',
  },

  badges: [
    {
      id: '1',
      image: '/images/dummy/badge_Youtube.png',
      name: '유튜브',
      content: '입시 & 교육 컨텐츠 크리에이터',
      verifiedUserCount: 1000,
      followingCount: 100,
    },
    {
      id: '2',
      image: '/images/dummy/badge_Youtube.png',
      name: '유튜브',
      content: '입시 & 교육 컨텐츠 크리에이터',
      verifiedUserCount: 1000,
      followingCount: 100,
    },
    {
      id: '3',
      image: '/images/dummy/badge_Youtube.png',
      name: '유튜브',
      content: '입시 & 교육 컨텐츠 크리에이터',
      verifiedUserCount: 1000,
      followingCount: 100,
    },
    {
      id: '4',
      image: '/images/dummy/badge_Youtube.png',
      name: '유튜브',
      content: '입시 & 교육 컨텐츠 크리에이터',
      verifiedUserCount: 1000,
      followingCount: 100,
    },
    {
      id: '5',
      image: '/images/dummy/badge_Youtube.png',
      name: '유튜브',
      content: '입시 & 교육 컨텐츠 크리에이터',
      verifiedUserCount: 1000,
      followingCount: 100,
    },
  ],
  educate: [
    {
      dateStart: '2021',
      title: '한국 외국어 대학교 부속 용인 외국어 고등학교',
      subEx: ['- 독일어과 / 졸업'],
    },
    {
      dateStart: '2022',
      dateEnd: '2023',
      title: '한경대학교',
      subEx: ['- 컴퓨터공학과'],
    },
  ],
  career: [
    { dateStart: '2021', title: '한경대학교', subEx: ['컴퓨터공학과'] },
    {
      dateStart: '2022',
      dateEnd: '2023',
      title: '유튜브 크리에이터',
      subEx: ['- 미미미누 120만 팔로워', '- 미미미미미누 110만 팔로워'],
    },
  ],
}

export const mypageData: UserProfile_T = {
  user_seq: '1',
  user_id: 'mi3nu',
  user_nickname: '미미미누',
  user_bg_img: '/images/dummy/profilebg.png',
  user_profile_img: '/images/dummy/mimi.jpg',
  profileMessage: '안녕하세요, 미미미누입니다!',
  follower: [{ nickname: '미미미누', user_id: 'mi3nu' }],
  badge: [
    {
      id: '1',
      name: '고려대학교',
      image:
        'data:image/png;base64,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',
      content: '고려대학교 이메일 인증 뱃지',
    },
  ],
}
