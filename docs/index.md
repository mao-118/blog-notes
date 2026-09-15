---
layout: home
markdownStyles: false

hero:
  name: '个人知识库'
  text: '记录理解，也记录成长'
  tagline: '这里不预设技术边界。把每一次学习、实践与复盘，整理成可回看、可连接、可继续生长的知识。'
  actions:
    - theme: brand
      text: 浏览当前内容
      link: '#knowledge-map'
    - theme: alt
      text: 查看整理方式
      link: '#learning-loop'
---

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { theme } = useData()

const collectionDetails = {
  '/frontend/': {
    eyebrow: '界面与体验',
    description: '语言、框架、交互与工程化实践。',
    tags: 'TypeScript · Vue · React · Webpack',
    tone: 'blue'
  },
  '/version-control/': {
    eyebrow: '协作与历史',
    description: '让每一次修改都有记录、可以追溯。',
    tags: 'Git · SVN · 团队协作',
    tone: 'slate'
  },
  '/nodejs/': {
    eyebrow: '运行时与工具',
    description: '服务端 JavaScript、模块与生态工具。',
    tags: '模块化 · Express · npm',
    tone: 'rose'
  },
  '/java/': {
    eyebrow: '服务与应用',
    description: '后端框架、数据访问与项目落地。',
    tags: 'Spring Boot · MyBatis · Maven',
    tone: 'violet'
  },
  '/python/': {
    eyebrow: '自动化与探索',
    description: '语言基础、网络采集与更多应用方向。',
    tags: '基础语法 · 爬虫 · FastAPI',
    tone: 'teal'
  },
  '/mysql/': {
    eyebrow: '数据与存储',
    description: '从数据模型到查询与关系设计。',
    tags: 'SQL · 多表查询 · 数据建模',
    tone: 'amber'
  }
}

const tones = ['blue', 'violet', 'teal', 'amber', 'rose', 'slate']

const collections = computed(() =>
  (theme.value.nav || [])
    .filter((item) => typeof item === 'object' && typeof item.link === 'string')
    .map((item, index) => ({
      ...item,
      eyebrow: collectionDetails[item.link]?.eyebrow || '新的知识领域',
      description: collectionDetails[item.link]?.description || '新的学习主题与实践记录。',
      tags: collectionDetails[item.link]?.tags || '持续整理中',
      tone: collectionDetails[item.link]?.tone || tones[index % tones.length]
    }))
)
</script>

<main class="home-explore">
<section class="home-status" aria-label="站点状态">
<span class="home-status-badge"><i></i> 持续生长</span>
<p>内容跟随兴趣、工作与问题不断扩展，不被某一种语言或技术栈定义。</p>
<div class="home-status-keywords" aria-label="知识库特点">
<span>学习笔记</span>
<span>实践记录</span>
<span>问题复盘</span>
<span>长期维护</span>
</div>
</section>

<section class="home-manifesto" aria-labelledby="manifesto-title">
<div class="home-manifesto-copy">
<span class="home-eyebrow">OPEN-ENDED KNOWLEDGE</span>
<h2 id="manifesto-title">技术会变化，知识之间的连接会留下。</h2>
<p>这不是一份写完就封存的目录，而是一张不断延伸的认知地图。新的语言、工具和领域可以随时加入，已有内容也会在实践中持续更新。</p>
<div class="home-principles" aria-label="整理原则">
<span><i>01</i> 从问题出发</span>
<span><i>02</i> 用实践验证</span>
<span><i>03</i> 与旧知识连接</span>
</div>
</div>
<div class="home-constellation" aria-hidden="true">
<span class="home-orbit home-orbit--outer"></span>
<span class="home-orbit home-orbit--inner"></span>
<span class="home-node home-node--center">知识</span>
<span class="home-node home-node--one">理解</span>
<span class="home-node home-node--two">实践</span>
<span class="home-node home-node--three">连接</span>
<span class="home-node home-node--four">复盘</span>
</div>
</section>

<section id="knowledge-map" class="home-section" aria-labelledby="knowledge-map-title">
<header class="home-section-heading">
<div>
<span class="home-eyebrow">KNOWLEDGE MAP</span>
<h2 id="knowledge-map-title">从已有内容出发，但不止于此</h2>
</div>
<p>下面是目前已经整理的入口。它们只是这张地图的起点，而不是边界。</p>
</header>

<nav class="home-collection-grid" aria-label="当前笔记分类">
<a
  v-for="collection in collections"
  :key="collection.link"
  :class="['home-collection-card', `home-collection-card--${collection.tone}`]"
  :href="withBase(collection.link)"
