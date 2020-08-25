import { IPhotoSize } from "../photo/IPhotoSize"

export interface IVideo {
    file_id: string
    file_unique_id: string
    width: number
    height: number
    duration: number
    thumb?: IPhotoSize
    mime_type?: string
    file_size?: number
}