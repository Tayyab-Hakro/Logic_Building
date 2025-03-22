/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let result = [];

    const dfs = (current, lastChar) => {
        if (current.length === n) {
            result.push(current);
            return;
        }

        // We can always add '1'
        dfs(current + '1', '1');

        // We can add '0' only if the last char was not '0'
        if (lastChar !== '0') {
            dfs(current + '0', '0');
        }
    };

    dfs('', ''); // start with an empty string

    return result;
};
