import { JsonProperty } from "json-typescript-mapper";
import { Column } from './Column';

export class Sheet {
    @JsonProperty('columns')
    columns:Map<String, Column>;
    @JsonProperty("rows")
    rows:Map<String, String>[];

    constructor() {
        
    }
}