import { Addition } from "./MarvellousArray";

describe('Addition',()=>{
    it('should return addition of all numbers in array',()=>{
        const iRet=Addition([1,2,3,4,5]);
        expect(iRet).toEqual(15);
    })
})