'use client'

import React from 'react'
import { Table } from './Table'

interface AdminTableProps {
  title: string
  des: string
  data: Array<{ [key: string]: any }>
  addtionalColumn?: Array<{
    head: string
    btnTitle: string
    btnAction?: (id: string) => Promise<void>
    refresh?: () => void
  }>
}

export default function AdminTable({ title, des, data, addtionalColumn }: AdminTableProps) {
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
      <table className="min-w-full table-fixed divide-y divide-gray-medium overflow-hidden rounded-[5px]">
        <thead className="bg-pupple-deep">
          <tr className="flex w-full">
            {keys.map((key) => (
              <th
                key={key}
                className="text-xs flex-1 truncate px-[1rem] py-4 text-left font-medium tracking-wider text-white"
              >
                {key}
              </th>
            ))}
            {!isDataEmpty &&
              addtionalColumn?.map((column, i) => (
                <th
                  key={i}
                  className="text-xs flex-1 truncate px-[1rem] py-4 text-left font-medium tracking-wider text-white"
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
                  className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-[1rem] py-4"
                >
                  <div className="truncate">{item[key]}</div>
                </td>
              ))}
              {!isDataEmpty &&
                addtionalColumn?.map((column, i) => (
                  <td
                    key={i}
                    className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-[1rem] py-4"
                  >
                    <button
                      className="blueBtn"
                      onClick={async () => {
                        if (column.btnAction) {
                          column.btnAction(item.id).then((data) => {
                            if (column.refresh) column.refresh()
                          })
                        }
                      }}
                    >
                      {column.btnTitle}
                    </button>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
