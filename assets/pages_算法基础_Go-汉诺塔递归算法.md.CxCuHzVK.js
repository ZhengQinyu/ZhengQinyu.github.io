import{_ as s,a as n,a2 as t,o as e}from"./chunks/framework.DAlL-BGO.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/算法基础/Go-汉诺塔递归算法.md","filePath":"pages/算法基础/Go-汉诺塔递归算法.md","lastUpdated":1733806965000}'),p={name:"pages/算法基础/Go-汉诺塔递归算法.md"};function l(i,a,o,c,d,u){return e(),n("div",null,a[0]||(a[0]=[t(`<h2 id="汉诺塔递归算法" tabindex="-1">汉诺塔递归算法 <a class="header-anchor" href="#汉诺塔递归算法" aria-label="Permalink to &quot;汉诺塔递归算法&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 从 a -&gt; b 经过 c 中转</span></span>
<span class="line"><span>func Hanoi(size int, a, b, c byte) {</span></span>
<span class="line"><span>	if size == 1 {</span></span>
<span class="line"><span>		fmt.Printf(&quot;%c -&gt; %c\\n&quot;, a, b)</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		Hanoi(size-1, a, c, b)</span></span>
<span class="line"><span>		fmt.Printf(&quot;%c -&gt; %c\\n&quot;, a, b)</span></span>
<span class="line"><span>		Hanoi(size-1, c, b, a)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	function.Hanoi(3, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>结果</li></ul><blockquote><p>A -&gt; B A -&gt; C B -&gt; C A -&gt; B C -&gt; A C -&gt; B A -&gt; B</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O(2^n)</p></blockquote>`,9)]))}const b=s(p,[["render",l]]);export{g as __pageData,b as default};
