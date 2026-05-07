// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
        }
    });
});

// スクロールでふわっと表示
const elements = document.querySelectorAll("h2, p, ul, .button-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        }
    });
});

elements.forEach(el => observer.observe(el));

// クリック計測（Cloudflare対応）
function trackClick(label) {
    if (window.plausible) {
        plausible(label);
    }
    console.log("クリック:", label);
}

// 楽天
document.querySelectorAll(".track-rakuten").forEach(btn => {
    btn.addEventListener("click", () => {
        trackClick("rakuten_click");
    });
});

// ドメイン
document.querySelectorAll(".track-domain").forEach(btn => {
    btn.addEventListener("click", () => {
        trackClick("domain_click");
    });
});

// スクール
document.querySelectorAll(".track-school").forEach(btn => {
    btn.addEventListener("click", () => {
        trackClick("school_click");
    });
});

// ヘッダー影追加
window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");

    if (window.scrollY > 10) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// TOPへ戻るボタン
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});