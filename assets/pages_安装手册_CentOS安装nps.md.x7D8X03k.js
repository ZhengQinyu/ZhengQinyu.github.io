import{_ as a,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/安装手册/CentOS安装nps.md","filePath":"pages/安装手册/CentOS安装nps.md","lastUpdated":1733806965000}'),l={name:"pages/安装手册/CentOS安装nps.md"};function i(t,s,c,o,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h3 id="注意" tabindex="-1"><em><strong>注意</strong></em> <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;***注意***&quot;">​</a></h3><p>该nps项目已经长久不更新了，并且存在一个身份验证的<a href="https://github.com/weishen250/npscrack" target="_blank" rel="noreferrer">缺陷</a>，无需登录，直接进后台，后台功能点全都可以用。所以不再建议使用。</p><h3 id="一、nps相关地址" tabindex="-1">一、nps相关地址 <a class="header-anchor" href="#一、nps相关地址" aria-label="Permalink to &quot;一、nps相关地址&quot;">​</a></h3><p><a href="https://github.com/ehang-io/nps" target="_blank" rel="noreferrer">源码地址 https://github.com/ehang-io/nps</a><a href="https://ehang.io/nps/documents" target="_blank" rel="noreferrer">说明文档 https://ehang.io/nps/documents</a></p><p>本次安装的版本是 <code>v0.26.2</code></p><h3 id="二、服务端" tabindex="-1">二、服务端 <a class="header-anchor" href="#二、服务端" aria-label="Permalink to &quot;二、服务端&quot;">​</a></h3><p>CentOS7 服务器IP <code>200.200.200.1</code></p><h4 id="_1-下载" tabindex="-1">1. 下载 <a class="header-anchor" href="#_1-下载" aria-label="Permalink to &quot;1. 下载&quot;">​</a></h4><p>在 <a href="https://github.com/ehang-io/nps/releases" target="_blank" rel="noreferrer">https://github.com/ehang-io/nps/releases</a> 下载软件包 <code>linux_amd64_server.tar.gz</code></p><h4 id="_2-安装" tabindex="-1">2. 安装 <a class="header-anchor" href="#_2-安装" aria-label="Permalink to &quot;2. 安装&quot;">​</a></h4><ul><li>创建目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ mkdir /opt/nps</span></span></code></pre></div><ul><li>解压到目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ tar -zxf linux_amd64_server.tar.gz -C /opt/nps</span></span></code></pre></div><ul><li>安装</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ cd /opt/nps</span></span>
<span class="line"><span>$ ./nps install</span></span></code></pre></div><ul><li>修改配置</li></ul><p>配置文件位置 <code>/etc/nps/conf</code>,修改配置文件 <code>nps.conf</code>,如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>appname = nps</span></span>
<span class="line"><span>runmode = pro</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#bridge</span></span>
<span class="line"><span>bridge_type=tcp</span></span>
<span class="line"><span>bridge_port=8024</span></span>
<span class="line"><span>bridge_ip=0.0.0.0</span></span>
<span class="line"><span>log_level=7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#HTTP(S) proxy port, no startup if empty</span></span>
<span class="line"><span>http_proxy_ip=0.0.0.0</span></span>
<span class="line"><span>http_proxy_port=</span></span>
<span class="line"><span>https_proxy_port=</span></span>
<span class="line"><span>https_just_proxy=true</span></span>
<span class="line"><span>#default https certificate setting</span></span>
<span class="line"><span>https_default_cert_file=conf/server.pem</span></span>
<span class="line"><span>https_default_key_file=conf/server.key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#web</span></span>
<span class="line"><span>web_username=admin</span></span>
<span class="line"><span>web_password=123456</span></span>
<span class="line"><span>web_port = 8080</span></span>
<span class="line"><span>web_ip=0.0.0.0</span></span>
<span class="line"><span>web_base_url=</span></span>
<span class="line"><span>web_open_ssl=false</span></span>
<span class="line"><span>web_cert_file=conf/server.pem</span></span>
<span class="line"><span>web_key_file=conf/server.key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>allow_ports=8000-8200</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Web management multi-user login</span></span>
<span class="line"><span>allow_user_login=false</span></span>
<span class="line"><span>allow_user_register=false</span></span>
<span class="line"><span>allow_user_change_username=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#extension</span></span>
<span class="line"><span>allow_flow_limit=false</span></span>
<span class="line"><span>allow_rate_limit=false</span></span>
<span class="line"><span>allow_tunnel_num_limit=false</span></span>
<span class="line"><span>allow_local_proxy=false</span></span>
<span class="line"><span>allow_connection_num_limit=false</span></span>
<span class="line"><span>allow_multi_ip=false</span></span>
<span class="line"><span>system_info_display=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#cache</span></span>
<span class="line"><span>http_cache=false</span></span>
<span class="line"><span>http_cache_length=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#get origin ip</span></span>
<span class="line"><span>http_add_origin_header=false</span></span></code></pre></div><ul><li>启动</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo nps start</span></span></code></pre></div><p>之后就可以访问 <a href="http://200.200.200.1:8080/" target="_blank" rel="noreferrer">http://200.200.200.1:8080/</a> 控制台，用户名和密码是配置文件的 <code>web_username</code> 和 <code> web_password</code></p><ul><li>其他命令</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 配置文件重载</span></span>
<span class="line"><span>$ sudo nps reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止</span></span>
<span class="line"><span>$ nps stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启</span></span>
<span class="line"><span>$ nps restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 服务端更新</span></span>
<span class="line"><span>$ nps-update update</span></span></code></pre></div><h3 id="三、客户端" tabindex="-1">三、客户端 <a class="header-anchor" href="#三、客户端" aria-label="Permalink to &quot;三、客户端&quot;">​</a></h3><p>CentOS7 服务器IP <code>192.168.1.225</code></p><h4 id="_1-下载-1" tabindex="-1">1. 下载 <a class="header-anchor" href="#_1-下载-1" aria-label="Permalink to &quot;1. 下载&quot;">​</a></h4><p>在 <a href="https://github.com/ehang-io/nps/releases" target="_blank" rel="noreferrer">https://github.com/ehang-io/nps/releases</a> 下载软件包 <code>linux_amd64_client.tar.gz</code></p><h4 id="_2-安装-1" tabindex="-1">2. 安装 <a class="header-anchor" href="#_2-安装-1" aria-label="Permalink to &quot;2. 安装&quot;">​</a></h4><ul><li>创建配置文件并填写配置文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ vim /etc/npc/npc.conf</span></span></code></pre></div><p>内容如下, <code>vkey</code> 填写的是创建客户端时填写的 <code>客户端验证密钥</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[common]</span></span>
<span class="line"><span>server_addr=200.200.200.1:8024</span></span>
<span class="line"><span>conn_type=tcp</span></span>
<span class="line"><span>vkey=demotoken</span></span>
<span class="line"><span>username=admin</span></span>
<span class="line"><span>password=123456</span></span>
<span class="line"><span>compress=true</span></span>
<span class="line"><span>crypt=true</span></span>
<span class="line"><span>rate_limit=10000</span></span>
<span class="line"><span>flow_limit=100</span></span>
<span class="line"><span>remark=t244</span></span>
<span class="line"><span>max_conn=200</span></span>
<span class="line"><span>auto_reconnection=true</span></span></code></pre></div><ul><li>创建目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ mkdir /opt/npc</span></span></code></pre></div><ul><li>解压到目录</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ tar -zxf linux_amd64_client.tar.gz -C /opt/npc</span></span></code></pre></div><ul><li>安装</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ cd /opt/npc</span></span>
<span class="line"><span>$ ./npc install -config=/etc/npc/npc.conf</span></span></code></pre></div><ul><li>启动</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo npc start</span></span></code></pre></div><ul><li>其他命令</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 停止</span></span>
<span class="line"><span>$ sudo npc stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 客户端更新</span></span>
<span class="line"><span>$ sudo npc-update update</span></span></code></pre></div><ul><li>修改配置</li></ul><p>如果需要更换命令内容需要先卸载./npc uninstall，再重新安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ cd /opt/npc</span></span>
<span class="line"><span>$ ./npc uninstall</span></span>
<span class="line"><span># 成功后再重新安装</span></span>
<span class="line"><span>$ ./npc install -config=/etc/npc/npc.conf</span></span></code></pre></div><h3 id="四、注意事项" tabindex="-1">四、注意事项 <a class="header-anchor" href="#四、注意事项" aria-label="Permalink to &quot;四、注意事项&quot;">​</a></h3><p>服务器要设置好开放的端口，建议 <code>192.168.1.225</code> 开放所有端口给 <code>200.200.200.1</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ firewall-cmd --permanent --zone=public --add-rich-rule=&#39;</span></span>
<span class="line"><span>              rule family=&quot;ipv4&quot;</span></span>
<span class="line"><span>              source address=&quot;200.200.200.1/32&quot; accept&#39;;</span></span></code></pre></div><p><code>200.200.200.1</code> 开放端口段，在控制台设置端口时使用开放段对应的端口。例如开放 nps.conf 设置的 <code>allow_ports=8000-8200</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ firewall-cmd --zone=public --add-port=8000-8200/tcp --permanent</span></span></code></pre></div>`,51)]))}const g=a(l,[["render",i]]);export{u as __pageData,g as default};
