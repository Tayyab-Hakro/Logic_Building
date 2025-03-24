var removeOuterParentheses = function(s) 
{
    let ans = ''
    let cnt = 0
    for (ch of s)
    {
        if(ch === '(')
        {
            if(cnt) ans += ch;
            cnt++;
        }
        else 
        {
            cnt--;
            if(cnt) ans += ch;
        }
    }
    return ans
};

console.log(removeOuterParentheses("(()())(())"))