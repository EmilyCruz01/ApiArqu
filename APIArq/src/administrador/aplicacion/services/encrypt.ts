export interface IEncrypt{
    encodePass(password:string):Promise<string>;
    comparePass(passEncode:string, hashingPass:string):Promise<boolean>; 
}