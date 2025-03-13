import{_ as s,a as e,a2 as o,o as t}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/工具/shadowsocks安装.md","filePath":"pages/工具/shadowsocks安装.md","lastUpdated":1733806965000}'),n={name:"pages/工具/shadowsocks安装.md"};function p(i,a,c,d,l,h){return t(),e("div",null,a[0]||(a[0]=[o(`<p>在CentOS7下安装并配置 <code>shadowsocks</code></p><h2 id="_1-安装pip" tabindex="-1">1. 安装pip <a class="header-anchor" href="#_1-安装pip" aria-label="Permalink to &quot;1. 安装pip&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ yum -y install python-pip</span></span></code></pre></div><h2 id="_2-安装shadowsocks" tabindex="-1">2. 安装shadowsocks <a class="header-anchor" href="#_2-安装shadowsocks" aria-label="Permalink to &quot;2. 安装shadowsocks&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ pip install shadowsocks</span></span></code></pre></div><h2 id="_3-设置配置文件" tabindex="-1">3. 设置配置文件 <a class="header-anchor" href="#_3-设置配置文件" aria-label="Permalink to &quot;3. 设置配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ mkdir /etc/shadowsocks/</span></span>
<span class="line"><span>$ cd /etc/shadowsocks/</span></span>
<span class="line"><span>$ vi config.json</span></span></code></pre></div><p>在<code>config.json</code>配置账号的端口</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>        &quot;server&quot;:&quot;0.0.0.0&quot;,</span></span>
<span class="line"><span>        &quot;local_address&quot;:&quot;127.0.0.1&quot;,</span></span>
<span class="line"><span>        &quot;port_password&quot;:{</span></span>
<span class="line"><span>                &quot;8388&quot;:&quot;设置自己的密码1&quot;,</span></span>
<span class="line"><span>                &quot;8389&quot;:&quot;开放多个端口，设置自己的密码2&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;local_port&quot;:1080,</span></span>
<span class="line"><span>        &quot;timeout&quot;:600,</span></span>
<span class="line"><span>        &quot;method&quot;:&quot;aes-256-cfb&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4-启动" tabindex="-1">4. 启动 <a class="header-anchor" href="#_4-启动" aria-label="Permalink to &quot;4. 启动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ nohup ssserver -c /etc/shadowsocks/config.json &gt; log &amp;</span></span></code></pre></div><h2 id="_5-开放端口" tabindex="-1">5. 开放端口 <a class="header-anchor" href="#_5-开放端口" aria-label="Permalink to &quot;5. 开放端口&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ firewall-cmd --zone=public --add-port=8388-8389/tcp --permanent</span></span>
<span class="line"><span>$ firewall-cmd --reload</span></span></code></pre></div><h2 id="_6-windows下载客户端" tabindex="-1">6. windows下载客户端 <a class="header-anchor" href="#_6-windows下载客户端" aria-label="Permalink to &quot;6. windows下载客户端&quot;">​</a></h2><p><a href="https://github.com/shadowsocks/shadowsocks-windows/releases" target="_blank" rel="noreferrer">下载链接</a>，下载客户端，启动后填写配置文件对应的信息即可</p><h3 id="安装和配置" tabindex="-1">安装和配置 <a class="header-anchor" href="#安装和配置" aria-label="Permalink to &quot;安装和配置&quot;">​</a></h3><p>下载并安装 <a href="https://proxifier.soft32.com/" target="_blank" rel="noreferrer">Proxifier</a>，在 <code>Profile -&gt; Proxy Servers</code> 中添加IP和端口，并设置 <code>Authentication</code>, 用户名和密码是 <code>basic权限认证用户名</code> 和 <code>basic权限认证密码</code></p><p>同时在 <code>Profile -&gt; Proxification Rules</code> 设置规则，可以将 默认规则 <code>Default</code> 的 <code>Action</code> 设置成 <code>Direct</code>, 然后添加需要到 <code>192.168.1.225</code> 的规则，例如可以设置 <code>Target Hosts</code> 为 <code>192.168.1.*</code></p><h3 id="switchyomega" tabindex="-1">SwitchyOmega <a class="header-anchor" href="#switchyomega" aria-label="Permalink to &quot;SwitchyOmega&quot;">​</a></h3><ul><li>测试代理</li></ul><p>使用 <code>chrome浏览器</code> 和浏览器插件 <code>SwitchyOmega</code> 连接代理服务器，连接 <code>100.100.100.1</code> 服务器并设置账号和密码即可。测试过程中发现 <code>SetupVPN</code> 插件的配置会影响到 <code>SwitchyOmega</code> ，关闭 <code>SetupVPN</code> 即可。</p><ul><li>测试ssh 连接</li></ul><p>连接<code>192.168.0.100</code>的zqyu用户，使用 ssh 连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ssh -p 5002 zqyu@100.100.100.1</span></span></code></pre></div>`,24)]))}const g=s(n,[["render",p]]);export{u as __pageData,g as default};
