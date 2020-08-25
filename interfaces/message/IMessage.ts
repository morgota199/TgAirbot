import { IUser } from "../user/IUser"
import { IChat } from "../chat/IChat"
import { IMessageEntity } from "./IMessageEntity"
import { IAnimation } from "../media/IAnimation"
import { IAudio } from "../media/audio/IAudio"
import { IDocument } from "../media/other/IDocument"
import { IPhotoSize } from "../media/photo/IPhotoSize"
import { ISticker } from "../media/sticker/ISticker"
import { IVideo } from "../media/video/IVideo"
import { IVideoNote } from "../media/video/IVideoNote"
import { IVoice } from "../media/audio/IVoice"
import { IContact } from "../media/other/IContact"
import { IDice } from "../media/other/IDice"
import { IGame } from "../media/game/IGame"
import { IPoll } from "../media/poll/IPoll"
import { IVenue } from "../media/location/IVenue"
import { ILocation } from "../media/location/ILocation"
import { IInvoice } from "../media/audio/IInvoice"
import { ISuccessfulPayment } from "../media/payments/ISuccessfulPayment"
import { IPassportData } from "../media/other/passport/IPassportData"
import { IInlineKeyboardMarkup } from "../keyboard/inline/IInlineKeyboardMarkup"

export interface IMessage {
    message_id: number
    from?: IUser
    date: number
    chat: IChat
    forward_from?: IUser
    forward_from_chat?:	IChat
    forward_from_message_id?: number
    forward_signature?: string
    forward_sender_name?: string
    forward_date?: number
    reply_to_message?: IMessage
    via_bot?: IUser
    edit_date?: number
    media_group_id?: string
    author_signature?: string
    text?: string
    entities?: IMessageEntity[]
    animation?:	IAnimation
    audio?:	IAudio
    document?:	IDocument
    photo?:	IPhotoSize[]
    sticker?: 	ISticker
    video?:	IVideo
    video_note?: IVideoNote
    voice?: IVoice
    caption?: string
    caption_entities?: IMessageEntity[]
    contact?: IContact
    dice?:	IDice
    game?: 	IGame
    poll?:	IPoll
    venue?:	IVenue
    location?:	ILocation
    new_chat_members?: IUser[]
    left_chat_member?:	IUser
    new_chat_title?: string
    new_chat_photo?: IPhotoSize[]
    delete_chat_photo?: boolean
    group_chat_created?: boolean
    supergroup_chat_created?: boolean
    channel_chat_created?: boolean
    migrate_to_chat_id?: number
    migrate_from_chat_id?: number
    pinned_message?: IMessage
    invoice?:	IInvoice
    successful_payment?: ISuccessfulPayment
    connected_website?: string
    passport_data?: IPassportData
    reply_markup?:	IInlineKeyboardMarkup
}