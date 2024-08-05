import { UserData } from '../../state/tableState'
import { RecoilState, useRecoilState } from 'recoil'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/common/assets/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/assets/ui/table'

interface AdminTableTitleProps {
  title: string
  description: string
}

export function AdminTableTitle({ title, description }: AdminTableTitleProps) {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  )
}

interface AdminTableWrapperProps {
  recoilState: RecoilState<UserData[]>
}

export const tableHead: (keyof UserData)[] = [
  'id',
  'nickname',
  'profileImage',
  'backgroundImage',
  'info',
  'mobile',
  'name',
  'birthday',
  'birthyear',
  'boards',
]

export function AdminTable({ recoilState }: AdminTableWrapperProps) {
  const [recoilData, setRecoilData] = useRecoilState(recoilState)

  return (
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {recoilData.map((data) => (
            <TableRow key={data.id}>
              {tableHead.map((head) => (
                <TableCell key={head}>{data[head]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  )
}
