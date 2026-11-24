(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var H=[["Epaulettes", "Shoulder straps that once held gloves, whistles and map cases in place. Today they square the shoulder line and add a military note."], ["Storm flap", "A buttoned flap over one shoulder, also called a gun flap. It adds a second layer where rain runs off the shoulder and was designed to take wear from a rifle butt."], ["Throat latch", "A small strap under the collar. Fasten it with the collar turned up to close the neck against wind and rain."], ["Double-breasted front", "Two rows of buttons and a deep overlap, so the coat can be buttoned either way to keep wind out. The overlap adds a layer across the chest."], ["Belt &amp; D-rings", "A belt cinches the waist and gives the coat its classic shape. The metal D-rings were once said to carry equipment; today they are mostly decorative."], ["Cuff straps", "Buckled straps at the wrist that can be tightened to stop rain running up the sleeve."], ["Back vent &amp; pleat", "A long vent at the back lets you walk and sit comfortably. On many trench coats it buttons shut for riding or bad weather."]],cur=0;function dc(i){cur=(i+H.length)%H.length;var h=H[cur];$('dc-n').textContent='no. '+(cur+1);$('dc-t').innerHTML=h[0];var d=$('dc-d');d.textContent=h[1];d.style.animation='none';d.offsetHeight;d.style.animation='';$('dc-c').textContent=(cur+1)+' / '+H.length;
 [].forEach.call(document.querySelectorAll('.fr-hs'),function(b){var on=+b.dataset.i===cur;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});}
if($('dc-t')){[].forEach.call(document.querySelectorAll('.fr-hs'),function(b){b.addEventListener('click',function(){dc(+b.dataset.i);});});$('dc-p').addEventListener('click',function(){dc(cur-1);});$('dc-x').addEventListener('click',function(){dc(cur+1);});dc(0);}
var A=[0,0,0,0,0],FX=[[null,['Shoulders too wide','Hard to alter; consider a smaller size.','#C0574A'],['Shoulders too narrow','Cannot be let out; try a larger size.','#C0574A']],[null,['Sleeves too long','Easy fix: a tailor can shorten them.','#C9A24A'],['Sleeves too short','Often only a little can be let down.','#C0574A']],
 [null,['Front is boxy','A tailor can take in the sides a little.','#C9A24A'],['Front pulls into an X','Too tight across the chest; size up.','#C0574A']],[null,['Spare fabric at the back','Can be taken in at the centre seam.','#C9A24A'],['Back feels tight','Restricts movement; size up.','#C0574A']],[null,['Too long','A hem is a simple alteration, but check the pockets and vent.','#C9A24A'],['Too short','Hems rarely have spare fabric; look for a longer cut.','#C0574A']]];
function ft(){var s=0,l=[],hard=0;A.forEach(function(v,i){if(v===0){s++;}else{var f=FX[i][v];l.push('<li style="--c:'+f[2]+'"><b>'+f[0]+'.</b> '+f[1]+'</li>');if(f[2]==='#C0574A')hard++;}});
 $('ft-s').textContent=s+'/5';$('ft-arc').style.strokeDashoffset=327*(1-s/5);$('ft-t').textContent=s===5?'A beautiful fit':hard?'Not this one':'Close, with a tailor';$('ft-l').innerHTML=l.length?l.join(''):'<li><b>Everything checks out.</b> Shoulders, sleeves, chest, back and length all look right.</li>';}
[].forEach.call(document.querySelectorAll('.fr-op'),function(g){var bs=[].slice.call(g.querySelectorAll('button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){A[+g.dataset.q]=+b.dataset.v;bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});ft();});});});if($('ft-s'))ft();
})();
