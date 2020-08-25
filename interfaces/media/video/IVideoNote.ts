import { IPhotoSize } from "../photo/IPhotoSize"

export interface IVideoNote {
    file_id: string
    file_unique_id: string
    length: number
    duration: number
    thumb?: IPhotoSize
    file_size?: number
}