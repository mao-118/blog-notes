import{H as e,V as t,et as n,j as r}from"./chunks/framework.Cj2C9hRh.js";var i=JSON.parse(`{"title":"提升打包构建速度","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/advanced/build-performance.md","filePath":"frontend/webpack/advanced/build-performance.md"}`),a={name:`frontend/webpack/advanced/build-performance.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="提升打包构建速度" tabindex="-1">提升打包构建速度 <a class="header-anchor" href="#提升打包构建速度" aria-label="Permalink to “提升打包构建速度”">​</a></h1><h2 id="hotmodulereplacement" tabindex="-1">HotModuleReplacement <a class="header-anchor" href="#hotmodulereplacement" aria-label="Permalink to “HotModuleReplacement”">​</a></h2><h3 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to “为什么”">​</a></h3><p>开发时我们修改了其中一个模块代码，Webpack 默认会将所有模块全部重新打包编译，速度很慢。</p><p>所以我们需要做到修改某个模块代码，就只有这个模块代码需要重新打包编译，其他模块不变，这样打包速度就能很快。</p><h3 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to “是什么”">​</a></h3><p>HotModuleReplacement（HMR/热模块替换）：在程序运行中，替换、添加或删除模块，而无需重新加载整个页面。</p><h3 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to “怎么用”">​</a></h3><ol><li>基本配置</li></ol><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 其他省略</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 启动服务器域名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 启动服务器端口号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 是否自动打开浏览器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hot: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 开启HMR功能（只能用于开发环境，生产环境不需要了）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>此时 css 样式经过 style-loader 处理，已经具备 HMR 功能了。<br> 但是 js 还不行。</p><ol start="2"><li>JS 配置</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// main.js</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>// 判断是否支持HMR功能</span></span>
<span class="line"><span>if (module.hot) {</span></span>
<span class="line"><span>  module.hot.accept(&quot;./js/count.js&quot;, function (count) {</span></span>
<span class="line"><span>    const result1 = count(2, 1);</span></span>
<span class="line"><span>    console.log(result1);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  module.hot.accept(&quot;./js/sum.js&quot;, function (sum) {</span></span>
<span class="line"><span>    const result2 = sum(1, 2, 3, 4);</span></span>
<span class="line"><span>    console.log(result2);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面这样写会很麻烦，所以实际开发我们会使用其他 loader 来解决。</p><p>比如：<a href="https://github.com/vuejs/vue-loader" target="_blank" rel="noreferrer">vue-loader</a>, <a href="https://github.com/gaearon/react-hot-loader" target="_blank" rel="noreferrer">react-hot-loader</a>。</p><h2 id="oneof" tabindex="-1">OneOf <a class="header-anchor" href="#oneof" aria-label="Permalink to “OneOf”">​</a></h2><h3 id="为什么-1" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-1" aria-label="Permalink to “为什么”">​</a></h3><p>打包时每个文件都会经过所有 loader 处理，虽然因为 <code>test</code> 正则原因实际没有处理上，但是都要过一遍。比较慢。</p><h3 id="是什么-1" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-1" aria-label="Permalink to “是什么”">​</a></h3><p>顾名思义就是只能匹配上一个 loader, 剩下的就不匹配了。</p><h3 id="怎么用-1" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-1" aria-label="Permalink to “怎么用”">​</a></h3><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ESLintWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 开发模式没有输出，不需要指定输出目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // clean: true,</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // 开发模式没有输出，不需要清空输出结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        oneOf: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            use: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">less</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            use: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;less-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[ac]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ss</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            use: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sass-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">styl</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            use: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(png</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">jpe</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">g</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">gif</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">webp)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            parser: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              dataUrlCondition: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                maxSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            generator: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">              // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">              // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">              // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">              // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">              // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(ttf</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">woff2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset/resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            generator: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            exclude:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">node_modules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 排除node_modules代码不编译</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ESLintWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // 指定检查文件的根目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      context: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 开发服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 启动服务器域名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 启动服务器端口号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 是否自动打开浏览器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hot: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 开启HMR功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devtool: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cheap-module-source-map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>生产模式也是如此配置。</p><h2 id="include-exclude" tabindex="-1">Include/Exclude <a class="header-anchor" href="#include-exclude" aria-label="Permalink to “Include/Exclude”">​</a></h2><h3 id="为什么-2" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-2" aria-label="Permalink to “为什么”">​</a></h3><p>开发时我们需要使用第三方的库或插件，所有文件都下载到 node_modules 中了。而这些文件是不需要编译可以直接使用的。</p><p>所以我们在对 js 文件处理时，要排除 node_modules 下面的文件。</p><h3 id="是什么-2" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-2" aria-label="Permalink to “是什么”">​</a></h3><ul><li>include</li></ul><p>包含，只处理 xxx 文件</p><ul><li>exclude</li></ul><p>排除，除了 xxx 文件以外其他文件都处理</p><h3 id="怎么用-2" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-2" aria-label="Permalink to “怎么用”">​</a></h3><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: undefined, // 开发模式没有输出，不需要指定输出目录</span></span>
<span class="line"><span>    filename: &quot;static/js/main.js&quot;, // 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span>    // clean: true,</span><span> // 开发模式没有输出，不需要清空输出结果</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;sass-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;stylus-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
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
<span class="line"><span>            loader: &quot;babel-loader&quot;,</span></span>
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
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // 开发服务器</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span>    port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span>    open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span>    hot: true, // 开启HMR功能</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>  devtool: &quot;cheap-module-source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>生产模式也是如此配置。</p><h2 id="cache" tabindex="-1">Cache <a class="header-anchor" href="#cache" aria-label="Permalink to “Cache”">​</a></h2><h3 id="为什么-3" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-3" aria-label="Permalink to “为什么”">​</a></h3><p>每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。</p><p>我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了。</p><h3 id="是什么-3" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-3" aria-label="Permalink to “是什么”">​</a></h3><p>对 Eslint 检查 和 Babel 编译结果进行缓存。</p><h3 id="怎么用-3" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-3" aria-label="Permalink to “怎么用”">​</a></h3><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: undefined, // 开发模式没有输出，不需要指定输出目录</span></span>
<span class="line"><span>    filename: &quot;static/js/main.js&quot;, // 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span>    // clean: true,</span><span> // 开发模式没有输出，不需要清空输出结果</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        oneOf: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>            test: /\\.css$/,</span></span>
<span class="line"><span>            // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.less$/,</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;sass-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.styl$/,</span></span>
<span class="line"><span>            use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;stylus-loader&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
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
<span class="line"><span>            loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>            options: {</span></span>
<span class="line"><span>              cacheDirectory: true, // 开启babel编译缓存</span></span>
<span class="line"><span>              cacheCompression: false, // 缓存文件不要压缩</span></span>
<span class="line"><span>            },</span></span>
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
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // 开发服务器</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span>    port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span>    open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span>    hot: true, // 开启HMR功能</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>  devtool: &quot;cheap-module-source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="thead" tabindex="-1">Thead <a class="header-anchor" href="#thead" aria-label="Permalink to “Thead”">​</a></h2><h3 id="为什么-4" tabindex="-1">为什么 <a class="header-anchor" href="#为什么-4" aria-label="Permalink to “为什么”">​</a></h3><p>当项目越来越庞大时，打包速度越来越慢，甚至于需要一个下午才能打包出来代码。这个速度是比较慢的。</p><p>我们想要继续提升打包速度，其实就是要提升 js 的打包速度，因为其他文件都比较少。</p><p>而对 js 文件处理主要就是 eslint 、babel、Terser 三个工具，所以我们要提升它们的运行速度。</p><p>我们可以开启多进程同时处理 js 文件，这样速度就比之前的单进程打包更快了。</p><h3 id="是什么-4" tabindex="-1">是什么 <a class="header-anchor" href="#是什么-4" aria-label="Permalink to “是什么”">​</a></h3><p>多进程打包：开启电脑的多个进程同时干一件事，速度更快。</p><p><strong>需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。</strong></p><h3 id="怎么用-4" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用-4" aria-label="Permalink to “怎么用”">​</a></h3><p>我们启动进程的数量就是我们 CPU 的核数。</p><ol><li>如何获取 CPU 的核数，因为每个电脑都不一样。</li></ol><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// nodejs核心模块，直接使用</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> os</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;os&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// cpu核数</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> threads</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cpus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ol start="2"><li>下载包</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i thread-loader -D</span></span></code></pre></div><ol start="3"><li>使用</li></ol><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const os = require(&quot;os&quot;);</span></span>
<span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
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
<span class="line"><span>            test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
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
<span class="line"><span>    minimize: true,</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      // css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span>      new TerserPlugin({</span></span>
<span class="line"><span>        parallel: threads // 开启多进程</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>  devtool: &quot;source-map&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>我们目前打包的内容都很少，所以因为启动进程开销原因，使用多进程打包实际上会显著的让我们打包时间变得很长。</p>`,61)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};