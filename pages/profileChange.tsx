import MyInfo from "../components/myinfo";
import { useCallback } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function ProfileChange() {

  const router = useRouter();

  const onGroupFrameClick = useCallback(() => {
    router.push("/mypage");
  }, [router]);

  return (
    <div>
      <section className="mb-[-203px] w-[1036px] flex flex-row items-start py-3 justify-start pl-[190px] box-border gap-[45px] max-w-full shrink-0 text-left text-base text-black font-small-m">

        <MyInfo />
        
        <div className="box-border flex flex-col items-start justify-start flex-1 max-w-full pt-1s ">
          <p>프로필 변경</p>
          <div>
            <Button
              className="h-[26px] min-h-[30px] whitespace-nowrap cursor-pointer"
              variant="primary"
              size="sm"
              onClick={onGroupFrameClick}
            >
              변경 취소
            </Button>
          </div>
        </div>
        
      </section>
      
    </div>
  );
};
