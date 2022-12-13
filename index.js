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

    answers.length < questions.length 
        ? ask(answers.length)
        : process.exit();           
})

process.on('exit', () => {
    console.log(`
        Olá!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que você não gostou e poderia melhorar é:
        ${answers[1]}

        O que você mais gostou de hoje foi:
        ${answers[2]}

        Hoje você ajudou ${answers[3]} pessoas!


        Volte amanhã para novas reflexões!
    `)
})