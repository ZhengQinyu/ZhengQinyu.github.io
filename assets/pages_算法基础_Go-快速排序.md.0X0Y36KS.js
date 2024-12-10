import{_ as n,a,a2 as t,o as p}from"./chunks/framework.DAlL-BGO.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"lastUpdated":"2023-12-18 22:22"},"headers":[],"relativePath":"pages/算法基础/Go-快速排序.md","filePath":"pages/算法基础/Go-快速排序.md","lastUpdated":1733806965000}'),l={name:"pages/算法基础/Go-快速排序.md"};function e(i,s,c,o,r,u){return p(),a("div",null,s[0]||(s[0]=[t(`<h2 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h2><ul><li>算法实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func partition(nums []int, left int, right int) int {</span></span>
<span class="line"><span>	value := nums[left] // 基准值</span></span>
<span class="line"><span>	for left &lt; right {</span></span>
<span class="line"><span>		for nums[right] &gt;= value &amp;&amp; left &lt; right { // 依次查找大于等于基准值的位置</span></span>
<span class="line"><span>			right--</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		nums[left] = nums[right]</span></span>
<span class="line"><span>		for nums[left] &lt; value &amp;&amp; left &lt; right { // 依次查找小于基准值的位置</span></span>
<span class="line"><span>			left++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		nums[right] = nums[left]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	nums[left] = value</span></span>
<span class="line"><span>	// 最终 left == right 就是基准值的位置</span></span>
<span class="line"><span>	return left</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func QuickSort(list []int, left int, right int) {</span></span>
<span class="line"><span>	if left &lt; right {</span></span>
<span class="line"><span>		middle := partition(list, left, right)</span></span>
<span class="line"><span>		QuickSort(list, left, middle-1)</span></span>
<span class="line"><span>		QuickSort(list, middle+1, right)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>测试代码</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>	list := []int{8, 4, 2, 9, 10, -3, 3, 20, 15, -1}</span></span>
<span class="line"><span>	QuickSort(list, 0, len(list)-1)</span></span>
<span class="line"><span>	fmt.Println(list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>排序结果</li></ul><blockquote><p>[-3 -1 2 3 4 8 9 10 15 20]</p></blockquote><ul><li>时间复杂度</li></ul><blockquote><p>O (nlogn)</p></blockquote>`,9)]))}const f=n(l,[["render",e]]);export{h as __pageData,f as default};
