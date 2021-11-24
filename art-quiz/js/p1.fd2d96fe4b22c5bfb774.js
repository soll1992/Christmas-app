(()=>{"use strict";var e={216:(e,t,s)=>{s.d(t,{Z:()=>a});const a='<div class="settings"> <div class="settings-wrap"> <div class="settings-header"> <button class="back settings-nav-buttons">Settings</button> <button class="settings-close settings-nav-buttons"></button> </div> <div class="volume"> <h2 class="title">Volume</h2> <div class="volume-slider"> <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> </div> <div class="mute mute-off"> </div> </div> <div class="time-game"> <h2 class="title">Time game</h2> <div class="toggle-container"> <label for="toggle-button" class="text">On</label> <input type="checkbox" id="toggle-button" class="toggle-button"> </div> </div> <div class="time-answer"> <h2 class="title">Time to answer</h2> <div class="time-input-body"> <button class="plus time-button">+</button> <input class="time-input" type="number" value="20" readonly="readonly"> <button class="minus time-button">-</button> </div> </div> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'},699:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(216);class i{constructor(){}async render(){return a.Z}async after_render(){}}}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=s(699);const t=()=>{const e=(location.hash.slice(1).toLowerCase()||"/").split("/"),t={resource:null,id:null,verb:null};return t.resource=e[1],t.id=e[2],t.verb=e[3],t};alert("Добрый день! Работу доделать не успел из-за неожиданных жизненных обстоятельств. Прошу проверить в четверг вечером, если это возможно или написать мне в discord(Антон92#7138) на какое время вы можете отложить проверку. Если можете проверить только сейчас, то жмите 'OK' и проверьте то что есть на данный момент. Заранее спасибо!");const a=new class{constructor(){}async render(){return'<div class="main"> <div class="main-body"> <div class="home-header"> <a href="#/settings" class="settings-button"></a> </div> <div class="logo"></div> <div class="categories-main-buttons"> <div class="artist"> <a class="categori-link artist-link" href="#/categories_artist">Artist quiz</a> </div> <div class="pictures"> <a class="categori-link pictures-link" href="#/categories_pictures">Pictures quiz</a> </div> </div> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div> '}async after_render(){}},i=new e.Z,r=new class{constructor(){}async render(){return'<div class="categories"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav link" href="#">Home</a> <a class="categories-nav picture-link link" href="#/categories_pictures">Pictures quiz</a> </div> <a href="#/settings" class="settings-button"></a> </div> <div class="categories-body"> <a href="#/questions" class="categori-card"> <div class="portrait card-title">Portrait <span class="score portrait"></span></div> <img class="portrait grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/0.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="landscape card-title">Landscape <span class="score landscape"></span></div> <img class="landscape grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/10.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="stillLife card-title">Still life <span class="score stillLife"></span></div> <img class="stillLife grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/20.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="impressionism card-title">Impressionism <span class="score impressionism"></span></div> <img class="impressionism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/30.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="expressionism card-title">Expressionism <span class="score expressionism"></span></div> <img class="expressionism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/40.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="avantGarde card-title">Avant-garde <span class="score avantGarde"></span></div> <img class="avantGarde grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/50.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="renaissance card-title">Renaissance <span class="score renaissance"></span></div> <img class="renaissance grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/60.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="surrealism card-title">Surrealism <span class="score surrealism"></span></div> <img class="surrealism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/70.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="kitsch card-title">Kitsch <span class="score kitsch"></span></div> <img class="kitsch grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/80.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="minimalism card-title">Minimalism <span class="score minimalism"></span></div> <img class="minimalism grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/90.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="interior card-title">Interior <span class="score interior"></span></div> <img class="interior grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/100.webp" alt="art"> </a> <a href="#/questions" class="categori-card"> <div class="nude card-title">Nude <span class="score nude"></span></div> <img class="nude grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/110.webp" alt="art"> </a> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},o=new class{constructor(){}async render(){return'<div class="categories"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav link" href="#">Home</a> <a class="categories-nav artist-link link" href="#/categories_artist"> Artist quiz</a> </div> <a href="#/settings" class="settings-button"></a> </div> <div class="categories-body"> <a href="#/questions_pictures" class="categori-card"> <div class="portraitP card-title">Portrait <span class="score portraitP"></span></div> <img class="portraitP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/120.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="landscapeP card-title">Landscape <span class="score landscapeP"></span></div> <img class="landscapeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/130.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="stillLifeP card-title">Still life <span class="score stillLifeP"></span></div> <img class="stillLifeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/140.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="impressionismP card-title">Impressionism <span class="score impressionismP"></span></div> <img class="impressionismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/150.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="expressionismP card-title">Expressionism <span class="score expressionismP"></span></div> <img class="expressionismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/160.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="avantGardeP card-title">Avant-garde <span class="score avantGardeP"></span></div> <img class="avantGardeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/170.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="renaissanceP card-title">Renaissance <span class="score renaissanceP"></span></div> <img class="renaissanceP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/180.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="surrealismP card-title">Surrealism <span class="score surrealismP"></span></div> <img class="surrealismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/190.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="kitschP card-title">Kitsch <span class="score kitschP"></span></div> <img class="kitschP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/200.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="minimalismP card-title">Minimalism <span class="score minimalismP"></span></div> <img class="minimalismP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/210.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="interiorP card-title">Interior <span class="score interiorP"></span></div> <img class="interiorP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/220.webp" alt="art"> </a> <a href="#/questions_pictures" class="categori-card"> <div class="nudeP card-title">Nude <span class="score nudeP"></span></div> <img class="nudeP grey categori-img" src="https://raw.githubusercontent.com/antoshkoo/image-data/master/img/230.webp" alt="art"> </a> </div> <div class="footer"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}},c=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <a class="categories-nav questions-nav-buttons link" href="#/categories_artist">Categories</a> </div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="questions-body"> <div class="timer-conteiner"> <div class="time-line"></div> </div> <div class="question">Who is the author of this picture?</div> <div class="painting"> <div class="painting-img"></div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-true"> <div class="modal"> <div class="modal_container"> <div class="result t">TRUE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-falls"> <div class="modal"> <div class="modal_container"> <div class="result f">FALSE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-result"> <div class="modal"> <div class="modal_container"> <div class="result-img"></div> <div class="test result-text"></div> <a class="result-buttons" href="#">Home</a> <a class="result-buttons" href="#/categories_artist">Categories</a> </div> </div> </div> <div class="answer"> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> <button class="answer-option categori-link"></button> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}wrap(e,t,s){function a(e){for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}}s?function(){let s=new Set;const i=e[t].author,r=document.querySelector(".question"),o=document.querySelectorAll(".answer-option");r.textContent=`Which is ${i} picture?`,s.add(e[t].imageNum);for(let t=0;s.size<4;t++){let t=Math.round(9*Math.random());s.add(e[t].imageNum)}let c=[...s];a(c);for(let e=0;e<c.length;e++)o[e].style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${c[e]}.webp')`}():function(){let s=new Set;!function(){let s=e[t].imageNum;const a=document.querySelector(".painting-img"),i=new Image;i.src=`https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${s}.webp`,i.onload=()=>{a.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${s}.webp')`}}(),console.log(t),s.add(e[t].author);for(let t=0;s.size<4;t++){let t=Math.round(9*Math.random());s.add(e[t].author)}let i=[...s];a(i);const r=document.querySelectorAll(".answer-option");for(let e=0;e<i.length;e++)r[e].innerHTML=i[e]}()}},n=new class{constructor(){}async render(){return'<div class="questions"> <div class="categories-header"> <div class="logo"></div> <div class="nav"> <a class="home-nav questions-nav-buttons link" href="#">Home</a> <a class="categories-nav questions-nav-buttons link" href="#/categories_pictures">Categories</a> </div> <a href="#/settings" class="settings-button questions-nav-buttons"></a> </div> <div class="questions-body"> <div class="timer-conteiner"> <div class="time-line"></div> </div> <div class="question"></div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-true"> <div class="modal"> <div class="modal_container"> <div class="result t">TRUE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-falls"> <div class="modal"> <div class="modal_container"> <div class="result f">FALSE!</div> <div class="true-painting-conteiner"></div> <div class="true-author modal-text"></div> <div class="true-year"></div> <div class="true-name"></div> <button class="continue">Next</button> </div> </div> </div> <div class="fixed-overlay fixed-overlay__modal fixed-overlay-result"> <div class="modal"> <div class="modal_container"> <div class="result-img"></div> <div class="test result-text"></div> <a class="result-buttons" href="#">Home</a> <a class="result-buttons" href="#/categories_pictures">Categories</a> </div> </div> </div> <div class="answer"> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> <button class="answer-option categori-link answer-image"></button> </div> </div> <div class="footer black-bg"> <div class="rslogo"></div> <div class="git"> <a href="https://github.com/soll1992" class="git-link">App developer: soll1992</a> <span>2021</span> </div> </div> </div>'}async after_render(){}async wrap(e,t){!async function(){let s=new Set;!function(){let s=e[t].imageNum;const a=document.querySelector(".painting-img"),i=new Image;i.src=`https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${s}.webp`,i.onload=()=>{a.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${s}.webp')`}}(),console.log(t),s.add(e[t].author);for(let t=0;s.size<4;t++){let t=Math.round(9*Math.random());s.add(e[t].author)}let a,i=[...s];!function(e){for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}}(i),void 0!==document.querySelectorAll(".answer-option")[0]&&(a=document.querySelectorAll(".answer-option"));for(let e=0;e<i.length;e++)a[e].innerHTML=i[e]}()}},l=new class{constructor(){}async render(){return'<section class="section"> <h1> 404 Error </h1> </section> '}async after_render(){}},d=[],u=[],m=[],g=[],v=[],p=[],h=[],f=[],b=[],y=[],w=[],k=[],q=[],L=[],x=[],S=[],P=[],N=[],_=[],E=[],A=[],I=[],C=[],$=[];let M,O,G,z={},H=50,T=!1,R=20,J=0,j=0,Z=!0,K=!1;function V(){const e=new Audio;e.src="./assets/sound/true.mp3",e.volume=H/100,e.muted=!!T,e.play()}function F(){const e=new Audio;e.src="./assets/sound/false.mp3",e.volume=H/100,e.muted=!!T,e.play()}function Q(e){const t=document.querySelector(".fixed-overlay-falls"),s=document.querySelector(".time-line"),a=document.querySelectorAll(".answer-option"),i=document.querySelectorAll(".questions-nav-buttons"),r=document.querySelector(".answer"),o=document.querySelectorAll(".true-painting-conteiner"),c=document.querySelectorAll(".true-author"),n=document.querySelectorAll(".true-year"),l=document.querySelectorAll(".true-name");let d=e,u=setInterval((function(){s.textContent=d,d--,d<0&&(t.classList.add("fixed-overlay-active"),r.classList.remove("answer-active"),F(),c.forEach((e=>{e.textContent=M[J].author})),n.forEach((e=>{e.textContent=M[J].year})),l.forEach((e=>{e.textContent=M[J].name})),o.forEach((e=>e.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${M[J].imageNum}.webp')`)),clearInterval(u))}),1e3);a.forEach((e=>e.addEventListener("click",(function(){clearInterval(u)})))),i.forEach((e=>e.addEventListener("click",(function(){clearInterval(u),J=0}))))}const U={"/":a,"/settings":i,"/categories_artist":r,"/categories_pictures":o,"/questions":c,"/questions_pictures":n},W=async()=>{const e=document.getElementById("page_container"),s=t(),W=(s.resource?`/${s.resource}`:"/")+(s.id?"/:id":"")+(s.verb?`/${s.verb}`:""),B=U[W]?U[W]:l;if(e.innerHTML=await B.render(),await B.after_render(),M.length<10&&await async function(){const e=await fetch("data.json");(await e.json()).map((e=>{e.imageNum<10?d.push(e):e.imageNum>=10&&e.imageNum<20?u.push(e):e.imageNum>=20&&e.imageNum<30?m.push(e):e.imageNum>=30&&e.imageNum<40?g.push(e):e.imageNum>=40&&e.imageNum<50?v.push(e):e.imageNum>=50&&e.imageNum<60?p.push(e):e.imageNum>=60&&e.imageNum<70?h.push(e):e.imageNum>=70&&e.imageNum<80?f.push(e):e.imageNum>=80&&e.imageNum<90?b.push(e):e.imageNum>=90&&e.imageNum<100?y.push(e):e.imageNum>=100&&e.imageNum<110?w.push(e):e.imageNum>=110&&e.imageNum<120?k.push(e):e.imageNum>=120&&e.imageNum<130?q.push(e):e.imageNum>=130&&e.imageNum<140?L.push(e):e.imageNum>=140&&e.imageNum<150?x.push(e):e.imageNum>=150&&e.imageNum<160?S.push(e):e.imageNum>=160&&e.imageNum<170?P.push(e):e.imageNum>=170&&e.imageNum<180?N.push(e):e.imageNum>=180&&e.imageNum<190?_.push(e):e.imageNum>=190&&e.imageNum<200?E.push(e):e.imageNum>=200&&e.imageNum<210?A.push(e):e.imageNum>=210&&e.imageNum<220?I.push(e):e.imageNum>=220&&e.imageNum<230?C.push(e):$.push(e)}))}(),B===c||B===n){const e=document.querySelectorAll(".answer-option"),t=document.querySelectorAll(".continue"),s=document.querySelector(".answer");c.wrap(M,J,K),Z&&Q(R),s.classList.add("answer-active"),e.forEach((e=>e.addEventListener("click",(e=>{const t=document.querySelector(".fixed-overlay-true"),a=document.querySelector(".fixed-overlay-falls"),i=document.querySelectorAll(".true-painting-conteiner"),r=document.querySelectorAll(".true-author"),o=document.querySelectorAll(".true-year"),c=document.querySelectorAll(".true-name");G=M[J].author,s.classList.remove("answer-active"),K?(G=M[J].imageNum,console.log(e.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${G}.webp")`),e.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${G}.webp")`?(t.classList.add("fixed-overlay-active"),V(),j++,console.log(j)):e.target.style.backgroundImage!=`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${G}.webp")`&&(a.classList.add("fixed-overlay-active"),F())):e.target.textContent==G?(t.classList.add("fixed-overlay-active"),V(),j++,console.log(j)):e.target.textContent!=G&&(a.classList.add("fixed-overlay-active"),F()),r.forEach((e=>{e.textContent=M[J].author})),o.forEach((e=>{e.textContent=M[J].year})),c.forEach((e=>{e.textContent=M[J].name})),i.forEach((e=>e.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${M[J].imageNum}.webp')`))})))),t.forEach((e=>e.addEventListener("click",(function(){const e=document.querySelector(".fixed-overlay-true"),t=document.querySelector(".fixed-overlay-falls"),a=document.querySelector(".fixed-overlay-result"),i=document.querySelector(".test");9!=J?(J++,e.classList.remove("fixed-overlay-active"),t.classList.remove("fixed-overlay-active"),s.classList.add("answer-active"),console.log(K),c.wrap(M,J,K),Z&&Q(R)):(e.classList.remove("fixed-overlay-active"),t.classList.remove("fixed-overlay-active"),a.classList.add("fixed-overlay-active"),J=0,function(){const e=new Audio;e.src="./assets/sound/result.mp3",e.volume=H/100,e.muted=!!T,e.play()}(),i.textContent=`Result: ${j}/10`)}))))}else if(B===r){const e=document.querySelectorAll(".categori-card"),t=document.querySelectorAll(".score"),s=document.querySelector(".picture-link"),a=document.querySelectorAll(".categori-img");void 0!==O&&(z[O]=`${j}/10`);for(let e in z)t.forEach((t=>{t.classList.contains(e)&&(t.textContent=z[e])})),a.forEach((t=>{t.classList.contains(e)&&t.classList.remove("grey")}));e.forEach((e=>e.addEventListener("click",(e=>{e.target.classList.contains("portrait")?(M=d,K=!1,O="portrait"):e.target.classList.contains("landscape")?(M=u,K=!1,O="landscape"):e.target.classList.contains("stillLife")?(M=m,K=!1,O="stillLife"):e.target.classList.contains("impressionism")?(M=g,K=!1,O="impressionism"):e.target.classList.contains("expressionism")?(M=v,K=!1,O="expressionism"):e.target.classList.contains("avantGarde")?(M=p,K=!1,O="avantGarde"):e.target.classList.contains("renaissance")?(M=h,K=!1,O="renaissance"):e.target.classList.contains("surrealism")?(M=f,K=!1,O="surrealism"):e.target.classList.contains("kitsch")?(M=b,K=!1,O="kitsch"):e.target.classList.contains("minimalism")?(M=y,K=!1,O="minimalism"):e.target.classList.contains("interior")?(M=w,K=!1,O="interior"):e.target.classList.contains("nude")&&(M=k,K=!1,O="nude"),J=0,j=0})))),s.addEventListener("click",(function(){K=!0}))}else if(B===o){const e=document.querySelectorAll(".categori-card"),t=document.querySelector(".artist-link"),s=document.querySelectorAll(".score"),a=document.querySelectorAll(".categori-img");void 0!==O&&(z[O]=`${j}/10`);for(let e in z)s.forEach((t=>{t.classList.contains(e)&&(t.textContent=z[e])})),a.forEach((t=>{t.classList.contains(e)&&t.classList.remove("grey")}));e.forEach((e=>e.addEventListener("click",(e=>{e.target.classList.contains("portraitP")?(M=q,K=!0,O="portraitP"):e.target.classList.contains("landscapeP")?(M=L,K=!0,O="landscapeP"):e.target.classList.contains("stillLifeP")?(M=x,K=!0,O="stillLifeP"):e.target.classList.contains("impressionismP")?(M=S,K=!0,O="impressionismP"):e.target.classList.contains("expressionismP")?(M=P,K=!0,O="expressionismP"):e.target.classList.contains("avantGardeP")?(M=N,K=!0,O="avantGardeP"):e.target.classList.contains("renaissanceP")?(M=_,K=!0,O="renaissanceP"):e.target.classList.contains("surrealismP")?(M=E,K=!0,O="surrealismP"):e.target.classList.contains("kitschP")?(M=A,K=!0,O="kitschP"):e.target.classList.contains("minimalismP")?(M=I,K=!0,O="minimalismP"):e.target.classList.contains("interiorP")?(M=C,K=!0,O="interiorP"):e.target.classList.contains("nudeP")&&(M=$,K=!0,O="nudeP"),j=0,J=0})))),t.addEventListener("click",(function(){K=!1,console.log("artistLink")}))}else if(B===i){const e=document.querySelector(".slider"),t=document.querySelector(".mute"),s=document.querySelector(".toggle-button"),a=document.querySelector(".plus"),i=document.querySelector(".time-input"),r=document.querySelector(".minus"),o=document.querySelectorAll(".settings-nav-buttons");function c(){T?(T=!1,t.classList.toggle("mute-off")):(T=!0,t.classList.toggle("mute-off")),console.log(T)}i.value=R,s.checked=Z,T?t.classList.remove("mute-off"):t.classList.add("mute-off"),t.addEventListener("click",c),e.value=H,e.addEventListener("input",(e=>{H=e.target.value})),e.addEventListener("mouseup",V),s.addEventListener("click",(function(){Z=s.checked})),a.addEventListener("click",(function(){i.value>=30?i.value=30:i.value=+i.value+5,R=i.value})),r.addEventListener("click",(function(){i.value<=5?i.value=5:i.value=+i.value-5,R=i.value})),o.forEach((e=>e.addEventListener("click",(function(){history.back()}))))}else if(B===a){const e=document.querySelector(".pictures"),t=document.querySelector(".artist");e.addEventListener("click",(function(){K=!0})),t.addEventListener("click",(function(){K=!1}))}};window.addEventListener("beforeunload",(function(){localStorage.setItem("currentArr",JSON.stringify(M)),localStorage.setItem("volumeValue",H),localStorage.setItem("muted",T),localStorage.setItem("time",R),localStorage.setItem("timerOption",Z),localStorage.setItem("pictureQuiz",K)})),window.addEventListener("load",(function(){M=JSON.parse(localStorage.getItem("currentArr")),H=localStorage.getItem("volumeValue"),R=localStorage.getItem("time"),T=JSON.parse(localStorage.getItem("muted")),Z=JSON.parse(localStorage.getItem("timerOption")),K=JSON.parse(localStorage.getItem("pictureQuiz"))})),window.addEventListener("hashchange",W),window.addEventListener("load",W)})()})();