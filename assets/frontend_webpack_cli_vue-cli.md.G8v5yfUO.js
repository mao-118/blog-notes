import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"Vue 脚手架","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/cli/vue-cli.md","filePath":"frontend/webpack/cli/vue-cli.md"}`),a={name:`frontend/webpack/cli/vue-cli.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="vue-脚手架" tabindex="-1">Vue 脚手架 <a class="header-anchor" href="#vue-脚手架" aria-label="Permalink to “Vue 脚手架”">​</a></h1><h2 id="开发模式配置" tabindex="-1">开发模式配置 <a class="header-anchor" href="#开发模式配置" aria-label="Permalink to “开发模式配置”">​</a></h2><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// webpack.dev.js</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ESLintWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DefinePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CopyPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;copy-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getStyleLoaders</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">preProcessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue-style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        postcssOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          plugins: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;postcss-preset-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preProcessor,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Boolean);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[name].js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunkFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[name].chunk.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    assetModuleFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[hash:10][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">less</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;less-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[ac]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ss</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sass-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">styl</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(png</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">jpe</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">g</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">gif</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">svg)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          dataUrlCondition: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            maxSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(ttf</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">woff2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset/resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(jsx</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheDirectory: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheCompression: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          plugins: [</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            // &quot;@babel/plugin-transform-runtime&quot;</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // presets中包含了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // vue-loader不支持oneOf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">vue</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 内部会给vue文件注入HMR功能代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">          // 开启缓存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheDirectory: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;node_modules/.cache/vue-loader&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ESLintWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      context: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exclude: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cache: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cacheLocation: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CopyPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      patterns: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          from: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          to: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          toType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          noErrorOnMissing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          globOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ignore: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          info: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            minimized: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 解决页面警告</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DefinePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      __VUE_OPTIONS_API__: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      __VUE_PROD_DEVTOOLS__: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    runtimeChunk: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">entrypoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`runtime~\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">entrypoint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extensions: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 自动补全文件扩展名，让vue可以使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hot: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    compress: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    historyApiFallback: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 解决vue-router刷新404问题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devtool: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cheap-module-source-map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="生产模式配置" tabindex="-1">生产模式配置 <a class="header-anchor" href="#生产模式配置" aria-label="Permalink to “生产模式配置”">​</a></h2><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// webpack.prod.js</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ESLintWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MiniCssExtractPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CssMinimizerPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TerserWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ImageMinimizerPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image-minimizer-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DefinePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getStyleLoaders</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">preProcessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        postcssOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          plugins: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;postcss-preset-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preProcessor,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Boolean);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[name].[contenthash:10].js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunkFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[name].[contenthash:10].chunk.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    assetModuleFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[hash:10][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clean: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">less</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;less-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[ac]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ss</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sass-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">styl</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(png</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">jpe</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">g</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">gif</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">svg)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          dataUrlCondition: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            maxSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(ttf</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">woff2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset/resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(jsx</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheDirectory: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheCompression: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          plugins: [</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            // &quot;@babel/plugin-transform-runtime&quot;</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // presets中包含了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // vue-loader不支持oneOf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">vue</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 内部会给vue文件注入HMR功能代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">          // 开启缓存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheDirectory: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;node_modules/.cache/vue-loader&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ESLintWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      context: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exclude: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cache: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cacheLocation: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CopyPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      patterns: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          from: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          to: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          toType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          noErrorOnMissing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          globOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ignore: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          info: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            minimized: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MiniCssExtractPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/css/[name].[contenthash:10].css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunkFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/css/[name].[contenthash:10].chunk.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DefinePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      __VUE_OPTIONS_API__: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      __VUE_PROD_DEVTOOLS__: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 压缩的操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CssMinimizerPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TerserWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImageMinimizerPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        minimizer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gifsicle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { interlaced: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jpegtran&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { progressive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;optipng&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { optimizationLevel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;svgo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;preset-default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;prefixIds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sortAttrs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                      params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        xmlnsOrder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alphabetical&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    runtimeChunk: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">entrypoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`runtime~\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">entrypoint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extensions: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;production&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devtool: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;source-map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="其他配置" tabindex="-1">其他配置 <a class="header-anchor" href="#其他配置" aria-label="Permalink to “其他配置”">​</a></h2><ul><li>package.json</li></ul><div class="language-json"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-cli&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npm run dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross-env NODE_ENV=production webpack --config ./config/webpack.prod.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;keywords&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@babel/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^7.17.10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@babel/eslint-parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^7.17.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;@vue/cli-plugin-babel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^5.0.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^8.2.5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;copy-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^10.2.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;cross-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^7.0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^6.7.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;css-minimizer-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.4.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eslint-plugin-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^8.7.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eslint-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.1.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^5.5.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;image-minimizer-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.2.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagemin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^8.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagemin-gifsicle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^7.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagemin-jpegtran&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^7.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagemin-optipng&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^8.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagemin-svgo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^10.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;less-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^10.2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;mini-css-extract-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.6.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;postcss-preset-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^7.5.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;sass-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^12.6.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;stylus-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^6.2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^17.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vue-style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.1.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vue-template-compiler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.6.14&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^5.72.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;webpack-cli&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.9.2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;webpack-dev-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.9.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.2.33&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vue-router&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.0.15&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;browserslist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;last 2 version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt; 1%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;not dead&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>.eslintrc.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  root: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    node: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;plugin:vue/vue3-essential&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint:recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    parser: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@babel/eslint-parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li>babel.config.js</li></ul><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@vue/cli-plugin-babel/preset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="合并开发和生产配置" tabindex="-1">合并开发和生产配置 <a class="header-anchor" href="#合并开发和生产配置" aria-label="Permalink to “合并开发和生产配置”">​</a></h2><div class="language-javascript"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// webpack.config.js</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ESLintWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HtmlWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MiniCssExtractPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CssMinimizerPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TerserWebpackPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ImageMinimizerPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image-minimizer-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DefinePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CopyPlugin</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;copy-webpack-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 需要通过 cross-env 定义环境变量</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isProduction</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;production&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getStyleLoaders</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">preProcessor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isProduction </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MiniCssExtractPlugin.loader </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue-style-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;css-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        postcssOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preProcessor,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Boolean);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: isProduction </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filename: isProduction</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;static/js/[name].[contenthash:10].js&quot;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;static/js/[name].js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunkFilename: isProduction</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;static/js/[name].[contenthash:10].chunk.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;static/js/[name].chunk.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    assetModuleFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/js/[hash:10][ext][query]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clean: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">css</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">less</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;less-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[ac]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ss</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sass-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">styl</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        use: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStyleLoaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(png</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">jpe</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">g</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">gif</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">svg)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          dataUrlCondition: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            maxSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(ttf</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">woff2</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asset/resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(jsx</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js)</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;babel-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheDirectory: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheCompression: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          plugins: [</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            // &quot;@babel/plugin-transform-runtime&quot;</span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"> // presets中包含了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">      // vue-loader不支持oneOf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#11782a;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">vue</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loader: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue-loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 内部会给vue文件注入HMR功能代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">          // 开启缓存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          cacheDirectory: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;node_modules/.cache/vue-loader&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ESLintWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      context: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exclude: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cache: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cacheLocation: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        __dirname,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HtmlWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CopyPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      patterns: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          from: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          to: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          toType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          noErrorOnMissing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          globOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ignore: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          info: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            minimized: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isProduction </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MiniCssExtractPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        filename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/css/[name].[contenthash:10].css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chunkFilename: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;static/css/[name].[contenthash:10].chunk.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VueLoaderPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DefinePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      __VUE_OPTIONS_API__: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      __VUE_PROD_DEVTOOLS__: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Boolean),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minimize: isProduction,</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    // 压缩的操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CssMinimizerPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TerserWebpackPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">      new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImageMinimizerPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        minimizer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gifsicle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { interlaced: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jpegtran&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { progressive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;optipng&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { optimizationLevel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;svgo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;preset-default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &quot;prefixIds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sortAttrs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                      params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        xmlnsOrder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alphabetical&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    runtimeChunk: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">entrypoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`runtime~\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">entrypoint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extensions: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hot: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    compress: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    historyApiFallback: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// 解决vue-router刷新404问题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: isProduction </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;production&quot;</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devtool: isProduction </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;source-map&quot;</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cheap-module-source-map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="优化配置" tabindex="-1">优化配置 <a class="header-anchor" href="#优化配置" aria-label="Permalink to “优化配置”">​</a></h2><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span>const MiniCssExtractPlugin = require(&quot;mini-css-extract-plugin&quot;);</span></span>
<span class="line"><span>const CssMinimizerPlugin = require(&quot;css-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const ImageMinimizerPlugin = require(&quot;image-minimizer-webpack-plugin&quot;);</span></span>
<span class="line"><span>const TerserWebpackPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span>const CopyPlugin = require(&quot;copy-webpack-plugin&quot;);</span></span>
<span class="line"><span>const { VueLoaderPlugin } = require(&quot;vue-loader&quot;);</span></span>
<span class="line"><span>const { DefinePlugin } = require(&quot;webpack&quot;);</span></span>
<span class="line"><span>const AutoImport = require(&quot;unplugin-auto-import/webpack&quot;);</span></span>
<span class="line"><span>const Components = require(&quot;unplugin-vue-components/webpack&quot;);</span></span>
<span class="line"><span>const { ElementPlusResolver } = require(&quot;unplugin-vue-components/resolvers&quot;);</span></span>
<span class="line"><span>// 需要通过 cross-env 定义环境变量</span></span>
<span class="line"><span>const isProduction = process.env.NODE_ENV === &quot;production&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getStyleLoaders = (preProcessor) =&gt; {</span></span>
<span class="line"><span>  return [</span></span>
<span class="line"><span>    isProduction ? MiniCssExtractPlugin.loader : &quot;vue-style-loader&quot;,</span></span>
<span class="line"><span>    &quot;css-loader&quot;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      loader: &quot;postcss-loader&quot;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        postcssOptions: {</span></span>
<span class="line"><span>          plugins: [&quot;postcss-preset-env&quot;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    preProcessor &amp;&amp; {</span></span>
<span class="line"><span>      loader: preProcessor,</span></span>
<span class="line"><span>      options:</span></span>
<span class="line"><span>        preProcessor === &quot;sass-loader&quot;</span></span>
<span class="line"><span>          ? {</span></span>
<span class="line"><span>              // 自定义主题：自动引入我们定义的scss文件</span></span>
<span class="line"><span>              additionalData: \`@use &quot;@/styles/element/index.scss&quot; as *;\`,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          : {},</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ].filter(Boolean);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: isProduction ? path.resolve(__dirname, &quot;../dist&quot;) : undefined,</span></span>
<span class="line"><span>    filename: isProduction</span></span>
<span class="line"><span>      ? &quot;static/js/[name].[contenthash:10].js&quot;</span></span>
<span class="line"><span>      : &quot;static/js/[name].js&quot;,</span></span>
<span class="line"><span>    chunkFilename: isProduction</span></span>
<span class="line"><span>      ? &quot;static/js/[name].[contenthash:10].chunk.js&quot;</span></span>
<span class="line"><span>      : &quot;static/js/[name].chunk.js&quot;,</span></span>
<span class="line"><span>    assetModuleFilename: &quot;static/js/[hash:10][ext][query]&quot;,</span></span>
<span class="line"><span>    clean: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        use: getStyleLoaders(),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.less$/,</span></span>
<span class="line"><span>        use: getStyleLoaders(&quot;less-loader&quot;),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>        use: getStyleLoaders(&quot;sass-loader&quot;),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.styl$/,</span></span>
<span class="line"><span>        use: getStyleLoaders(&quot;stylus-loader&quot;),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|jpe?g|gif|svg)$/,</span></span>
<span class="line"><span>        type: &quot;asset&quot;,</span></span>
<span class="line"><span>        parser: {</span></span>
<span class="line"><span>          dataUrlCondition: {</span></span>
<span class="line"><span>            maxSize: 10 * 1024,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>        type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(jsx|js)$/,</span></span>
<span class="line"><span>        include: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>        loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>        options: {</span></span>
<span class="line"><span>          cacheDirectory: true,</span></span>
<span class="line"><span>          cacheCompression: false,</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            // &quot;@babel/plugin-transform-runtime&quot;</span><span> // presets中包含了</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // vue-loader不支持oneOf</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.vue$/,</span></span>
<span class="line"><span>        loader: &quot;vue-loader&quot;, // 内部会给vue文件注入HMR功能代码</span></span>
<span class="line"><span>        options: {</span></span>
<span class="line"><span>          // 开启缓存</span></span>
<span class="line"><span>          cacheDirectory: path.resolve(</span></span>
<span class="line"><span>            __dirname,</span></span>
<span class="line"><span>            &quot;node_modules/.cache/vue-loader&quot;</span></span>
<span class="line"><span>          ),</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>      exclude: &quot;node_modules&quot;,</span></span>
<span class="line"><span>      cache: true,</span></span>
<span class="line"><span>      cacheLocation: path.resolve(</span></span>
<span class="line"><span>        __dirname,</span></span>
<span class="line"><span>        &quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new CopyPlugin({</span></span>
<span class="line"><span>      patterns: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          from: path.resolve(__dirname, &quot;../public&quot;),</span></span>
<span class="line"><span>          to: path.resolve(__dirname, &quot;../dist&quot;),</span></span>
<span class="line"><span>          toType: &quot;dir&quot;,</span></span>
<span class="line"><span>          noErrorOnMissing: true,</span></span>
<span class="line"><span>          globOptions: {</span></span>
<span class="line"><span>            ignore: [&quot;**/index.html&quot;],</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          info: {</span></span>
<span class="line"><span>            minimized: true,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    isProduction &amp;&amp;</span></span>
<span class="line"><span>      new MiniCssExtractPlugin({</span></span>
<span class="line"><span>        filename: &quot;static/css/[name].[contenthash:10].css&quot;,</span></span>
<span class="line"><span>        chunkFilename: &quot;static/css/[name].[contenthash:10].chunk.css&quot;,</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>    new VueLoaderPlugin(),</span></span>
<span class="line"><span>    new DefinePlugin({</span></span>
<span class="line"><span>      __VUE_OPTIONS_API__: &quot;true&quot;,</span></span>
<span class="line"><span>      __VUE_PROD_DEVTOOLS__: &quot;false&quot;,</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    // 按需加载element-plus组件样式</span></span>
<span class="line"><span>    AutoImport({</span></span>
<span class="line"><span>      resolvers: [ElementPlusResolver()],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    Components({</span></span>
<span class="line"><span>      resolvers: [</span></span>
<span class="line"><span>        ElementPlusResolver({</span></span>
<span class="line"><span>          importStyle: &quot;sass&quot;, // 自定义主题</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ].filter(Boolean),</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    minimize: isProduction,</span></span>
<span class="line"><span>    // 压缩的操作</span></span>
<span class="line"><span>    minimizer: [</span></span>
<span class="line"><span>      new CssMinimizerPlugin(),</span></span>
<span class="line"><span>      new TerserWebpackPlugin(),</span></span>
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
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &quot;all&quot;,</span></span>
<span class="line"><span>      cacheGroups: {</span></span>
<span class="line"><span>        // layouts通常是admin项目的主体布局组件，所有路由组件都要使用的</span></span>
<span class="line"><span>        // 可以单独打包，从而复用</span></span>
<span class="line"><span>        // 如果项目中没有，请删除</span></span>
<span class="line"><span>        layouts: {</span></span>
<span class="line"><span>          name: &quot;layouts&quot;,</span></span>
<span class="line"><span>          test: path.resolve(__dirname, &quot;../src/layouts&quot;),</span></span>
<span class="line"><span>          priority: 40,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 如果项目中使用element-plus，此时将所有node_modules打包在一起，那么打包输出文件会比较大。</span></span>
<span class="line"><span>        // 所以我们将node_modules中比较大的模块单独打包，从而并行加载速度更好</span></span>
<span class="line"><span>        // 如果项目中没有，请删除</span></span>
<span class="line"><span>        elementUI: {</span></span>
<span class="line"><span>          name: &quot;chunk-elementPlus&quot;,</span></span>
<span class="line"><span>          test: /[\\\\/]node_modules[\\\\/]_?element-plus(.*)/,</span></span>
<span class="line"><span>          priority: 30,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 将vue相关的库单独打包，减少node_modules的chunk体积。</span></span>
<span class="line"><span>        vue: {</span></span>
<span class="line"><span>          name: &quot;vue&quot;,</span></span>
<span class="line"><span>          test: /[\\\\/]node_modules[\\\\/]vue(.*)[\\\\/]/,</span></span>
<span class="line"><span>          chunks: &quot;initial&quot;,</span></span>
<span class="line"><span>          priority: 20,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        libs: {</span></span>
<span class="line"><span>          name: &quot;chunk-libs&quot;,</span></span>
<span class="line"><span>          test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span>          priority: 10, // 权重最低，优先考虑前面内容</span></span>
<span class="line"><span>          chunks: &quot;initial&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    runtimeChunk: {</span></span>
<span class="line"><span>      name: (entrypoint) =&gt; \`runtime~\${entrypoint.name}\`,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  resolve: {</span></span>
<span class="line"><span>    extensions: [&quot;.vue&quot;, &quot;.js&quot;, &quot;.json&quot;],</span></span>
<span class="line"><span>    alias: {</span></span>
<span class="line"><span>      // 路径别名</span></span>
<span class="line"><span>      &quot;@&quot;: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    open: true,</span></span>
<span class="line"><span>    host: &quot;localhost&quot;,</span></span>
<span class="line"><span>    port: 3000,</span></span>
<span class="line"><span>    hot: true,</span></span>
<span class="line"><span>    compress: true,</span></span>
<span class="line"><span>    historyApiFallback: true, // 解决vue-router刷新404问题</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mode: isProduction ? &quot;production&quot; : &quot;development&quot;,</span></span>
<span class="line"><span>  devtool: isProduction ? &quot;source-map&quot; : &quot;cheap-module-source-map&quot;,</span></span>
<span class="line"><span>  performance: false,</span></span>
<span class="line"><span>};</span></span></code></pre></div>`,16)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};