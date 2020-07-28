const promise = new Promise((resolve, reject) => {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            i++
            resolve(i)
        }, 1000);
     }
})

.finally(() => {
    console.log('done')
})