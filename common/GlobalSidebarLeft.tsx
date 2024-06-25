
export default function GlobalSidebarLeft() {
  return (
    <div className="fixed h-screen flex flex-col items-center justify-start bg-white text-left text-mini text-dimgray-100 font-kr">
        {/* 본인 프로필 및 닉네임 */}
        <div className="flex flex-row items-center justify-start pt-1 px-[15px] pb-2.5">
            <div className="flex flex-col items-center justify-start gap-[4px]">
                <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                    <img
                        className="h-11 w-11 relative rounded-31xl object-cover"
                        alt="profile"
                        src="/images/profile.svg"
                    />
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-1">
                    <b className="relative leading-[16px] font-bold inline-block min-w-[28px]">
                        닉네임
                    </b>
                </div>
            </div>
        </div>
        {/* 구분선 */}
        <div className="flex flex-row items-center justify-start py-0 px-[15px]">
            <div className="h-[2px] w-12 relative bg-gray-10" />
        </div>
        {/* ALL BOX */}
        <div className="flex flex-row items-center justify-start py-0 px-[25px]">
            <div className="flex flex-col items-center justify-start py-2.5 px-0 gap-[5px]">
                <img
                    className="w-7 h-7 relative overflow-hidden shrink-0"
                    alt=""
                    src="/images/box.svg"
                />
                <b className="h-5 relative leading-[16px] inline-block">All</b>
            </div>
        </div>
        {/* 구분선 */}
        <div className="flex flex-row items-center justify-start py-0 px-[15px]">
            <div className="h-[2px] w-12 relative bg-gray-10" />
        </div>
        {/* 팔로우한 사람 */}
        <div className="flex flex-row items-center justify-start py-0 px-[15px]">
            <div className="overflow-hidden flex flex-col items-center justify-start pt-[11px] px-0 pb-4 gap-[8px]">
                <div className="flex flex-row items-center justify-start py-0 px-1">
                    <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[16px] font-black inline-block min-w-[28px]">
                        팔로우
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-31xl overflow-hidden shrink-0 flex flex-row items-center justify-start p-0.5 box-border">
                        <img
                            className="h-11 w-11 relative rounded-31xl object-cover"
                            alt="profile"
                            src="/images/profile.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
