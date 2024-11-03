import BadgeProfile from './_components/BadgeProfile'
import DataWrapperForClubPage from './_components/DataWrapperForClubPage'

type BadgeDetailPageParams = {
  params: {
    badgeName: string
  }
}

export default function BadgeDetailPage({ params }: BadgeDetailPageParams) {
  return (
    <DataWrapperForClubPage badgeName={params.badgeName}>
      <div className="flex flex-1 flex-col items-center justify-start pt-3">
        <div className="mx-[auto] flex w-full max-w-[1316px] flex-col gap-[17px] px-[23px] py-[20px]">
          <BadgeProfile />
          {/* <Tabs /> */}
        </div>
      </div>
    </DataWrapperForClubPage>
  )
}
