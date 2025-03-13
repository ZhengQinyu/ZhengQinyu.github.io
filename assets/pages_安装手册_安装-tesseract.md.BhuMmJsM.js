import{_ as e,a as s,a2 as t,o as n}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/安装手册/安装-tesseract.md","filePath":"pages/安装手册/安装-tesseract.md","lastUpdated":1733806965000}'),p={name:"pages/安装手册/安装-tesseract.md"};function l(i,a,o,d,c,r){return n(),s("div",null,a[0]||(a[0]=[t(`<h3 id="_1-环境" tabindex="-1">1 环境 <a class="header-anchor" href="#_1-环境" aria-label="Permalink to &quot;1 环境&quot;">​</a></h3><p>Centos7中使用yum安装 <code>tesseract</code></p><h3 id="_2-安装epel-源" tabindex="-1">2 安装epel 源 <a class="header-anchor" href="#_2-安装epel-源" aria-label="Permalink to &quot;2 安装epel 源&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ yum -y install epel-release</span></span></code></pre></div><h3 id="_3-安装-tesseract" tabindex="-1">3 安装 tesseract <a class="header-anchor" href="#_3-安装-tesseract" aria-label="Permalink to &quot;3 安装 tesseract&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ yum -y install tesseract</span></span></code></pre></div><h3 id="_4-检查安装和支持的语言" tabindex="-1">4 检查安装和支持的语言 <a class="header-anchor" href="#_4-检查安装和支持的语言" aria-label="Permalink to &quot;4 检查安装和支持的语言&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ tesseract --list-langs</span></span></code></pre></div><h3 id="_5-安装最新版" tabindex="-1">5 安装最新版 <a class="header-anchor" href="#_5-安装最新版" aria-label="Permalink to &quot;5 安装最新版&quot;">​</a></h3><p>epel 默认不是最新版，使用以下方式安装最新</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/Alexander_Pozdnyakov/CentOS_7/</span></span>
<span class="line"><span>$ sudo rpm --import https://build.opensuse.org/projects/home:Alexander_Pozdnyakov/public_key</span></span>
<span class="line"><span>$ yum update</span></span>
<span class="line"><span>$ yum install tesseract </span></span>
<span class="line"><span>$ yum install tesseract-langpack-deu</span></span></code></pre></div><p>CentOS8安装方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ dnf config-manager --add-repo https://download.opensuse.org/repositories/home:/Alexander_Pozdnyakov/CentOS_8/</span></span>
<span class="line"><span>$ rpm --import https://build.opensuse.org/projects/home:Alexander_Pozdnyakov/public_key</span></span>
<span class="line"><span>$ dnf install tesseract</span></span>
<span class="line"><span>$ dnf install tesseract-langpack-deu</span></span></code></pre></div>`,13)]))}const g=e(p,[["render",l]]);export{u as __pageData,g as default};
