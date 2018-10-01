//Ya boy is trying too cause problems

function problemFunc(num, num2) {
    if(1){
        console.log(`this will cause problems`);
        
        return (num / 0)
    }

    return num * num2

}

problemFunc(99999999, 10)