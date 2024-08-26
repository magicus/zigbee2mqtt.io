"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38993],{20947:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>d,data:()=>v});var e=s(86904);const t=(0,e.Fv)('<h1 id="support-new-tuya-devices" tabindex="-1"><a class="header-anchor" href="#support-new-tuya-devices"><span>Support new Tuya devices</span></a></h1><p>Tuya devices use a custom <code>manuSpecificTuya</code> cluster, the instructions below will help you understand it better and provide some tools to ease discovery of their functions</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><h3 id="_1-standard-part-of-the-setup" tabindex="-1"><a class="header-anchor" href="#_1-standard-part-of-the-setup"><span>1. Standard part of the setup</span></a></h3>',4),p=(0,e.Fv)('<h3 id="_2-adding-your-device" tabindex="-1"><a class="header-anchor" href="#_2-adding-your-device"><span>2. Adding your device</span></a></h3><p>Adding support for Tuya devices is a bit different. In order to provide support for E.G. the <code>TS0601</code> model ID you would create the following external converter:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> modernExtend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> tuya <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/tuya&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// Since a lot of Tuya devices use the same modelID, but use different datapoints</span></span>\n<span class="line">    <span class="token comment">// it&#39;s necessary to provide a fingerprint instead of a zigbeeModel</span></span>\n<span class="line">    <span class="token literal-property property">fingerprint</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// The model ID from: Device with modelID &#39;TS0601&#39; is not supported</span></span>\n<span class="line">            <span class="token comment">// You may need to add \\u0000 at the end of the name in some cases</span></span>\n<span class="line">            <span class="token literal-property property">modelID</span><span class="token operator">:</span> <span class="token string">&#39;TS0601&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">            <span class="token comment">// The manufacturer name from: Device with modelID &#39;TS0601&#39; is not supported.</span></span>\n<span class="line">            <span class="token literal-property property">manufacturerName</span><span class="token operator">:</span> <span class="token string">&#39;_TZE200_d0yu2xgi&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;TS0601_new&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Tuya&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Fill in a description of the device here&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>tuya<span class="token punctuation">.</span>fz<span class="token punctuation">.</span>datapoints<span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">toZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>tuya<span class="token punctuation">.</span>tz<span class="token punctuation">.</span>datapoints<span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">onEvent</span><span class="token operator">:</span> tuya<span class="token punctuation">.</span>onEventSetTime<span class="token punctuation">,</span> <span class="token comment">// Add this if you are getting no converter for &#39;commandMcuSyncTime&#39;</span></span>\n<span class="line">    <span class="token literal-property property">configure</span><span class="token operator">:</span> tuya<span class="token punctuation">.</span>configureMagicPacket<span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        <span class="token comment">// Here you should put all functionality that your device exposes</span></span>\n<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token comment">// All datapoints go in here</span></span>\n<span class="line">        <span class="token literal-property property">tuyaDatapoints</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        <span class="token comment">// A preferred new way of extending functionality.</span></span>\n<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-understanding-tuya-datapoints" tabindex="-1"><a class="header-anchor" href="#_3-understanding-tuya-datapoints"><span>3. Understanding Tuya datapoints</span></a></h3><p>The <code>dataReport</code>and <code>dataResponse</code> types of the <code>manuSpecificTuya</code> cluster have their own format:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;seq&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint16<span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dpValues&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> BuffaloZclDataType<span class="token punctuation">.</span><span class="token constant">LIST_TUYA_DATAPOINT_VALUES</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>seq</code> is the transaction number of the payload. <code>dpValues</code> is an array of &quot;Data Points&quot; (type: <code>TuyaDataPointValue</code>). Such a datapoint value consists of:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token literal-property property">dp</span><span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">;</span></span>\n<span class="line"><span class="token literal-property property">datatype</span><span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">;</span></span>\n<span class="line"><span class="token literal-property property">data</span><span class="token operator">:</span> Buffer<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>dp</code> is so called &quot;Data Point ID&quot; which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides.</li><li><code>datatype</code> is the type of data contained in the <code>data</code> field, see <code>dataTypes</code> in <code>node_modules/zigbee-herdsman-converters/lib/tuya.js</code></li></ul><p>Some datapoints are &#39;report only&#39; (they report changes that happen within the device) others are &#39;issue and report&#39; (they can report by themselves, but also respond with a report when set). Data points are not unified across all Tuya devices so they can differ per device.</p><h3 id="_4-mapping-the-datapoints" tabindex="-1"><a class="header-anchor" href="#_4-mapping-the-datapoints"><span>4. Mapping the datapoints</span></a></h3>',11),o=(0,e.Lk)("code",null,"tuyaDatapoints",-1),i=(0,e.Fv)('<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:debug 2022-11-30 18:29:19: Datapoint &#39;106&#39; with value &#39;77&#39; not defined for &#39;_TZE200_d0yu2xgi&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Next we have to find out what this datapoint means (<code>106</code> in this example), there are different ways to do this:</p>',2),l=(0,e.Lk)("li",null,[(0,e.eW)("Check if an already supported Tuya device has this datapoint mapped ("),(0,e.Lk)("a",{href:"https://github.com/Koenkk/zigbee-herdsman-converters/search?q=tuyaDatapoints",target:"_blank",rel:"noopener noreferrer"},"search"),(0,e.eW)(")")],-1),c=(0,e.Lk)("li",null,"Guess based on the value",-1),r=(0,e.Fv)('<p>For this device we know that datapoint <code>106</code> is the humidity, we can now update the <code>exposes</code> and <code>tuyaDatapoints</code> section of the external converter:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- added the humdity expose</span></span>\n<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token literal-property property">tuyaDatapoints</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">            <span class="token punctuation">[</span><span class="token number">106</span><span class="token punctuation">,</span> <span class="token string">&#39;humidity&#39;</span><span class="token punctuation">,</span> tuya<span class="token punctuation">.</span>valueConverter<span class="token punctuation">.</span>raw<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- mapped the datapoint</span></span>\n<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The values in the mapped datapoint are as follows:</p><ol><li>The datapoint (<code>106</code> in this example)</li><li>The key under which this value should be published in the state (<code>humidity</code> in this example)</li><li>The value converter, this converts the received value before publishing it (<code>tuya.valueConverter.raw</code> in this example). There are more value converters available, examples: <ul><li>If the value needs to be divided by 10 you can use <code>tuya.valueConverter.divideBy10</code></li><li>If the value needs to be mapped to a string you can use <code>tuya.valueConverterBasic.lookup({&#39;single&#39;: 0, &#39;double&#39;: 1, &#39;hold&#39;: 2})</code></li><li>For more examples search for <code>tuyaDatapoints</code> in <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices/tuya.ts" target="_blank" rel="noopener noreferrer"><code>tuya.ts</code></a>.</li></ul></li></ol><p>Repeat this for all datapoints.</p><h3 id="_6-bonus-contacting-the-manufacturer" tabindex="-1"><a class="header-anchor" href="#_6-bonus-contacting-the-manufacturer"><span>6. BONUS: Contacting the manufacturer</span></a></h3><p>When contacting a manufacturer of Tuya compatible device DO NOT ask for Zigbee protocol of the device, they usually have no idea how the Tuya radio that they bought communicates over Zigbee. Instead ask for the UART protocol for their device, this should give you a better cooperation. You can also ask them about DPIDs and data formats for their functions.</p><h3 id="_7-bonus-2-further-reading" tabindex="-1"><a class="header-anchor" href="#_7-bonus-2-further-reading"><span>7. BONUS 2: Further reading</span></a></h3><p>You can read more about how the device communicates with Tuya Zigbee radio module <a href="https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty" target="_blank" rel="noopener noreferrer">here</a></p>',9),u={},d=(0,s(22652).A)(u,[["render",function(n,a){const s=(0,e.g2)("RouteLink");return(0,e.uX)(),(0,e.CE)("div",null,[t,(0,e.Lk)("p",null,[(0,e.eW)("Read through basic "),(0,e.bF)(s,{to:"/advanced/support-new-devices/01_support_new_devices.html"},{default:(0,e.k6)((()=>[(0,e.eW)("howto")])),_:1}),(0,e.eW)(" for instructions on how to setup an external converter")]),p,(0,e.Lk)("p",null,[(0,e.eW)("Now we have to map the datapoints in "),o,(0,e.eW)(". Start Zigbee2MQTT with "),(0,e.bF)(s,{to:"/guide/configuration/logging.html#debugging"},{default:(0,e.k6)((()=>[(0,e.eW)("debug logging")])),_:1}),(0,e.eW)(" enabled and trigger some actions on the device. You will now see logging like:")]),i,(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,[(0,e.bF)(s,{to:"/advanced/support-new-devices/03_find_tuya_data_points.html"},{default:(0,e.k6)((()=>[(0,e.eW)("Find Tuya datapoint using the Tuya gateway")])),_:1}),(0,e.eW)(" (easiest but requires Tuya gateway)")]),l,c]),r])}]]),v=JSON.parse('{"path":"/advanced/support-new-devices/02_support_new_tuya_devices.html","title":"Support new Tuya devices","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Standard part of the setup","slug":"_1-standard-part-of-the-setup","link":"#_1-standard-part-of-the-setup","children":[]},{"level":3,"title":"2. Adding your device","slug":"_2-adding-your-device","link":"#_2-adding-your-device","children":[]},{"level":3,"title":"3. Understanding Tuya datapoints","slug":"_3-understanding-tuya-datapoints","link":"#_3-understanding-tuya-datapoints","children":[]},{"level":3,"title":"4. Mapping the datapoints","slug":"_4-mapping-the-datapoints","link":"#_4-mapping-the-datapoints","children":[]},{"level":3,"title":"6. BONUS: Contacting the manufacturer","slug":"_6-bonus-contacting-the-manufacturer","link":"#_6-bonus-contacting-the-manufacturer","children":[]},{"level":3,"title":"7. BONUS 2: Further reading","slug":"_7-bonus-2-further-reading","link":"#_7-bonus-2-further-reading","children":[]}]}],"git":{"updatedTime":1724697030000},"filePathRelative":"advanced/support-new-devices/02_support_new_tuya_devices.md"}')}}]);