export const Table = {
  Title: TableTitle,
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  ColumnHeaderCell: TableColumnHeaderCell,
  RowHeaderCell: TableRowHeaderCell,
}

/**
 * 테이블 상단 제목 + 한줄 설명
 */
interface AdminTableTitleProps {
  title: string
  description: string
}

function TableTitle({ title, description }: AdminTableTitleProps) {
  return (
    <div>
      <h3 className="text-[1.2rem] font-bold py-[0.3rem]">{title}</h3>
      <p className="text-[1rem] font-medium py-[0.5rem]">{description}</p>
    </div>
  )
}

TableTitle.displayName = 'Table.Title'

/**
 * 테이블 래퍼
 */
interface AdminTableWrapperProps {
  children: React.ReactNode
}

function TableRoot({ children }: AdminTableWrapperProps) {
  return <table>{children}</table>
}

TableRoot.displayName = 'Table.Root'

/**
 * 테이블 헤더
 */
interface TableHeaderProps {
  className?: string
}

function TableHeader({ className, ...props }: TableHeaderProps) {
  return <thead {...props} className={className} />
}

TableHeader.displayName = 'Table.Header'

/**
 * 테이블 바디
 */
type TableBodyElement = React.ElementRef<'tbody'>

interface TableBodyProps {
  className?: string
}
function TableBody(
  { className, ...props }: TableBodyProps,
  forwardedRef: React.Ref<TableBodyElement>
) {
  return <tbody {...props} className={className} />
}
TableBody.displayName = 'Table.Body'

/**
 * 테이블 행
 */
function TableRow({ className, ...props }: TableHeaderProps) {
  return <tr {...props} className={className} />
}
TableRow.displayName = 'Table.Row'

/**
 * 테이블 헤더 셀
 */
function TableCell({ className, ...props }: TableHeaderProps) {
  return <td className={className} {...props} />
}
TableCell.displayName = 'Table.Cell'

/**
 * 테이블 Col 헤더 셀
 */
function TableColumnHeaderCell({ className, ...props }: TableHeaderProps) {
  return <th className={className} scope="col" {...props} />
}
TableColumnHeaderCell.displayName = 'Table.ColumnHeaderCell'

/**
 * 테이블 Row 헤더 셀
 */
function TableRowHeaderCell({ className, ...props }: TableHeaderProps) {
  return <th className={className} scope="row" {...props} />
}
TableRowHeaderCell.displayName = 'Table.RowHeaderCell'
