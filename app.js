// -----------------------------
// 1. 운세 문장 리스트
// -----------------------------
const fortunes = [
 "不管是咖啡还是别的，只要买了饮料，就给 yoon 发一张照片吧。",
 "晚餐要不要试试 yoon 喜欢的披萨？",
 "今天的任务：路上看到三只小狗，就拍下来发给 yoon。",
 "明天别穿黑色的了，试试有颜色的上衣吧。",
 "自拍拍五张，挑一张最好看的发给 yoon。",
 "推荐你听一下 Muse 的《Starlight》，听完发个照片给 yoon。",
 "要骂出来的时候先深呼吸一下，然后想想这份运势吧。",
 "（绝对不是因为我想要）惊喜礼物推荐你买一包宝可梦卡牌。",
 "画一只黄色的小猫，然后发给 yoon 吧。",
 "睁开眼睛去上班的你，真的很了不起，值得表扬。",
 "不管你带着好消息还是坏消息回家，我都会抱抱你，今天也加油。"
];

// -----------------------------
// 2. 운세 버튼 클릭 이벤트
// -----------------------------
document.getElementById("btn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  document.getElementById("result").textContent = fortunes[randomIndex];
});

// -----------------------------
// 3. 자동 슬라이드 기능
// -----------------------------
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const totalSlides = slideImages.length;

// 이미지 크기(px) — CSS와 반드시 동일해야 함
const slideWidth = 800;

function showSlide() {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// 1초마다 자동 전환
setInterval(showSlide, 1000);
