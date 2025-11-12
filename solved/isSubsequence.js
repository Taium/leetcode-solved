var isSubsequence = function(s, t) {
    let pos = 0;
    let newT = t.split('');

    for (let i = 0; i < s.length; i++) {

        let index = t.indexOf(s[i], pos);
        if (index === -1) return false;
        newT[index] = '*';
        pos = index + 1;
    }

    return true;
};