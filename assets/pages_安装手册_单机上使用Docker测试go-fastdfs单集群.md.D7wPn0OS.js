import{_ as s,a as n,a2 as p,o as e}from"./chunks/framework.DAlL-BGO.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/安装手册/单机上使用Docker测试go-fastdfs单集群.md","filePath":"pages/安装手册/单机上使用Docker测试go-fastdfs单集群.md","lastUpdated":1733806965000}'),t={name:"pages/安装手册/单机上使用Docker测试go-fastdfs单集群.md"};function o(l,a,i,d,c,u){return e(),n("div",null,a[0]||(a[0]=[p(`<h3 id="_1-安装并启动" tabindex="-1">1. 安装并启动 <a class="header-anchor" href="#_1-安装并启动" aria-label="Permalink to &quot;1. 安装并启动&quot;">​</a></h3><p><code>go-fastdfs</code>为了高可用，限制了一个IP只能对应一个服务（<a href="https://github.com/sjqzhang/go-fastdfs/wiki/%E8%83%BD%E5%8D%95%E6%9C%BA%E9%83%A8%E7%BD%B2%E9%9B%86%E7%BE%A4%E4%B9%88" target="_blank" rel="noreferrer">能不能在一台机器部置多个服务端?</a>）；我们可以使用<code>Docker</code>安装的方式，同时指定容器的IP的方式，来启动多个 <code>go-fastdfs</code> 服务</p><p>启动两个 <code>go-fastdfs</code> 服务，内网IP设置分别设置为 <code>10.88.0.3</code> 和 <code>10.88.0.5</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ docker run --name fastdfs1 --network bridge --ip 10.88.0.3 -d -v /opt/fastdfs_data1:/data -p 10001:8080 -e GO_FASTDFS_DIR=/data sjqzhang/go-fastdfs</span></span>
<span class="line"><span>$ docker run --name fastdfs2 --network bridge --ip 10.88.0.5 -d -v /opt/fastdfs_data2:/data -p 10002:8080 -e GO_FASTDFS_DIR=/data sjqzhang/go-fastdfs</span></span></code></pre></div><p>如果不需要外部访问，可以不映射端口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ docker run --name fastdfs1 --network bridge --ip 10.88.0.3 -d -v /opt/fastdfs_data1:/data -e GO_FASTDFS_DIR=/data sjqzhang/go-fastdfs</span></span>
<span class="line"><span>$ docker run --name fastdfs2 --network bridge --ip 10.88.0.5 -d -v /opt/fastdfs_data2:/data -e GO_FASTDFS_DIR=/data sjqzhang/go-fastdfs</span></span></code></pre></div><h3 id="_2-修改配置并重启" tabindex="-1">2. 修改配置并重启 <a class="header-anchor" href="#_2-修改配置并重启" aria-label="Permalink to &quot;2. 修改配置并重启&quot;">​</a></h3><p><code>10.88.0.3</code> 修改配置，配置文件 <code>/opt/fastdfs_data1/conf/cfg.json</code>，主要修改的参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;PeerID&quot;: &quot;集群内唯一,请使用0-9的单字符，默认自动生成&quot;,</span></span>
<span class="line"><span>&quot;peer_id&quot;: &quot;3&quot;,</span></span>
<span class="line"><span>&quot;本主机地址&quot;: &quot;本机http地址,默认自动生成(注意端口必须与addr中的端口一致），必段为内网，自动生成不为内网请自行修改，下同&quot;,</span></span>
<span class="line"><span>&quot;host&quot;: &quot;http://10.88.0.3:8080&quot;,</span></span>
<span class="line"><span>&quot;集群&quot;: &quot;集群列表,注意为了高可用，IP必须不能是同一个,同一不会自动备份，且不能为127.0.0.1,且必须为内网IP，默认自动生成&quot;,</span></span>
<span class="line"><span>&quot;peers&quot;: [&quot;http://10.88.0.3:8080&quot;,&quot;http://10.88.0.5:8080&quot;],</span></span></code></pre></div><p><code>10.88.0.5</code> 修改配置，配置文件 <code>/opt/fastdfs_data2/conf/cfg.json</code>，主要修改的参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;PeerID&quot;: &quot;集群内唯一,请使用0-9的单字符，默认自动生成&quot;,</span></span>
<span class="line"><span>&quot;peer_id&quot;: &quot;5&quot;,</span></span>
<span class="line"><span>&quot;本主机地址&quot;: &quot;本机http地址,默认自动生成(注意端口必须与addr中的端口一致），必段为内网，自动生成不为内网请自行修改，下同&quot;,</span></span>
<span class="line"><span>&quot;host&quot;: &quot;http://10.88.0.5:8080&quot;,</span></span>
<span class="line"><span>&quot;集群&quot;: &quot;集群列表,注意为了高可用，IP必须不能是同一个,同一不会自动备份，且不能为127.0.0.1,且必须为内网IP，默认自动生成&quot;,</span></span>
<span class="line"><span>&quot;peers&quot;: [&quot;http://10.88.0.3:8080&quot;,&quot;http://10.88.0.5:8080&quot;],</span></span></code></pre></div><p>重启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ docker restart fastdfs1 fastdfs2</span></span></code></pre></div><h3 id="_3-本地测试" tabindex="-1">3. 本地测试 <a class="header-anchor" href="#_3-本地测试" aria-label="Permalink to &quot;3. 本地测试&quot;">​</a></h3><p>浏览器打开 <code>http://10.88.0.3:8080</code>，选择文件上传，例如 <code>demo-subpackages.b42a3adb.zip</code></p><p>上传返回结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;data&quot;: {</span></span>
<span class="line"><span>    &quot;domain&quot;: &quot;http://10.88.0.3:8080&quot;,</span></span>
<span class="line"><span>    &quot;md5&quot;: &quot;b42a3adbf89bd645d94a2d5834720843&quot;,</span></span>
<span class="line"><span>    &quot;mtime&quot;: 1597546859,</span></span>
<span class="line"><span>    &quot;path&quot;: &quot;/group1/default/20200816/11/00/4/demo-subpackages.b42a3adb.zip&quot;,</span></span>
<span class="line"><span>    &quot;retcode&quot;: 0,</span></span>
<span class="line"><span>    &quot;retmsg&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;scene&quot;: &quot;default&quot;,</span></span>
<span class="line"><span>    &quot;scenes&quot;: &quot;default&quot;,</span></span>
<span class="line"><span>    &quot;size&quot;: 242389,</span></span>
<span class="line"><span>    &quot;src&quot;: &quot;/group1/default/20200816/11/00/4/demo-subpackages.b42a3adb.zip&quot;,</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;http://10.88.0.3:8080/group1/default/20200816/11/00/4/demo-subpackages.b42a3adb.zip&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;message&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;status&quot;: &quot;ok&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试 <code>http://10.88.0.3:8080/group1/default/20200816/11/00/4/demo-subpackages.b42a3adb.zip</code> 和 <code>http://10.88.0.5:8080/group1/default/20200816/11/00/4/demo-subpackages.b42a3adb.zip</code>下载没问题即可。</p><h3 id="_4-nginx-单集群配置" tabindex="-1">4. nginx 单集群配置 <a class="header-anchor" href="#_4-nginx-单集群配置" aria-label="Permalink to &quot;4. nginx 单集群配置&quot;">​</a></h3><p>修改nginx配置，根据需要设置好server_name和其他配置，例如映射到域名 <code>file.izqy.top</code>中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>        worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>        include       mime.types;</span></span>
<span class="line"><span>        default_type  application/html;</span></span>
<span class="line"><span>        log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span>        access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span>        error_log  /var/log/nginx/error.log  error;</span></span>
<span class="line"><span>        sendfile        on;</span></span>
<span class="line"><span>        keepalive_timeout  65;</span></span>
<span class="line"><span>        client_max_body_size 0; </span></span>
<span class="line"><span>        proxy_redirect ~/big/upload/(.*) /big/upload/$1;  #继点续传一定要设置(注意)</span></span>
<span class="line"><span>        upstream go-fastdfs {</span></span>
<span class="line"><span>                server 10.88.0.3:8080;</span></span>
<span class="line"><span>                server 10.88.0.5:8080;</span></span>
<span class="line"><span>                ip_hash;     #notice:very important(注意)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        server {</span></span>
<span class="line"><span>                listen       80;</span></span>
<span class="line"><span>                server_name  localhost file.izqy.top;</span></span>
<span class="line"><span>                location / {</span></span>
<span class="line"><span>                    proxy_set_header Host $host; #notice:very important(注意)</span></span>
<span class="line"><span>                    proxy_set_header X-Real-IP $remote_addr; #notice:very important(注意)</span></span>
<span class="line"><span>                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; #notice:very important(注意)</span></span>
<span class="line"><span>                    proxy_pass http://go-fastdfs;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重启nginx后，访问 <code>http://file.izqy.top</code>测试上传了下载，检查上传的文件是否同时保存到 <code>/opt/fastdfs_data1/files/default</code> 和 <code>/opt/fastdfs_data2/files/default</code>中。</p>`,22)]))}const h=s(t,[["render",o]]);export{q as __pageData,h as default};
