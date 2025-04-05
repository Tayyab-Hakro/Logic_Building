var combinationSum = function(candidates, target) {
    let result = [];

    const backtrack = (current, start, total) => {
        if (total === target) {
            result.push([...current]);
            return;
        }

        if (total > target) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(current, i, total + candidates[i]); // reuse same element
            current.pop(); // backtrack
        }
    };

    backtrack([], 0, 0);
    return result;
};
