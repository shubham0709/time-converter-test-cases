const timeConverter = require('./index');
describe("time converter test cases", () => {
    test("singular minute", () => {
        expect(timeConverter(80000)).toBe("1 minute 20 seconds")
    })

    test("plural minutes", () => {
        expect(timeConverter(800000)).toBe("13 minutes 20 seconds")
    })

    test("ms less than 1000 i.e one-sec", () => {
        expect(timeConverter(100)).toBe("100 milliseconds")
    })

    test("calling function without agruements", () => {
        expect(timeConverter()).toBe("expected time in miliseconds")
    })
})