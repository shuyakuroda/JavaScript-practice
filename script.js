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
// document.getElementById("btn").addEventListener("click",function(){
//   getName();
// });

// function getName(){
//   let namae = document.getElementById("namae").value.trim();
//   let output = document.getElementById("output");
//   output.classList.remove("error","success");

//   if(namae === ""){
//     output.textContent = "名前を入力してください";
//     output.classList.add("error");
//   }else if(namae.length < 3){
//     output.textContent = "3文字以上で入力してください";
//     output.classList.add("error");
//   }else {
//     output.textContent = namae + "さん こんにちは";
//     output.classList.add("success");
//   }
// }


// document.getElementById("namae").addEventListener("keydown",function(e){
//   if(e.key === "Enter"){
//     e.preventDefault();
//     getName();
//   }
// });



// 1月17日 配列
// let fruits = ["りんご","ばなな","みかん"];
// console.log(fruits[1]);

// let errors = ["名前を入力してください","3文字以上で入力してください"];
// console.log(errors.length);

// let messages = ["入力してください","短すぎます","OKです"];
// console.log(messages.length);

// let colors = ["赤","青","黄"];
// console.log(colors[1]);

// document.getElementById("btn").addEventListener("click", function () {
//   getName();
// });

// document.getElementById("namae").addEventListener("keydown",function(e){
//   if(e.key === "Enter"){
//     e.preventDefault();
//     getName();
//   }
// });

// function getName() {
//   let messages = ["名前を入力してください", "3文字以上で入力してください"];

//   let namae = document.getElementById("namae").value.trim();

//   let output = document.getElementById("output");

//   output.classList.remove("error","success");

//   if (namae === "") {
//     output.textContent = messages[0];
//     output.classList.add("error");
//   } else if (namae.length < 3) {
//     output.textContent = messages[1];
//     output.classList.add("error");
//   } else {
//     output.textContent = namae + "さん こんにちは";
//     output.classList.add("success");
//   }
// }



// // 1月20日 ちょっと復習
// document.getElementById("btn").addEventListener("click",function(){
//   getName();
// });

// document.getElementById("namae").addEventListener("keydown",function(e){
//   if (e.key === "Enter"){
//     e.preventDefault();
//     getName();
//   }
// });

// function getName(){
//   let namae = document.getElementById("namae").value.trim();
//   let output = document.getElementById("output");
//   const message = ["名前を入力してください","3文字以上で入力してください"];
//   output.classList.remove("error","success");

//   if(namae === ""){
//     output.textContent = message[0];
//     output.classList.add("error");
//   }else if(namae.length < 3){
//     output.textContent = message[1];
//     output.classList.add("error");
//   }else {
//     output.textContent = namae + "さん こんにちは";
//     output.classList.add("success");
//   }
// }


// 1月21日 オブジェクト（連想配列）
// const user = {name: "しゅうや",age:25};
// console.log(user.name);

// const messages = {empty: "名前を入力してください", short: "3文字以上で入力してください"};
// console.log(messages.empty);
// console.log(messages.short);

// document.getElementById("btn").addEventListener("click",function(){
//   getName();
// });
// document.getElementById("namae").addEventListener("keydown",function(e){
//   if(e.key === "Enter"){
//     e.preventDefault();
//     getName();
//   }
// })

// const messages = { empty: "名前を入力してください", short: "3文字以上で入力してください" };

// function getName(){
//   let namae = document.getElementById("namae").value.trim();
//   let output = document.getElementById("output");
//   output.classList.remove("error","success");

//   if(namae === ""){
//     output.textContent = messages.empty;
//     output.classList.add("error");
//   }else if(namae.length < 3){
//     output.textContent = messages.short;
//     output.classList.add("error");
//   }else {
//     output.textContent = namae + "さん こんにちは";
//     output.classList.add("success");
//     document.getElementById("namae").value = "";
//     document.getElementById("namae").focus();
//   }
// }



// 1月22日ポートフォリオ風(名刺作成ジェネレーター)
// document.getElementById("btn").addEventListener("click",function(){
//   generateCard();
// });

// document.getElementById("namae").addEventListener("keydown",function(e){
//   if(e.key === "Enter"){
//     e.preventDefault();
//     generateCard();
//   }
// });
// document.getElementById("job").addEventListener("keydown",function(e){
//   if(e.key === "Enter"){
//     e.preventDefault();
//     generateCard();
//   }
// });

document.getElementById("cardForm").addEventListener("submit",function(e){
  e.preventDefault();
  generateCard();
});

const messages = {
  empty: "すべての項目を入力してください",
  short: "お名前は3文字以上で入力してください"
};

function generateCard(){
  const namae = document.getElementById("namae").value.trim();
  const job = document.getElementById("job").value.trim();
  const output = document.getElementById("output");
  const card = document.getElementById("cardPreview");
  output.classList.remove("error","success");

  if(namae === "" || job === ""){
    output.textContent = messages.empty;
    output.classList.add("error");
    card.style.display = "none";
    return;
  }

  if(namae.length < 3) {
    output.textContent = messages.short;
    output.classList.add("error");
    card.style.display = "none";
    return;
  }

  document.getElementById("displayName").textContent = namae;
  document.getElementById("displayJob").textContent = job;
  output.textContent = "名刺が完成しました!";
  output.classList.add("success");
  card.style.display = "flex";
  document.getElementById("namae").value = "";
  document.getElementById("job").value = "";
}

