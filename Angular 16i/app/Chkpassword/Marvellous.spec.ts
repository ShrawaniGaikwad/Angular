import { ChkPassword } from "./Marvellous";

describe('ChkPassword',()=>{
    it('Should contain valid password',()=>{
        const iRet=ChkPassword("SGaikwad@123");
        expect(iRet).toEqual(true);
    });
})