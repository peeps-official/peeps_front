import React, { Fragment } from 'react'
import { Table } from './Table'
import NextImg from '@/src/common/utils/NextImg'
import Image from 'next/image'

interface AdminTableProps {
  title: string
  des: string
  data: Array<{ [key: string]: any }>
}

export default function AdminTable({ title, des, data }: AdminTableProps) {
  if (data.length === 0) {
    return <p>No data available</p>
  }

  const keys = Object.keys(data[0])

  return (
    <>
      <Table.Title title={title} description={des} />
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <thead className="bg-gray-50">
          <tr className="flex w-full">
            {keys.map((key) => (
              <th
                key={key}
                className="flex-1 px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 truncate "
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, i) => (
            <tr key={i} className="flex w-full hover:bg-[#cad6eb]">
              {keys.map((key) => (
                <td
                  key={key}
                  className="flex-1 px-2 py-4 overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  <div className="truncate">{item[key]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

// const tableDataList = [
//   {
//     title: '유저 테이블',
//     descripton: '가입한 유저 목록',
//     datakey: adminDatakey,
//     url: '/user/admin',
//     recoilState: uerDataAtom,
//   },
//   {
//     title: '뱃지 관리',
//     descripton: '등록된 뱃지 관리',
//     datakey: adminBadgeListKey,
//     url: '/badge/list',
//     recoilState: badgeAtom,
//   },
// ]
