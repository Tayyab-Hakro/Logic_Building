/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    let screen = "";        // what's on the screen
    let result = [];        // list of all screens
    
    for (let i = 0; i < target.length; i++) {
        // Step 1: Always press key 1 first ➡ adds "a"
        screen += "a";
        result.push(screen);
        
        // Step 2: Now, we press key 2 until last letter = target[i]
        while (screen[screen.length - 1] !== target[i]) {
            // change last letter to next one in alphabet
            let lastChar = screen[screen.length - 1];
            
            // next char: if "z" ➡ "a", else move to next letter
            let nextChar = (lastChar === 'z') ? 'a' : String.fromCharCode(lastChar.charCodeAt(0) + 1);
            
            // replace last letter with the new one
            screen = screen.slice(0, -1) + nextChar;
            
            // add this to our result list
            result.push(screen);
        }
    }
    
    return result;
};
