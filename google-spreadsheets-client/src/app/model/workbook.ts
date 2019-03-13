import {JsonProperty} from 'json-typescript-mapper';
import { Sheet } from './Sheet';

export class Workbook {
    @JsonProperty('file-id')
    fileId:string;
    @JsonProperty('version')
    version:string;
    @JsonProperty({name: 'sheets', clazz: Sheet})
    sheets:Map<String, Sheet>;
    
    constructor() {
        this.sheets = new Map<String, Sheet>();
    }
}