import { Animal } from '../abstractClasses/animal';

export class Tiger extends Animal {
    constructor(){
        super('grrr');
    }

    /**
     * 
     * @param 'message to speak'
     * @type string 
     */
    speak(message: string): string {
        return this.interpers(message);
    }
}