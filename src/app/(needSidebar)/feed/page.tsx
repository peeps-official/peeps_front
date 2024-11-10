import CommentInput from '../[user_seq]/_components/Tabs/Feed/CommentInput'
import DataWrapperForFeed from './_components/DataWrapperForFeed'
import UserFeed from './_components/UserFeed'

export default function page() {
  return (
    <DataWrapperForFeed>
      <div className="mx-auto min-w-[420px] max-w-[640px] p-1">
        <CommentInput />
        <UserFeed />
      </div>
    </DataWrapperForFeed>
  )
}
