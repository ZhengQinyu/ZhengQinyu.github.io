import{_ as a,a as n,a2 as e,o as p}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/日常BUG/Gradle7-1忽略https检查.md","filePath":"pages/日常BUG/Gradle7-1忽略https检查.md","lastUpdated":1733806965000}'),l={name:"pages/日常BUG/Gradle7-1忽略https检查.md"};function o(t,s,r,i,c,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><p>Gradle7下使用<code>http</code>私库时，提示要使用 <code>https</code>, 可以使用 <code>allowInsecureProtocol true</code> 关闭。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Could not resolve all dependencies for configuration &#39;:compileClasspath&#39;.</span></span>
<span class="line"><span>Using insecure protocols with repositories, without explicit opt-in, is unsupported. Switch Maven repository &#39;maven(http://127.0.0.1:8081/repository/maven-public/)&#39; to redirect to a secure protocol (like HTTPS) or allow insecure protocols. See https://docs.gradle.org/7.1/dsl/org.gradle.api.artifacts.repositories.UrlArtifactRepository.html#org.gradle.api.artifacts.repositories.UrlArtifactRepository:allowInsecureProtocol for more details.</span></span></code></pre></div><p>但是该属性在旧版Gradle（例如5.6.2）中不存在，会提示错误；</p><h3 id="解决方式" tabindex="-1">解决方式 <a class="header-anchor" href="#解决方式" aria-label="Permalink to &quot;解决方式&quot;">​</a></h3><p><code>init.gradle</code> 文件位置： <code>C:\\Users\\[用户名]\\.gradle</code></p><p>在<code>init.gradle</code>中，检查 <code>ArtifactRepository</code> 对象中是否存在 <code>allowInsecureProtocol </code>属性，如果存在才设置，否则忽略；最终 <code>init.gradle</code> 配置文件如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>allprojects {</span></span>
<span class="line"><span>    def REPOSITORY_URL = &#39;http://127.0.0.1:8081/repository/maven-public/&#39;</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        mavenLocal()</span></span>
<span class="line"><span>        maven { ArtifactRepository repo -&gt;</span></span>
<span class="line"><span>            // 判断属性是否存在，之后再设置</span></span>
<span class="line"><span>            if (repo.metaClass.hasProperty(repo, &#39;allowInsecureProtocol&#39;)) {</span></span>
<span class="line"><span>                allowInsecureProtocol true</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            url REPOSITORY_URL</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        mavenCentral()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    buildscript {</span></span>
<span class="line"><span>        repositories {</span></span>
<span class="line"><span>            mavenLocal()</span></span>
<span class="line"><span>            maven { ArtifactRepository repo -&gt;</span></span>
<span class="line"><span>                // 判断属性是否存在，之后再设置</span></span>
<span class="line"><span>                if (repo.metaClass.hasProperty(repo, &#39;allowInsecureProtocol&#39;)) {</span></span>
<span class="line"><span>                    allowInsecureProtocol true</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                url REPOSITORY_URL</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            mavenCentral()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8)]))}const g=a(l,[["render",o]]);export{u as __pageData,g as default};
