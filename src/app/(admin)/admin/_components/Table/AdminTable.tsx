'use client'

import React from 'react'
import { Table } from './Table'

interface AdminTableProps {
  title: string
  des: string
  data: Array<{ [key: string]: any }>
  addtionalColumn?: Array<{ head: string; data: string; action?: (id: string) => void }>
}

export default function AdminTable({ title, des, data, addtionalColumn }: AdminTableProps) {
  if (data.length === 0) {
    return (
      <>
        <Table.Title title={title} description={des} />
        <table className="min-w-full divide-y table-fixed divide-gray-medium rounded-[5px] overflow-hidden">
          <thead className="bg-pupple-deep">
            <tr className="flex w-full">
              <th className="flex-1 px-[1rem] py-4 text-xs font-medium tracking-wider text-left text-white truncate ">
                No data available
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-medium">
            <tr className="flex w-full hover:bg-blue-soft">
              <td className="flex-1 px-[1rem] py-4 overflow-hidden whitespace-nowrap text-ellipsis">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }

  const keys = Object.keys(data[0])

  return (
    <>
      <Table.Title title={title} description={des} />
      <table className="min-w-full divide-y table-fixed divide-gray-medium rounded-[5px] overflow-hidden">
        <thead className="bg-pupple-deep">
          <tr className="flex w-full">
            {keys.map((key) => (
              <th
                key={key}
                className="flex-1 px-[1rem] py-4 text-xs font-medium tracking-wider text-left text-white truncate "
              >
                {key}
              </th>
            ))}
            {addtionalColumn?.map((column, i) => (
              <th
                key={i}
                className="flex-1 px-[1rem] py-4 text-xs font-medium tracking-wider text-left text-white truncate "
              >
                {column.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-medium">
          {data.map((item, i) => (
            <tr key={i} className="flex w-full hover:bg-blue-soft">
              {keys.map((key) => (
                <td
                  key={key}
                  className="flex-1 px-[1rem] py-4 overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  <div className="truncate">{item[key]}</div>
                </td>
              ))}
              {addtionalColumn?.map((column, i) => (
                <td
                  key={i}
                  className="flex-1 px-[1rem] py-4 overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  <button
                    className="blueBtn"
                    onClick={() => {
                      if (column.action) column.action(item.id)
                    }}
                  >
                    {item.id + column.data}
                  </button>
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
