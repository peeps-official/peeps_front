'use client'

import NextImg from '@/src/common/utils/NextImg'

export default function CategorySection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 leading-[140%]">
        <h2 className="text-center text-3xl font-bold text-gray-800">PEEPS와 함께, 믿을 수 있는 만남</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            {/* <NextImg alt="Authenticate" src="/images/icons/Auth.png" styles="w-12 h-12" /> */}
            <h3 className="mt-4 text-xl font-semibold">다양한 인증 방법</h3>
            <p className="mt-2 text-gray-600">이메일, 로그인, 서류, 블록체인 다양한 방법으로 인증할 수 있어요</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            {/* <NextImg alt="Circle" src="/images/icons/Cicle.png" styles="w-12 h-12" /> */}
            <h3 className="mt-4 text-xl font-semibold">민감 정보 숨기기</h3>
            <p className="mt-2 text-gray-600">
              인증 후에는 뱃지가 생성돼요. 뱃지를 통해서 인증 정보를 나타낼 수 있고, 민감한 정보는 숨길 수 있어요.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            {/* <NextImg alt="Chat" src="/images/icons/chat.png" styles="w-12 h-12" /> */}
            <h3 className="mt-4 text-xl font-semibold">연결되는 새로운 방법, 써클</h3>
            <p className="mt-2 text-gray-600">
              뱃지를 중심으로 써클이 생성돼요. 상대에 대한 의심없이, 동일한 뱃지를 가진 사람들끼리 자유롭게 이야기할 수
              있어요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
