import{_ as n,c as a,a2 as t,o as e}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Linux/Tomcat使用jks证书配置https.md","filePath":"pages/Linux/Tomcat使用jks证书配置https.md","lastUpdated":1732945848000}'),p={name:"pages/Linux/Tomcat使用jks证书配置https.md"};function l(o,s,c,r,i,u){return e(),a("div",null,s[0]||(s[0]=[t(`<h3 id="_1-配置-server-xml" tabindex="-1">1. 配置 server.xml <a class="header-anchor" href="#_1-配置-server-xml" aria-label="Permalink to &quot;1. 配置 server.xml&quot;">​</a></h3><p>在<code>server.xml</code> 中修改监听的端口，同时配置证书（证书同样放在和<code>server.xml</code>文件相同的 <code>tomcat/conf</code> 目录下，密码是 <code>123456</code>）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;Connector port=&quot;443&quot; protocol=&quot;HTTP/1.1&quot;</span></span>
<span class="line"><span>               SSLEnabled=&quot;true&quot;</span></span>
<span class="line"><span>               scheme=&quot;https&quot;</span></span>
<span class="line"><span>               secure=&quot;true&quot;</span></span>
<span class="line"><span>               keystoreFile=&quot;conf/server.jks&quot;</span></span>
<span class="line"><span>               keystorePass=&quot;123456&quot; </span></span>
<span class="line"><span>               clientAuth=&quot;false&quot;</span></span>
<span class="line"><span>               sslProtocol=&quot;TLS&quot;</span></span>
<span class="line"><span>               connectionTimeout=&quot;10000&quot;</span></span>
<span class="line"><span>               URIEncoding=&quot;UTF-8&quot;</span></span>
<span class="line"><span>               maxThreads=&quot;600&quot;</span></span>
<span class="line"><span>               minSpareThreads=&quot;150&quot;</span></span>
<span class="line"><span>               maxSpareThreads=&quot;250&quot;</span></span>
<span class="line"><span>               maxKeepAliveRequests=&quot;1&quot;</span></span>
<span class="line"><span>               acceptCount=&quot;600&quot;/&gt;</span></span>
<span class="line"><span>&lt;Connector port=&quot;80&quot; protocol=&quot;org.apache.coyote.http11.Http11NioProtocol&quot; connectionTimeout=&quot;10000&quot;/&gt;</span></span></code></pre></div><h3 id="_2-配置-web-xml" tabindex="-1">2. 配置 web.xml <a class="header-anchor" href="#_2-配置-web-xml" aria-label="Permalink to &quot;2.  配置 web.xml&quot;">​</a></h3><p>在web.xml添加配置如下，如果存在部分链接不需要自动跳转https，可以在前面添加一个 <code>security-constraint</code>配置，默认全部http链接自动跳转到https</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;!-- 部分链接不跳转https --&gt;</span></span>
<span class="line"><span>    &lt;security-constraint&gt;</span></span>
<span class="line"><span>        &lt;web-resource-collection&gt;</span></span>
<span class="line"><span>            &lt;web-resource-name&gt;http&lt;/web-resource-name&gt;</span></span>
<span class="line"><span>            &lt;url-pattern&gt;/order/return1&lt;/url-pattern&gt;</span></span>
<span class="line"><span>            &lt;url-pattern&gt;/order/return2&lt;/url-pattern&gt;</span></span>
<span class="line"><span>        &lt;/web-resource-collection&gt;</span></span>
<span class="line"><span>    &lt;/security-constraint&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 其它链接跳转https --&gt;</span></span>
<span class="line"><span>    &lt;security-constraint&gt;</span></span>
<span class="line"><span>        &lt;web-resource-collection&gt;</span></span>
<span class="line"><span>            &lt;web-resource-name&gt;SSL&lt;/web-resource-name&gt;</span></span>
<span class="line"><span>            &lt;url-pattern&gt;/*&lt;/url-pattern&gt;</span></span>
<span class="line"><span>        &lt;/web-resource-collection&gt;</span></span>
<span class="line"><span>        &lt;user-data-constraint&gt;</span></span>
<span class="line"><span>            &lt;transport-guarantee&gt;CONFIDENTIAL&lt;/transport-guarantee&gt;</span></span>
<span class="line"><span>        &lt;/user-data-constraint&gt;</span></span>
<span class="line"><span>    &lt;/security-constraint&gt;</span></span></code></pre></div>`,6)]))}const h=n(p,[["render",l]]);export{g as __pageData,h as default};
