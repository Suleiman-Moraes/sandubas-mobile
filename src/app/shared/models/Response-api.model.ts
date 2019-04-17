export class ResponseApi{
    constructor(
        public data?: any,
        public erros?: string[]
    ){}

    static fromJson(jsonData: any): ResponseApi{
        return Object.assign(new ResponseApi(), jsonData);
    }
}