declare interface Position {
  x?: string | number | null | undefined
  y?: string | number | null | undefined
}

declare interface CatClasses {
  cat: boolean
  first_pose: boolean
  face_left?: boolean
  face_right?: boolean
}

declare interface LegClasses {
  leg: boolean
  walk: boolean
}

declare interface CatStyles {
  left?: string
  top?: string
}

declare interface HeadStyles {
  top?: string
}
