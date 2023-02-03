import { reactive } from 'vue'
import { DateTime } from 'luxon'

export function useDate() {
  const convertToUnix = (date: any) => {
    return Math.floor(new Date(date).getTime() / 1000)
  }

  const convertToHuman = (unix: number) => {
    return DateTime.fromSeconds(unix)
      .setLocale('id')
      .toLocaleString(DateTime.DATETIME_MED)
  }

  return reactive({
    convertToUnix,
    convertToHuman
  })
}
