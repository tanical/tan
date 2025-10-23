const myName = "tania";
let age = 19;
//const and let are the same, but const never will be change

function generateBiodata() {
    let generation;

    if (age > 10 && age <= 18) {
        // first condition
        generation = "young generation";
    }
    else if (age > 18 && age <= 30) {
        generation = "adult generation";
    }
    else if (age > 30) {
        generation = "old man generation";
    }
    else if (age >= 2 && age <= 10) {
        generation = "child generation"
    }
    else {
        // conditions do not work out
        generation = "unknown generation"
    }
    return console.log("my generation is", generation);
}

console.log(myName);
console.log(age);

generateBiodata();