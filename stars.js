const starCount = 50; // 星の数

  const sizes = ["small", "medium", "large"];
  const container = document.getElementById("stars");

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");

    // クラス
    star.className = "star " + sizes[Math.floor(Math.random() * sizes.length)];

    // ランダム位置（画面全体）
    star.style.top  = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    // きらめきのズレ
    star.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(star);
  }