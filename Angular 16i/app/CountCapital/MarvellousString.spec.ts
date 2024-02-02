import { CountCapital } from "./MarvellousString";

describe('CountCapital',()=>{
    it('should contain Count of Capital charcters in the string',()=>{
        const iRet=CountCapital("Hello My Name is XYZ");
        expect(iRet).toEqual(6);
    })
})