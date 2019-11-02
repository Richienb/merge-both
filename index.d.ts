/**
 * Merge with support for objects and arrays.
 * @param obj The main object to merge.
 * @param source The other objects to merge.
 * @example
 * ```
 * const mergeBoth = require("merge-both");
 *
 * mergeBoth(
 *     {
 *         a: ["a", "b"],
 *         b: { b: "c" },
 *         c: "e"
 *     },
 *     {
 *         a: ["c", "d"],
 *         b: { b: "f", c: "d" }
 *     }
 * );
 *
 * // Returned object
 * {
 *     a: ["a", "b", "c", "d"],
 *     b: { b: "f", c: "d" },
 *     c: "e",
 * }
 * ```
*/
declare function mergeBoth(obj: object, ...source: object[]): object;

export = mergeBoth;
