const setsOfNumber = (number) => {
    if (number < 0) return "Please input number more than 0"

    let sets = []

    let lastReducer = 1
    for (let i = number; i > 0; i--) {

        let trial = [i]
        let sum = trial.reduce((acc, val) => {
            return acc + val
        }, 0)

        let reducer = lastReducer

        while (sum < number) {
            trial.push(number - reducer)
            sum = trial.reduce((acc, val) => acc + val, 0)

            if (sum > number) {
                trial = [i]
                sum = trial.reduce((acc, val) => acc + val, 0)
                reducer++
            } else if (sum == number) {
                if (trial[1] > 1) {
                    lastReducer = reducer + 1
                    i++
                } else {
                    lastReducer = 1
                }
                break;
            }
        }
        console.log(...trial)
        sets.push(trial)
    }

    return sets
}

console.log(setsOfNumber(4))
