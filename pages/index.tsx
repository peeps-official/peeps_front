import TagCommunity from "../components/tag-community";
import PostGroup from "../components/post-group";
import HotFeed from "../components/hot-feed";

export default function Main() {

  return (
    <div className="flex flex-col items-center py-3">
      <div className="mt-[-187px] mb-[-187px] flex flex-row items-start justify-start pt-[190px] pr-[21px] pl-5 box-border gap-[19px] max-w-full shrink-0">
        <TagCommunity />
        <PostGroup />
        <HotFeed />
      </div>
    </div>
  );
};
