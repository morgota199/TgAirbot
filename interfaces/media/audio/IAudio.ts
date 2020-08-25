import { IPhotoSize } from "../photo/IPhotoSize"

export interface IAudio {
    file_id: string
    file_unique_id: string
    duration: number
    performer?: string
    title?: string
    mime_type?: string
    file_size?: number
    thumb?:	IPhotoSize
}