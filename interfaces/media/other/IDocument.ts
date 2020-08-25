import { IPhotoSize } from "../photo/IPhotoSize"

export interface IDocument {
    file_id: string
    file_unique_id: string
    thumb?: IPhotoSize
    file_name?: string
    mime_type?: string
    file_size?: number
}