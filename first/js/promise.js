//promise 구현 로직1
//return new Promise((resolve,reject)=>{resolve()})
/*
Promise 안에 비동기함수 settimeout을 집어넣고 비동기 함수가 끝났을때
다음에 넘겨주고 싶은 값을 resolve 함수 안에 매개변수로 담아두는 방식
*/

const a = (c = "step1") =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${c} comming`)
        }, 1000)
    })
}

a().then(ret=>{
    console.log(ret)
    return a(`step2`)
}).then(ret=>{
    console.log(ret)
    return a(`step3`)
}).then(ret=>{
    console.log(ret)
})

