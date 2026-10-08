---
layout: home
markdownStyles: false
---

<script setup>
import { withBase } from 'vitepress'
</script>

<main class="knowledge-home">
<section class="knowledge-hero" aria-labelledby="knowledge-home-title">
<img
  class="knowledge-hero-art knowledge-hero-art--light"
  :src="withBase('/home/knowledge-map-light.png')"
  alt=""
  aria-hidden="true"
>
<img
  class="knowledge-hero-art knowledge-hero-art--dark"
  :src="withBase('/home/knowledge-map-dark.png')"
  alt=""
  aria-hidden="true"
>
<div class="knowledge-hero-principles" aria-label="学习原则">
<img :src="withBase('/home/learning-path-markers.png')" alt="" aria-hidden="true">
<div>
<div>从问题出发</div><div style="margin-top:8px;">用实践验证</div><div style="margin-top:8px;">回看连接</div>
</div>
</div>

<div class="knowledge-hero-copy">
<h1 id="knowledge-home-title">让每一次学习，<span>都有迹可循。</span></h1>
<p class="knowledge-hero-summary">构建属于自己的技术知识地图，在实践中理解，在连接中成长。</p>
<a class="knowledge-hero-action" href="#knowledge-map">探索知识地图 <span aria-hidden="true">→</span></a>
</div>
</section>

<section id="knowledge-map" class="knowledge-map" aria-labelledby="knowledge-map-title">
<header class="knowledge-map-heading">
<div class="knowledge-map-title">
<img :src="withBase('/home/knowledge-map-icon.png')" alt="" aria-hidden="true">
<h2 id="knowledge-map-title">知识地图</h2>
</div>
<p class="knowledge-map-principles">从问题出发 · 用实践验证 · 回看连接</p>
</header>

<nav class="knowledge-map-grid" aria-label="知识库分类">
<a class="knowledge-map-card knowledge-map-card--blue" :href="withBase('/frontend/')">
<div class="knowledge-map-card-top">
<span>01</span>
<span class="knowledge-map-card-enter" aria-hidden="true">→</span>
</div>
<img class="knowledge-map-card-art" :src="withBase('/home/category-icons/frontend.png')" alt="" aria-hidden="true">
<h3>前端</h3>
<p>构建可交互的用户界面<br>让想法看得见、用得好。</p>
<div class="knowledge-map-card-tags" aria-label="相关主题">
<span>TypeScript</span><span>Vue</span><span>React</span><span>HTML</span><span>CSS</span><span>Vite</span><span>工程化</span>
</div>
</a>

<a class="knowledge-map-card knowledge-map-card--green" :href="withBase('/version-control/')">
<div class="knowledge-map-card-top">
<span>02</span>
<span class="knowledge-map-card-enter" aria-hidden="true">→</span>
</div>
<img class="knowledge-map-card-art" :src="withBase('/home/category-icons/version-control.png')" alt="" aria-hidden="true">
<h3>版本控制</h3>
<p>管理代码的变更历史<br>让协作更简单、更安全。</p>
<div class="knowledge-map-card-tags" aria-label="相关主题">
<span>Git</span><span>SVN</span><span>分支管理</span><span>代码合并</span><span>冲突解决</span><span>远程仓库</span>
</div>
</a>

<a class="knowledge-map-card knowledge-map-card--violet" :href="withBase('/nodejs/')">
<div class="knowledge-map-card-top">
<span>03</span>
<span class="knowledge-map-card-enter" aria-hidden="true">→</span>
</div>
<img class="knowledge-map-card-art" :src="withBase('/home/category-icons/nodejs.png')" alt="" aria-hidden="true">
<h3>Node.js</h3>
<p>基于 JavaScript 的后端运行时<br>连接前后端，构建高效的服务。</p>
<div class="knowledge-map-card-tags" aria-label="相关主题">
<span>Express</span><span>npm</span><span>中间件</span><span>RESTful API</span><span>项目部署</span><span>性能优化</span>
</div>
</a>

<a class="knowledge-map-card knowledge-map-card--orange" :href="withBase('/java/')">
<div class="knowledge-map-card-top">
<span>04</span>
<span class="knowledge-map-card-enter" aria-hidden="true">→</span>
</div>
<img class="knowledge-map-card-art" :src="withBase('/home/category-icons/java.png')" alt="" aria-hidden="true">
<h3>Java</h3>
<p>构建稳定、可扩展的企业级应用<br>在复杂场景中保持可靠。</p>
<div class="knowledge-map-card-tags" aria-label="相关主题">
<span>Spring Boot</span><span>Maven</span><span>Spring Cloud</span><span>JVM</span><span>多线程</span><span>设计模式</span>
</div>
</a>

