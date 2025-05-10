//btnのHTML要素を取得し定数に代入
const clickBtn = document.getElementById("btn");

//clickBtnがクリックされたらイベント実行
clickBtn.addEventListener("click", () => {
  //h2のID textを取得して代入
  const newText = document.getElementById("text");
  newText.textContent = "ボタンをクリックしました";
  console.log(newText);
});
