// 1
const successPromise = () =>{
    let promise = new Promise((resolve, reject) => {
        resolve("Success!");
    })
    return promise

};

// successPromise()
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e))


// 2
const getFname = (firstName, lastName) => {
    let fName = `${firstName + " " + lastName}`;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fName);
        }, 1000)
    })
    return promise

};

// getFname("da", "le")
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e))
    

// 3
const addFive = (num) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
        resolve(num + 5);
    }, 500)
    })
    return promise
};
const multiplyByTwo = (num) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
        resolve(num * 2);
    }, 500)
    })
    return promise
};
const subtractTen = (num) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
        resolve(num - 10);
    }, 500)
    })
    return promise
};


// addFive(10)
//     .then(numFive =>  multiplyByTwo(numFive))
//     .then(nomSub => subtractTen(nomSub))
//     .then(res => console.log(res))


// 4
const divide = (num1, num2) => {
    let promise = new Promise((resolve, reject) => {
        if (num2 == 0){
            reject("Cannot be divided by zero")
        }
        setTimeout(() => {
        resolve(num1 / num2);
    }, 500)
    })
    return promise
};

// divide(10, 0)
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e))


// 5A
async function getFnameAsyncOperations() {
    try {
    const result = await getFname("da", "le");
    console.log(result);
    
    } catch (error) {
    console.error(error);
    }
   };

// getFnameAsyncOperations("da", "le");


// 5B
async function ArithmeticAsyncOperations() {
    try {
        const numFive = await addFive(10)
        const numMulti = await multiplyByTwo(numFive);
        const nomSub = await subtractTen(numMulti);
        await console.log(nomSub);
        
    } catch (error) {
    console.error(error);
    }
   };

// ArithmeticAsyncOperations()


// 6
async function divideAsyncOperations() {
    try {
    const result = await divide(10, 5);
    console.log(result);
    
    } catch (error) {
    console.error(error);
    }
   };
// divideAsyncOperations();