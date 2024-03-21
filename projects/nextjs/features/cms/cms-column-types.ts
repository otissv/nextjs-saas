let address = 'address' as const
let audio = 'audio' as const
let audioFiles = 'audioFiles' as const
let boolean = 'boolean' as const
let date = 'date' as const
let dateRange = 'dateRange' as const
let document = 'document' as const
let documents = 'documents' as const
let gallery = 'gallery' as const
let image = 'image' as const
let multiReference = 'multiReference' as const
let number = 'number' as const
let privateText = 'privateNumber' as const
let privateNumber = 'privateNumber' as const
let reference = 'reference' as const
let richContent = 'richContent' as const
let richtext = 'richtext' as const
let tags = 'tags' as const
let text = 'text' as const
let time = 'time' as const
let title = 'title' as const
let url = 'url' as const
let video = 'video' as const
let videos = 'videos' as const

export type CmsColumnTypes =
  | typeof address
  | typeof audio
  | typeof audioFiles
  | typeof boolean
  | typeof date
  | typeof dateRange
  | typeof document
  | typeof documents
  | typeof gallery
  | typeof image
  | typeof multiReference
  | typeof number
  | typeof privateText
  | typeof privateNumber
  | typeof reference
  | typeof richContent
  | typeof richtext
  | typeof tags
  | typeof text
  | typeof time
  | typeof title
  | typeof url
  | typeof video
  | typeof videos

export const cmsColumnTypes = [
  'address',
  'audio',
  'audioFiles',
  'boolean',
  'date',
  'dateRange',
  'document',
  'documents',
  'gallery',
  'image',
  'multiReference',
  'number',
  'privateText',
  'privateNumber',
  'reference',
  'richContent',
  'richtext',
  'tags',
  'text',
  'time',
  'title',
  'url',
  'video',
  'videos',
] as const