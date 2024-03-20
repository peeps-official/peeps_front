import MyInfo from '../components/myinfo'
import PostGroup from '../components/post-group'

export default function ProfileChange() {
  return (
    <div className="w-full py-[18px]">
      <section className="mb-[-203px] mx-auto flex flex-row justify-center items-start pb-3 justify-start box-border gap-[45px] shrink-0 text-left text-base text-black font-small-m">
        <MyInfo />
        <div className="flex flex-col items-start justify-start pt-1s box-border ">
          <PostGroup />
        </div>
      </section>
    </div>
  )
}
