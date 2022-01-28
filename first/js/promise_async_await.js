/*
자바스크립트의 실행환경인 node.js , 브라우저는 single thread 이자 non-blocking 성질이 있다.
I/O bound 작업등은 순차적으로 완료되지 않으며 비동기적으로 일어나게 됩니다.

blocking 을 막기위해 브라우저는 시간이 많이 걸리는 I/O bound 작업과 web API 의 setTimeout등의
작업이 비동기적으로 실행될 수 있도록 구축

I/O bound 작업 = DB 파일시스템 네트워크를 다루는 작업
CPU bound 작업 = CPU 자원을 사용하는 일을 다루는 작업

기본적으로 자바스크립트의 함수는 콜스택에 쌓였다가 POP이 되면서 동기적으로 실행됩니다. 
하지만 web APIs 의 setTimeout 함수, I/O bound 작업은 콜스택에 쌓인 다음 
바로 web APIs의 백그라운드 공간으로 넘어간 후 
비동기적으로 완료가 되면 콜백큐에 쌓이고
이벤트 루프를 이용해 다시 콜스택에 쌓여 호출됩니다.

*/