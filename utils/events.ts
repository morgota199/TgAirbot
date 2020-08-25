import { EventEmitter } from "events"

const event = new EventEmitter()

export const EventD = () => {
    return <T extends { new (...args: any[]): object }>(Constructor: T) => {
        return class extends Constructor {
            event: EventEmitter

            constructor(...args: any[]) {
                super(...args);

                this.event = event
            }
        }
    }
}