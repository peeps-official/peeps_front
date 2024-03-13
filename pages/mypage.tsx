import MyInfo from "../components/myinfo";
import PostGroup from "../components/post-group";

export default function ProfileChange() {

  return (
    <div className="py-[18px]">
      <section className="mb-[-203px] mx-auto w-base flex flex-row items-start pb-3 justify-start box-border gap-[45px] max-w-full shrink-0 text-left text-base text-black font-small-m">
        <MyInfo />
        <div className="flex-1 flex flex-col items-start justify-start pt-1s box-border max-w-full ">
          <PostGroup />
        </div>
      </section>
    </div>
  );
};
