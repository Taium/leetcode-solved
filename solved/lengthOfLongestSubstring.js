var lengthOfLongestSubstring = function (s) {
    let uniqueSubString = ""
    for (let i = 0; i < s.length; i++) {
        let substring = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (substring.includes(s[j])) {
                break
            } else {
                substring += s[j]
            }
        }
        if (uniqueSubString.length < substring.length) {
            uniqueSubString = substring
        }

    }

    return uniqueSubString.length
};
console.log(lengthOfLongestSubstring("pwwkew"))
