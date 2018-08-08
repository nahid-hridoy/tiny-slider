var tns=function(){var t=window,Ci=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Mi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Ai(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Ti(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function ki(t,e,n,i){return i&&t.setItem(e,n),n}function Ei(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Li(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Ni(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Bi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Di(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ii(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Oi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Si=i?function(t,e){Oi(t,e)||t.classList.add(e)}:function(t,e){Oi(t,e)||(t.className+=" "+e)},Hi=i?function(t,e){Oi(t,e)&&t.classList.remove(e)}:function(t,e){Oi(t,e)&&(t.className=t.className.replace(e,""))};function Ri(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Pi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Wi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function zi(t){Ri(t,"hidden")||Pi(t,{hidden:""})}function qi(t){Ri(t,"hidden")&&Wi(t,"hidden")}function Fi(t){return 0<t.offsetWidth&&0<t.offsetHeight}function ji(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Qi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Vi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Xi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Yi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Ki=function(h){h=Ai({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},h||{});var B=document,p=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,m=38,g=39,y=40,e={},n=h.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=p.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,M=e.tC?Ti(e.tC):ki(e,"tC",function(){var t=document,e=Ei(),n=Li(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Ni(e,n):i.remove(),a}(),n),A=e.tPL?Ti(e.tPL):ki(e,"tPL",function(){var t,e=document,n=Ei(),i=Li(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Ni(n,i):a.remove(),t}(),n),D=e.tMQ?Ti(e.tMQ):ki(e,"tMQ",(r=document,o=Ei(),x=Li(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Ni(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Ti(e.tTf):ki(e,"tTf",ji("transform"),n),k=e.t3D?Ti(e.t3D):ki(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ei(),a=Li(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Ni(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),E=e.tTDu?Ti(e.tTDu):ki(e,"tTDu",ji("transitionDuration"),n),L=e.tTDe?Ti(e.tTDe):ki(e,"tTDe",ji("transitionDelay"),n),N=e.tADu?Ti(e.tADu):ki(e,"tADu",ji("animationDuration"),n),I=e.tADe?Ti(e.tADe):ki(e,"tADe",ji("animationDelay"),n),O=e.tTE?Ti(e.tTE):ki(e,"tTE",Qi(E,"Transition"),n),S=e.tAE?Ti(e.tAE):ki(e,"tAE",Qi(N,"Animation"),n),H=p.console&&"function"==typeof p.console.warn,R=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],P={},W=R.length;W--;){var z=R[W];if("string"==typeof h[z]){var q=h[z],F=B.querySelector(q);if(P[z]=q,!F||!F.nodeName)return void(H&&console.warn("Can't find",h[z]));h[z]=F}}if(!(h.container.children.length<1)){var j=h.responsive,Q=h.nested,V="carousel"===h.mode;if(j){0 in j&&(h=Ai(h,j[0]),delete j[0]);var X={};for(var Y in j){var K=j[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}j=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(h),!V){h.axis="horizontal",h.slideBy="page",h.edgePadding=!1;var U=h.animateIn,G=h.animateOut,J=h.animateDelay,_=h.animateNormal}var Z,$,tt="horizontal"===h.axis,et=B.createElement("div"),nt=B.createElement("div"),it=h.container,at=it.parentNode,rt=it.outerHTML,ot=it.children,st=ot.length,ut=fn();j&&En();var lt,ct,ft,dt,vt,ht,pt,mt=h.autoWidth,gt=hn("fixedWidth"),yt=hn("edgePadding"),xt=hn("gutter"),bt=dn(),wt=mt?1:Math.floor(hn("items")),Ct=hn("slideBy"),Mt=h.viewportMax||h.fixedWidthViewportWidth,At=hn("arrowKeys"),Tt=hn("speed"),kt=h.rewind,Et=!kt&&h.loop,Lt=hn("autoHeight"),Nt=hn("controls"),Bt=hn("controlsText"),Dt=hn("nav"),It=hn("touch"),Ot=hn("mouseDrag"),St=hn("autoplay"),Ht=hn("autoplayTimeout"),Rt=hn("autoplayText"),Pt=hn("autoplayHoverPause"),Wt=hn("autoplayResetOnVisibility"),zt=(pt=document.createElement("style"),ht&&pt.setAttribute("media",ht),document.querySelector("head").appendChild(pt),pt.sheet?pt.sheet:pt.styleSheet),qt=h.lazyload,Ft=[],jt=Et?(dt=function(){{if(mt||gt&&!Mt)return st-1;var t=gt?"fixedWidth":"items",e=[];if((gt||h[t]<st)&&e.push(h[t]),j)for(var n in j){var i=j[n][t];i&&(gt||i<st)&&e.push(i)}return e.length||e.push(0),Math.ceil(gt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-st)/2):4*dt-st,vt=Math.max(dt,vt),vn("edgePadding")?vt+1:vt):0,Qt=V?st+2*jt:st+jt,Vt=!(!gt&&!mt||Et),Xt=gt?Un():null,Yt=!V||!Et,Kt=tt?"left":"top",Ut="",Gt="",Jt=gt?function(){return Math.floor(-Xt/(gt+xt))+1}:mt?function(){for(var t=Qt,e=t-1;t--;)lt[t]>-Xt&&(e=t);return e}:function(){return Et||V?Math.max(0,Qt-Math.ceil(wt)):Qt-1},_t=ln(hn("startIndex")),Zt=_t,$t=0,te=mt?null:Jt(),ee=h.swipeAngle,ne=!ee||"?",ie=!1,ae=h.onInit,re=new Yi,oe=" tns-slider tns-"+h.mode,se=it.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),ue=hn("disable"),le=!1,ce=h.freezable,fe=!(!ce||mt)&&kn(),de=!1,ve={click:ii,keydown:function(t){switch((t=fi(t)).keyCode){case v:case m:case l:Oe.disabled||ii(t,-1);break;case g:case y:case c:Se.disabled||ii(t,1);break;case d:ni("first",t);break;case f:ni("last",t)}}},he={click:function(t){ie&&ei();var e=(t=fi(t)).target||t.srcElement;for(;e!==Re&&!Ri(e,"data-nav");)e=e.parentNode;Ri(e,"data-nav")&&ni(qe=[].indexOf.call(He,e),t)},keydown:function(t){var e=B.activeElement;if(!Ri(e,"data-nav"))return;var n=(t=fi(t)).keyCode,i=[].indexOf.call(He,e),a=We.length,r=We.indexOf(i);h.navContainer&&(a=st,r=i);function o(t){return h.navContainer?t:We[t]}switch(n){case v:case l:0<r&&ci(He[o(r-1)]);break;case m:case d:0<r&&ci(He[o(0)]);break;case g:case c:r<a-1&&ci(He[o(r+1)]);break;case y:case f:r<a-1&&ci(He[o(a-1)]);break;case s:case u:ni(qe=i,t)}}},pe={mouseover:function(){Xe&&(ri(),Ye=!0)},mouseout:function(){Ye&&(ai(),Ye=!1)}},me={visibilitychange:function(){B.hidden?Xe&&(ri(),Ue=!0):Ue&&(ai(),Ue=!1)}},ge={keydown:function(t){switch((t=fi(t)).keyCode){case v:ii(t,-1);break;case g:ii(t,1)}}},ye={touchstart:pi,touchmove:mi,touchend:yi,touchcancel:yi},xe={mousedown:pi,mousemove:mi,mouseup:yi,mouseleave:yi},be=vn("controls"),we=vn("nav"),Ce=!!mt||h.navAsThumbnails,Me=vn("autoplay"),Ae=vn("touch"),Te=vn("mouseDrag"),ke="tns-slide-active",Ee="tns-complete",Le={load:On,error:On};if(be)var Ne,Be,De=h.controlsContainer,Ie=h.controlsContainer?h.controlsContainer.outerHTML:"",Oe=h.prevButton,Se=h.nextButton;if(we)var He,Re=h.navContainer,Pe=h.navContainer?h.navContainer.outerHTML:"",We=[],ze=We,qe=-1,Fe=cn(),je=Fe,Qe="tns-nav-active";if(Me)var Ve,Xe,Ye,Ke,Ue,Ge="forward"===h.autoplayDirection?1:-1,Je=h.autoplayButton,_e=h.autoplayButton?h.autoplayButton.outerHTML:"",Ze=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ae||Te)var $e,tn={},en={},nn=!1,an=0,rn=tt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};un(ue||fe),T&&(Kt=T,Ut="translate",k?(Ut+=tt?"3d(":"3d(0px, ",Gt=tt?", 0px, 0px)":", 0px)"):(Ut+=tt?"X(":"Y(",Gt=")")),function(){!function(){vn("gutter");et.className="tns-outer",nt.className="tns-inner",et.id=se+"-ow",nt.id=se+"-iw",Lt&&(nt.className+=" tns-ah");""===it.id&&(it.id=se);oe+=A||mt?" tns-subpixel":" tns-no-subpixel",oe+=M?" tns-calc":" tns-no-calc",V&&(oe+=" tns-"+h.axis);if(it.className+=oe,V){var t=B.createElement("div");t.className="tns-ovh",et.appendChild(t),t.appendChild(nt)}else et.appendChild(nt);at.insertBefore(et,it),nt.appendChild(it)}();for(var t=0;t<st;t++){var e=ot[t];e.id||(e.id=se+"-item"+t),Si(e,"tns-item"),!V&&_&&Si(e,_),Pi(e,{"aria-hidden":"true",tabindex:"-1"})}if(jt){for(var n=B.createDocumentFragment(),i=B.createDocumentFragment(),a=jt;a--;){var r=a%st,o=ot[r].cloneNode(!0);if(Wi(o,"id"),i.insertBefore(o,i.firstChild),V){var s=ot[st-1-r].cloneNode(!0);Wi(s,"id"),n.appendChild(s)}}it.insertBefore(n,it.firstChild),it.appendChild(i),ot=it.children}(function(){for(var t=_t,e=_t+Math.min(st,wt);t<e;t++){var n=ot[t];Pi(n,{"aria-hidden":"false"}),Wi(n,["tabindex"]),Si(n,ke),V||(n.style.left=100*(t-_t)/wt+"%",Si(n,U),Hi(n,_))}if(V&&tt&&(A||mt?(Bi(zt,"#"+se+" > .tns-item","font-size:"+p.getComputedStyle(ot[0]).fontSize+";",Di(zt)),Bi(zt,"#"+se,"font-size:0;",Di(zt))):Ii(ot,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Qt+")":100*n/Qt+"%")})),D){var i=pn(h.edgePadding,h.gutter,h.fixedWidth,h.speed);Bi(zt,"#"+se+"-iw",i,Di(zt)),V&&(i=tt&&!mt?"width:"+mn(h.fixedWidth,h.gutter,h.items)+";":"",E&&(i+=bn(Tt)),Bi(zt,"#"+se,i,Di(zt))),i=tt&&!mt?gn(h.fixedWidth,h.gutter,h.items):"",h.gutter&&(i+=yn(h.gutter)),V||(E&&(i+=bn(Tt)),N&&(i+=wn(Tt))),i&&Bi(zt,"#"+se+" > .tns-item",i,Di(zt))}else{nt.style.cssText=pn(yt,xt,gt),V&&tt&&!mt&&(it.style.width=mn(gt,xt,wt));var i=tt&&!mt?gn(gt,xt,wt):"";xt&&(i+=yn(xt)),i&&Bi(zt,"#"+se+" > .tns-item",i,Di(zt))}if(j&&D)for(var a in j){a=parseInt(a);var r=j[a],i="",o="",s="",u="",l=mt?null:hn("items",a),c=hn("fixedWidth",a),f=hn("speed",a),d=hn("edgePadding",a),v=hn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+se+"-iw{"+pn(d,v,c,f)+"}"),V&&tt&&!mt&&("fixedWidth"in r||"items"in r||gt&&"gutter"in r)&&(s="width:"+mn(c,v,l)+";"),E&&"speed"in r&&(s+=bn(f)),s&&(s="#"+se+"{"+s+"}"),("fixedWidth"in r||gt&&"gutter"in r||!V&&"items"in r)&&(u+=gn(c,v,l)),"gutter"in r&&(u+=yn(v)),!V&&"speed"in r&&(E&&(u+=bn(f)),N&&(u+=wn(f))),u&&(u="#"+se+" > .tns-item{"+u+"}"),(i=o+s+u)&&zt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",zt.cssRules.length)}})(),Cn(),mt||Mn();j&&En();if(V&&O){var u={};u[O]=ei,Vi(it,u)}It&&Vi(it,ye);Ot&&Vi(it,xe);At&&Vi(B,ge);"inner"===Q?re.on("outerResized",function(){Tn(),re.emit("innerLoaded",wi())}):(j||gt||mt||!tt)&&Vi(p,{resize:An});"outer"===Q?re.on("innerLoaded",Hn):!Lt&&V||ue||Hn();mt||In();ue?Dn():fe&&Bn();re.on("indexChanged",Pn),"function"==typeof ae&&ae(wi());"inner"===Q&&re.emit("innerLoaded",wi());$=!0}();var on=Et?V?function(){var t=$t,e=te;t+=Ct,e-=Ct,yt?(t+=1,e-=1):gt&&bt%(gt+xt)&&(e-=1),jt&&(e<_t?_t-=st:_t<t&&(_t+=st))}:function(){if(te<_t)for(;$t+st<=_t;)_t-=st;else if(_t<$t)for(;_t<=te-st;)_t+=st}:function(){_t=Math.max($t,Math.min(te,_t))},sn=V?function(){var e,n,i,a,t,r,o,s,u,l,c;E||!Tt?(_n(),Tt&&Fi(it)||ei()):(e=it,n=Kt,i=Ut,a=Gt,t=Gn(),r=Tt,o=ei,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),tt||xi()}:function(){Ft=[];var t={};t[O]=t[S]=ei,Xi(ot[Zt],t),Vi(ot[_t],t),Zn(Zt,U,G,!0),Zn(_t,_,U),O&&S&&Tt&&Fi(it)||ei()};return{version:"2.8.3",getInfo:wi,events:re,goTo:ni,play:function(){St&&!Xe&&(si(),Ke=!1)},pause:function(){Xe&&(ui(),Ke=!0)},isOn:$,updateSliderHeight:zn,refresh:Cn,destroy:function(){if(zt.disabled=!0,Xi(p,{resize:An}),At&&Xi(B,ge),De&&Xi(De,ve),Ie&&(De.outerHTML=Ie),Re&&Xi(Re,he),Pe&&(Re.outerHTML=Pe),Xi(it,pe),Xi(it,me),Je&&Xi(Je,{click:li}),St&&clearInterval(Ve),_e&&(Je.outerHTML=_e),V&&O){var t={};t[O]=ei,Xi(it,t)}It&&Xi(it,ye),Ot&&Xi(it,xe),et.outerHTML=rt,U=G=J=_=tt=et=nt=it=at=rt=ot=st=Z=ut=mt=gt=yt=xt=bt=wt=Ct=Mt=At=Tt=kt=Et=Lt=zt=qt=lt=Ft=jt=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=he=pe=me=ge=ye=xe=be=we=Ce=Me=Ae=Te=ke=Ee=Le=ct=Nt=Bt=De=Ie=Oe=Se=Ne=Be=Dt=Re=Pe=He=We=ze=qe=Fe=je=Qe=St=Ht=Ge=Rt=Pt=Je=_e=Wt=Ze=Ve=Xe=Ye=Ke=Ue=tn=en=$e=nn=an=rn=It=Ot=null,this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=$=!1},rebuild:function(){return Ki(Ai(h,P))}}}function un(t){t&&(Nt=Dt=It=Ot=At=St=Pt=Wt=!1)}function ln(t){return t=t?Math.max(0,Math.min(Et?st-1:st-wt,t)):0,V?t+jt:t}function cn(t){for(null==t&&(t=_t),V&&(t-=jt);t<0;)t+=st;return Math.floor(t%st)}function fn(){return p.innerWidth||B.documentElement.clientWidth||B.body.clientWidth}function dn(){return function t(e){return e.clientWidth||t(e.parentNode)}(at)-(2*yt-xt)}function vn(t){if(h[t])return!0;if(j)for(var e in j)if(j[e][t])return!0;return!1}function hn(t,e){if(null==e&&(e=ut),"items"===t&&gt)return Math.floor(bt/(gt+xt))||1;var n=h[t];if(j)for(var i in j)e>=parseInt(i)&&t in j[i]&&(n=j[i][t]);return"slideBy"===t&&"page"===n&&(n=hn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function pn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=tt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(tt?o+" 0 0":"0 "+o+" 0")+";"}return E&&i&&(a+=bn(i)),a}function mn(t,e,n){return t?(t+e)*Qt+"px":M?M+"("+100*Qt+"% / "+n+")":100*Qt/n+"%"}function gn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Qt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function yn(t){var e="";!1!==t&&(e=(tt?"padding-":"margin-")+(tt?"right":"bottom")+": "+t+"px;");return e}function xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function bn(t){return xn(E,18)+"transition-duration:"+t/1e3+"s;"}function wn(t){return xn(N,17)+"animation-duration:"+t/1e3+"s;"}function Cn(){if(vn("autoHeight")||mt||!tt){var t=it.querySelectorAll("img");Ii(t,function(t){var e=t.src;e.indexOf("data:image")<0?(Vi(t,Le),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Si(t,Ee)}),Ci(function(){Rn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){ct=!0;var e=Et?_t:st-1;!function t(){ot[e-1].getBoundingClientRect().right.toFixed(2)===ot[e].getBoundingClientRect().left.toFixed(2)?ue||(tt&&!mt||(qn(),In(),mt?(Xt=Un(),ce&&(fe=kn()),te=Jt(),fe&&(Nt=Dt=It=Ot=At=St=Pt=Wt=!1),Mn()):xi()),V&&Jn()):setTimeout(function(){t()},16)}()})})}V&&tt&&!mt&&Jn()}function Mn(){if(Me){var t=St?"stop":"start";Je?Pi(Je,{"data-action":t}):h.autoplayButtonOutput&&(et.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+Ze[0]+t+Ze[1]+Rt[0]+"</button>"),Je=et.querySelector("[data-action]")),Je&&Vi(Je,{click:li}),St&&(si(),Pt&&Vi(it,pe),Wt&&Vi(it,me))}if(we){var e=V?jt:0;if(Re){Pi(Re,{"aria-label":"Carousel Pagination"}),He=Re.children;for(var n=0;n<st;n++){var i=He[n];i&&Pi(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":ot[e+n].id})}}else{var a="",r=Ce?"":"hidden";for(n=0;n<st;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+ot[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",et.insertAdjacentHTML("afterbegin",a),Re=et.querySelector(".tns-nav"),He=Re.children}if(bi(),E){var o=E.substring(0,E.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),Bi(zt,"[aria-controls^="+se+"-item]",s,Di(zt))}Pi(He[Fe],{tabindex:"0","aria-selected":"true"}),Si(He[Fe],Qe),Vi(Re,he)}be&&(De||Oe&&Se?(De&&(Oe=De.children[0],Se=De.children[1],Pi(De,{"aria-label":"Carousel Navigation",tabindex:"0"}),Pi(De.children,{"aria-controls":se,tabindex:"-1"})),Pi(Oe,{"data-controls":"prev"}),Pi(Se,{"data-controls":"next"})):(et.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+se+'" type="button">'+Bt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+se+'" type="button">'+Bt[1]+"</button></div>"),De=et.querySelector(".tns-controls"),Oe=De.children[0],Se=De.children[1]),Ne=jn(Oe),Be=jn(Se),Xn(),De?Vi(De,ve):(Vi(Oe,ve),Vi(Se,ve))),Ln()}function An(t){Ci(function(){Tn(fi(t))})}function Tn(t){if($){"outer"===Q&&re.emit("outerResized",wi(t)),ut=fn();var e,n=Z,i=!1;j&&(En(),(e=n!==Z)&&re.emit("newBreakpointStart",wi(t)));var a,r,o,s,u=wt,l=ue,c=fe,f=At,d=Nt,v=Dt,h=It,p=Ot,m=St,g=Pt,y=Wt,x=_t;if(e){var b=gt,w=Lt,C=Bt,M=Rt;if(!D)var A=xt,T=yt}if(At=hn("arrowKeys"),Nt=hn("controls"),Dt=hn("nav"),It=hn("touch"),Ot=hn("mouseDrag"),St=hn("autoplay"),Pt=hn("autoplayHoverPause"),Wt=hn("autoplayResetOnVisibility"),e&&(ue=hn("disable"),gt=hn("fixedWidth"),Tt=hn("speed"),Lt=hn("autoHeight"),Bt=hn("controlsText"),Rt=hn("autoplayText"),Ht=hn("autoplayTimeout"),D||(yt=hn("edgePadding"),xt=hn("gutter"))),un(ue),bt=dn(),tt&&!mt||ue||(qn(),tt||(xi(),i=!0)),(gt||mt)&&(Xt=Un(),te=Jt()),(e||gt)&&(wt=hn("items"),Ct=hn("slideBy"),(r=wt!==u)&&(gt||mt||(te=Jt()),on())),e&&ue!==l&&(ue?Dn():function(){if(!le)return;if(zt.disabled=!1,it.className+=oe,Jn(),Et)for(var t=jt;t--;)V&&qi(ot[t]),qi(ot[Qt-t-1]);if(!V)for(var e=_t,n=_t+st;e<n;e++){var i=ot[e],a=e<_t+wt?U:_;i.style.left=100*(e-_t)/wt+"%",Si(i,a)}Nn(),le=!1}()),ce&&(e||gt||mt)&&(fe=kn())!==c&&(fe?(_n(Gn(ln(0))),Bn()):(!function(){if(!de)return;yt&&D&&(nt.style.margin="");if(jt)for(var t="tns-transparent",e=jt;e--;)V&&Hi(ot[e],t),Hi(ot[Qt-e-1],t);Nn(),de=!1}(),i=!0)),un(ue||fe),St||(Pt=Wt=!1),At!==f&&(At?Vi(B,ge):Xi(B,ge)),Nt!==d&&(Nt?qi(De):zi(De)),Dt!==v&&(Dt?(qi(Re),bi()):zi(Re)),It!==h&&(It?Vi(it,ye):Xi(it,ye)),Ot!==p&&(Ot?Vi(it,xe):Xi(it,xe)),St!==m&&(St?(Je&&qi(Je),Xe||Ke||si()):(Je&&zi(Je),Xe&&ui())),Pt!==g&&(Pt?Vi(it,pe):Xi(it,pe)),Wt!==y&&(Wt?Vi(B,me):Xi(B,me)),e&&(gt!==b&&(i=!0),Lt!==w&&(Lt||(nt.style.height="")),Nt&&Bt!==C&&(Oe.innerHTML=Bt[0],Se.innerHTML=Bt[1]),Je&&Rt!==M)){var k=St?1:0,E=Je.innerHTML,L=E.length-M[k].length;E.substring(L)===M[k]&&(Je.innerHTML=E.substring(0,L)+Rt[k])}if((a=_t!==x)&&(re.emit("indexChanged",wi()),i=!0),r&&(a||Pn(),V||function(){for(var t=_t+Math.min(st,wt),e=Qt;e--;){var n=ot[e];_t<=e&&e<t?(Si(n,"tns-moving"),n.style.left=100*(e-_t)/wt+"%",Si(n,U),Hi(n,_)):n.style.left&&(n.style.left="",Si(n,_),Hi(n,U)),Hi(n,G)}setTimeout(function(){Ii(ot,function(t){Hi(t,"tns-moving")})},300)}()),!ue&&!fe){if(e&&!D&&(yt===T&&xt===A||(nt.style.cssText=pn(yt,xt,gt)),tt)){V&&(it.style.width=mn(gt,xt,wt));var N=gn(gt,xt,wt)+yn(xt);s=Di(o=zt)-1,"deleteRule"in o?o.deleteRule(s):o.removeRule(s),Bi(zt,"#"+se+" > .tns-item",N,Di(zt))}!Lt&&V||Hn(),i&&(Jn(),Zt=_t)}e&&re.emit("newBreakpointEnd",wi(t))}}function kn(){return gt||mt?gt?(gt+xt)*st<=bt+2*yt:(Et?lt[st]:Kn())<=bt+2*yt:st<=wt}function En(){for(var t in Z=0,j)(t=parseInt(t))<=ut&&(Z=t)}function Ln(){!St&&Je&&zi(Je),!Dt&&Re&&zi(Re),!Nt&&De&&zi(De)}function Nn(){St&&Je&&qi(Je),Dt&&Re&&qi(Re),Nt&&De&&qi(De)}function Bn(){if(!de){if(yt&&(nt.style.margin="0px"),jt)for(var t="tns-transparent",e=jt;e--;)V&&Si(ot[e],t),Si(ot[Qt-e-1],t);Ln(),de=!0}}function Dn(){if(!le){if(zt.disabled=!0,it.className=it.className.replace(oe.substring(1),""),Wi(it,["style"]),Et)for(var t=jt;t--;)V&&zi(ot[t]),zi(ot[Qt-t-1]);if(tt&&V||Wi(nt,["style"]),!V)for(var e=_t,n=_t+st;e<n;e++){var i=ot[e];Wi(i,["style"]),Hi(i,U),Hi(i,_)}Ln(),le=!0}}function In(){if(qt&&!ue){var t=_t;if(mt)for(var e=_t+1,n=e,i=lt[_t]+bt+yt-xt;lt[e]<i;)n=++e;else n=_t+wt;for(yt&&(t-=1,mt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Qt));t<n;t++)Ii(ot[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[O]=function(t){t.stopPropagation()},Vi(t,n),Oi(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Si(t,"loaded"))})}}function On(t){var e=di(t);Si(e,Ee),Xi(e,Le)}function Sn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)Ii(ot[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Hn(){var t=Lt?Sn(_t,wt):Sn(jt,st);Ci(function(){Rn(t,zn)})}function Rn(n,t){return ct?t():(n.forEach(function(t,e){Oi(t,Ee)&&n.splice(e,1)}),n.length?void Ci(function(){Rn(n,t)}):t())}function Pn(){In(),function(){for(var t=_t+Math.min(st,wt),e=Qt;e--;){var n=ot[e];_t<=e&&e<t?Ri(n,"tabindex")&&(Pi(n,{"aria-hidden":"false"}),Wi(n,["tabindex"]),Si(n,ke)):(Ri(n,"tabindex")||Pi(n,{"aria-hidden":"true",tabindex:"-1"}),Oi(n,ke)&&Hi(n,ke))}}(),Xn(),bi(),function(){if(Dt&&(Fe=-1!==qe?qe:cn(),qe=-1,Fe!==je)){var t=He[je],e=He[Fe];Pi(t,{tabindex:"-1","aria-selected":"false"}),Pi(e,{tabindex:"0","aria-selected":"true"}),Hi(t,Qe),Si(e,Qe),je=Fe}}()}function Wn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)n.push(ot[i].offsetHeight);return Math.max.apply(null,n)}function zn(){var t=Lt?Wn(_t,wt):Wn(jt,st);nt.style.height!==t&&(nt.style.height=t+"px")}function qn(){lt=[0];for(var t,e=tt?"left":"top",n=ot[0].getBoundingClientRect()[e],i=1;i<Qt;i++)t=ot[i].getBoundingClientRect()[e],lt.push(t-n)}function Fn(t){return t.nodeName.toLowerCase()}function jn(t){return"button"===Fn(t)}function Qn(t){return"true"===t.getAttribute("aria-disabled")}function Vn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Xn(){if(Nt&&!kt&&!Et){var t=Ne?Oe.disabled:Qn(Oe),e=Be?Se.disabled:Qn(Se),n=_t<=$t,i=!kt&&te<=_t;n&&!t&&Vn(Ne,Oe,!0),!n&&t&&Vn(Ne,Oe,!1),i&&!e&&Vn(Be,Se,!0),!i&&e&&Vn(Be,Se,!1)}}function Yn(t,e){E&&(t.style[E]=e)}function Kn(){return gt?(gt+xt)*Qt:lt[Qt-1]+ot[Qt-1].getBoundingClientRect().width}function Un(){var t=bt-(Kn()-xt);return yt&&(t+=yt-xt),0<t&&(t=0),t}function Gn(t){var e;(null==t&&(t=_t),tt&&!mt)?e=gt?-(gt+xt)*t:100*-t/(T?Qt:wt):e=-lt[t];return Vt&&(e=Math.max(e,Xt)),e+=!tt||mt||gt?"px":"%"}function Jn(t){Yn(it,"0s"),_n(t),setTimeout(function(){Yn(it,"")},10)}function _n(t){null==t&&(t=Gn()),it.style[Kt]=Ut+t+Gt}function Zn(t,e,n,i){var a=t+wt;Et||(a=Math.min(a,Qt));for(var r=t;r<a;r++){var o=ot[r];i||(o.style.left=100*(r-_t)/wt+"%"),J&&L&&(o.style[L]=o.style[I]=J*(r-t)/1e3+"s"),Hi(o,e),Si(o,n),i&&Ft.push(o)}}function $n(t,e){Yt&&on(),(_t!==Zt||e)&&(re.emit("indexChanged",wi()),re.emit("transitionStart",wi()),Lt&&Hn(),Xe&&t&&0<=["click","keydown"].indexOf(t.type)&&ui(),ie=!0,sn())}function ti(t){return t.toLowerCase().replace(/-/g,"")}function ei(t){if(V||ie){if(re.emit("transitionEnd",wi(t)),!V&&0<Ft.length)for(var e=0;e<Ft.length;e++){var n=Ft[e];n.style.left="",I&&L&&(n.style[I]="",n.style[L]=""),Hi(n,G),Si(n,_)}if(!t||!V&&t.target.parentNode===it||t.target===it&&ti(t.propertyName)===ti(Kt)){if(!Yt){var i=_t;on(),_t!==i&&(re.emit("indexChanged",wi()),Jn())}"inner"===Q&&re.emit("innerLoaded",wi()),ie=!1,Zt=_t}}}function ni(t,e){if(!fe)if("prev"===t)ii(e,-1);else if("next"===t)ii(e,1);else{ie&&ei();var n=cn(),i=0;if("first"===t?i=-n:"last"===t?i=V?st-wt-n:st-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(st-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=$t<=_t+i-st?st*a:2*st*a*-1}_t+=i,V&&Et&&(_t<$t&&(_t+=st),te<_t&&(_t-=st)),cn(_t)!==cn(Zt)&&$n(e)}}function ii(t,e){var n;if(ie&&ei(),!e){for(var i=(t=fi(t)).target||t.srcElement;i!==De&&[Oe,Se].indexOf(i)<0;)i=i.parentNode;var a=[Oe,Se].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(kt){if(_t===$t&&-1===e)return void ni("last",t);if(_t===te&&1===e)return void ni("first",t)}e&&(_t+=Ct*e,mt&&(_t=Math.floor(_t)),$n(n||t&&"keydown"===t.type?t:null))}function ai(){Ve=setInterval(function(){ii(null,Ge)},Ht),Xe=!0}function ri(){clearInterval(Ve),Xe=!1}function oi(t,e){Pi(Je,{"data-action":t}),Je.innerHTML=Ze[0]+t+Ze[1]+e}function si(){ai(),Je&&oi("stop",Rt[1])}function ui(){ri(),Je&&oi("start",Rt[0])}function li(){Xe?(ui(),Ke=!0):(si(),Ke=!1)}function ci(t){t.focus()}function fi(t){return vi(t=t||p.event)?t.changedTouches[0]:t}function di(t){return t.target||p.event.srcElement}function vi(t){return 0<=t.type.indexOf("touch")}function hi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function pi(t){ie&&ei(),nn=!0,V&&(Mi(an),an=0);var e=fi(t);re.emit(vi(t)?"touchStart":"dragStart",wi(t)),!vi(t)&&0<=["img","a"].indexOf(Fn(di(t)))&&hi(t),en.x=tn.x=parseInt(e.clientX),en.y=tn.y=parseInt(e.clientY),V&&($e=parseFloat(it.style[Kt].replace(Ut,"").replace(Gt,"")),Yn(it,"0s"))}function mi(t){if(nn){var e=fi(t);en.x=parseInt(e.clientX),en.y=parseInt(e.clientY),V&&!an&&(an=Ci(function(){!function t(e){if(!ne)return void(nn=!1);Mi(an);nn&&(an=Ci(function(){t(e)}));gi();if(ne){try{e.type&&re.emit(vi(e)?"touchMove":"dragMove",wi(e))}catch(t){}var n=$e,i=rn(en,tn);if(!tt||gt||mt)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Qt):100*i/bt;n+=a,n+="%"}it.style[Kt]=Ut+n+Gt}}(t)}))}}function gi(){var t,e,n,i,a,r;"?"===ne&&en.x!==tn.x&&en.y!==tn.y&&(a=en.y-tn.y,r=en.x-tn.x,t=Math.atan2(a,r)*(180/Math.PI),e=ee,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),ne=n===h.axis)}function yi(i){if(nn){V&&(Mi(an),Yn(it,"")),nn=!1;var t=fi(i);en.x=parseInt(t.clientX),en.y=parseInt(t.clientY);var a=rn(en,tn);if(5<=Math.abs(a)){if(!vi(i)){var n=di(i);Vi(n,{click:function t(e){hi(e),Xi(n,{click:t})}})}V?an=Ci(function(){if(tt&&!mt){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),_t+=t}else{var e=-($e+a);if(e<=0)_t=$t;else if(e>=lt[lt.length-1])_t=te;else for(var n=0;n<Qt&&e>=lt[n];)e>lt[_t=n]&&a<0&&(_t+=1),n++}$n(i,a),re.emit(vi(i)?"touchEnd":"dragEnd",wi(i))}):(gi(),ne&&ii(i,0<a?-1:1))}}ee&&(ne="?")}function xi(){nt.style.height=lt[_t+wt]-lt[_t]+"px"}function bi(){Dt&&!Ce&&(!function(){We=[];for(var t=cn()%wt;t<st;)V&&!Et&&st<t+wt&&(t=st-wt),We.push(t),t+=wt;(Et&&We.length*wt<st||!Et&&0<We[0])&&We.unshift(0)}(),We!==ze&&(Ii(He,function(t,e){We.indexOf(e)<0?zi(t):qi(t)}),ze=We))}function wi(t){return{container:it,slideItems:ot,navContainer:Re,navItems:He,controlsContainer:De,hasControls:be,prevButton:Oe,nextButton:Se,items:wt,slideBy:Ct,cloneCount:jt,slideCount:st,slideCountNew:Qt,index:_t,indexCached:Zt,navCurrentIndex:Fe,navCurrentIndexCached:je,visibleNavIndexes:We,visibleNavIndexesCached:ze,sheet:zt,event:t||{}}}H&&console.warn("No slides found in",h.container)};return Ki}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
