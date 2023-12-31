import { SQL } from 'drizzle-orm'

export interface Id {
  id: number
}

export type SortDirection = 'asc' | 'desc'

export type PageInfo<DataType> = {
  where?: string
  limit?: number
  orderBy?: [keyof DataType, SortDirection][]
  page?: number
}

export type SelectProps<DataType> = {
  page?: number
  columns?: (keyof DataType)[]
  where?: SQL<DataType>
  limit?: number
  orderBy?: [keyof DataType, SortDirection][]
}

export type ActionProps<DataType> = {
  pageId?: number
  columns?: (keyof DataType)[]
} & PageInfo<DataType>

export type ActionPropsUserById<Schema> = Id & ActionProps<Schema>

export type SuccessResponse<DataType> = {
  data: DataType[]
  error: unknown
  totalPages: number
}

export type ErrorResponse = {
  data: []
  error: unknown
  totalPages: number
}

export type SeverReturnType<DataType> =
  | Promise<SuccessResponse<Partial<DataType>>>
  | Promise<ErrorResponse>
