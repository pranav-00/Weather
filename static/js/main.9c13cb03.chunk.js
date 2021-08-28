(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{30:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var a,i,r,c=t(1),o=t.n(c),s=t(20),d=t.n(s),l=(t(30),t(7)),p=t.n(l),u=t(21),h=t(9),x=t(2),j=t(3),b=t(22),f=t.n(b),v=t(0),g=j.a.form(a||(a=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 20px;\n  border: black solid 1px;\n  border-radius: 2px;\n\n  & input {\n    padding: 10px;\n    font-size: 14px;\n    border: none;\n    outline: none;\n    font-family: Montserrat;\n    font-weight: bold;\n  }\n  & button {\n    background-color: black;\n    font-size: 14px;\n    padding: 0 10px;\n    color: white;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-family: Montserrat;\n    font-weight: bold;\n  }\n"])));function w(n){var e=n.updateCity,t=n.fetchWeather;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(g,{onSubmit:t,children:[Object(v.jsx)("input",{onChange:function(n){return e(n.target.value)},placeholder:"City Name"}),Object(v.jsx)("button",{type:"submit",children:"Search"})]})})}var m,O,y,z,k,C,W,M,S,F,D,I,J=j.a.span(i||(i=Object(x.a)(["\n  color: black;\n  margin: 10px auto;\n  font-size: 18px;\n  font-weight: bold;\n"]))),q=j.a.img(r||(r=Object(x.a)(["\n  width: 140px;\n  height: 140px;\n  margin: 40px auto;\n"]))),A=function(n){var e=n.updateCity,t=n.fetchWeather;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(q,{src:"/weather/icons/perfect-day.svg"}),Object(v.jsx)(J,{children:"Find Weather of your city"}),Object(v.jsx)(w,{updateCity:e,fetchWeather:t})]})},B={sunset:"/weather/icons/temp.svg",sunrise:"/weather/icons/temp.svg",humidity:"/weather/icons/humidity.svg",wind:"/weather/icons/wind.svg",pressure:"/weather/icons/pressure.svg"},E=j.a.span(m||(m=Object(x.a)(["\n  margin: 15px auto;\n  text-transform: capitalize;\n  font-size: 28px;\n  font-weight: bold;\n"]))),H=j.a.span(O||(O=Object(x.a)(["\n  margin: 20px auto;\n  text-transform: capitalize;\n  font-size: 14px;\n  & span {\n    font-size: 28px;\n  }\n"]))),N=j.a.span(y||(y=Object(x.a)(["\n  margin: 20px 25px 10px;\n  text-transform: capitalize;\n  text-align: start;\n  width: 90%;\n  font-weight: bold;\n  font-size: 14px;\n"]))),R=j.a.img(z||(z=Object(x.a)(["\n  width: 100px;\n  height: 100px;\n  margin: 5px auto;\n"]))),X=j.a.div(k||(k=Object(x.a)(["\n  display: flex;\n  width: 100%;\n  margin: 30px auto;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),G=j.a.div(C||(C=Object(x.a)(["\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),K=j.a.div(W||(W=Object(x.a)(["\n  display: flex;\n  margin: 5px 10px;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),L=j.a.img(M||(M=Object(x.a)(["\n  width: 36px;\n  height: 36px;\n"]))),P=j.a.span(S||(S=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 15px;\n  & span {\n    font-size: 12px;\n    text-transform: capitalize;\n  }\n"]))),Q=j.a.button(F||(F=Object(x.a)(["\nborder-radius: 50%;\npadding: 4px;\nfont-size: 9px;\ncolor: white;\nbackground-color: black;\nposition: relative;\ntop: -7px;\nborder: none;\n"]))),T=function(n){var e=n.name,t=n.value;return Object(v.jsxs)(K,{children:[Object(v.jsx)(L,{src:B[e]}),Object(v.jsxs)(P,{children:[t,Object(v.jsx)("span",{children:e})]})]})},U=function(n){var e,t,a,i,r,c,o=n.weather,s=n.updateCity,d=n.updateWeather,l=null===o||void 0===o||null===(e=o.weather[0].icon)||void 0===e?void 0:e.includes("d");return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(X,{children:[Object(v.jsxs)(H,{children:[Object(v.jsx)("span",{children:"".concat(Math.floor((null===o||void 0===o||null===(t=o.main)||void 0===t?void 0:t.temp)-273),"\xb0C")}),"  |  ".concat(null===o||void 0===o?void 0:o.weather[0].description)]}),Object(v.jsx)(R,{src:V[null===o||void 0===o?void 0:o.weather[0].icon]})]}),Object(v.jsxs)(E,{children:["".concat(null===o||void 0===o?void 0:o.name,", ").concat(null===o||void 0===o||null===(a=o.sys)||void 0===a?void 0:a.country," "),Object(v.jsx)(Q,{onClick:function(){s(),d()},children:"X"})]}),Object(v.jsx)(N,{children:"Weather Info"}),Object(v.jsxs)(G,{children:[Object(v.jsx)(T,{name:l?"sunset":"sunrise",value:"".concat(function(n){var e=new Date;return"".concat(e.getHours()+" : "+e.getMinutes())}(null===o||void 0===o||o.sys[l?"sunset":"sunrise"]))}),Object(v.jsx)(T,{name:"humidity",value:null===o||void 0===o||null===(i=o.main)||void 0===i?void 0:i.humidity}),Object(v.jsx)(T,{name:"wind",value:null===o||void 0===o||null===(r=o.wind)||void 0===r?void 0:r.speed}),Object(v.jsx)(T,{name:"pressure",value:null===o||void 0===o||null===(c=o.main)||void 0===c?void 0:c.pressure})]})]})},V={"01d":"/weather/icons/sunny.svg","01n":"/weather/icons/night.svg","02d":"/weather/icons/day.svg","02n":"/weather/icons/cloudy-night.svg","03d":"/weather/icons/cloudy.svg","03n":"/weather/icons/cloudy.svg","04d":"/weather/icons/perfect-day.svg","04n":"/weather/icons/cloudy-night.svg","09d":"/weather/icons/rain.svg","09n":"/weather/icons/rain-night.svg","10d":"/weather/icons/rain.svg","10n":"/weather/icons/rain-night.svg","11d":"/weather/icons/storm.svg","11n":"/weather/icons/storm.svg"},Y=j.a.div(D||(D=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 380px;\n  padding: 20px 10px;\n  margin: auto;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px 0 #555;\n  background: white;\n  font-family: Montserrat;\n"]))),Z=j.a.span(I||(I=Object(x.a)(["\n  color: black;\n  margin: 20px auto;\n  font-size: 18px;\n  font-weight: bold;\n"])));var $=function(){var n=Object(c.useState)(),e=Object(h.a)(n,2),t=e[0],a=e[1],i=Object(c.useState)(),r=Object(h.a)(i,2),o=r[0],s=r[1],d=function(){var n=Object(u.a)(p.a.mark((function n(e){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,f.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=fe4feefa8543e06d4f3c66d92c61b69c"));case 3:a=n.sent,s(a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(v.jsxs)(Y,{children:[Object(v.jsx)(Z,{children:"React Weather App"}),t&&o?Object(v.jsx)(U,{updateCity:a,updateWeather:s,weather:o,city:t}):Object(v.jsx)(A,{updateCity:a,fetchWeather:d})]})};d.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9c13cb03.chunk.js.map