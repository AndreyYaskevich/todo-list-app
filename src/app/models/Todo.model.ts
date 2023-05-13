import { Guid } from "guid-typescript";

export default class Todo {
    constructor(
        public id: Guid,
        public description: string
    ) {
        
    };
}