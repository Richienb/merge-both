import test from "ava"
import mergeBoth from "."

test("main", (t) => {
    t.deepEqual(mergeBoth({
        a: ["a", "b"],
        b: { b: "c" },
        c: "e",
    },
    {
        a: ["c", "d"],
        b: { b: "f", c: "d" },
    }), {
        a: ["a", "b", "c", "d"],
        b: { b: "f", c: "d" },
        c: "e",
    })
})
