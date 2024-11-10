'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { Table } from './Table'
import { BadgeIssueRes_T } from '@/src/common/types/adminBadge'

interface AdminTableProps<T> {
  title: string
  des: string
  data: { [key: string]: any }[]
  addtionalColumn?: Array<{
    head: string
    btnTitle: string
    btnAction?: Dispatch<SetStateAction<T | null>>
  }>
}

export default function AdminTable<T>({ title, des, data, addtionalColumn }: AdminTableProps<T>) {
  let keys: string[]

  const isDataEmpty = data.length === 0

  if (isDataEmpty) {
    keys = ['No data available']
    data = [{ 'No data available': '-' }]
  } else {
    keys = Object.keys(data[0])
  }

  return (
    <div>
      <Table.Title title={title} description={des} />
      <table className="w-full table-fixed divide-y divide-gray-medium overflow-hidden rounded-[5px]">
        <thead className="bg-pupple-deep">
          <tr>
            {!isDataEmpty &&
              addtionalColumn?.map((column, i) => (
                <th key={i} className="truncate px-[1rem] py-4 text-left text-xs font-medium tracking-wider text-white">
                  {column?.head}
                </th>
              ))}
            {keys.map((key) => (
              <th
                key={key}
                className="max-w-[50em] truncate px-[1rem] py-4 text-left text-xs font-medium tracking-wider text-white"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-medium bg-white">
          {data.map((item, i) => (
            <tr key={i} className="hover:bg-blue-soft">
              {!isDataEmpty &&
                addtionalColumn?.map((column, i) => (
                  <td key={i} className="overflow-hidden text-ellipsis whitespace-nowrap px-[1rem] py-4">
                    <button
                      className="blueBtn"
                      onClick={() => {
                        column?.btnAction && column.btnAction(() => item as T)
                      }}
                    >
                      {column.btnTitle}
                    </button>
                  </td>
                ))}
              {keys.map((key) => {
                let value

                if (typeof item[key] == 'object') value = 'object'
                else value = item[key]

                return (
                  <td key={key} className="overflow-hidden text-ellipsis whitespace-nowrap px-[1rem] py-4">
                    <div className="truncate">{value}</div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