>
<div class="home-collection-top"><span>{{ collection.eyebrow }}</span><i aria-hidden="true">↗</i></div>
<h3>{{ collection.text }}</h3>
<p>{{ collection.description }}</p>
<small>{{ collection.tags }}</small>
</a>

<div class="home-collection-future">
<span class="home-future-mark" aria-hidden="true">＋</span>
<div>
<strong>新的主题持续加入</strong>
<p>不限定下一站，也不急着给学习划边界。</p>
</div>
<span class="home-future-note">TO BE CONTINUED</span>
</div>
</nav>
</section>

<section id="learning-loop" class="home-learning-loop" aria-labelledby="learning-loop-title">
<header class="home-loop-heading">
<span class="home-eyebrow">LEARNING LOOP</span>
<h2 id="learning-loop-title">让笔记跟着理解一起生长</h2>
<p>比起追求一次写完，更重要的是在每次遇到真实问题时回来补充、修正和连接。</p>
</header>
<ol class="home-loop-steps">
<li><span>01</span><div><strong>捕捉问题</strong><small>先记下真正想解决的事情</small></div></li>
<li><span>02</span><div><strong>建立理解</strong><small>梳理概念、原理与使用边界</small></div></li>
<li><span>03</span><div><strong>动手验证</strong><small>让代码和项目检验理解</small></div></li>
<li><span>04</span><div><strong>回看连接</strong><small>把新经验接回已有知识</small></div></li>
</ol>
</section>

<section class="home-closing" aria-label="学习寄语">
<div>
<span class="home-eyebrow">KEEP EXPLORING</span>
<h2>每一次理解，都会成为下一次探索的起点。</h2>
</div>
<a href="#knowledge-map">选择一个主题开始 <i aria-hidden="true">→</i></a>
</section>
</main>

