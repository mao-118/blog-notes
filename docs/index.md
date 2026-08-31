---
layout: home
markdownStyles: false

hero:
  name: '个人技术笔记'
  text: '把学过的知识，变成随时可查的路径'
  tagline: '持续整理前端、Java、MySQL、Node.js 与工程实践，让每一次学习都有迹可循。'
  actions:
    - theme: brand
      text: 从前端开始
      link: /frontend/
    - theme: alt
      text: 查看 Java 笔记
      link: /java/
---

<main class="home-explore">
<section class="home-status" aria-label="站点说明">
<span class="home-status-badge"><i></i> 持续更新</span>
<p>以技术主题归档，以真实实践沉淀，写给正在学习的自己。</p>
<div class="home-status-keywords" aria-label="内容关键词">
<span>前端工程</span>
<span>Java 后端</span>
<span>数据库</span>
<span>项目部署</span>
</div>
</section>
<section class="home-section" aria-labelledby="knowledge-map-title">
<header class="home-section-heading">
<div>
<span class="home-eyebrow">KNOWLEDGE MAP</span>
<h2 id="knowledge-map-title">按技术方向快速进入</h2>
</div>
<p>从基础概念到项目实践，沿着清晰的主题继续阅读。</p>
</header>
<div class="home-topic-grid">
<a class="home-topic-card home-topic-card--blue" href="./frontend/">
<div class="home-topic-meta">
<span>01 / FRONTEND</span>
<b aria-hidden="true">↗</b>
</div>
<h3>前端开发</h3>
<p>构建浏览器端应用所需的语言、框架与工程化知识。</p>
<div class="home-topic-tags">
<span>TypeScript</span><span>Vue</span><span>React</span><span>Webpack</span>
</div>
</a>
<a class="home-topic-card home-topic-card--violet" href="./java/">
<div class="home-topic-meta">
<span>02 / BACKEND</span>
<b aria-hidden="true">↗</b>
</div>
<h3>Java 后端</h3>
<p>围绕真实 Web 项目，整理从开发框架到部署落地的完整链路。</p>
<div class="home-topic-tags">
<span>Spring Boot</span><span>Maven</span><span>AOP</span><span>Docker</span>
</div>
</a>
<a class="home-topic-card home-topic-card--teal" href="./mysql/">
<div class="home-topic-meta">
<span>03 / DATA</span>
<b aria-hidden="true">↗</b>
</div>
<h3>MySQL 数据库</h3>
<p>从 SQL 基础出发，逐步理解数据模型、多表关系与查询实践。</p>
<div class="home-topic-tags">
<span>SQL</span><span>数据模型</span><span>多表查询</span><span>事务</span>
</div>
</a>
</div>
</section>
<section class="home-learning-path" aria-labelledby="learning-path-title">
<div class="home-path-copy">
<span class="home-eyebrow">LEARNING PATH</span>
<h2 id="learning-path-title">一条更容易坚持的学习路径</h2>
<p>先建立概念，再动手实践，最后把知识放进真实项目里验证。</p>
</div>
<ol class="home-path-steps">
<li><span>01</span><div><strong>理解基础</strong><small>语言 · 协议 · 数据结构</small></div></li>
<li><span>02</span><div><strong>掌握工具</strong><small>框架 · 构建 · 版本控制</small></div></li>
<li><span>03</span><div><strong>完成实践</strong><small>项目 · 调试 · 部署</small></div></li>
</ol>
</section>
<nav class="home-quick-links" aria-label="其他技术栏目">
<span>继续探索</span>
<a href="./nodejs/">Node.js <i aria-hidden="true">→</i></a>
<a href="./version-control/">版本控制 <i aria-hidden="true">→</i></a>
<a href="./python/">Python <i aria-hidden="true">→</i></a>
</nav>
</main>

