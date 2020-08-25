import { IPhotoSize } from "./photo/IPhotoSize"

export interface IAnimation {
    file_id: string
    file_unique_id: string
    width: number
    height: number
    duration: number
    thumb?: IPhotoSize
    file_name?: string
    mime_type?: string
    file_size?: number
}