<style>
.VPHome {
  --home-blue: #3975f6;
  --home-violet: #7657f6;
  --home-teal: #0d9f92;
  --home-amber: #d88916;
  --home-rose: #d15b78;
  --home-slate: #64748b;
  --home-surface: rgba(255, 255, 255, 0.76);
  --home-surface-strong: rgba(255, 255, 255, 0.9);
  --home-border: rgba(53, 76, 120, 0.13);
  --home-shadow: 0 22px 60px rgba(40, 64, 112, 0.1);
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(110deg, #2563eb 5%, #7657f6 52%, #0c9b91 100%);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 10% 4%, rgba(57, 117, 246, 0.14), transparent 29rem),
    radial-gradient(circle at 91% 18%, rgba(118, 87, 246, 0.11), transparent 27rem),
    linear-gradient(180deg, rgba(245, 248, 255, 0.7), transparent 44rem);
}

.dark .VPHome {
  --home-surface: rgba(24, 27, 38, 0.72);
  --home-surface-strong: rgba(28, 32, 45, 0.9);
  --home-border: rgba(151, 168, 207, 0.16);
  --home-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
  --vp-home-hero-name-background: linear-gradient(110deg, #78a6ff 5%, #a98dff 52%, #5ed6c8 100%);
  background:
    radial-gradient(circle at 10% 4%, rgba(62, 112, 221, 0.2), transparent 31rem),
    radial-gradient(circle at 91% 18%, rgba(117, 77, 210, 0.17), transparent 28rem),
    linear-gradient(180deg, rgba(21, 24, 34, 0.66), transparent 44rem);
}

.VPHome::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.42;
  background-image:
    linear-gradient(rgba(85, 108, 150, 0.075) 1px, transparent 1px),
    linear-gradient(90deg, rgba(85, 108, 150, 0.075) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: linear-gradient(to bottom, black, transparent 46rem);
}

.VPHomeHero,
.home-explore {
  position: relative;
  z-index: 1;
}

.VPHomeHero .container { max-width: 1152px; }
.VPHomeHero .main { max-width: 820px; }

.VPHomeHero .name,
.VPHomeHero .text {
  max-width: 820px;
  letter-spacing: -0.045em;
}

.VPHomeHero .name {
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1em;
}

.VPHomeHero .text { margin-top: 12px; }

.VPHomeHero .tagline {
  max-width: 720px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}

.VPHome .VPButton {
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.VPHome .VPButton:hover { transform: translateY(-2px); }

.VPHome .VPButton.brand {
  border-color: transparent;
  background: linear-gradient(115deg, var(--home-blue), var(--home-violet));
  box-shadow: 0 12px 28px rgba(69, 95, 205, 0.24);
}

.home-explore {
  width: min(1152px, calc(100% - 48px));
  margin: 0 auto;
  padding-bottom: 64px;
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

.home-status-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.home-status-keywords span {
  padding: 5px 9px;
  border: 1px solid var(--home-border);
  border-radius: 999px;
  background: rgba(127, 145, 180, 0.07);
  color: var(--vp-c-text-2);
  font-size: 12px;
  white-space: nowrap;
}

.home-eyebrow {
  display: block;
  margin-bottom: 9px;
  color: var(--home-blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.17em;
}

.home-manifesto {
  display: grid;
  grid-template-columns: minmax(0, 1.28fr) minmax(300px, 0.72fr);
  align-items: center;
  gap: 72px;
  padding: 104px 0 86px;
}

.home-manifesto-copy h2,
.home-section-heading h2,
.home-loop-heading h2,
.home-closing h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: 1.24;
  font-size: clamp(27px, 3.2vw, 40px);
  letter-spacing: -0.04em;
}

.home-manifesto-copy > p {
  max-width: 650px;
  margin: 22px 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.9;
  font-size: 15px;
}

.home-principles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.home-principles span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border: 1px solid var(--home-border);
  border-radius: 11px;
  background: var(--home-surface);
  color: var(--vp-c-text-2);
  font-size: 12px;
  backdrop-filter: blur(12px);
}

.home-principles i {
  color: var(--home-violet);
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
}

.home-constellation {
  position: relative;
  aspect-ratio: 1;
  width: min(100%, 350px);
  margin: 0 auto;
}

.home-constellation::before {
  content: '';
  position: absolute;
  inset: 18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(87, 101, 230, 0.19), rgba(54, 130, 232, 0.04) 52%, transparent 70%);
  filter: blur(4px);
}

.home-orbit {
  position: absolute;
  inset: 9%;
  border: 1px solid rgba(95, 112, 170, 0.2);
  border-radius: 50%;
}

.home-orbit--outer { transform: rotate(-12deg) scaleY(0.72); }

.home-orbit--inner {
  inset: 26%;
  border-style: dashed;
  transform: rotate(28deg) scaleY(0.78);
}

.home-node {
  position: absolute;
  display: grid;
  place-items: center;
  min-width: 58px;
  min-height: 58px;
  padding: 8px;
  border: 1px solid var(--home-border);
  border-radius: 18px;
  background: var(--home-surface-strong);
  box-shadow: 0 14px 34px rgba(48, 67, 110, 0.12);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
  backdrop-filter: blur(16px);
}

.home-node--center {
  top: 50%;
  left: 50%;
  min-width: 92px;
  min-height: 92px;
  border: 0;
  border-radius: 28px;
  background: linear-gradient(135deg, var(--home-blue), var(--home-violet));
  box-shadow: 0 24px 48px rgba(74, 89, 205, 0.27);
  color: #fff;
  font-size: 17px;
  transform: translate(-50%, -50%);
}

.home-node--one { top: 7%; left: 42%; }
.home-node--two { top: 39%; right: 2%; }
.home-node--three { right: 22%; bottom: 3%; }
.home-node--four { bottom: 18%; left: 2%; }

.home-section {
  scroll-margin-top: 80px;
  padding: 72px 0 88px;
}

.home-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 30px;
}

.home-section-heading > p {
  max-width: 390px;
  margin: 0 0 5px;
  color: var(--vp-c-text-2);
  line-height: 1.75;
  font-size: 14px;
}

.home-collection-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.home-collection-card {
  --collection-color: var(--home-blue);
  position: relative;
  min-height: 225px;
  padding: 22px;
  overflow: hidden;
  border: 1px solid var(--home-border);
  border-radius: 20px;
  background: var(--home-surface);
  box-shadow: 0 12px 36px rgba(39, 60, 100, 0.07);
  text-decoration: none !important;
  backdrop-filter: blur(18px);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.home-collection-card::after {
  content: '';
  position: absolute;
  right: -52px;
  bottom: -62px;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  background: var(--collection-color);
  filter: blur(4px);
  opacity: 0.11;
}

.home-collection-card:hover {
  border-color: color-mix(in srgb, var(--collection-color) 45%, transparent);
  box-shadow: 0 22px 48px rgba(39, 60, 100, 0.13);
  transform: translateY(-5px);
}

.home-collection-card--violet { --collection-color: var(--home-violet); }
.home-collection-card--teal { --collection-color: var(--home-teal); }
.home-collection-card--amber { --collection-color: var(--home-amber); }
.home-collection-card--rose { --collection-color: var(--home-rose); }
.home-collection-card--slate { --collection-color: var(--home-slate); }

.home-collection-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--collection-color);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.home-collection-top i {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid color-mix(in srgb, var(--collection-color) 24%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--collection-color) 8%, transparent);
  font-size: 16px;
  font-style: normal;
  transition: transform 0.22s ease;
}

