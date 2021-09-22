import '../scss/style.scss'

const p1 = document.getElementById('place1');


//Demo
// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('callback function fired...')
// },300);
// console.log(3);
// console.log(4);



//HTTP request

// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange',()=>{
//     // console.log(request,request.readyState);
//     if(request.readyState===4 && request.status === 200){
//         console.log(JSON.parse(request.responseText));
//     }
// });
// request.open('GET','https://jsonplaceholder.typicode.com/todos');
// request.send();








//CallBack function

// const getURL = (url, callback) => {
//     let res;
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         // console.log(request,request.readyState);
//         if (request.readyState === 4) {
//             if (request.status === 200) {
//                 res = JSON.parse(request.responseText);
//                 callback(undefined, res);
//                 console.log(res);
//             }
//             else {
//                 res = 'something wrong ' + request.status;
//                 callback(res, undefined);
//             }
//         } else {
//             res = 'bad request ' + request.status;
//             callback(res, undefined);
//         }
//     });

//     try {
//         request.open('GET', url);
//         request.send();
//     }
//     catch (e) { console.log(e); }
// }


// const getURLCallback = (err, data) => {
//     if (err) {
//         return err;
//     } else {
//         return data;
//     }
// }


// getURL('https://jsonplaceholder.typicode.com/todos',getURLCallback);

// getURL('data.json',getURLCallback);
// getURL('data2.json',getURLCallback);









// Promises

// let promise1 = new Promise(
//     (resolve, reject) => {
//         let a = 1 + 1;
//         if (a == 2) {
//             resolve(a)
//         }
//         else {
//             reject('fail')
//         }
//     }
// )


// promise1.then((result) => {
//     p1.innerHTML = result * 10;
//     console.log('promise completed');
// }).catch((r) => {
//     p1.innerHTML = r;
// });

// console.log('after promise code completed');






// const pr1 = new Promise(
//     (s, e) => {
//         if (false) { e('pr1 not resolved') }
//         s('pr1 resolved ')

//     }
// )
// const pr2 = new Promise(
//     (s, e) => {
//         s('pr2 resolved ')
//     }
// )
// const pr3 = new Promise(
//     (s, e) => {
//         s('pr3 resolved')
//     }
// )

// // Promise.race([pr1, pr2, pr3]).then((results) => {
// //     console.log(results);
// // }).catch((e) => { console.log(e) })








// // Async await 

// async function doPromises() {
//     let s1 = "";
//     try {
//         const promise1 = await pr1;
//         const promise2 = await pr2;
//         const promise3 = await pr3;
//         return await promise1 + promise2 + promise3;

//     } catch (e) {
//         console.log(e);
//     }

// }

// let res = doPromises();

// (async () => {
//     // p1.innerText = await res;
//     console.log(await res);
// })();


// Promise instead callback
// const getURL = (url) => {
//     let res;
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             // console.log(request,request.readyState);
//             if (request.readyState === 4) {
//                 if (request.status === 200) {
//                     res = JSON.parse(request.responseText);
//                     resolve(res);
//                     // console.log(res);
//                 }
//                 else {
//                     res = 'something wrong ' + request.status;
//                     reject(res);
//                 }
//             }
//         });
//         try {
//             request.open('GET', url);
//             request.send();
//         }
//         catch (e) { console.log(e); }
//     })
// }

// getURL('https://jsonplaceholder.typicode.com/todos')
//     .then(r => {
//         console.log(r);
//         return getURL('data.json');
//     })
//     .then(r => {
//         console.log(r);
//         return getURL('data2.json')
//     })
//     .then(r=> console.log(r))
//     .then(r=>console.log("finished"))
//     .catch(e => console.log(e));






    // Fetch API

    fetch('data.json')
    .then(r=> {return r.json()})
    .then(r=>console.log(r));




