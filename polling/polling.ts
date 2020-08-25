import { EventEmitter } from "events"
import { IGetUpdate, IPolling, IUpdate } from "./IPolling"
import { Urls } from "../utils/urls"
import request from "request-promise"
import { check_options } from "../utils/checker"
import { EventD } from "../utils/events"
import "colors"

@EventD()
export class Polling {
    token: string
    process: boolean
    delay: number = 500
    update_id: number
    event!: EventEmitter
    url: Urls

    constructor(
        token: string,
        options?: IGetUpdate
    ) {
        this.token = token
        this.process = false
        this.url = new Urls(token)

        if(options)
            this.update_id = check_options(options, "offset")
        else
            this.update_id = 0

        this.start()
        this.time_out()
    }

    time_out() {
        setTimeout(() => this.polling(), this.delay)
    }

    start() {
        this.process = true
    }

    stop() {
        this.process = false
    }

    async polling() {
        try {
            if(this.process === false) return

            const updates = await request({
                method: "GET",
                url: this.url.get_update({offset: this.update_id + 1})
            })

            const result = JSON.parse(updates).result

            result.map((update: IUpdate) => {
                this.update_id = update.update_id
                this.event.emit("update", update)
            })

            return this.time_out()
        } catch (e) {
            console.error("===> ".red, e.message.red)
            return this.stop()
        }
    }
}