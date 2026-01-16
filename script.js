'use strict';

// document.getElementById("btn").addEventListener("click", function () {
//   getName();
// });

// function getName() {
//   let namae = document.getElementById("namae").value;
//   if (name !== "") {
//     document.getElementById("output").textContent = name + "さん こんにちは";
//   } else {
//     document.getElementById("output").textContent = "名前を入力してください";
//   }
// }



// document.getElementById("btn").addEventListener("click",function(){
//   getName();
// });
// function getName(){
//   let namae = document.getElementById("namae").value.trim();
//   if (namae.length  >= 3){
//     document.getElementById("output").textContent = namae + "さん こんにちは";
//     document.getElementById("namae").value = "";
//   }else {
//     document.getElementById("output").textContent = "名前は3文字以上で入力してください";
//   }
// }



// document.getElementById("btn").
//   addEventListener("click", function () {
//     getName();
//   });

// function getName() {
//   let namae = document.getElementById("namae").value.trim();
//   if (namae.length >= 3) {
//     document.getElementById("output").textContent = namae + "さん こんにちは";
//     document.getElementById("namae").value = "";
//   } else {
//     document.getElementById("output").textContent = "名前を入力してください";
//   }
// }



// document.getElementById("btn").addEventListener("click", function () {
//   getName();
// });

// function getName() {
//   let namae = document.getElementById("namae").value.trim();
//   let output = document.getElementById("output");

//   output.classList.remove("error","success") ;

//   if (namae === "") {
//     document.getElementById("output").textContent = "名前を入力してください";
//     output.classList.add("error");

//   } else if (namae.length < 3) {
//     document.getElementById("output").textContent = "3文字以上で入力してください";
//     output.classList.add("error");

//   } else {
//     document.getElementById("output").textContent = namae + "さん こんにちは"
//     document.getElementById("namae").value = "";
//     output.classList.add("success");
//   }
// }




// document.getElementById("btn").addEventListener("click",function(){
//   getName();
// });

// function getName(){
//   let namae = document.getElementById("namae").value;

//   if (namae === "") {
//     console.log("名前を入力してください");
//   }else {
//     console.log(namae);
//   }
// }




// document.getElementById("btn").addEventListener("click",function(){
//   getName();
// })

// function getName(){
//   let namae = document.getElementById("namae").value.trim();

//   if(namae === ""){
//     console.log("エラー");
//   }else if(namae.length < 3){
//     console.log("エラー");
//   }else{
//     console.log(namae);
//   }
// }




// document.getElementById("btn").addEventListener("click", function () {
//   getName();
// })

// function getName() {
//   let namae = document.getElementById("namae").value.trim();
//   let output = document.getElementById("output");

//   output.classList.remove("error", "success");

//   if (namae === "") {
//     output.textContent = "名前を入力してください";
//     output.classList.add("error");
//   } else if (namae.length < 3) {
//     output.textContent = "3文字以上で入力してください";
//     output.classList.add("error");
//   } else {
//     output.textContent = namae + "さん こんにちは";
//     output.classList.add("success");
//   }
// }



// 1月14日
// 【問題①】Enterキーを検知してみよう（表示だけ）
// document.getElementById("btn").addEventListener("click", function () {
//   getName();
// });

// function getName() {
//   let namae = document.getElementById("namae").value.trim();
//   let output = document.getElementById("output");

//   output.classList.remove("error", "success");
//   if (namae === "") {
//     output.textContent = "名前を入力してください";
//     output.classList.add("error");
//   } else if (namae.length < 3) {
//     output.textContent = "3文字以上で入力してください";
//     output.classList.add("error");
//   } else {
//     output.textContent = namae + "さん こんにちは";
//     output.classList.add("success");
//   }
// }

// document.getElementById("namae").addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     getName();
//   }
// });




// 1月16日 enter
document.getElementById("btn").addEventListener("click",function(){
  getName();
});

function getName(){
  let namae = document.getElementById("namae").value.trim();
  let output = document.getElementById("output");
  output.classList.remove("error","success");

  if(namae === ""){
    output.textContent = "名前を入力してください";
    output.classList.add("error");
  }else if(namae.length < 3){
    output.textContent = "3文字以上で入力してください";
    output.classList.add("error");
  }else {
    output.textContent = namae + "さん こんにちは";
    output.classList.add("success");
  }
}


document.getElementById("namae").addEventListener("keydown",function(e){
  if(e.key === "Enter"){
    e.preventDefault();
    getName();
  }
});
