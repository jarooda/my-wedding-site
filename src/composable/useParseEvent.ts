import { reactive } from 'vue'

export function useParseEvent() {
  const getDate = (payload: string) => {
    const [date, day, month, year] = payload.split(' ')
    return { date, day, month, year }
  }

  const getPlace = (payload: string) => {
    const [address, region] = payload.split('-')
    return { address, region }
  }

  const akad = {
    title: 'Akad',
    date: getDate(import.meta.env.VITE_DATE_FIRST),
    time: import.meta.env.VITE_TIME_FIRST,
    place: getPlace(import.meta.env.VITE_ADDRESS_FIRST),
    gmaps: import.meta.env.VITE_GMAPS_FIRST
  }

  const brideEvent = {
    title: 'Tasyakuran',
    date: getDate(import.meta.env.VITE_DATE_SECOND),
    time: import.meta.env.VITE_TIME_SECOND,
    place: getPlace(import.meta.env.VITE_ADDRESS_SECOND),
    gmaps: import.meta.env.VITE_GMAPS_SECOND
  }

  const groomEvent = {
    title: 'Tasyakuran',
    date: getDate(import.meta.env.VITE_DATE_THIRD),
    time: import.meta.env.VITE_TIME_THIRD,
    place: getPlace(import.meta.env.VITE_ADDRESS_THIRD),
    gmaps: import.meta.env.VITE_GMAPS_THIRD
  }

  return reactive({
    akad,
    brideEvent,
    groomEvent
  })
}
