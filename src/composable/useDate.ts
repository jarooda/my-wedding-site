import { reactive } from 'vue'
import { DateTime } from 'luxon'

export function useDate() {
  const convertToUnix = (date: any) => {
    return Math.floor(new Date(date).getTime() / 1000)
  }

  const convertToHuman = (unix: number, format: string = 'dd LLL yyyy, HH:mm') => {
    return DateTime.fromSeconds(unix)
      .setLocale('id')
      .toFormat(format)
  }

  const getTodayDateAndMonth = () => {
    return DateTime.local().setLocale('id').toFormat('yyyy-LL-dd')
  }

  const parseDateAndMonth = (dateMonth: string) => {
    const date = DateTime.fromFormat(dateMonth, 'yyyy-LL-dd', { locale: 'id' })
    return date.toFormat('dd LLL')
  }

  return reactive({
    convertToUnix,
    convertToHuman,
    getTodayDateAndMonth,
    parseDateAndMonth
  })
}
