(this["webpackJsonpcustom-info-dash"]=this["webpackJsonpcustom-info-dash"]||[]).push([[0],{12:function(e,a,t){},21:function(e,a,t){e.exports=t(36)},26:function(e,a,t){},32:function(e,a,t){e.exports=t.p+"static/media/gold.be841c07.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/silver.4fd9c9e3.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/platinum.3a682308.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/palla.d8d0e42a.jpg"},36:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(18),r=t.n(n),m=(t(26),t(12),t(8)),o=t(3);var s=function(){return l.a.createElement("div",{className:"flex-container"},l.a.createElement("ul",{className:"nav"},l.a.createElement(o.b,{to:"/"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-2x fa-home"}))),l.a.createElement(o.b,{to:"/currency"},l.a.createElement("li",{className:"money"},l.a.createElement("h3",null,l.a.createElement("b",null,"$")))),l.a.createElement(o.b,{to:"/crypto"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-2x fa-bitcoin"}))),l.a.createElement(o.b,{to:"/metal"},l.a.createElement("li",null,l.a.createElement("h3",null,l.a.createElement("b",null,"Au")))),l.a.createElement(o.b,{to:"/country"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-2x fa-globe"})))))},i=t(7),u=t(10),d=t(2),E=l.a.createContext();function v(e){var a=Object(c.useState)(""),t=Object(d.a)(a,2),n=t[0],r=t[1],m=Object(c.useState)([]),o=Object(d.a)(m,2),s=o[0],i=o[1],u=Object(c.useState)(""),v=Object(d.a)(u,2),N=v[0],p=v[1],f=Object(c.useState)([]),b=Object(d.a)(f,2),g=b[0],h=b[1],y=Object(c.useState)([]),j=Object(d.a)(y,2),C=j[0],x=j[1],O=Object(c.useState)(""),w=Object(d.a)(O,2),S=w[0],k=w[1],D=Object(c.useState)([]),P=Object(d.a)(D,2),T=P[0],L=P[1],R=Object(c.useState)(""),A=Object(d.a)(R,2),I=A[0],U=A[1],_=Object(c.useState)(""),B=Object(d.a)(_,2),F=B[0],$=B[1],z=Object(c.useState)([]),G=Object(d.a)(z,2),J=G[0],M=G[1],W=Object(c.useState)(""),q=Object(d.a)(W,2),H=(q[0],q[1]),K="https://raw.githubusercontent.com/guhilot/metals/master/metals.json";Object(c.useEffect)((function(){fetch(F,{method:"GET",headers:{"x-rapidapi-host":"currencyconv.p.rapidapi.com","x-rapidapi-key":"74582e3d89msh6a4a888a5292854p1d279cjsne4a41671a67f"}}).then((function(e){return e.json()})).then((function(e){return U(e)}))}),[F]),Object(c.useEffect)((function(){fetch(K).then((function(e){return e.json()})).then((function(e){return M(e)}))}),[K]),Object(c.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[n]),Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/guhilot/pictures/master/country.json").then((function(e){return e.json()})).then((function(e){return h([e])}))}),[]),Object(c.useEffect)((function(){x(g.map((function(e){return e.Response.map((function(e){if(e.Name===N)return l.a.createElement("div",{className:"dContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},e.Region),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},e.Name),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},e.Longitude),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},e.Latitude)))}))}))),k(g.map((function(e){return e.Response.map((function(e){if(e.Name===N)return l.a.createElement("div",{className:"dcontainer"},l.a.createElement("div",{className:"row ab"},l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 ab"},l.a.createElement("img",{className:"ima",src:e.Flag,alt:"flag"}))))}))}))),L(g.map((function(e){return e.Response.map((function(e){if(e.Name===N)return l.a.createElement("div",{className:"dContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},e.NativeLanguage),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},e.NativeName),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},e.CurrencyCode),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},e.CurrencySymbol)))}))})))}),[N]);var Q=s.map((function(e){return l.a.createElement("div",{className:"dContainer",key:e.name},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-2 logo"},l.a.createElement("img",{src:e.logo_url,alt:"Coin logo",height:30,width:30})),l.a.createElement("div",{className:"col-sm-6 price"},"$ ",e.price),l.a.createElement("div",{className:"col-sm-4 name"},e.name)))})),V=s.map((function(e){return l.a.createElement("div",{className:"dContainer",key:e.name},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-1 id"},e.id),l.a.createElement("div",{className:"col-sm-5 s1"},e.max_supply),l.a.createElement("div",{className:"col-sm-4 s1"},e.circulating_supply),l.a.createElement("div",{className:"col-sm-2 rank"},e.rank)))})),X=s.map((function(e){return l.a.createElement("div",{className:"dContainer",key:e.name},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-1 "},e.id),l.a.createElement("div",{className:"col-sm-7 "},"Time: ",e.price_timestamp),l.a.createElement("div",{className:"col-sm-4 "},"$",e.market_cap)))}));return l.a.createElement(E.Provider,{value:{processCode:function(e){console.log(e);var a=e.toUpperCase(),t="https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=".concat(a);r(t)},newCoinData:Q,moreCoinData:V,extraData:X,countryInfo:C,processCountry:function(e){var a=e.charAt(0).toUpperCase()+e.slice(1);p(a)},flag:S,moreData:T,getCurrency:function(e,a,t){H(t.toUpperCase());var c=a.toUpperCase(),l=t.toUpperCase();$("https://currencyconv.p.rapidapi.com/currency_conversion?in="+c+"&amount="+e+"&out="+l)},rate:I,metal:J}},e.children)}var N=function(){var e=Object(c.useState)({amt:"",From:"",To:""}),a=Object(d.a)(e,2),t=a[0],n=a[1],r=Object(c.useContext)(E),m=r.getCurrency,o=r.rate;function s(e){e.preventDefault();var a=e.target,t=a.value,c=a.name;n((function(e){return Object(u.a)({},e,Object(i.a)({},c,t))}))}return l.a.createElement("div",{className:"Ccontainer"},l.a.createElement("div",{className:"row dd6"},l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 boxd"},l.a.createElement("h2",{className:"cen"},"Currency Convertor"),l.a.createElement("form",{className:"iform",onSubmit:function(e){e.preventDefault(),m(t.amt,t.From,t.To)}},l.a.createElement("input",{type:"text",placeholder:"Enter Amount eg 1",name:"amt",value:t.amt,onChange:s,className:"form-control cf1"}),l.a.createElement("input",{type:"text",placeholder:"Enter currency eg USD",name:"From",value:t.From,onChange:s,className:"form-control cf1"}),l.a.createElement("input",{type:"text",placeholder:"Enter currency eg CAD",name:"To",value:t.To,onChange:s,className:"form-control cf1"}),l.a.createElement("button",{className:"bz btn btn-primary"},"Convert")))),l.a.createElement("div",{className:"row dd7"},l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 boxd"},l.a.createElement("h2",{className:"cen"},o.amount))))};var p=function(){return Object(c.useContext)(E).rate,l.a.createElement("div",{className:"container"},l.a.createElement(N,null))};var f=function(){var e=Object(c.useState)({Coin:""}),a=Object(d.a)(e,2),t=a[0],n=a[1],r=Object(c.useContext)(E).processCode;return console.log(t.Coin),l.a.createElement("div",{className:"Rcontainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12"},l.a.createElement("form",{className:"iform",onSubmit:function(e){e.preventDefault(),r(t.Coin)}},l.a.createElement("input",{type:"text",name:"Coin",value:t.Coin,placeholder:"Enter crypto code ex. LTC, BTC",onChange:function(e){e.preventDefault();var a=e.target,t=a.name,c=a.value;n((function(e){return Object(u.a)({},e,Object(i.a)({},t,c))}))},className:"form-control fm1"}),l.a.createElement("button",{className:"btn btn-primary bpad"},"Search")))))};var b=function(){var e=Object(c.useContext)(E),a=e.newCoinData,t=e.moreCoinData,n=e.extraData;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-5 box"},l.a.createElement(f,null)),l.a.createElement("div",{className:"col-lg-5 box "},a)),l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-lg-5 box"},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-1 "},"ID"),l.a.createElement("div",{className:"col-sm-5 z1"},"MaxSupply"),l.a.createElement("div",{className:"col-sm-4 z1"},"Circulating"),l.a.createElement("div",{className:"col-sm-2 "},"Rank")),t),l.a.createElement("div",{className:"col-lg-5 box"},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-1 "},"ID"),l.a.createElement("div",{className:"col-sm-7 "},"Time Stamp"),l.a.createElement("div",{className:"col-sm-4 "},"Capital")),n)))};var g=function(){var e=Object(c.useContext)(E).metal,a=e.map((function(e){if("Gold"==e.Name)return e.Price})),n=e.map((function(e){if("Silver"===e.Name)return e.Price})),r=e.map((function(e){if("Palladium"===e.Name)return e.Price})),m=e.map((function(e){if("Platinum"===e.Name)return e.Price}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 b1"},l.a.createElement("h1",{className:"mPrice"},a)),l.a.createElement("div",{className:"col-lg-12 b2"},l.a.createElement("img",{className:"img1",src:t(32),alt:"gold"})))),l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 b1"},l.a.createElement("h1",{className:"mPrice"},n)),l.a.createElement("div",{className:"col-lg-12 b2"},l.a.createElement("img",{className:"img1",src:t(33),alt:"silver"}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 b1"},l.a.createElement("h1",{className:"mPrice"},m)),l.a.createElement("div",{className:"col-lg-12 b2"},l.a.createElement("img",{className:"img1",src:t(34),alt:"platinum"})))),l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 b1"},l.a.createElement("h1",{className:"mPrice"},r)),l.a.createElement("div",{className:"col-lg-12 b2"},l.a.createElement("img",{className:"img1",src:t(35),alt:"pallidum"}))))))};var h=function(){var e=Object(c.useState)({Name:""}),a=Object(d.a)(e,2),t=a[0],n=a[1],r=Object(c.useContext)(E).processCountry;return l.a.createElement("div",{className:"Rcontainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12"},l.a.createElement("form",{className:"iform",onSubmit:function(e){e.preventDefault(),r(t.Name)}},l.a.createElement("input",{type:"text",placeholder:"Enter country name 'Paris is not a country'",name:"Name",value:t.Name,onChange:function(e){e.preventDefault();var a=e.target,t=a.name,c=a.value;n((function(e){return Object(u.a)({},e,Object(i.a)({},t,c))}))},className:"form-control cntxt"}),l.a.createElement("button",{className:"btn btn-primary cnbtn"},"Get Info")))))};var y=function(){var e=Object(c.useContext)(E),a=e.countryInfo,t=e.flag,n=e.moreData;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-5 box"},l.a.createElement(h,null)),l.a.createElement("div",{className:"col-lg-5 box"},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},"Region"),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},"Country"),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},"Longitude"),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},"Latitude")),a)),l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-lg-5 box"},l.a.createElement("div",{className:"row dd"},l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},"Language"),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},"LclName"),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},"Currency"),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 del1"},"Symbol")),n),l.a.createElement("div",{className:"col-lg-5 box box1"},t)))};var j=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box "},l.a.createElement(o.b,{to:"/currency"},l.a.createElement("h2",null,"Currency Converter"),l.a.createElement("p",null,"We give you the power of our most up to date, reputable currency information and offer you secure, reliable, easy to use products and services dedicated to making your life easier."))),l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement(o.b,{to:"/crypto"},l.a.createElement("h2",null,"Crypto Currency Price"),l.a.createElement("p",null,"Bitcoin is the world's most widely used alternative currency with a total market cap of over $100 billion. The bitcoin network is made up of thousands of computers run by individuals all over the world.")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement(o.b,{to:"/metal"},l.a.createElement("h2",null,"Precious Metals Prices"),l.a.createElement("p",null,"Precious metals prices can and do change throughout the day. Bid and ask prices shown here represent the last published prices per ounce your computer retrieved. We monitors marketplace activities and adjusts its Ask, Bid and Spot prices as much as 50 times or more throughout its 11-hour trading day."))),l.a.createElement("div",{className:"col-sm-5 col-md-5 col-lg-5 box"},l.a.createElement(o.b,{to:"/country"},l.a.createElement("h2",null,"Country Information"),l.a.createElement("p",null,"At a glance, you can see which are the richest and poorest nations; which have the most serious debt problem, the highest industrial growth rate and the healthiest export record; which spend the most per head on sectors as diverse as advertising and defence")))))};var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(j,null)),l.a.createElement(m.a,{path:"/currency"},l.a.createElement(p,null)),l.a.createElement(m.a,{path:"/crypto"},l.a.createElement(b,null)),l.a.createElement(m.a,{path:"/metal"},l.a.createElement(g,null)),l.a.createElement(m.a,{path:"/country"},l.a.createElement(y,null))))};r.a.render(l.a.createElement(v,null,l.a.createElement(o.a,null,l.a.createElement(C,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.57d37551.chunk.js.map