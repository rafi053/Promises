// 1
// const successPromise = () =>{
//     let promise = new Promise((resolve, reject) => {
//         resolve("Success!");
//     })
//     return promise

// };

// successPromise()
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e))


// 2
// const getFname = (firstName, lastName) => {
//     let fName = `${firstName + " " + lastName}`;
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(fName);
//         }, 1000)
//     })
//     return promise

// };

// getFname("da", "le")
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e))
    

// 3
const addFive = (num) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num + 5);
    }, 500)
    })
    return promise
};
const multiplyByTwo = (num) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num * 2);
    }, 500)
    })
    return promise
};
const subtractTen = (num) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num - 10);
    }, 500)
    })
    return promise
};


const result = addFive(10)
    .then(numFive =>  multiplyByTwo(numFive))
    .then(numMulti => multiplyByTwo(numMulti))
    .then(nomSub => subtractTen(nomSub))
    .then(res => console.log(res)
    )


