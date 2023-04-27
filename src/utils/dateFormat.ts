export function getDate(d: Date) {
  const date = new Date(d);
  const res =
    date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일 ' + date.getHours() + '시';
  return res;
}
