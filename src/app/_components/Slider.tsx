'use client'

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-white">
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-600">믿을 수 없는 사람들을 위한</h1>
        <h1 className="text-5xl font-bold leading-[180%] text-black">인증 기반 소셜 네트워크 서비스</h1>
        <p className="mt-6 text-lg text-gray-500">인증을 통해 나를 나타내고, 인증된 다른 사람들과 연결될 수 있어요.</p>
      </div>
    </section>
  )
}
