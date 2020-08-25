import { IPhotoSize } from "../photo/IPhotoSize"
import { IMaskPosition } from "./IMaskPosition"

export interface ISticker {
    file_id: string
    file_unique_id: string
    width: number
    height: number
    is_animated: boolean
    thumb?:	IPhotoSize
    emoji?: string
    set_name?: string
    mask_position?:	IMaskPosition
    file_size: number

}