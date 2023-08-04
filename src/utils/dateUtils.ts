import dayjs from 'dayjs';

const formatShortDate = (date: string | number | dayjs.Dayjs | Date | null | undefined) => {
  const dateFormat = "MM-DD";
  const timeFormat = "hh:mm:ss";
  const today = dayjs().startOf('day');
  const momentDate = dayjs(date)
  const isToday = momentDate.isSame(today, 'd')
  if (isToday) {
    return dayjs(date).format(timeFormat);
  } else {
    return dayjs(date).format(dateFormat);
  }
}

const isSameDay = (date: Date) => {
  return dayjs().diff(date, 'day') === 0;
}

export { formatShortDate, isSameDay };