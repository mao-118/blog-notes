import{H as e,V as t,et as n,j as r}from"./chunks/framework.DKIRGhFK.js";var i=JSON.parse(`{"title":"生产模式介绍","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/fundamentals/production-mode.md","filePath":"frontend/webpack/fundamentals/production-mode.md"}`),a={name:`frontend/webpack/fundamentals/production-mode.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="生产模式介绍" tabindex="-1">生产模式介绍 <a class="header-anchor" href="#生产模式介绍" aria-label="Permalink to “生产模式介绍”">​</a></h1><p>生产模式是开发完成代码后，我们需要得到代码将来部署上线。</p><p>这个模式下我们主要对代码进行优化，让其运行性能更好。</p><p>优化主要从两个角度出发:</p><ol><li><p>优化代码运行性能</p></li><li><p>优化代码打包速度</p></li></ol><h2 id="生产模式准备" tabindex="-1">生产模式准备 <a class="header-anchor" href="#生产模式准备" aria-label="Permalink to “生产模式准备”">​</a></h2><p>我们分别准备两个配置文件来放不同的配置</p><h3 id="_1-文件目录" tabindex="-1">1. 文件目录 <a class="header-anchor" href="#_1-文件目录" aria-label="Permalink to “1. 文件目录”">​</a></h3><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>├── webpack-test (项目根目录)</span></span>
<span class="line"><span>    ├── config (Webpack配置文件目录)</span></span>
<span class="line"><span>    │    ├── webpack.dev.js(开发模式配置文件)</span></span>
<span class="line"><span>    │    └── webpack.prod.js(生产模式配置文件)</span></span>
<span class="line"><span>    ├── node_modules (下载包存放目录)</span></span>
<span class="line"><span>    ├── src (项目源码目录，除了html其他都在src里面)</span></span>
<span class="line"><span>    │    └── 略</span></span>
<span class="line"><span>    ├── public (项目html文件)</span></span>
<span class="line"><span>    │    └── index.html</span></span>
<span class="line"><span>    ├── .eslintrc.js(Eslint配置文件)</span></span>
<span class="line"><span>    ├── babel.config.js(Babel配置文件)</span></span>
<span class="line"><span>    └── package.json (包的依赖管理配置文件)</span></span></code></pre></div><h3 id="_2-修改-webpack-dev-js" tabindex="-1">2. 修改 webpack.dev.js <a class="header-anchor" href="#_2-修改-webpack-dev-js" aria-label="Permalink to “2. 修改 webpack.dev.js”">​</a></h3><p>因为文件目录变了，所以所有绝对路径需要回退一层目录才能找到对应的文件</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
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
<span class="line"><span>        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.less$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;sass-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.styl$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;stylus-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
<span class="line"><span>        type: &quot;asset&quot;,</span></span>
<span class="line"><span>        parser: {</span></span>
<span class="line"><span>          dataUrlCondition: {</span></span>
<span class="line"><span>            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>          // [hash:8]: hash值取8位</span></span>
<span class="line"><span>          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>          // [query]: 添加之前的query参数</span></span>
<span class="line"><span>          filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>        type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.js$/,</span></span>
<span class="line"><span>        exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span>        loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // 其他省略</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span>    port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span>    open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mode: &quot;development&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>运行开发模式的指令：</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack serve --config ./config/webpack.dev.js</span></span></code></pre></div><h3 id="_3-修改-webpack-prod-js" tabindex="-1">3. 修改 webpack.prod.js <a class="header-anchor" href="#_3-修改-webpack-prod-js" aria-label="Permalink to “3. 修改 webpack.prod.js”">​</a></h3><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const path = require(&quot;path&quot;);</span></span>
<span class="line"><span>const ESLintWebpackPlugin = require(&quot;eslint-webpack-plugin&quot;);</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
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
<span class="line"><span>        // 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span>        test: /\\.css$/,</span></span>
<span class="line"><span>        // use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.less$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;less-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.s[ac]ss$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;sass-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.styl$/,</span></span>
<span class="line"><span>        use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;stylus-loader&quot;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|jpe?g|gif|webp)$/,</span></span>
<span class="line"><span>        type: &quot;asset&quot;,</span></span>
<span class="line"><span>        parser: {</span></span>
<span class="line"><span>          dataUrlCondition: {</span></span>
<span class="line"><span>            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span>          // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span>          // [hash:8]: hash值取8位</span></span>
<span class="line"><span>          // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span>          // [query]: 添加之前的query参数</span></span>
<span class="line"><span>          filename: &quot;static/imgs/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(ttf|woff2?)$/,</span></span>
<span class="line"><span>        type: &quot;asset/resource&quot;,</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          filename: &quot;static/media/[hash:8][ext][query]&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.js$/,</span></span>
<span class="line"><span>        exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span>        loader: &quot;babel-loader&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new ESLintWebpackPlugin({</span></span>
<span class="line"><span>      // 指定检查文件的根目录</span></span>
<span class="line"><span>      context: path.resolve(__dirname, &quot;../src&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      // 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span>      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span>      template: path.resolve(__dirname, &quot;../public/index.html&quot;),</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // devServer: {</span></span>
<span class="line"><span>  //   host: &quot;localhost&quot;,</span><span> // 启动服务器域名</span></span>
<span class="line"><span>  //   port: &quot;3000&quot;,</span><span> // 启动服务器端口号</span></span>
<span class="line"><span>  //   open: true,</span><span> // 是否自动打开浏览器</span></span>
<span class="line"><span>  // },</span></span>
<span class="line"><span>  mode: &quot;production&quot;,</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>运行生产模式的指令：</p><div class="language-plain"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx webpack --config ./config/webpack.prod.js</span></span></code></pre></div><h3 id="_4-配置运行指令" tabindex="-1">4. 配置运行指令 <a class="header-anchor" href="#_4-配置运行指令" aria-label="Permalink to “4. 配置运行指令”">​</a></h3><p>为了方便运行不同模式的指令，我们将指令定义在 package.json 中 scripts 里面</p><div class="language-json"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">// package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  // 其他省略</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npm run dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx webpack serve --config ./config/webpack.dev.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx webpack --config ./config/webpack.prod.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以后启动指令：</p><ul><li><p>开发模式：<code>npm start</code> 或 <code>npm run dev</code></p></li><li><p>生产模式：<code>npm run build</code></p></li></ul>`,23)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};