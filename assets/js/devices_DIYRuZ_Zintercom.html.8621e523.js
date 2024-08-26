"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14333],{76408:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>h,data:()=>p});var i=o(86904);const a=(0,i.Lk)("h1",{id:"diyruz-diyruz-zintercom",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#diyruz-diyruz-zintercom"},[(0,i.Lk)("span",null,"DIYRuZ DIYRuZ_Zintercom")])],-1),d=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),n=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"DIYRuZ_Zintercom")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Matrix intercom auto opener")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"state, mode, sound, time_ring, time_talk, time_open, time_bell, time_report, battery, linkquality")],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Zintercom.png",alt:"DIYRuZ DIYRuZ_Zintercom"})])],-1),s=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://diyruz.github.io/posts/zintercom/" target="_blank" rel="noopener noreferrer">Matrix intercom auto opener</a></p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="state-enum" tabindex="-1"><a class="header-anchor" href="#state-enum"><span>State (enum)</span></a></h3><p>Current state. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>ring</code>, <code>talk</code>, <code>open</code>, <code>drop</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum"><span>Mode (enum)</span></a></h3><p>Select open mode. Value can be found in the published state on the <code>mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>never</code>, <code>once</code>, <code>always</code>, <code>drop</code>.</p><h3 id="sound-binary" tabindex="-1"><a class="header-anchor" href="#sound-binary"><span>Sound (binary)</span></a></h3><p>Enable or disable sound. Value can be found in the published state on the <code>sound</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> sound is ON, if <code>OFF</code> OFF.</p><h3 id="time-ring-numeric" tabindex="-1"><a class="header-anchor" href="#time-ring-numeric"><span>Time ring (numeric)</span></a></h3><p>Time to ring before answer. Value can be found in the published state on the <code>time_ring</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_ring&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_ring&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-talk-numeric" tabindex="-1"><a class="header-anchor" href="#time-talk-numeric"><span>Time talk (numeric)</span></a></h3><p>Time to hold before open. Value can be found in the published state on the <code>time_talk</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_talk&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_talk&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-open-numeric" tabindex="-1"><a class="header-anchor" href="#time-open-numeric"><span>Time open (numeric)</span></a></h3><p>Time to open before end. Value can be found in the published state on the <code>time_open</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_open&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_open&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-bell-numeric" tabindex="-1"><a class="header-anchor" href="#time-bell-numeric"><span>Time bell (numeric)</span></a></h3><p>Time after last bell to finish ring. Value can be found in the published state on the <code>time_bell</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_bell&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_bell&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="time-report-numeric" tabindex="-1"><a class="header-anchor" href="#time-report-numeric"><span>Time report (numeric)</span></a></h3><p>Reporting interval. Value can be found in the published state on the <code>time_report</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_report&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_report&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>. The unit of this value is <code>min</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),m={},h=(0,o(22652).A)(m,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[d,(0,i.Lk)("tbody",null,[n,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=DIYRuZ"},{default:(0,i.k6)((()=>[(0,i.eW)("DIYRuZ")])),_:1})])]),l,u,r])]),s])}]]),p=JSON.parse('{"path":"/devices/DIYRuZ_Zintercom.html","title":"DIYRuZ DIYRuZ_Zintercom control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DIYRuZ DIYRuZ_Zintercom control via MQTT","description":"Integrate your DIYRuZ DIYRuZ_Zintercom via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"State (enum)","slug":"state-enum","link":"#state-enum","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Sound (binary)","slug":"sound-binary","link":"#sound-binary","children":[]},{"level":3,"title":"Time ring (numeric)","slug":"time-ring-numeric","link":"#time-ring-numeric","children":[]},{"level":3,"title":"Time talk (numeric)","slug":"time-talk-numeric","link":"#time-talk-numeric","children":[]},{"level":3,"title":"Time open (numeric)","slug":"time-open-numeric","link":"#time-open-numeric","children":[]},{"level":3,"title":"Time bell (numeric)","slug":"time-bell-numeric","link":"#time-bell-numeric","children":[]},{"level":3,"title":"Time report (numeric)","slug":"time-report-numeric","link":"#time-report-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724697030000},"filePathRelative":"devices/DIYRuZ_Zintercom.md"}')}}]);