.home-collection-card:hover .home-collection-top i { transform: translate(2px, -2px); }

.home-collection-card h3 {
  margin: 28px 0 8px;
  color: var(--vp-c-text-1);
  font-size: 23px;
  letter-spacing: -0.025em;
}

.home-collection-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  font-size: 13px;
}

.home-collection-card small {
  position: absolute;
  right: 22px;
  bottom: 20px;
  left: 22px;
  z-index: 1;
  color: var(--vp-c-text-3);
  font-size: 11px;
}

.home-collection-future {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 112px;
  padding: 22px 24px;
  border: 1px dashed rgba(91, 111, 164, 0.28);
  border-radius: 20px;
  background: linear-gradient(110deg, color-mix(in srgb, var(--home-violet) 6%, transparent), color-mix(in srgb, var(--home-teal) 5%, transparent));
}

.home-future-mark {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--home-border);
  border-radius: 15px;
  background: var(--home-surface-strong);
  color: var(--home-violet);
  font-size: 25px;
}

.home-collection-future strong {
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.home-collection-future p {
  margin: 4px 0 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.home-future-note {
  margin-left: auto;
  color: var(--vp-c-text-3);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  white-space: nowrap;
}

.home-learning-loop {
  display: grid;
  grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
  gap: 54px;
  scroll-margin-top: 80px;
  padding: 42px;
  border: 1px solid var(--home-border);
  border-radius: 25px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--home-blue) 7%, var(--home-surface)), var(--home-surface));
}

.home-loop-heading p {
  margin: 18px 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  font-size: 14px;
}

.home-loop-steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-loop-steps li {
  display: flex;
  flex-direction: column;
  gap: 26px;
  min-height: 142px;
  padding: 17px;
  border: 1px solid var(--home-border);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.44);
}

.dark .home-loop-steps li { background: rgba(255, 255, 255, 0.025); }

.home-loop-steps > li > span {
  color: var(--home-violet);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.09em;
}

.home-loop-steps strong,
.home-loop-steps small { display: block; }

.home-loop-steps strong {
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.home-loop-steps small {
  margin-top: 4px;
  color: var(--vp-c-text-3);
  line-height: 1.5;
  font-size: 11px;
}

.home-closing {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 40px;
  padding: 86px 0 22px;
}

.home-closing h2 { max-width: 720px; }

.home-closing a {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  border: 1px solid var(--home-border);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.home-closing a:hover {
  border-color: rgba(57, 117, 246, 0.36);
  color: var(--home-blue);
  transform: translateY(-2px);
}

.home-closing i { font-style: normal; }

@media (min-width: 640px) {
  .VPHomeHero .name {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (max-width: 960px) {
  .home-status-keywords { display: none; }

  .home-manifesto {
    grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
    gap: 32px;
  }

  .home-collection-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .home-learning-loop {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 700px) {
  .home-explore { width: min(100% - 32px, 1152px); }

  .home-status {
    align-items: flex-start;
    flex-direction: column;
    gap: 9px;
  }

  .home-manifesto {
    grid-template-columns: 1fr;
    padding: 72px 0 58px;
  }

  .home-constellation { width: min(88vw, 330px); }

  .home-section { padding: 58px 0 70px; }

  .home-section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .home-section-heading > p { max-width: none; }

  .home-collection-grid { grid-template-columns: 1fr; }

  .home-collection-future {
    grid-column: auto;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .home-future-note {
    width: 100%;
    margin: 2px 0 0 66px;
  }

  .home-learning-loop { padding: 28px 20px; }

  .home-closing {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    padding-top: 70px;
  }
}

@media (max-width: 460px) {
  .home-principles {
    align-items: stretch;
    flex-direction: column;
  }

  .home-loop-steps { grid-template-columns: 1fr; }

  .home-loop-steps li { min-height: 124px; }

  .home-closing a {
    justify-content: space-between;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .VPHome .VPButton,
  .home-collection-card,
  .home-collection-top i,
  .home-closing a {
    transition: none;
  }
}
</style>
