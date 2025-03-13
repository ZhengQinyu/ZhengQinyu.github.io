import{_ as n,a,a2 as t,o as l}from"./chunks/framework.DAlL-BGO.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/算法基础/Go-三大民工排序算法.md","filePath":"pages/算法基础/Go-三大民工排序算法.md","lastUpdated":1733806965000}'),p={name:"pages/算法基础/Go-三大民工排序算法.md"};function i(e,s,c,o,r,h){return l(),a("div",null,s[0]||(s[0]=[t(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>三大 <code>“民工”</code>(<em>意为连毫无闲暇时间的民工一族都耳熟能详</em>) 排序算法</p><h2 id="_1-选择排序" tabindex="-1">1. 选择排序 <a class="header-anchor" href="#_1-选择排序" aria-label="Permalink to &quot;1. 选择排序&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func SelectionSort(list []int) {</span></span>
<span class="line"><span>	length, idx := len(list), 0</span></span>
<span class="line"><span>	for left := 0; left &lt; length; left++ {</span></span>
<span class="line"><span>		idx = left</span></span>
<span class="line"><span>		for right := left + 1; right &lt; length; right++ {</span></span>
<span class="line"><span>			// 找到最小值所在的位置</span></span>
<span class="line"><span>			if list[right] &lt; list[idx] {</span></span>
<span class="line"><span>				idx = right</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if idx != left {</span></span>
<span class="line"><span>			// 最小值所在的位置不是当前位置相同，交换</span></span>
<span class="line"><span>			list[left], list[idx] = list[idx], list[left]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	list := []int{8, 4, 2, 9, 10, -3, 3, 20, 15, -1}</span></span>
<span class="line"><span>	SelectionSort(list)</span></span>
<span class="line"><span>	fmt.Println(list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>排序结果</li></ul><blockquote><p>[-3 -1 2 3 4 8 9 10 15 20]</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O(n^2)</p></blockquote><h2 id="_2-冒泡排序" tabindex="-1">2. 冒泡排序 <a class="header-anchor" href="#_2-冒泡排序" aria-label="Permalink to &quot;2. 冒泡排序&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func BubbleSort(list []int) {</span></span>
<span class="line"><span>	length := len(list)</span></span>
<span class="line"><span>	for left := 0; left &lt; length; left++ {</span></span>
<span class="line"><span>		for right := left + 1; right &lt; length; right++ {</span></span>
<span class="line"><span>			if list[left] &gt; list[right] {</span></span>
<span class="line"><span>				list[left], list[right] = list[right], list[left]</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	list := []int{8, 4, 2, 9, 10, -3, 3, 20, 15, -1}</span></span>
<span class="line"><span>	BubbleSort(list)</span></span>
<span class="line"><span>	fmt.Println(list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>排序结果</li></ul><blockquote><p>[-3 -1 2 3 4 8 9 10 15 20]</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O(n^2)</p></blockquote><h2 id="_3-插入排序" tabindex="-1">3. 插入排序 <a class="header-anchor" href="#_3-插入排序" aria-label="Permalink to &quot;3. 插入排序&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func InsertionSort(list []int) {</span></span>
<span class="line"><span>	length := len(list)</span></span>
<span class="line"><span>	for left := 0; left &lt; length-1; left++ {</span></span>
<span class="line"><span>		for right := left + 1; right &gt; 0; right-- {</span></span>
<span class="line"><span>			// 逐步与前面的比较</span></span>
<span class="line"><span>			if list[right-1] &gt; list[right] {</span></span>
<span class="line"><span>				list[right-1], list[right] = list[right], list[right-1]</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	list := []int{8, 4, 2, 9, 10, -3, 3, 20, 15, -1}</span></span>
<span class="line"><span>	InsertionSort(list)</span></span>
<span class="line"><span>	fmt.Println(list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>排序结果</li></ul><blockquote><p>[-3 -1 2 3 4 8 9 10 15 20]</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O(n^2)</p></blockquote>`,29)]))}const g=n(p,[["render",i]]);export{u as __pageData,g as default};
