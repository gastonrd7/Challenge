import { Animal } from '../abstractClasses/animal';

export class Lion extends Animal {
    constructor(){
        super('roar');
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