import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.BQmytedh.js";const l="/assets/image-1.rbhSg5f9.png",i="/assets/image-2.DyPy3oVo.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/2017之前/RSA算法.md","filePath":"pages/2017之前/RSA算法.md","lastUpdated":1732945848000}'),t={name:"pages/2017之前/RSA算法.md"};function c(r,s,o,u,d,b){return e(),a("div",null,s[0]||(s[0]=[p('<p>计算机中常见的加解密技术分为两类，即对称加密（加密和解密都使用相同的密钥key）和非对称加密（加密和解密使用不同的密钥key）。对于对称加密技术，实现比较简单，但是由于信息传送双方都要接触到这个key，所以密钥key更加容易泄露。<br> 而对于非对称加密（又称为公开密钥加密,就是RSA）中，不再只有一个密钥key了，而是有一对（一个公钥PK和密钥SK），传送过程使用PK，而解密使用密钥，相对来说更加安全。<br> 非对称加密的方式可以使通信双方无须事先交换密钥就可以建立安全通信，因此被广泛应用于身份认证，数字签名等信息交换领域。</p><h3 id="_1、生成公钥和私钥" tabindex="-1">1、生成公钥和私钥 <a class="header-anchor" href="#_1、生成公钥和私钥" aria-label="Permalink to &quot;1、生成公钥和私钥&quot;">​</a></h3><p>步骤如下：</p><blockquote><p>1、随意选择两个比较大的素数 P 和 Q ，P 不等于Q<br> 2、将 P,Q两个素数相乘得到一个数 N,即N = PQ<br> 3、将 P,Q 分别减一，再相乘，得到一个数 T,即T = (P-1)(Q-1)<br> 4、选择一个整数 E,作为一个密钥，使 E与 T互质（即 E与 T的最大公约数为1），并且E必须小于T。<br> 5、根据公式DE mod T=1，计算出D的值，作为另外一个密钥。<br> 6、通过上面步骤计算出来的N,E，D这三个数据，其中的（N,E）作为公钥，（N,D） 作为私钥（当然这两者是可以互换的）。</p></blockquote><p>生成公钥和私钥之后，发送方将公钥发送给另外一方，接收方接收到公钥之后可以使用公钥对数据进行加密，再将数据发回原本的发送方，那么现在发送方就可以将数据解密得到原本的数据了。</p><h3 id="_2、用公钥-n-e-加密数据" tabindex="-1">2、用公钥（N,E）加密数据 <a class="header-anchor" href="#_2、用公钥-n-e-加密数据" aria-label="Permalink to &quot;2、用公钥（N,E）加密数据&quot;">​</a></h3><p><img src="'+l+'" alt=""></p><h3 id="_2、用私钥-n-d-解密数据" tabindex="-1">2、用私钥（N,D）解密数据 <a class="header-anchor" href="#_2、用私钥-n-d-解密数据" aria-label="Permalink to &quot;2、用私钥（N,D）解密数据&quot;">​</a></h3><p><img src="'+i+`" alt="alt text"></p><h3 id="_3、具体的程序程序" tabindex="-1">3、具体的程序程序 <a class="header-anchor" href="#_3、具体的程序程序" aria-label="Permalink to &quot;3、具体的程序程序&quot;">​</a></h3><p>为了计算的方便，我们取两个比较小的素数11和13来说明，即：</p><blockquote><p>P = 11<br> Q = 13</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	package Algorithm;</span></span>
<span class="line"><span>	public class RSA {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private int N;</span></span>
<span class="line"><span>    private int E;</span></span>
<span class="line"><span>    private int D;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public RSA(int P,int Q){</span></span>
<span class="line"><span>        N = P * Q;</span></span>
<span class="line"><span>        int T = (P-1) * (Q-1);</span></span>
<span class="line"><span>		//简单的互质方法，可以继续优化</span></span>
<span class="line"><span>        E  = T - 1;</span></span>
<span class="line"><span>        int i=0;</span></span>
<span class="line"><span>        while(true){</span></span>
<span class="line"><span>            if(((T * i) + 1) % E == 0){</span></span>
<span class="line"><span>                D = ((T * i) + 1) / E;</span></span>
<span class="line"><span>               break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            i++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int addPassWord(int M){</span></span>
<span class="line"><span>        return Pow(M,E,N);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int removePassWord(int C){</span></span>
<span class="line"><span>        return Pow(C,D,N);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private int Pow(int a,int b,int c){</span></span>
<span class="line"><span>        int rec = 1;</span></span>
<span class="line"><span>        for(int i=0;i&lt;b;++i){</span></span>
<span class="line"><span>            rec = (rec * a) % c;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return rec;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        RSA rsa = new RSA(11,13);</span></span>
<span class="line"><span>        System.out.println(&quot;PK:(&quot; + rsa.N + &quot;,&quot; + rsa.E + &quot;)&quot;);</span></span>
<span class="line"><span>        System.out.println(&quot;SK:(&quot; + rsa.N + &quot;,&quot; + rsa.D + &quot;)&quot;);</span></span>
<span class="line"><span>        int M = 35;</span></span>
<span class="line"><span>        int C = rsa.addPassWord(M);</span></span>
<span class="line"><span>        System.out.println(&quot;密文：&quot; + C);</span></span>
<span class="line"><span>        System.out.println(&quot;原文：&quot; + rsa.removePassWord(C));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	}</span></span></code></pre></div><p>当然这样的程序只能处理较小的数据，大数据时应该自己写大数据处理方法，来处理大数幂运算。</p>`,14)]))}const q=n(t,[["render",c]]);export{m as __pageData,q as default};
