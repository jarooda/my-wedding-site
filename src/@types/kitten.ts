export interface Position {
  x?: string | number | null | undefined
  y?: string | number | null | undefined
}

export interface CatClasses {
  cat: boolean
  first_pose: boolean
  face_left?: boolean
  face_right?: boolean
}

export interface LegClasses {
  leg: boolean
  walk: boolean
}

export interface CatStyles {
  left?: string
  top?: string
}

export interface HeadStyles {
  top?: string
}
