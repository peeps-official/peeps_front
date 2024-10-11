'use client';

import NextImg from '@/src/common/utils/NextImg';

export default function CategorySection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">어떤 일을 하든, PEEPS와 함께</h2>
  
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* 각 카테고리 항목 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <NextImg alt="Authenticate" src="/images/icons/Auth.png" styles="w-12 h-12" />
              <h3 className="mt-4 text-xl font-semibold">인증</h3>
              <p className="mt-2 text-gray-600">나를 인증하세요.</p>
            </div>
  
            <div className="p-6 bg-white rounded-lg shadow-md">
              <NextImg alt="Circle" src="/images/icons/Cicle.png" styles="w-12 h-12" />
              <h3 className="mt-4 text-xl font-semibold">써클</h3>
              <p className="mt-2 text-gray-600">인증 키워드를 중심으로 사람들과의 모임을 만드세요.</p>
            </div>
  
            <div className="p-6 bg-white rounded-lg shadow-md">
              <NextImg alt="Chat" src="/images/icons/chat.png" styles="w-12 h-12" />
              <h3 className="mt-4 text-xl font-semibold">채팅</h3>
              <p className="mt-2 text-gray-600">실시간 채팅과 함께 친구들과 대화하세요.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  