<a class="knowledge-map-card knowledge-map-card--sky" :href="withBase('/python/')">
<div class="knowledge-map-card-top">
<span>05</span>
<span class="knowledge-map-card-enter" aria-hidden="true">→</span>
</div>
<img class="knowledge-map-card-art" :src="withBase('/home/category-icons/python.png')" alt="" aria-hidden="true">
<h3>Python</h3>
<p>用简洁的语言解决实际问题<br>在自动化与数据中发现更多可能。</p>
<div class="knowledge-map-card-tags" aria-label="相关主题">
<span>爬虫</span><span>FastAPI</span><span>数据分析</span><span>自动化脚本</span><span>数据可视化</span><span>机器学习</span>
</div>
</a>

<a class="knowledge-map-card knowledge-map-card--teal" :href="withBase('/mysql/mysql-overview')">
<div class="knowledge-map-card-top">
<span>06</span>
<span class="knowledge-map-card-enter" aria-hidden="true">→</span>
</div>
<img class="knowledge-map-card-art" :src="withBase('/home/category-icons/mysql.png')" alt="" aria-hidden="true">
<h3>MySQL</h3>
<p>存储和管理数据<br>让信息更有结构、更易于利用。</p>
<div class="knowledge-map-card-tags" aria-label="相关主题">
<span>SQL</span><span>多表查询</span><span>索引优化</span><span>事务</span><span>数据库设计</span><span>性能调优</span>
</div>
</a>
</nav>
</section>
</main>

<style>
.VPHome {
  --knowledge-ink: #0d1b37;
  --knowledge-muted: #60708d;
  --knowledge-blue: #2667ee;
  --knowledge-border: #dbe5f6;
  --knowledge-surface: rgba(255, 255, 255, 0.88);
  position: relative;
  overflow: hidden;
  background: #fbfdff;
}

.VPNavBarTitle .logo {
  height: 42px !important;
}

.VPNavBar .container {
  transform: translateY(-5px);
}

.VPNavBar .wrapper {
  padding-right: 16px;
}


.knowledge-home {
  width: min(1152px, calc(100% - 56px));
  margin: 0 auto;
  padding: 0 0 72px;
}

.knowledge-hero {
  position: relative;
  display: grid;
  width: 100vw;
  min-height: 216px;
  margin-left: calc(50% - 50vw);
  place-items: center;
  overflow: hidden;
  border-bottom: 1px solid rgba(197, 211, 235, 0.54);
}

.knowledge-hero-art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

.knowledge-hero-art--dark { display: none; }

.knowledge-hero-copy {
  position: relative;
  z-index: 2;
  width: min(760px, 100%);
  padding: 24px 24px 19px;
  text-align: center;
}

.knowledge-hero-principles {
  position: absolute;
  top: 39px;
  left: 10vw;
  color: #4e6a98;
  font-size: 12px;
  font-weight: 650;
  line-height: 1;
  text-align: left;
}

.knowledge-hero-principles > img {
  position: absolute;
  top: -17px;
  left: -24px;
  width: 52px;
  height: 134px;
  object-fit: fill;
}

.knowledge-hero-principles > div {
  display: grid;
  gap: 25px;
  padding-left: 20px;
}

.knowledge-hero-principles span {
  display: block;
}

.knowledge-hero h1 {
  max-width: 740px;
  margin: 10px auto 0;
  color: var(--knowledge-ink);
  font-size: clamp(36px, 4.45vw, 56px);
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 1.14;
}

.knowledge-hero h1 span { color: var(--knowledge-blue); }

@media (min-width: 701px) {
  .knowledge-hero h1 {
    transform: translate(38px, -4px);
  }

  .knowledge-hero h1 span {
    position: relative;
    left: -24px;
    letter-spacing: -0.1em;
  }
}

.knowledge-hero-summary {
  max-width: 550px;
  margin: 6px auto 0;
  color: var(--knowledge-muted);
  font-size: 16px;
  line-height: 1.8;
}

.knowledge-hero-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  margin-top: 8px;
  padding: 0 26px;
  border-radius: 9px;
  background: var(--knowledge-blue);
  box-shadow: 0 13px 27px rgba(38, 103, 238, 0.22);
  color: #fff !important;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none !important;
  transform: translate(2px, -1px);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.knowledge-hero-action:hover {
  background: #1e58d5;
  box-shadow: 0 17px 32px rgba(38, 103, 238, 0.28);
  transform: translate(2px, -3px);
}

.knowledge-map {
  scroll-margin-top: 80px;
  padding-top: 25px;
}

.knowledge-map-heading {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 21px;
}

.knowledge-map-title {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
}

.knowledge-map-title img {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.knowledge-map-heading h2 {
  margin: 0;
  color: var(--knowledge-ink);
  font-size: 27px;
  letter-spacing: -0.05em;
  line-height: 1.15;
}

.knowledge-map-principles {
  margin: 0;
  color: #91a4c5;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.01em;
}

.knowledge-map-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr) minmax(0, 1.05fr);
  column-gap: 60px;
  row-gap: 21px;
}

