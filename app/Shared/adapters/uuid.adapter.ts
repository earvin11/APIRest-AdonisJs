import { v4 as uuid } from 'uuid';

export class GenerateUuid {
    public uuid: string;

    constructor() {
        this.uuid = uuid();
    }
};