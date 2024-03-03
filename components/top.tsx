import { useCallback, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";

export default function ProfileChange() {
    const router = useRouter();

    const onProfileClick = useCallback(() => {
        router.push("/mypage");
    }, [router]);

    const onLogoClick = useCallback(() => {
        router.push("/");
    }, [router]);
    
    // 검색창 기능 //
    const [search, setSearch] = useState('')

    const clickSearch = async() => {
        try {
            if (search) {
                console.log(search)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSearchValue = useCallback((e : ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }, [search])
    ////

    let headerLine = "self-stretch flex flex-col items-center justify-start box-border relative gap-[9px] shrink-0 ";

    return (
        <div className={headerLine}>
            <div className="w-full h-full absolute right-[-0.9px] bg-white" />
            <div className="w-[1144px] items-start justify-start pl-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px]">
                    <div className="w-[130px] flex flex-col items-start justify-start pt-1 box-border">
                        <img className="relative object-cover cursor-pointer"
                            onClick={onLogoClick} src="/logo.png" />
                    </div>
                    <div className="w-[548px] flex flex-row items-center justify-start pt-1.5 pb-[5px] pr-[22px] pl-2 box-border relative max-w-full z-[1] text-smi text-silver font-small-m">
                        <div className="h-full w-full absolute !m-[0] top-[0.5px] right-[0px] bottom-[-0.5px] left-[0px] rounded-3xs bg-whitesmoke-300" />
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_6px] max-w-full z-[1]">
                            <img
                                className="h-[22px] w-[22px] relative min-h-[22px] object-cover cursor-pointer"
                                onClick={clickSearch}
                                src="/search.svg"
                            />
                            <div className="flex-1 relative tracking-[-0.01em] leading-[20px] font-medium inline-block max-w-[calc(100%_-_28px)]">
                            <input type='text' placeholder='커뮤니티 검색해보기' className="w-100 outline-none bg-transparent"
                                onChange={handleSearchValue}/>
                            </div>
                        </div>
                    </div>
                    {/* 오른쪽 */}
                    <div className="flex flex-row items-center gap-[10px] z-[1]">
                        <img className="h-10 w-10 relative min-h-[40px]"
                            src="/message@2x.png"
                        />
                        <img className="h-10 w-10 relative min-h-[40px]"
                            src="/alarmselected3.svg"
                        />
                        <img
                            className="h-8 w-8 relative rounded-[50%] object-cover cursor-pointer"
                            src="/myprofile.png"
                            onClick={onProfileClick}
                        />
                    </div>
                </div>
            </div>
            <img className={headerLine} src="/line-1.svg" />
        </div>
    );
}
