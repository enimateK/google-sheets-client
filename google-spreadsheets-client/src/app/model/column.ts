import { JsonProperty } from "json-typescript-mapper";

export class Column {
    @JsonProperty('label')
    labels:Map<String, String>;

    constructor() {

    }
}