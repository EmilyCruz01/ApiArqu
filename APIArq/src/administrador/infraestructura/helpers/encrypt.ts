import { IEncrypt } from "../../aplicacion/services/encrypt";
import bcrypt from "bcrypt"; 

export class Encrypt implements IEncrypt{
    encodePass(password: string): Promise<string> {
        const saltos=10;
        let pass=bcrypt.hash(password,saltos)
        return pass;
    }
    comparePass(passEncode: string, hashingPass: string): Promise<boolean> {
        let passEncrypt=bcrypt.compare(passEncode, hashingPass);
        return passEncrypt;
    }
}