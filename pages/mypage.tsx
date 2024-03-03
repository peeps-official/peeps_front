import MyInfo from "../components/myinfo";
import PostGroup from "../components/post-group";

export default function ProfileChange() {

  return (
    <div>
      <section className="mb-[-203px] w-[1036px] flex flex-row items-start py-3 justify-start pl-[190px] box-border gap-[45px] max-w-full shrink-0 text-left text-base text-black font-small-m mq675:gap-[49px]">

        <MyInfo />
        
        <div className="flex-1 flex flex-col items-start justify-start pt-1s box-border max-w-full ">
          <PostGroup />
        </div>
        
      </section>
    </div>
  );
};
