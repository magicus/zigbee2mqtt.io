"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34013],{22432:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>k,data:()=>m});var s=t(86904);const i=(0,s.Lk)("h1",{id:"lidl-fb20-002",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#lidl-fb20-002"},[(0,s.Lk)("span",null,"Lidl FB20-002")])],-1),a=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1),l=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"FB20-002")],-1),o=(0,s.Lk)("td",null,"Vendor",-1),r=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Livarno Lux switch and dimming light remote control")],-1),d=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"action, linkquality")],-1),c=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FB20-002.png",alt:"Lidl FB20-002"})])],-1),u=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.</p><p>For more information, refer to the <a href="https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF" target="_blank" rel="noopener noreferrer">LIDL manual</a>.</p><h3 id="on-button" tabindex="-1"><a class="header-anchor" href="#on-button"><span>On Button</span></a></h3><p>The &quot;On&quot; button sends the event only once. The remote remembers the last pressed button and ignores all consequent button presses. More info on the <a href="https://github.com/Koenkk/zigbee2mqtt/issues/6509" target="_blank" rel="noopener noreferrer">issue</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7),p=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),h={},k=(0,t(22652).A)(h,[["render",function(e,n){const t=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[i,(0,s.Lk)("table",null,[a,(0,s.Lk)("tbody",null,[l,(0,s.Lk)("tr",null,[o,(0,s.Lk)("td",null,[(0,s.bF)(t,{to:"/supported-devices/#v=Lidl"},{default:(0,s.k6)((()=>[(0,s.eW)("Lidl")])),_:1})])]),r,d,c])]),u,(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>[(0,s.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),m=JSON.parse('{"path":"/devices/FB20-002.html","title":"Lidl FB20-002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl FB20-002 control via MQTT","description":"Integrate your Lidl FB20-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"On Button","slug":"on-button","link":"#on-button","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724697030000},"filePathRelative":"devices/FB20-002.md"}')}}]);