<style>
.VPHome {
  --home-blue: #3975f6;
  --home-violet: #7657f6;
  --home-teal: #0d9f92;
  --home-surface: rgba(255, 255, 255, 0.72);
  --home-border: rgba(53, 76, 120, 0.13);
  --home-shadow: 0 22px 60px rgba(40, 64, 112, 0.1);
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(110deg, #2563eb 6%, #7657f6 58%, #0c9b91 100%);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 4%, rgba(57, 117, 246, 0.14), transparent 28rem),
    radial-gradient(circle at 88% 18%, rgba(118, 87, 246, 0.11), transparent 26rem),
    linear-gradient(180deg, rgba(245, 248, 255, 0.68), transparent 42rem);
}

.dark .VPHome {
  --home-surface: rgba(24, 27, 38, 0.7);
  --home-border: rgba(151, 168, 207, 0.16);
  --home-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
  --vp-home-hero-name-background: linear-gradient(110deg, #78a6ff 6%, #a98dff 58%, #5ed6c8 100%);
  background:
    radial-gradient(circle at 12% 4%, rgba(62, 112, 221, 0.2), transparent 30rem),
    radial-gradient(circle at 88% 18%, rgba(117, 77, 210, 0.17), transparent 27rem),
    linear-gradient(180deg, rgba(21, 24, 34, 0.64), transparent 42rem);
}

.VPHome::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.42;
  background-image:
    linear-gradient(rgba(85, 108, 150, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 108, 150, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(to bottom, black, transparent 40rem);
}

.VPHomeHero,
.home-explore {
  position: relative;
  z-index: 1;
}

.VPHomeHero .name,
.VPHomeHero .text {
  max-width: 760px;
  letter-spacing: -0.045em;
}

.VPHomeHero .name {
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.VPHomeHero .text {
  margin-top: 12px;
}

.VPHomeHero .tagline {
  max-width: 680px;
  color: var(--vp-c-text-2);
}

.VPHome .VPButton {
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.VPHome .VPButton:hover {
  transform: translateY(-2px);
}

.VPHome .VPButton.brand {
  border-color: transparent;
  background: linear-gradient(115deg, var(--home-blue), var(--home-violet));
  box-shadow: 0 12px 28px rgba(69, 95, 205, 0.24);
}

.home-explore {
  width: min(1152px, calc(100% - 48px));
  margin: 0 auto;
}

.home-status {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px 18px;
  border: 1px solid var(--home-border);
  border-radius: 16px;
  background: var(--home-surface);
  box-shadow: var(--home-shadow);
  backdrop-filter: blur(18px);
}

.home-status p {
  flex: 1;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.home-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.home-status-badge i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.12);
}

.home-status-keywords,
.home-topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.home-status-keywords span,
.home-topic-tags span {
  border: 1px solid var(--home-border);
  border-radius: 999px;
  background: rgba(127, 145, 180, 0.07);
  color: var(--vp-c-text-2);
  font-size: 12px;
  white-space: nowrap;
}

.home-status-keywords span {
  padding: 5px 9px;
}

.home-section {
  padding: 88px 0 72px;
}

.home-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 28px;
}

.home-eyebrow {
  display: block;
  margin-bottom: 8px;
  color: var(--home-blue);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.home-section-heading h2,
.home-path-copy h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: 1.25;
  font-size: clamp(26px, 3vw, 36px);
  letter-spacing: -0.035em;
}

.home-section-heading > p {
  max-width: 380px;
  margin: 0 0 4px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  font-size: 14px;
}

.home-topic-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.home-topic-card {
  --topic-color: var(--home-blue);
  --topic-glow: #4f8cff;
  position: relative;
  min-height: 280px;
  padding: 24px;
  overflow: hidden;
  border: 1px solid var(--home-border);
  border-radius: 22px;
  background: var(--home-surface);
  box-shadow: 0 12px 36px rgba(39, 60, 100, 0.07);
  text-decoration: none !important;
  backdrop-filter: blur(18px);
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.home-topic-card::after {
  content: '';
  position: absolute;
  right: -48px;
  bottom: -56px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: var(--topic-glow);
  filter: blur(8px);
  opacity: 0.16;
}

.home-topic-card:hover {
  border-color: color-mix(in srgb, var(--topic-color) 42%, transparent);
  transform: translateY(-6px);
  box-shadow: 0 24px 54px rgba(39, 60, 100, 0.14);
}

.home-topic-card--violet { --topic-color: var(--home-violet); --topic-glow: #8d6cff; }
.home-topic-card--teal { --topic-color: var(--home-teal); --topic-glow: #27baa9; }

.home-topic-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--topic-color);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.home-topic-meta b {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--topic-color) 24%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--topic-color) 8%, transparent);
  font-size: 17px;
  transition: transform 0.24s ease;
}

.home-topic-card:hover .home-topic-meta b {
  transform: translate(2px, -2px);
}

.home-topic-card h3 {
  margin: 38px 0 10px;
  color: var(--vp-c-text-1);
  font-size: 24px;
  letter-spacing: -0.025em;
}

.home-topic-card p {
  min-height: 52px;
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  font-size: 14px;
}

.home-topic-tags {
  position: absolute;
  right: 24px;
  bottom: 24px;
  left: 24px;
  z-index: 1;
}

.home-topic-tags span {
  padding: 4px 8px;
}

.home-learning-path {
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  gap: 54px;
  padding: 40px;
  border: 1px solid var(--home-border);
  border-radius: 24px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--home-blue) 7%, var(--home-surface)), var(--home-surface));
}

.home-path-copy p {
  margin: 16px 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.75;
  font-size: 14px;
}

.home-path-steps {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-path-steps li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid var(--home-border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.42);
}

.dark .home-path-steps li {
  background: rgba(255, 255, 255, 0.025);
}

.home-path-steps > li > span {
  color: var(--home-violet);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.home-path-steps div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
  width: 100%;
}

.home-path-steps strong {
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.home-path-steps small {
  color: var(--vp-c-text-3);
  font-size: 12px;
}

.home-quick-links {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 28px;
}

.home-quick-links > span {
  margin-right: auto;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.home-quick-links a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid var(--home-border);
  border-radius: 11px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.home-quick-links a:hover {
  border-color: rgba(57, 117, 246, 0.36);
  color: var(--home-blue);
  transform: translateY(-2px);
}

.home-quick-links i {
  font-style: normal;
}

@media (min-width: 640px) {
  .VPHomeHero .name {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (max-width: 900px) {
  .home-status-keywords {
    display: none;
  }

  .home-topic-grid {
    grid-template-columns: 1fr;
  }

  .home-topic-card {
    min-height: 250px;
  }

  .home-learning-path {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 640px) {
  .home-explore {
    width: min(100% - 32px, 1152px);
  }

  .home-status {
    align-items: flex-start;
    flex-direction: column;
    gap: 9px;
  }

  .home-section {
    padding: 64px 0 52px;
  }

  .home-section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .home-section-heading > p {
    max-width: none;
  }

  .home-learning-path {
    padding: 26px 20px;
  }

  .home-path-steps div {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .home-quick-links {
    align-items: stretch;
    flex-direction: column;
  }

  .home-quick-links > span {
    margin: 0 0 4px;
  }

  .home-quick-links a {
    justify-content: space-between;
  }
}

@media (prefers-reduced-motion: reduce) {
  .VPHome .VPButton,
  .home-topic-card,
  .home-topic-meta b,
  .home-quick-links a {
    transition: none;
  }
}
</style>
