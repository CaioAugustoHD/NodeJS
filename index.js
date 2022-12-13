const questions = [
    "O que aprendi hoje?",
    "O que não gostei de hoje? E como poderia melhorar?",
    "O que eu gostei de hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " ➝  ")
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length ) {
        ask(answers.length) 
    } else {
            console.log("\n" + answers);
            process.exit()
        }   
})