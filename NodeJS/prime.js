const getPrimesLowerThan = (number) => {
    if (number < 1) {
        return 'Please input number more than 0 (zero)'
    }
    let primes = []
    // because 1 is not a prime number, so start it with 2
    for (let i = 2; i < number; i++) {
        let check = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                check = false
            }
        }
        if (check) primes.push(i)
    }
    return primes
}

console.log(getPrimesLowerThan(-1))
console.log(getPrimesLowerThan(5))
console.log(getPrimesLowerThan(10))
console.log(getPrimesLowerThan(20))
console.log(getPrimesLowerThan(100))