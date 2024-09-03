/**
 * @description  Date객체 형식을 'yy.mm.dd' 형식으로 변환
 **/

export function formatDate(date: Date): string {
  let year = date.getFullYear().toString().slice(-2) // 년도의 마지막 두 자리
  let month = (date.getMonth() + 1).toString().padStart(2, '0') // 월 (0부터 시작하므로 1을 더함)
  let day = date.getDate().toString().padStart(2, '0') // 일

  return `${year}.${month}.${day}`
}
