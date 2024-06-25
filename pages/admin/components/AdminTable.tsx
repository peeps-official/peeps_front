import { MoveHorizontalIcon } from '@/components/icon/icon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { UserData, tableHead } from '../tableState'
import { RecoilState, useRecoilState } from 'recoil'
import { Fragment } from 'react'

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
