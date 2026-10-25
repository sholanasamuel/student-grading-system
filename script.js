
let firstname = "John";
let lastname = "Doe";

let english = 28;
let mathematics = 27;
let chemistry = 29;

let totalscore = english + mathematics + chemistry;

let remark;

if (totalscore >= 70) {
    remark = "Excellent";
} else if (totalscore >= 50 && totalscore <= 69) {
    remark = "Good";
} else if (totalscore >= 35 && totalscore <= 49) {
    remark = "You can do better";
} else {
    remark = "Fail";
}

console.log("Student Name: " + firstname + " " + lastname);
console.log("English: " + english);
console.log("Mathematics: " + mathematics);
console.log("Chemistry: " + chemistry);
console.log("Total Score: " + totalscore);
console.log("Remark: " + remark);
