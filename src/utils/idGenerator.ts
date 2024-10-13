export class IdGenerator {
    private currentId: number;

    constructor(startId: number = 1) {
        this.currentId = startId;
    }

    public nextId(): number {
        return this.currentId++;
    }
}

