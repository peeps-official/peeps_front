'use clinet'
import type { NextPage } from 'next'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const MyInfo: NextPage = () => {
  const router = useRouter()

  const onGroupFrameClick = useCallback(() => {
    router.push('/profileChange')
  }, [router])

  return (
    <div className="w-[388px] flex flex-col gap-[11px_0px] min-w-[388px] max-w-full ">
      <div className="self-stretch bg-white rounded-8xs overflow-hidden flex py-[17px] pr-7 pl-2.5 gap-[10px] text-left text-lg text-black font-small-m shadow-box">
        <img
          className="h-[100px] w-[100px] relative rounded-8xs object-cover min-h-[100px] "
          src="/images/myprofile.png"
        />
        <div className="flex-1 flex flex-col gap-[5px_0px] min-w-[156px]">
          <div className="self-stretch flex flex-col gap-[6px_0px]">
            <div className="self-stretch flex items-center justify-between gap-[20px]">
              <div className="flex items-center gap-[0px_8px]">
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-bold font-inherit">
                  엄현준
                </h3>
                <div className="flex flex-col pt-0.5 px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative object-cover"
                    src="/images/hknu.png"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[0px_4px] text-3xs text-gray-30">
                <div className="flex gap-[3px]">
                  <div className="relative leading-[16px]">팔로워</div>
                  <div className="relative leading-[16px]">0</div>
                </div>
                <div className="flex gap-[3px]">
                  <div className="relative leading-[16px]">팔로잉</div>
                  <div className="relative leading-[16px]">0</div>
                </div>
              </div>
            </div>
            <div className="w-60 relative text-3xs leading-[16px] text-dark inline-block">
              {/* 프로필 소개글 */}
              <p className="m-0">{`CEO & Founder, CLASSUM | Forbes 30 under 30 Asia - We're hiring! careers.classum.com`}</p>
            </div>
          </div>
          <Button
            className="h-[26px] min-h-[30px] whitespace-nowrap cursor-pointer"
            variant="primary"
            size="sm"
            onClick={onGroupFrameClick}
          >
            프로필 변경
          </Button>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-white shadow-box flex flex-col items-center p-[17px] box-border gap-[10px] max-w-full">
        <div className="w-[388px] h-[132px] relative rounded-lg bg-white hidden max-w-full" />
        <div className="self-stretch flex items-end justify-between py-0 px-px gap-[20px] ">
          <b className="relative tracking-[-0.01em] leading-[24px] ">소개</b>
          <div className="relative w-12 h-5">
            <img
              className="absolute object-cover w-5 h-5 "
              src="/images/hknu.png"
            />
            <img
              className="absolute left-[28px] w-5 h-5 object-cover "
              src="/images/bitcoin.png"
            />
          </div>
        </div>
        <div className="w-[352px] relative text-xs leading-[16px] inline-block ">
          <p className="m-0">
            프랑스와 한국을 오가며 활동 중인 프리랜서 일러스트레이터. 일상을
            조각내어 초현실적으로 재조합하는 작업을 즐겨합니다.
          </p>
          <p className="m-0">광고 / 책표지 / 포스터 / 패키징</p>
          <p className="m-0">작업 문의 : leesolji.pro@gmail.com</p>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-white shadow-box flex flex-col pt-[17px] pb-6 pr-[26px] pl-[18px] box-border gap-[10px] max-w-full">
        <div className="w-[388px] h-[97px] relative rounded-lg bg-white shadow-box hidden max-w-full" />
        <b className="relative tracking-[-0.01em] leading-[24px] ">인증 목록</b>
        <div className="self-stretch flex gap-[0px_10px]  ">
          <img
            className="relative object-cover w-5 h-5"
            src="/images/hknu.png"
          />
          <img
            className="relative object-cover w-5 h-5"
            src="/images/bitcoin.png"
          />
          <img
            className="relative object-cover w-5 h-5"
            src="/images/instagram.png"
          />
          <img
            className="relative object-cover w-5 h-5"
            src="/images/HRDK.png"
          />
          <img
            className="relative object-cover w-5 h-5"
            src="/images/image-20@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-white shadow-box flex flex-col pt-[17px] px-[18px] pb-[26px] box-border gap-[10px] max-w-full">
        <div className="w-[388px]  relative rounded-lg bg-white hidden max-w-full" />
        <b className="relative tracking-[-0.01em] leading-[24px] ">NFT</b>
        <div className="w-[142px] h-[142px] flex-1 flex flex-wrap      ">
          <img
            className="relative object-cover w-full h-full"
            src="/images/image-21@2x.png"
          />
        </div>
      </div>
    </div>
  )
}

export default MyInfo
