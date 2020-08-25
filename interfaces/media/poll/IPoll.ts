import { IPollOption } from "./IPollOption"
import { IMessageEntity } from "../../message/IMessageEntity"

export interface IPoll {
    id: string
    question: string
    options: IPollOption[]
    total_voter_count: number
    is_closed: boolean
    is_anonymous: boolean
    type: string
    allows_multiple_answers: boolean
    correct_option_id?: number
    explanation?: string
    explanation_entities?: IMessageEntity[]
    open_period?: number
    close_date?: number
}