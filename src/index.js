const insult = require("./modules/insult");

const number = process.argv[2] || 1;

for (let i = 0; i < number; i++) {
    let burn = insult();

    console.log(burn);
}
