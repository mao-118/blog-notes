import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"优化代码运行性能","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/advanced/runtime-performance.md","filePath":"frontend/webpack/advanced/runtime-performance.md"}`),a={name:`frontend/webpack/advanced/runtime-performance.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="优化代码运行性能" tabindex="-1">优化代码运行性能 <a class="header-anchor" href="#优化代码运行性能" aria-label="Permalink to “优化代码运行性能”">​</a></h1><h2 id="code-split" tabindex="-1">Code Split <a class="header-anchor" href="#code-split" aria-label="Permalink to “Code Split”">​</a></h2><h3 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to “为什么”">​</a></h3><p>打包代码时会将所有 js 文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的 js 文件，其他文件不应该加载。</p><p>所以我们需要将打包生成的文件进行代码分割，生成多个 js 文件，渲染哪个页面就只加载某个 js 文件，这样加载的资源就少，速度就更快。</p><h3 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to “是什么”">​</a></h3><p>代码分割（Code Split）主要做了两件事：</p><ol><li><p>分割文件：将打包生成的文件进行分割，生成多个 js 文件。</p></li><li><p>按需加载：需要哪个文件就加载哪个文件。</p></li></ol><h3 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to “怎么用”">​</a></h3><p>代码分割实现方式有不同的方式，为了更加方便体现它们之间的差异，我们会分别创建新的文件来演示</p><h5 id="_1-多入口" tabindex="-1">1. 多入口 <a class="header-anchor" href="#_1-多入口" aria-label="Permalink to “1. 多入口”">​</a></h5><ol><li>文件目录</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>├── public</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>|   ├── app.js</span></span>
<span class="line"><span>|   └── main.js</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── webpack.config.js</span></span></code></pre></div><ol start="2"><li>下载包</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i webpack webpack-cli html-webpack-plugin -D</span></span></code></pre></div><ol start="3"><li>新建文件</li></ol><p>内容无关紧要，主要观察打包输出的结果</p><ul><li>app.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ul><li>main.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ol start="4"><li>配置</li></ol><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// webpack.config.js</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 单入口</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // entry: &#39;./src/main.js&#39;,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 多入口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    main: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/app.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // [name]是webpack命名规则，使用chunk的name作为输出的文件名。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // chunk的name是啥呢？ 比如： entry中xxx: &quot;./src/xxx.js&quot;, name就是xxx。注意是前面的xxx，和文件名无关。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;js/[name].js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clear: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;production&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ol start="5"><li>运行指令</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>此时在 dist 目录我们能看到输出了两个 js 文件。</p><p>总结：配置了几个入口，至少输出几个 js 文件。</p><h5 id="_2-提取重复代码" tabindex="-1">2. 提取重复代码 <a class="header-anchor" href="#_2-提取重复代码" aria-label="Permalink to “2. 提取重复代码”">​</a></h5><p>如果多入口文件中都引用了同一份代码，我们不希望这份代码被打包到两个文件中，导致代码重复，体积更大。</p><p>我们需要提取多入口的重复代码，只打包生成一个 js 文件，其他文件引用它就好。</p><ol><li>修改文件</li></ol><ul><li>app.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { sum } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./math&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><ul><li>main.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { sum } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./math&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><ul><li>math.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ol start="2"><li>修改配置文件</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// webpack.config.js</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // 单入口</span></span>
<span class="line"><span>  // entry: &#39;./src/main.js&#39;,</span></span>
<span class="line"><span>  // 多入口</span></span>
<span class="line"><span>  entry: {</span></span>
<span class="line"><span>    main: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>    app: &quot;./src/app.js&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;./dist&quot;),</span></span>
<span class="line"><span>    // [name]是webpack命名规则，使用chunk的name作为输出的文件名。</span></span>
<span class="line"><span>    // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。</span></span>
<span class="line"><span>    // chunk的name是啥呢？ 比如： entry中xxx: &quot;./src/xxx.js&quot;, name就是xxx。注意是前面的xxx，和文件名无关。</span></span>
<span class="line"><span>    // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)</span></span>
<span class="line"><span>    filename: &quot;js/[name].js&quot;,</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      template: &quot;./public/index.html&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 以下是默认值</span></span>
<span class="line"><span>      // minSize: 20000,</span><span> // 分割代码最小的大小</span></span>
<span class="line"><span>      // minRemainingSize: 0,</span><span> // 类似于minSize，最后确保提取的文件大小不能为0</span></span>
<span class="line"><span>      // minChunks: 1,</span><span> // 至少被引用的次数，满足条件才会代码分割</span></span>
<span class="line"><span>      // maxAsyncRequests: 30,</span><span> // 按需加载时并行加载的文件的最大数量</span></span>
<span class="line"><span>      // maxInitialRequests: 30,</span><span> // 入口js文件最大并行请求数量</span></span>
<span class="line"><span>      // enforceSizeThreshold: 50000,</span><span> // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）</span></span>
<span class="line"><span>      // cacheGroups: {</span><span> // 组，哪些模块要打包到一个组</span></span>
<span class="line"><span>      //   defaultVendors: {</span><span> // 组名</span></span>
<span class="line"><span>      //     test: /[\\\\/]node_modules[\\\\/]/,</span><span> // 需要打包到一起的模块</span></span>
<span class="line"><span>      //     priority: -10,</span><span> // 权重（越大越高）</span></span>
<span class="line"><span>      //     reuseExistingChunk: true,</span><span> // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块</span></span>
<span class="line"><span>      //   },</span></span>
<span class="line"><span>      //   default: {</span><span> // 其他没有写的配置会使用上面的默认值</span></span>
<span class="line"><span>      //     minChunks: 2,</span><span> // 这里的minChunks权重更大</span></span>
<span class="line"><span>      //     priority: -20,</span></span>
<span class="line"><span>      //     reuseExistingChunk: true,</span></span>
<span class="line"><span>      //   },</span></span>
<span class="line"><span>      // },</span></span>
<span class="line"><span>      // 修改配置</span></span>
<span class="line"><span>      cacheGroups: {</span></span>
<span class="line"><span>        // 组，哪些模块要打包到一个组</span></span>
<span class="line"><span>        // defaultVendors: {</span><span> // 组名</span></span>
<span class="line"><span>        //   test: /[\\\\/]node_modules[\\\\/]/,</span><span> // 需要打包到一起的模块</span></span>
<span class="line"><span>        //   priority: -10,</span><span> // 权重（越大越高）</span></span>
<span class="line"><span>        //   reuseExistingChunk: true,</span><span> // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块</span></span>
<span class="line"><span>        // },</span></span>
<span class="line"><span>        default: {</span></span>
<span class="line"><span>          // 其他没有写的配置会使用上面的默认值</span></span>
<span class="line"><span>          minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积</span></span>
<span class="line"><span>          minChunks: 2,</span></span>
<span class="line"><span>          priority: -20,</span></span>
<span class="line"><span>          reuseExistingChunk: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><ol start="3"><li>运行指令</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>此时我们会发现生成 3 个 js 文件，其中有一个就是提取的公共模块。</p><h5 id="_3-按需加载-动态导入" tabindex="-1">3. 按需加载，动态导入 <a class="header-anchor" href="#_3-按需加载-动态导入" aria-label="Permalink to “3. 按需加载，动态导入”">​</a></h5><p>想要实现按需加载，动态导入模块。还需要额外配置：</p><ol><li>修改文件</li></ol><ul><li>main.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 动态导入 --&gt; 实现按需加载</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 即使只被引用了一次，也会代码分割</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./math.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(({ </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li>app.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ul><li>public/index.html</li></ul><div class="language-html"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IE=edge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Code Split&lt;/</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;hello webpack&lt;/</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;计算&lt;/</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="2"><li>运行指令</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>我们可以发现，一旦通过 import 动态导入语法导入模块，模块就被代码分割，同时也能按需加载了。</p><h5 id="_4-单入口" tabindex="-1">4. 单入口 <a class="header-anchor" href="#_4-单入口" aria-label="Permalink to “4. 单入口”">​</a></h5><p>开发时我们可能是单页面应用（SPA），只有一个入口（单入口）。那么我们需要这样配置：</p><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 单入口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 多入口</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // entry: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  //   main: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  //   app: &quot;./src/app.js&quot;,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // [name]是webpack命名规则，使用chunk的name作为输出的文件名。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // chunk的name是啥呢？ 比如： entry中xxx: &quot;./src/xxx.js&quot;, name就是xxx。注意是前面的xxx，和文件名无关。</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;js/[name].js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clean: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;production&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 代码分割配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 对所有模块都进行分割</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // 以下是默认值</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // minSize: 20000,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 分割代码最小的大小</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // minRemainingSize: 0,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 类似于minSize，最后确保提取的文件大小不能为0</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // minChunks: 1,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 至少被引用的次数，满足条件才会代码分割</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // maxAsyncRequests: 30,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 按需加载时并行加载的文件的最大数量</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // maxInitialRequests: 30,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 入口js文件最大并行请求数量</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // enforceSizeThreshold: 50000,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // cacheGroups: {</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 组，哪些模块要打包到一个组</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //   defaultVendors: {</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 组名</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //     test: /[\\\\/]node_modules[\\\\/]/,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 需要打包到一起的模块</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //     priority: -10,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 权重（越大越高）</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //     reuseExistingChunk: true,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //   },</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //   default: {</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 其他没有写的配置会使用上面的默认值</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //     minChunks: 2,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 这里的minChunks权重更大</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //     priority: -20,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //     reuseExistingChunk: true,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      //   },</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h6 id="_5-更新配置" tabindex="-1">5. 更新配置 <a class="header-anchor" href="#_5-更新配置" aria-label="Permalink to “5. 更新配置”">​</a></h6><p>最终我们会使用单入口+代码分割+动态导入方式来进行配置。更新之前的配置文件。</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// webpack.prod.js</span></span>
<span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cpu核数</span></span>
<span class="line"><span>const threads = os.cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取处理样式的Loaders</span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            &quot;postcss-preset-env&quot;,</span><span> // 能解决大多数样式兼容性问题</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor,</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;../dist&quot;), // 生产模式需要输出</span></span>
<span class="line"><span>    filename: &quot;static/js/main.js&quot;, // 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: getStyleLoaders(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>            type: &quot;asset&quot;,</span></span>
<span class="line"><span>            parser: {</span></span>
<span class="line"><span>              dataUrlCondition: {</span></span>
<span class="line"><span>                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            generator: {</span></span>
<span class="line"><span>              // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>              // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>              // [hash:8]: hash值取8位</span></span>
<span class="line"><span>              // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>              // [query]: 添加之前的query参数</span></span>
<span class="line"><span>              filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>            type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>            generator: {</span></span>
<span class="line"><span>              filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.js$/,</span></span>
<span class="line"><span>            // exclude: /node_modules/,</span><span> // 排除node_modules代码不编译</span></span>
<span class="line"><span>            include: path.resolve(__dirname, &quot;../src&quot;), // 也可以用包含</span></span>
<span class="line"><span>            use: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;thread-loader&quot;, // 开启多进程</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  workers: threads, // 数量</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>                  cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>                  plugins: [&quot;@babel/plugin-transform-runtime&quot;], // 减少代码体积</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;, // 默认值</span></span>
<span class="line"><span>      cache: true, // 开启缓存</span></span>
<span class="line"><span>      // 缓存目录</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      threads, // 开启多进程</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 提取css成单独文件</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      // 定义输出文件名和目录</span></span>
<span class="line"><span>      filename: &quot;static/css/main.css&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // css压缩</span></span>
<span class="line"><span>    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads, // 开启多进程</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      new ImageMinimizerPlugin({</span></span>
<span class="line"><span>        minimizer: {</span></span>
<span class="line"><span>          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            plugins: [</span></span>
<span class="line"><span>              [&quot;gifsicle&quot;, { interlaced: true }],</span></span>
<span class="line"><span>              [&quot;jpegtran&quot;, { progressive: true }],</span></span>
<span class="line"><span>              [&quot;optipng&quot;, { optimizationLevel: 5 }],</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                &quot;svgo&quot;,</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  plugins: [</span></span>
<span class="line"><span>                    &quot;preset-default&quot;,</span></span>
<span class="line"><span>                    &quot;prefixIds&quot;,</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                      name: &quot;sortAttrs&quot;,</span></span>
<span class="line"><span>                      params: {</span></span>
<span class="line"><span>                        xmlnsOrder: &quot;alphabetical&quot;,</span></span>
<span class="line"><span>                      },</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                  ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 其他内容用默认配置即可</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><h5 id="_6-给动态导入文件取名称" tabindex="-1">6. 给动态导入文件取名称 <a class="header-anchor" href="#_6-给动态导入文件取名称" aria-label="Permalink to “6. 给动态导入文件取名称”">​</a></h5><ol><li>修改文件</li></ol><ul><li>main.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./js/sum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./css/iconfont.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./css/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./less/index.less&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./sass/index.sass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./sass/index.scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./styl/index.styl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 以下代码生产模式下会删除</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hot) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./js/sum.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onClick</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // eslint会对动态导入语法报错，需要修改eslint配置文件</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // webpackChunkName: &quot;math&quot;：这是webpack动态导入模块命名的方式</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // &quot;math&quot;将来就会作为[name]的值显示。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">/* webpackChunkName: &quot;math&quot; */</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./js/math.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(({ </span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ol start="2"><li>eslint 配置</li></ol><ul><li>下载包</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i eslint-plugin-import -D</span></span></code></pre></div><ul><li>配置</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// .eslintrc.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // 继承 Eslint 规则</span></span>
<span class="line"><span>  extends: [&quot;eslint:recommended&quot;],</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    node: true, // 启用node中全局变量</span></span>
<span class="line"><span>    browser: true, // 启用浏览器中全局变量</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [&quot;import&quot;], // 解决动态导入import语法报错问题 --&gt; 实际使用eslint-plugin-import的规则解决的</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaVersion: 6,</span></span>
<span class="line"><span>    sourceType: &quot;module&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &quot;no-var&quot;: 2,</span><span> // 不能使用 var 定义变量</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><ol><li>统一命名配置</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cpu核数</span></span>
<span class="line"><span>const threads = os.cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取处理样式的Loaders</span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            &quot;postcss-preset-env&quot;,</span><span> // 能解决大多数样式兼容性问题</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor,</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;../dist&quot;), // 生产模式需要输出</span></span>
<span class="line"><span>    filename: &quot;static/js/[name].js&quot;, // 入口文件打包输出资源命名方式</span></span>
<span class="line"><span>    chunkFilename: &quot;static/js/[name].chunk.js&quot;, // 动态导入输出资源命名方式</span></span>
<span class="line"><span>    assetModuleFilename: &quot;static/media/[name].[hash][ext]&quot;, // 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: getStyleLoaders(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>            type: &quot;asset&quot;,</span></span>
<span class="line"><span>            parser: {</span></span>
<span class="line"><span>              dataUrlCondition: {</span></span>
<span class="line"><span>                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>            //</span><span>   // [hash:8]: hash值取8位</span></span>
<span class="line"><span>            //</span><span>   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>            //</span><span>   // [query]: 添加之前的query参数</span></span>
<span class="line"><span>            //   filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>            type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //   filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.js$/,</span></span>
<span class="line"><span>            // exclude: /node_modules/,</span><span> // 排除node_modules代码不编译</span></span>
<span class="line"><span>            include: path.resolve(__dirname, &quot;../src&quot;), // 也可以用包含</span></span>
<span class="line"><span>            use: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;thread-loader&quot;, // 开启多进程</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  workers: threads, // 数量</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>                  cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>                  plugins: [&quot;@babel/plugin-transform-runtime&quot;], // 减少代码体积</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;, // 默认值</span></span>
<span class="line"><span>      cache: true, // 开启缓存</span></span>
<span class="line"><span>      // 缓存目录</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      threads, // 开启多进程</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 提取css成单独文件</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      // 定义输出文件名和目录</span></span>
<span class="line"><span>      filename: &quot;static/css/[name].css&quot;,</span></span>
<span class="line"><span>      chunkFilename: &quot;static/css/[name].chunk.css&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // css压缩</span></span>
<span class="line"><span>    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads, // 开启多进程</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      new ImageMinimizerPlugin({</span></span>
<span class="line"><span>        minimizer: {</span></span>
<span class="line"><span>          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            plugins: [</span></span>
<span class="line"><span>              [&quot;gifsicle&quot;, { interlaced: true }],</span></span>
<span class="line"><span>              [&quot;jpegtran&quot;, { progressive: true }],</span></span>
<span class="line"><span>              [&quot;optipng&quot;, { optimizationLevel: 5 }],</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                &quot;svgo&quot;,</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  plugins: [</span></span>
<span class="line"><span>                    &quot;preset-default&quot;,</span></span>
<span class="line"><span>                    &quot;prefixIds&quot;,</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                      name: &quot;sortAttrs&quot;,</span></span>
<span class="line"><span>                      params: {</span></span>
<span class="line"><span>                        xmlnsOrder: &quot;alphabetical&quot;,</span></span>
<span class="line"><span>                      },</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                  ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 其他内容用默认配置即可</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><ol start="3"><li>运行指令</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack</span></span></code></pre></div><p>观察打包输出 js 文件名称。</p><h2 id="preload-prefetch" tabindex="-1">Preload / Prefetch <a class="header-anchor" href="#preload-prefetch" aria-label="Permalink to “Preload / Prefetch”">​</a></h2><h3 id="为什么-1" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-1" aria-label="Permalink to “为什么”">​</a></h3><p>我们前面已经做了代码分割，同时会使用 import 动态导入语法来进行代码按需加载（我们也叫懒加载，比如路由懒加载就是这样实现的）。</p><p>但是加载速度还不够好，比如：是用户点击按钮时才加载这个资源的，如果资源体积很大，那么用户会感觉到明显卡顿效果。</p><p>我们想在浏览器空闲时间，加载后续需要使用的资源。我们就需要用上 <code>Preload</code> 或 <code>Prefetch</code> 技术。</p><h3 id="是什么-1" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-1" aria-label="Permalink to “是什么”">​</a></h3><ul><li><p><code>Preload</code>：告诉浏览器立即加载资源。</p></li><li><p><code>Prefetch</code>：告诉浏览器在空闲时才开始加载资源。</p></li></ul><p>它们共同点：</p><ul><li><p>都只会加载资源，并不执行。</p></li><li><p>都有缓存。</p></li></ul><p>它们区别：</p><ul><li><p><code>Preload</code>加载优先级高，<code>Prefetch</code>加载优先级低。</p></li><li><p><code>Preload</code>只能加载当前页面需要使用的资源，<code>Prefetch</code>可以加载当前页面资源，也可以加载下一个页面需要使用的资源。</p></li></ul><p>总结：</p><ul><li><p>当前页面优先级高的资源用 <code>Preload</code> 加载。</p></li><li><p>下一个页面需要使用的资源用 <code>Prefetch</code> 加载。</p></li></ul><p>它们的问题：兼容性较差。</p><ul><li><p>我们可以去 <a href="https://caniuse.com/" target="_blank" rel="noreferrer">Can I Use</a> 网站查询 API 的兼容性问题。</p></li><li><p><code>Preload</code> 相对于 <code>Prefetch</code> 兼容性好一点。</p></li></ul><h3 id="怎么用-1" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-1" aria-label="Permalink to “怎么用”">​</a></h3><ol><li>下载包</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i @vue/preload-webpack-plugin -D</span></span></code></pre></div><ol start="2"><li>配置 webpack.prod.js</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const PreloadWebpackPlugin = require(&quot;@vue/preload-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cpu核数</span></span>
<span class="line"><span>const threads = os.cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取处理样式的Loaders</span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            &quot;postcss-preset-env&quot;,</span><span> // 能解决大多数样式兼容性问题</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor,</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;../dist&quot;), // 生产模式需要输出</span></span>
<span class="line"><span>    filename: &quot;static/js/[name].js&quot;, // 入口文件打包输出资源命名方式</span></span>
<span class="line"><span>    chunkFilename: &quot;static/js/[name].chunk.js&quot;, // 动态导入输出资源命名方式</span></span>
<span class="line"><span>    assetModuleFilename: &quot;static/media/[name].[hash][ext]&quot;, // 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: getStyleLoaders(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>            type: &quot;asset&quot;,</span></span>
<span class="line"><span>            parser: {</span></span>
<span class="line"><span>              dataUrlCondition: {</span></span>
<span class="line"><span>                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>            //</span><span>   // [hash:8]: hash值取8位</span></span>
<span class="line"><span>            //</span><span>   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>            //</span><span>   // [query]: 添加之前的query参数</span></span>
<span class="line"><span>            //   filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>            type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //   filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.js$/,</span></span>
<span class="line"><span>            // exclude: /node_modules/,</span><span> // 排除node_modules代码不编译</span></span>
<span class="line"><span>            include: path.resolve(__dirname, &quot;../src&quot;), // 也可以用包含</span></span>
<span class="line"><span>            use: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;thread-loader&quot;, // 开启多进程</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  workers: threads, // 数量</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>                  cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>                  plugins: [&quot;@babel/plugin-transform-runtime&quot;], // 减少代码体积</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;, // 默认值</span></span>
<span class="line"><span>      cache: true, // 开启缓存</span></span>
<span class="line"><span>      // 缓存目录</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      threads, // 开启多进程</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 提取css成单独文件</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      // 定义输出文件名和目录</span></span>
<span class="line"><span>      filename: &quot;static/css/[name].css&quot;,</span></span>
<span class="line"><span>      chunkFilename: &quot;static/css/[name].chunk.css&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // css压缩</span></span>
<span class="line"><span>    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span>    new PreloadWebpackPlugin({</span></span>
<span class="line"><span>      rel: &quot;preload&quot;, // preload兼容性更好</span></span>
<span class="line"><span>      as: &quot;script&quot;,</span></span>
<span class="line"><span>      // rel: &#39;prefetch&#39;</span><span> // prefetch兼容性更差</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads, // 开启多进程</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      new ImageMinimizerPlugin({</span></span>
<span class="line"><span>        minimizer: {</span></span>
<span class="line"><span>          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            plugins: [</span></span>
<span class="line"><span>              [&quot;gifsicle&quot;, { interlaced: true }],</span></span>
<span class="line"><span>              [&quot;jpegtran&quot;, { progressive: true }],</span></span>
<span class="line"><span>              [&quot;optipng&quot;, { optimizationLevel: 5 }],</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                &quot;svgo&quot;,</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  plugins: [</span></span>
<span class="line"><span>                    &quot;preset-default&quot;,</span></span>
<span class="line"><span>                    &quot;prefixIds&quot;,</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                      name: &quot;sortAttrs&quot;,</span></span>
<span class="line"><span>                      params: {</span></span>
<span class="line"><span>                        xmlnsOrder: &quot;alphabetical&quot;,</span></span>
<span class="line"><span>                      },</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                  ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 其他内容用默认配置即可</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="network-cache" tabindex="-1">Network Cache <a class="header-anchor" href="#network-cache" aria-label="Permalink to “Network Cache”">​</a></h2><h3 id="为什么-2" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-2" aria-label="Permalink to “为什么”">​</a></h3><p>将来开发时我们对静态资源会使用缓存来优化，这样浏览器第二次请求资源就能读取缓存了，速度很快。</p><p>但是这样的话就会有一个问题, 因为前后输出的文件名是一样的，都叫 main.js，一旦将来发布新版本，因为文件名没有变化导致浏览器会直接读取缓存，不会加载新资源，项目也就没法更新了。</p><p>所以我们从文件名入手，确保更新前后文件名不一样，这样就可以做缓存了。</p><h3 id="是什么-2" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-2" aria-label="Permalink to “是什么”">​</a></h3><p>它们都会生成一个唯一的 hash 值。</p><ul><li>fullhash（webpack4 是 hash）</li></ul><p>每次修改任何一个文件，所有文件名的 hash 至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效。</p><ul><li>chunkhash</li></ul><p>根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。我们 js 和 css 是同一个引入，会共享一个 hash 值。</p><ul><li>contenthash</li></ul><p>根据文件内容生成 hash 值，只有文件内容变化了，hash 值才会变化。所有文件 hash 值是独享且不同的。</p><h3 id="怎么用-2" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-2" aria-label="Permalink to “怎么用”">​</a></h3><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const PreloadWebpackPlugin = require(&quot;@vue/preload-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cpu核数</span></span>
<span class="line"><span>const threads = os.cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取处理样式的Loaders</span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            &quot;postcss-preset-env&quot;,</span><span> // 能解决大多数样式兼容性问题</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor,</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;../dist&quot;), // 生产模式需要输出</span></span>
<span class="line"><span>    // [contenthash:8]使用contenthash，取8位长度</span></span>
<span class="line"><span>    filename: &quot;static/js/[name].[contenthash:8].js&quot;, // 入口文件打包输出资源命名方式</span></span>
<span class="line"><span>    chunkFilename: &quot;static/js/[name].[contenthash:8].chunk.js&quot;, // 动态导入输出资源命名方式</span></span>
<span class="line"><span>    assetModuleFilename: &quot;static/media/[name].[hash][ext]&quot;, // 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: getStyleLoaders(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>            type: &quot;asset&quot;,</span></span>
<span class="line"><span>            parser: {</span></span>
<span class="line"><span>              dataUrlCondition: {</span></span>
<span class="line"><span>                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>            //</span><span>   // [hash:8]: hash值取8位</span></span>
<span class="line"><span>            //</span><span>   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>            //</span><span>   // [query]: 添加之前的query参数</span></span>
<span class="line"><span>            //   filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>            type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //   filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.js$/,</span></span>
<span class="line"><span>            // exclude: /node_modules/,</span><span> // 排除node_modules代码不编译</span></span>
<span class="line"><span>            include: path.resolve(__dirname, &quot;../src&quot;), // 也可以用包含</span></span>
<span class="line"><span>            use: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;thread-loader&quot;, // 开启多进程</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  workers: threads, // 数量</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>                  cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>                  plugins: [&quot;@babel/plugin-transform-runtime&quot;], // 减少代码体积</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;, // 默认值</span></span>
<span class="line"><span>      cache: true, // 开启缓存</span></span>
<span class="line"><span>      // 缓存目录</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      threads, // 开启多进程</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 提取css成单独文件</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      // 定义输出文件名和目录</span></span>
<span class="line"><span>      filename: &quot;static/css/[name].[contenthash:8].css&quot;,</span></span>
<span class="line"><span>      chunkFilename: &quot;static/css/[name].[contenthash:8].chunk.css&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // css压缩</span></span>
<span class="line"><span>    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span>    new PreloadWebpackPlugin({</span></span>
<span class="line"><span>      rel: &quot;preload&quot;, // preload兼容性更好</span></span>
<span class="line"><span>      as: &quot;script&quot;,</span></span>
<span class="line"><span>      // rel: &#39;prefetch&#39;</span><span> // prefetch兼容性更差</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads, // 开启多进程</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      new ImageMinimizerPlugin({</span></span>
<span class="line"><span>        minimizer: {</span></span>
<span class="line"><span>          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            plugins: [</span></span>
<span class="line"><span>              [&quot;gifsicle&quot;, { interlaced: true }],</span></span>
<span class="line"><span>              [&quot;jpegtran&quot;, { progressive: true }],</span></span>
<span class="line"><span>              [&quot;optipng&quot;, { optimizationLevel: 5 }],</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                &quot;svgo&quot;,</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  plugins: [</span></span>
<span class="line"><span>                    &quot;preset-default&quot;,</span></span>
<span class="line"><span>                    &quot;prefixIds&quot;,</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                      name: &quot;sortAttrs&quot;,</span></span>
<span class="line"><span>                      params: {</span></span>
<span class="line"><span>                        xmlnsOrder: &quot;alphabetical&quot;,</span></span>
<span class="line"><span>                      },</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                  ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 其他内容用默认配置即可</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><ul><li>问题：</li></ul><p>当我们修改 math.js 文件再重新打包的时候，因为 contenthash 原因，math.js 文件 hash 值发生了变化（这是正常的）。</p><p>但是 main.js 文件的 hash 值也发生了变化，这会导致 main.js 的缓存失效。明明我们只修改 math.js, 为什么 main.js 也会变身变化呢？</p><ul><li><p>原因：</p></li><li><p>更新前：math.xxx.js, main.js 引用的 math.xxx.js</p></li><li><p>更新后：math.yyy.js, main.js 引用的 math.yyy.js, 文件名发生了变化，间接导致 main.js 也发生了变化</p></li><li><p>解决：</p></li></ul><p>将 hash 值单独保管在一个 runtime 文件中。</p><p>我们最终输出三个文件：main、math、runtime。当 math 文件发送变化，变化的是 math 和 runtime 文件，main 不变。</p><p>runtime 文件只保存文件的 hash 值和它们与文件关系，整个文件体积就比较小，所以变化重新请求的代价也小。</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const PreloadWebpackPlugin = require(&quot;@vue/preload-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cpu核数</span></span>
<span class="line"><span>const threads = os.cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取处理样式的Loaders</span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            &quot;postcss-preset-env&quot;,</span><span> // 能解决大多数样式兼容性问题</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor,</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;../dist&quot;), // 生产模式需要输出</span></span>
<span class="line"><span>    // [contenthash:8]使用contenthash，取8位长度</span></span>
<span class="line"><span>    filename: &quot;static/js/[name].[contenthash:8].js&quot;, // 入口文件打包输出资源命名方式</span></span>
<span class="line"><span>    chunkFilename: &quot;static/js/[name].[contenthash:8].chunk.js&quot;, // 动态导入输出资源命名方式</span></span>
<span class="line"><span>    assetModuleFilename: &quot;static/media/[name].[hash][ext]&quot;, // 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: getStyleLoaders(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>            type: &quot;asset&quot;,</span></span>
<span class="line"><span>            parser: {</span></span>
<span class="line"><span>              dataUrlCondition: {</span></span>
<span class="line"><span>                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>            //</span><span>   // [hash:8]: hash值取8位</span></span>
<span class="line"><span>            //</span><span>   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>            //</span><span>   // [query]: 添加之前的query参数</span></span>
<span class="line"><span>            //   filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>            type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //   filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.js$/,</span></span>
<span class="line"><span>            // exclude: /node_modules/,</span><span> // 排除node_modules代码不编译</span></span>
<span class="line"><span>            include: path.resolve(__dirname, &quot;../src&quot;), // 也可以用包含</span></span>
<span class="line"><span>            use: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;thread-loader&quot;, // 开启多进程</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  workers: threads, // 数量</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>                  cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>                  plugins: [&quot;@babel/plugin-transform-runtime&quot;], // 减少代码体积</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;, // 默认值</span></span>
<span class="line"><span>      cache: true, // 开启缓存</span></span>
<span class="line"><span>      // 缓存目录</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      threads, // 开启多进程</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 提取css成单独文件</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      // 定义输出文件名和目录</span></span>
<span class="line"><span>      filename: &quot;static/css/[name].[contenthash:8].css&quot;,</span></span>
<span class="line"><span>      chunkFilename: &quot;static/css/[name].[contenthash:8].chunk.css&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // css压缩</span></span>
<span class="line"><span>    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span>    new PreloadWebpackPlugin({</span></span>
<span class="line"><span>      rel: &quot;preload&quot;, // preload兼容性更好</span></span>
<span class="line"><span>      as: &quot;script&quot;,</span></span>
<span class="line"><span>      // rel: &#39;prefetch&#39;</span><span> // prefetch兼容性更差</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads, // 开启多进程</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      new ImageMinimizerPlugin({</span></span>
<span class="line"><span>        minimizer: {</span></span>
<span class="line"><span>          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            plugins: [</span></span>
<span class="line"><span>              [&quot;gifsicle&quot;, { interlaced: true }],</span></span>
<span class="line"><span>              [&quot;jpegtran&quot;, { progressive: true }],</span></span>
<span class="line"><span>              [&quot;optipng&quot;, { optimizationLevel: 5 }],</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                &quot;svgo&quot;,</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  plugins: [</span></span>
<span class="line"><span>                    &quot;preset-default&quot;,</span></span>
<span class="line"><span>                    &quot;prefixIds&quot;,</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                      name: &quot;sortAttrs&quot;,</span></span>
<span class="line"><span>                      params: {</span></span>
<span class="line"><span>                        xmlnsOrder: &quot;alphabetical&quot;,</span></span>
<span class="line"><span>                      },</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                  ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 其他内容用默认配置即可</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 提取runtime文件</span></span>
<span class="line"><span>    runtimeChunk: {</span></span>
<span class="line"><span>      name: (entrypoint) =&gt; \`runtime~\${entrypoint.name}\`, // runtime文件命名规则</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="core-js" tabindex="-1">Core-js <a class="header-anchor" href="#core-js" aria-label="Permalink to “Core-js”">​</a></h2><h3 id="为什么-3" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-3" aria-label="Permalink to “为什么”">​</a></h3><p>过去我们使用 babel 对 js 代码进行了兼容性处理，其中使用@babel/preset-env 智能预设来处理兼容性问题。</p><p>它能将 ES6 的一些语法进行编译转换，比如箭头函数、点点点运算符等。但是如果是 async 函数、promise 对象、数组的一些方法（includes）等，它没办法处理。</p><p>所以此时我们 js 代码仍然存在兼容性问题，一旦遇到低版本浏览器会直接报错。所以我们想要将 js 兼容性问题彻底解决</p><h3 id="是什么-3" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-3" aria-label="Permalink to “是什么”">​</a></h3><p><code>core-js</code> 是专门用来做 ES6 以及以上 API 的 <code>polyfill</code>。</p><p><code>polyfill</code>翻译过来叫做垫片/补丁。就是用社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该新特性。</p><h3 id="怎么用-3" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-3" aria-label="Permalink to “怎么用”">​</a></h3><ol><li>修改 main.js</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import count from &quot;./js/count&quot;;</span></span>
<span class="line"><span>import sum from &quot;./js/sum&quot;;</span></span>
<span class="line"><span>// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span>import &quot;./css/iconfont.css&quot;;</span></span>
<span class="line"><span>import &quot;./css/index.css&quot;;</span></span>
<span class="line"><span>import &quot;./less/index.less&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.sass&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.scss&quot;;</span></span>
<span class="line"><span>import &quot;./styl/index.styl&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result1 = count(2, 1);</span></span>
<span class="line"><span>console.log(result1);</span></span>
<span class="line"><span>const result2 = sum(1, 2, 3, 4);</span></span>
<span class="line"><span>console.log(result2);</span></span>
<span class="line"><span>// 添加promise代码</span></span>
<span class="line"><span>const promise = Promise.resolve();</span></span>
<span class="line"><span>promise.then(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;hello promise&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>此时 Eslint 会对 Promise 报错。</p><ol start="2"><li>修改配置文件</li></ol><ul><li>下载包</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i @babel/eslint-parser -D</span></span></code></pre></div><ul><li>.eslintrc.js</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // 继承 Eslint 规则</span></span>
<span class="line"><span>  extends: [&quot;eslint:recommended&quot;],</span></span>
<span class="line"><span>  parser: &quot;@babel/eslint-parser&quot;, // 支持最新的最终 ECMAScript 标准</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    node: true, // 启用node中全局变量</span></span>
<span class="line"><span>    browser: true, // 启用浏览器中全局变量</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [&quot;import&quot;], // 解决动态导入import语法报错问题 --&gt; 实际使用eslint-plugin-import的规则解决的</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaVersion: 6, // es6</span></span>
<span class="line"><span>    sourceType: &quot;module&quot;, // es module</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &quot;no-var&quot;: 2,</span><span> // 不能使用 var 定义变量</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><ol start="3"><li>运行指令</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm run build</span></span></code></pre></div><p>此时观察打包输出的 js 文件，我们发现 Promise 语法并没有编译转换，所以我们需要使用 <code>core-js</code> 来进行 <code>polyfill</code>。</p><ol start="4"><li>使用<code>core-js</code></li></ol><ul><li>下载包</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i core-js</span></span></code></pre></div><ul><li>手动全部引入</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import &quot;core-js&quot;;</span></span>
<span class="line"><span>import count from &quot;./js/count&quot;;</span></span>
<span class="line"><span>import sum from &quot;./js/sum&quot;;</span></span>
<span class="line"><span>// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span>import &quot;./css/iconfont.css&quot;;</span></span>
<span class="line"><span>import &quot;./css/index.css&quot;;</span></span>
<span class="line"><span>import &quot;./less/index.less&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.sass&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.scss&quot;;</span></span>
<span class="line"><span>import &quot;./styl/index.styl&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result1 = count(2, 1);</span></span>
<span class="line"><span>console.log(result1);</span></span>
<span class="line"><span>const result2 = sum(1, 2, 3, 4);</span></span>
<span class="line"><span>console.log(result2);</span></span>
<span class="line"><span>// 添加promise代码</span></span>
<span class="line"><span>const promise = Promise.resolve();</span></span>
<span class="line"><span>promise.then(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;hello promise&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>这样引入会将所有兼容性代码全部引入，体积太大了。我们只想引入 promise 的 <code>polyfill</code>。</p><ul><li>手动按需引入</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import &quot;core-js/es/promise&quot;;</span></span>
<span class="line"><span>import count from &quot;./js/count&quot;;</span></span>
<span class="line"><span>import sum from &quot;./js/sum&quot;;</span></span>
<span class="line"><span>// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span>import &quot;./css/iconfont.css&quot;;</span></span>
<span class="line"><span>import &quot;./css/index.css&quot;;</span></span>
<span class="line"><span>import &quot;./less/index.less&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.sass&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.scss&quot;;</span></span>
<span class="line"><span>import &quot;./styl/index.styl&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result1 = count(2, 1);</span></span>
<span class="line"><span>console.log(result1);</span></span>
<span class="line"><span>const result2 = sum(1, 2, 3, 4);</span></span>
<span class="line"><span>console.log(result2);</span></span>
<span class="line"><span>// 添加promise代码</span></span>
<span class="line"><span>const promise = Promise.resolve();</span></span>
<span class="line"><span>promise.then(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;hello promise&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>只引入打包 promise 的 <code>polyfill</code>，打包体积更小。但是将来如果还想使用其他语法，我需要手动引入库很麻烦。</p><ul><li>自动按需引入</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./js/count&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./js/sum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./css/iconfont.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./css/index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./less/index.less&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./sass/index.sass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./sass/index.scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./styl/index.styl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result1</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result1);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result2);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 添加promise代码</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> promise</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">promise.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello promise&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 智能预设：能够编译ES6语法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;@babel/preset-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // 按需加载core-js的polyfill</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { useBuiltIns: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, corejs: { version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, proposals: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li><p>main.js</p></li><li><p>babel.config.js</p></li></ul><p>此时就会自动根据我们代码中使用的语法，来按需加载相应的 <code>polyfill</code> 了。</p><h2 id="pwa" tabindex="-1">PWA <a class="header-anchor" href="#pwa" aria-label="Permalink to “PWA”">​</a></h2><h3 id="为什么-4" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-4" aria-label="Permalink to “为什么”">​</a></h3><p>开发 Web App 项目，项目一旦处于网络离线情况，就没法访问了。</p><p>我们希望给项目提供离线体验。</p><h3 id="是什么-4" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-4" aria-label="Permalink to “是什么”">​</a></h3><p>渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。</p><p>其中最重要的是，在 <strong>离线(offline)</strong> 时应用程序能够继续运行功能。</p><p>内部通过 Service Workers 技术实现的。</p><h3 id="怎么用-4" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-4" aria-label="Permalink to “怎么用”">​</a></h3><ol><li>下载包</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i workbox-webpack-plugin -D</span></span></code></pre></div><ol start="2"><li>修改配置文件</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const PreloadWebpackPlugin = require(&quot;@vue/preload-webpack-plugin&quot;);</span></span>
<span class="line"><span>const WorkboxPlugin = require(&quot;workbox-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cpu核数</span></span>
<span class="line"><span>const threads = os.cpus().length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取处理样式的Loaders</span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            &quot;postcss-preset-env&quot;,</span><span> // 能解决大多数样式兼容性问题</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor,</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &quot;../dist&quot;), // 生产模式需要输出</span></span>
<span class="line"><span>    // [contenthash:8]使用contenthash，取8位长度</span></span>
<span class="line"><span>    filename: &quot;static/js/[name].[contenthash:8].js&quot;, // 入口文件打包输出资源命名方式</span></span>
<span class="line"><span>    chunkFilename: &quot;static/js/[name].[contenthash:8].chunk.js&quot;, // 动态导入输出资源命名方式</span></span>
<span class="line"><span>    assetModuleFilename: &quot;static/media/[name].[hash][ext]&quot;, // 图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: getStyleLoaders(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>            type: &quot;asset&quot;,</span></span>
<span class="line"><span>            parser: {</span></span>
<span class="line"><span>              dataUrlCondition: {</span></span>
<span class="line"><span>                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>            //</span><span>   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>            //</span><span>   // [hash:8]: hash值取8位</span></span>
<span class="line"><span>            //</span><span>   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>            //</span><span>   // [query]: 添加之前的query参数</span></span>
<span class="line"><span>            //   filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>            type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>            // generator: {</span></span>
<span class="line"><span>            //   filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>            // },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.js$/,</span></span>
<span class="line"><span>            // exclude: /node_modules/,</span><span> // 排除node_modules代码不编译</span></span>
<span class="line"><span>            include: path.resolve(__dirname, &quot;../src&quot;), // 也可以用包含</span></span>
<span class="line"><span>            use: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;thread-loader&quot;, // 开启多进程</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  workers: threads, // 数量</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>                options: {</span></span>
<span class="line"><span>                  cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>                  cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>                  plugins: [&quot;@babel/plugin-transform-runtime&quot;], // 减少代码体积</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;, // 默认值</span></span>
<span class="line"><span>      cache: true, // 开启缓存</span></span>
<span class="line"><span>      // 缓存目录</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      threads, // 开启多进程</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 提取css成单独文件</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      // 定义输出文件名和目录</span></span>
<span class="line"><span>      filename: &quot;static/css/[name].[contenthash:8].css&quot;,</span></span>
<span class="line"><span>      chunkFilename: &quot;static/css/[name].[contenthash:8].chunk.css&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // css压缩</span></span>
<span class="line"><span>    // new CssMinimizerPlugin(),</span></span>
<span class="line"><span>    new PreloadWebpackPlugin({</span></span>
<span class="line"><span>      rel: &quot;preload&quot;, // preload兼容性更好</span></span>
<span class="line"><span>      as: &quot;script&quot;,</span></span>
<span class="line"><span>      // rel: &#39;prefetch&#39;</span><span> // prefetch兼容性更差</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new WorkboxPlugin.GenerateSW({</span></span>
<span class="line"><span>      // 这些选项帮助快速启用 ServiceWorkers</span></span>
<span class="line"><span>      // 不允许遗留任何“旧的” ServiceWorkers</span></span>
<span class="line"><span>      clientsClaim: true,</span></span>
<span class="line"><span>      skipWaiting: true,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads, // 开启多进程</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      // 压缩图片</span></span>
<span class="line"><span>      new ImageMinimizerPlugin({</span></span>
<span class="line"><span>        minimizer: {</span></span>
<span class="line"><span>          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            plugins: [</span></span>
<span class="line"><span>              [&quot;gifsicle&quot;, { interlaced: true }],</span></span>
<span class="line"><span>              [&quot;jpegtran&quot;, { progressive: true }],</span></span>
<span class="line"><span>              [&quot;optipng&quot;, { optimizationLevel: 5 }],</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                &quot;svgo&quot;,</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  plugins: [</span></span>
<span class="line"><span>                    &quot;preset-default&quot;,</span></span>
<span class="line"><span>                    &quot;prefixIds&quot;,</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                      name: &quot;sortAttrs&quot;,</span></span>
<span class="line"><span>                      params: {</span></span>
<span class="line"><span>                        xmlnsOrder: &quot;alphabetical&quot;,</span></span>
<span class="line"><span>                      },</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                  ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 代码分割配置</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;, // 对所有模块都进行分割</span></span>
<span class="line"><span>      // 其他内容用默认配置即可</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><ol start="3"><li>修改 main.js</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import count from &quot;./js/count&quot;;</span></span>
<span class="line"><span>import sum from &quot;./js/sum&quot;;</span></span>
<span class="line"><span>// 引入资源，Webpack才会对其打包</span></span>
<span class="line"><span>import &quot;./css/iconfont.css&quot;;</span></span>
<span class="line"><span>import &quot;./css/index.css&quot;;</span></span>
<span class="line"><span>import &quot;./less/index.less&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.sass&quot;;</span></span>
<span class="line"><span>import &quot;./sass/index.scss&quot;;</span></span>
<span class="line"><span>import &quot;./styl/index.styl&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result1 = count(2, 1);</span></span>
<span class="line"><span>console.log(result1);</span></span>
<span class="line"><span>const result2 = sum(1, 2, 3, 4);</span></span>
<span class="line"><span>console.log(result2);</span></span>
<span class="line"><span>// 添加promise代码</span></span>
<span class="line"><span>const promise = Promise.resolve();</span></span>
<span class="line"><span>promise.then(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;hello promise&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>console.log(arr.includes(5));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (&quot;serviceWorker&quot; in navigator) {</span></span>
<span class="line"><span>  window.addEventListener(&quot;load&quot;, () =&gt; {</span></span>
<span class="line"><span>    navigator.serviceWorker</span></span>
<span class="line"><span>      .register(&quot;/service-worker.js&quot;)</span></span>
<span class="line"><span>      .then((registration) =&gt; {</span></span>
<span class="line"><span>        console.log(&quot;SW registered: &quot;, registration);</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .catch((registrationError) =&gt; {</span></span>
<span class="line"><span>        console.log(&quot;SW registration failed: &quot;, registrationError);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>运行指令</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm run build</span></span></code></pre></div><p>此时如果直接通过 VSCode 访问打包后页面，在浏览器控制台会发现 <code>SW registration failed</code>。</p><p>因为我们打开的访问路径是：<code>http://127.0.0.1:5500/dist/index.html</code>。此时页面会去请求 <code>service-worker.js</code> 文件，请求路径是：<code>http://127.0.0.1:5500/service-worker.js</code>，这样找不到会 404。</p><p>实际 <code>service-worker.js</code> 文件路径是：<code>http://127.0.0.1:5500/dist/service-worker.js</code>。</p><ol start="5"><li>解决路径问题</li></ol><ul><li>下载包</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i serve -g</span></span></code></pre></div><p>serve 也是用来启动开发服务器来部署代码查看效果的。</p><ul><li>运行指令</li></ul><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>serve dist</span></span></code></pre></div><p>此时通过 serve 启动的服务器我们 service-worker 就能注册成功了。</p>`,178)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};