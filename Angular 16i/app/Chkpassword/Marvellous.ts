export function ChkPassword(Str:String)
{
    var CntCpaital=0;
    var CntSmall=0;
    var SpecSym=0;
    var digits=0;
    for(var i=0;i<Str.length;i++)
    {
        if(Str[i]>='A'&& Str[i]<='Z')
        {
            CntCpaital++;
        }
        if(Str[i]>='a' && Str[i]<='z')
        {
            CntSmall++;
        }
        if(Str[i]>='0' && Str[i]<='9')
        {
            digits++;
        }
        if(Str[i]=='!'|| Str[i]=='@' || Str[i]=='#' || Str[i]=='$' || Str[i]=='%' || Str[i]=='^' || Str[i]=='&' || Str[i]=='*')
        {
            SpecSym++;
        }
    }
    if(CntCpaital>=2 && CntSmall>=3 && digits>=2 && SpecSym>=1)
    {
        return true;
    }
    else
    {
        return false;
    }


}