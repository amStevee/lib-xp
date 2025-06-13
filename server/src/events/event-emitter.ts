import {EventEmitter} from 'events';

class SingleToneEventEmitter extends EventEmitter {
    private static instance: SingleToneEventEmitter;

    private constructor() {
        super()
    }

    static getInstance() {
        if(!SingleToneEventEmitter.instance) {
            SingleToneEventEmitter.instance = new SingleToneEventEmitter()
        }

        return SingleToneEventEmitter.instance
    }

}

export const eventEmitter = SingleToneEventEmitter.getInstance();