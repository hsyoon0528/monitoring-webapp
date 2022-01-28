## package.json

scripts

## ES6

스코프 = 변수의 접근성을 책임지는 보호막

var 함수 안에서 접근 가능한 스코프 => 함수 스코프를 가지므로 함수 최상단 호이스팅 (함수 외부에서 영향을 미침)

let, const 블록 {} 안에서 접근 가능한 블록 스코프 ({}내부에서만 참조)

var 선언시 선언 동시에 undefined 초기화

=> 특징 : 생성자 함수로 사용할수 없고 arguments를 지원하지 않음. 

```js
//ES5

function a(){
    return 1
}

//ES6

const a_ES6 = () => 1
//or
const a_2 = () => {
    return 1
}


```

forEach, map, filter, reduce


# async

![](2022-01-26-12-42-56.png)


