const questions = [
    "O que aprendi hoje?",
    "O que não gostei de hoje? E como poderia melhorar?",
    "O que eu gostei de hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n\n\n")
}

ask();