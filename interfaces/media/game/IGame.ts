import { IAnimation } from "../IAnimation"
import { IMessageEntity } from "../../message/IMessageEntity"
import { IPhotoSize } from "../photo/IPhotoSize"

export interface IGame {
    title: string
    description: string
    photo:	IPhotoSize[]
    text?: string
    text_entities?:	IMessageEntity[]
    animation?:	IAnimation
}