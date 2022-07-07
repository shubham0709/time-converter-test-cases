const timeConverter = (ms) => {
    if (!ms) {
        return "expected time in miliseconds"
    }
    if (ms < 1000) {
        let ans = [ms, (ms == 1 ? "millisecond" : "milliseconds")]
        return ans.join(" ");
    }

    ms = Number(ms);

    let hours = Math.floor(ms / 3600000);
    let min = Math.floor((ms / 60000) - hours * 60);
    let sec = Math.floor((ms / 1000) - min * 60 - hours * 60 * 60);

    let ans = [];

    hours && ans.push(hours + (hours == 1 ? " hour " : " hours "));
    min && ans.push(min, (min == 1 ? " minute " : " minutes "));
    sec && ans.push(sec, (sec == 1 ? " second " : " seconds "));

    return ans.join("").trim();
}
module.exports = timeConverter;
let ans = timeConverter(100)
console.log(ans);