.knowledge-map-card {
  --category-color: #3182f6;
  position: relative;
  display: flex;
  min-height: 182px;
  flex-direction: column;
  padding: 9px 19px 12px;
  border: 1px solid var(--knowledge-border);
  border-left: 5px solid var(--category-color);
  border-radius: 7px;
  background: var(--knowledge-surface);
  box-shadow: 0 11px 26px rgba(29, 68, 133, 0.045);
  color: inherit;
  text-decoration: none !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.knowledge-map-card--green { --category-color: #2dbf80; }
.knowledge-map-card--violet { --category-color: #7968f4; }
.knowledge-map-card--orange { --category-color: #f28b3b; }
.knowledge-map-card--sky { --category-color: #3f91fa; }
.knowledge-map-card--teal { --category-color: #20b989; }

.knowledge-map-card:hover {
  border-color: var(--category-color);
  box-shadow: 0 19px 38px rgba(29, 68, 133, 0.12);
  transform: translateY(-4px);
}

.knowledge-map-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--category-color);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.knowledge-map-card-enter {
  display: grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--category-color) 24%, transparent);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.68);
  color: var(--category-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
}

.knowledge-map-card-art {
  position: absolute;
  right: 0;
  bottom: 27px;
  z-index: 0;
  width: 120px;
  height: 120px;
  object-fit: contain;
  pointer-events: none;
}

.knowledge-map-card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 5px;
  color: var(--knowledge-ink);
  font-size: 22px;
  letter-spacing: -0.045em;
  line-height: 1.1;
}

.knowledge-map-card p {
  position: relative;
  z-index: 1;
  max-width: 78%;
  margin: 0;
  color: var(--knowledge-muted);
  font-size: 12px;
  line-height: 1.5;
}

.knowledge-map-card-tags {
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 72%;
  flex-wrap: wrap;
  gap: 4px;
  margin: auto 0 0;
  padding: 9px 0 0;
}

.knowledge-map-card:nth-child(3) .knowledge-map-card-tags,
.knowledge-map-card:nth-child(4) .knowledge-map-card-tags,
.knowledge-map-card:nth-child(5) .knowledge-map-card-tags {
  max-width: 100%;
}

.knowledge-map-card-tags span {
  padding: 6px 7px;
  border: 1px solid color-mix(in srgb, var(--category-color) 22%, transparent);
  border-radius: 5px;
  background: color-mix(in srgb, var(--category-color) 5%, transparent);
  color: #50688e;
  font-size: 10px;
  line-height: 1;
}

@media (min-width: 768px) and (max-width: 1279px) {
  .VPNavBar .appearance {
    display: flex !important;
    align-items: center;
  }

  .VPNavBar .extra {
    display: none !important;
  }
}




.dark .VPHome {
  --knowledge-ink: #f4f7ff;
  --knowledge-muted: #aab9d2;
  --knowledge-blue: #76a8ff;
  --knowledge-border: rgba(148, 174, 221, 0.18);
  --knowledge-surface: rgba(18, 27, 46, 0.88);
  background: #0d1525;
}

.dark .knowledge-hero { border-bottom-color: rgba(148, 174, 221, 0.16); }
.dark .knowledge-hero-art--dark { display: block; }
.dark .knowledge-hero-action { background: #5c96ff; box-shadow: 0 14px 30px rgba(50, 112, 255, 0.25); }
.dark .knowledge-hero-action:hover { background: #79a9ff; }
.dark .knowledge-map-card { box-shadow: none; }
.dark .knowledge-map-card:hover { box-shadow: 0 19px 38px rgba(0, 0, 0, 0.24); }
.dark .knowledge-map-card-enter { background: rgba(13, 21, 37, 0.62); }
.dark .knowledge-map-card-tags span { color: #c5d3e9; }

@media (max-width: 960px) {
  .knowledge-map-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .knowledge-home { width: min(100% - 32px, 1152px); padding-top: 0; }

  .knowledge-hero {
    min-height: 390px;
    margin: 0 -16px;
  }

  .knowledge-hero-art { width: 154%; max-width: none; left: -27%; }
  .knowledge-hero-copy { padding: 70px 24px 54px; }
  .knowledge-hero h1 { font-size: clamp(36px, 10.8vw, 50px); }
  .knowledge-hero h1 { transform: none; }
  .knowledge-hero h1 span { position: static; letter-spacing: -0.07em; }
  .knowledge-hero-summary { font-size: 15px; }
  .knowledge-hero-principles { position: static; margin-bottom: 16px; font-size: 10px; }
  .knowledge-hero-principles > img { display: none; }
  .knowledge-hero-principles > div { justify-content: center; gap: 0; padding-left: 0; grid-auto-flow: column; }

  .knowledge-map { padding-top: 48px; }
  .knowledge-map-heading { align-items: flex-start; flex-direction: column; gap: 10px; }
}

@media (max-width: 560px) {
  .knowledge-hero { min-height: 360px; }
  .knowledge-map-grid { grid-template-columns: 1fr; }
  .knowledge-map-card { min-height: 194px; }
}

@media (prefers-reduced-motion: reduce) {
  .knowledge-hero-action,
  .knowledge-map-card { transition: none; }
}
</style>
