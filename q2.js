function findTopNames(students) {
    var x = students.filter(function (std) { return std.score > 8; }).map(function (std) { return std.name.toLowerCase(); });
    return x;
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
