export abstract class Animal {
    abstract speak(message: string) : string;
    /**
     * 
     * @param sound 
     */
    constructor(sound: string){
        this.sound = sound;
    }

    protected interpers(input: string) : string {
        return `${input.replace(new RegExp(' ', 'g'), ` ${this.sound} `)} ${this.sound}`;
    }

    protected sound: string;
}