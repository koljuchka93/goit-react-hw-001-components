(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={profile:"profile_profile__2cbET",description:"profile_description__3eQ58",avatar:"profile_avatar__29G_p",name:"profile_name__1KU_X",tag:"profile_tag__2H5qY",location:"profile_location__3qDaF",stats:"profile_stats__3_tTy",label:"profile_label__329g6",quantity:"profile_quantity__36i4u"}},,function(e,t,a){e.exports={friends_list:"friendlist_friends_list__1jLEH",item:"friendlist_item__-pufG",statusOnline:"friendlist_statusOnline__ubZP-",statusOffline:"friendlist_statusOffline__2MHGN",avatar:"friendlist_avatar__3apCF",name:"friendlist_name__2QylL"}},function(e,t,a){e.exports={statistics:"statistics_statistics__YiQ2v",title:"statistics_title__3kzDB",stat_list:"statistics_stat_list__GdyRj",item:"statistics_item__1zTHs",label:"statistics_label__yt0XV",percentage:"statistics_percentage__3DYxa"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e,t,a){e.exports={transaction_history:"transaction_transaction_history__2NHPx"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(7),i=a.n(s),r=(a(16),a(1)),l=a.n(r),d=a(0),o=function(e){var t=e.name,a=e.tag,n=e.location,c=e.avatar,s=e.stats;return Object(d.jsxs)("div",{class:l.a.profile,children:[Object(d.jsxs)("div",{class:l.a.description,children:[Object(d.jsx)("img",{src:c,alt:"user avatar",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:t}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",a]}),Object(d.jsx)("p",{className:l.a.location,children:n})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:s.followers})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:s.views})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:s.likes})]})]})]})},b=a(4),p=a.n(b),u=function(e){var t=e.title,a=e.stats;return Object(d.jsxs)("section",{className:p.a.statistics,children:[t&&Object(d.jsx)("h2",{className:"title",children:t}),Object(d.jsx)("ul",{className:p.a.stat_list,children:a.map((function(e){return Object(d.jsxs)("li",{className:p.a.item,children:[Object(d.jsx)("span",{className:p.a.label,children:e.label}),Object(d.jsxs)("span",{className:p.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})},f=a(3),j=a.n(f),m=function(e){var t=e.friends;return Object(d.jsx)("ul",{className:j.a.friends_list,children:t.map((function(e){return Object(d.jsxs)("li",{className:j.a.item,children:[Object(d.jsx)("span",{className:e.isOnline?j.a.statusOnline:j.a.statusOffline}),Object(d.jsx)("img",{className:j.a.avatar,src:e.avatar,alt:"User avatar",width:"48"}),Object(d.jsx)("p",{className:j.a.name,children:e.name})]},e.id)}))})},_=a(8),h=a.n(_),y=function(e){var t=e.transaction;return Object(d.jsxs)("table",{class:h.a.transaction_history,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})},O=a(5),x=a(9),g=a(10),v=a(11),N=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{name:O.username,tag:O.tag,location:O.location,avatar:O.avatar,stats:O.stats}),Object(d.jsx)(u,{title:"Upload stats",stats:x}),Object(d.jsx)(m,{friends:g}),Object(d.jsx)(y,{transaction:v})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),w()}],[[18,1,2]]]);
//# sourceMappingURL=main.074d6c72.chunk.js.map