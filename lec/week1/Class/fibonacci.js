function fibonacci(n) {
    let zero = 0
    let one = 1
    let fib = 0

    for (let i = 2; i <= n; i++) {
        fib = zero + one
        console.log(fib)
        zero = one
        one = fib


    }
}

fibonacci(6)