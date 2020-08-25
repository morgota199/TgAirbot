import { Polling } from "./polling/polling"
import { EventEmitter } from "events"
import { IAirbotOptions } from "./interfaces/airbot/IAirbotOptions"
import { EventD } from "./utils/events"
import "reflect-metadata"
import {Dispatcher} from "./dispatcher";

@EventD()
export class Airbot {
    polling: Polling | null
    event!: EventEmitter

    constructor(
        public token: string,
        options?: IAirbotOptions
    ) {
        if(options && options.polling === true && options.polling_options) {
            this.polling = new Polling(token, options.polling_options)
        } else if(options && options.polling === true) {
            this.polling = new Polling(token)
        } else {
            this.polling = null
        }
    }

    create_module(module: any) {
        Reflect.defineMetadata("factory_module", new module(), this)
    }
}