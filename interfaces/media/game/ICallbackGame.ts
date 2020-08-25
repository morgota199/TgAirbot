export interface ICallbackGame {
    user_id: number
    score: number
    force?: number
    disable_edit_message?: boolean
    chat_id?: number
    message_id?: number
    inline_message_id?: string
}