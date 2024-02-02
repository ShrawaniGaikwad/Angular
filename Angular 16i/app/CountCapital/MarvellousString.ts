export function CountCapital(Str:String)
{
    var iCnt=0;
    for(var i=0;i<Str.length;i++)
    {
        if(Str[i]>='A'  && Str[i]<='Z')
        {
            iCnt++;
        }
    }
    return iCnt;
}