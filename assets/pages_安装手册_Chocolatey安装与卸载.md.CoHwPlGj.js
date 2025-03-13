import{_ as a,a as o,a2 as t,o as l}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/安装手册/Chocolatey安装与卸载.md","filePath":"pages/安装手册/Chocolatey安装与卸载.md","lastUpdated":1733806965000}'),s={name:"pages/安装手册/Chocolatey安装与卸载.md"};function c(i,e,n,p,d,h){return l(),o("div",null,e[0]||(e[0]=[t('<h2 id="一、-chocolatey简介" tabindex="-1">一、 Chocolatey简介 <a class="header-anchor" href="#一、-chocolatey简介" aria-label="Permalink to &quot;一、 Chocolatey简介&quot;">​</a></h2><p>一个windows下的软件安装管理器（<code>The Package Manager for Windows</code>），用于自动管理软件（安装，更新，卸载）。<a href="https://www.chocolatey.org" target="_blank" rel="noreferrer">Chocolatey官网</a></p><h2 id="二、安装要求" tabindex="-1">二、安装要求 <a class="header-anchor" href="#二、安装要求" aria-label="Permalink to &quot;二、安装要求&quot;">​</a></h2><ul><li>Windows 7+ / Windows Server 2003+</li><li>PowerShell v2+</li><li>.NET Framework 4+ (安装过程会检测，如果未安装会自动下载安装)</li></ul><h2 id="三、开始安装" tabindex="-1">三、开始安装 <a class="header-anchor" href="#三、开始安装" aria-label="Permalink to &quot;三、开始安装&quot;">​</a></h2><p>使用管理员权限运行 <code>powershell</code>，检查并设置 <code>执行策略</code></p><ul><li>检查</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS C:\\&gt; Get-ExecutionPolicy</span></span></code></pre></div><p>如果返回的是 <code>Restricted</code>，那么需要更改为<code>Bypass</code>或<code>AllSigned</code></p><ul><li>更改</li></ul><p>可以使用以下两种中的一种</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS C:\\&gt; Set-ExecutionPolicy AllSigned</span></span></code></pre></div><p>或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS C:\\&gt; Set-ExecutionPolicy Bypass -Scope Process</span></span></code></pre></div><ul><li>检查</li></ul><p>安装后重新检查是否更改完成</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS C:\\&gt; Get-ExecutionPolicy</span></span></code></pre></div><ul><li>安装</li></ul><p>设置<code>执行策略</code>同时下载并执行安装脚本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS C:\\&gt; Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://chocolatey.org/install.ps1&#39;))</span></span></code></pre></div><p>如果执行策略已经更改，直接下载并执行也可以</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PS C:\\&gt; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://chocolatey.org/install.ps1&#39;))</span></span></code></pre></div><p>等待安装完成，之后可以使用 <code>choco version</code> 查看安装结果。</p><ul><li>查看帮助</li></ul><p>使用 <code>choco -?</code> 查看帮助文档。查看<a href="https://www.chocolatey.org/docs/commands-reference" target="_blank" rel="noreferrer">在线文档</a></p><h2 id="四、使用chocolatey安装软件" tabindex="-1">四、使用Chocolatey安装软件 <a class="header-anchor" href="#四、使用chocolatey安装软件" aria-label="Permalink to &quot;四、使用Chocolatey安装软件&quot;">​</a></h2><p>查看支持的 <a href="https://www.chocolatey.org/packages" target="_blank" rel="noreferrer">安装包</a></p><ul><li>常用命令</li></ul><blockquote><p>list 查找本地和远程安装包 search 同list install 安装 uninstall 卸载 upgrade 更新 download 下载</p></blockquote><h2 id="五、卸载" tabindex="-1">五、卸载 <a class="header-anchor" href="#五、卸载" aria-label="Permalink to &quot;五、卸载&quot;">​</a></h2><p>卸载<code>Chocolatey</code>只需要删除它安装的文件夹，并删除对应的环境变量即可。对于使用<code>Chocolatey</code>安装的其它软件，如果也需要卸载的话，需要先手动卸载。</p><blockquote><ol><li>删除环境变量<code>ChocolateyInstall</code>对应的安装文件夹，默认是 <code>C:\\ProgramData\\chocolatey</code></li><li>删除环境变量 ChocolateyInstall</li><li>删除环境变量 ChocolateyToolsLocation，部分工具软件安装的位置，删除需谨慎</li><li>删除环境变量 ChocolateyLastPathUpdate</li><li>更新环境变量 PATH ，去掉 <code>Chocolatey</code> 相关的配置</li></ol></blockquote>',32)]))}const g=a(s,[["render",c]]);export{u as __pageData,g as default};
