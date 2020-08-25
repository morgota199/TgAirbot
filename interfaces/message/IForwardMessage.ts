export interface IForwardMessage {
    chat_id: string | number
    from_chat_id: number | string
    disable_notification?: boolean
    message_id: number
}