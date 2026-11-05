/* ============ CONFIGURAÇÃO DA ESCOLA ============
   Preencha os campos abaixo para publicar as informações reais.
   Campo vazio = o site mostra um espaço reservado. Nada é inventado. */
var ESCOLA = {
  nome: "Escola Gustavo Kullman",
  whatsapp: "",   // só números com país e DDD. Exemplo: "5565999999999"
  email: "",      // e-mail da secretaria
  endpoint: "",   // (opcional) endereço de um sistema/back-end que receba POST em JSON com a matrícula
  endereco: "",
  telefone: "",
  horario: "",
  redes: { instagram: "", facebook: "", youtube: "" },   // endereços completos (https://...)
  etapas: [],     // ex.: ["6º ano", "7º ano"]. Vazio = campo livre no formulário
  sobre: {
    historia: "A Escola Gustavo Kullman fica em Cuiabá, no bairro Jardim Vitória. Antes, a escola funcionava no bairro Goiabeiras. Hoje ocupa um prédio que pertencia à rede municipal e recebe estudantes como Escola Estadual Cívico-Militar (E.E.C.M.).\n\nO nome da escola remete a Gustavo Fernando Kuhlmann (1890–1930), professor paulista que chegou a Cuiabá em 1910 para ajudar a reorganizar o ensino público de Mato Grosso. A grafia varia nos registros: Kullman, Kulmann e Kuhlmann.",
    missao: "",
    proposta: "A escola é identificada como E.E.C.M., sigla de Escola Estadual Cívico-Militar, modelo adotado por escolas da rede estadual de Mato Grosso. A proposta pedagógica detalhada será publicada pela escola.",
    etapasTexto: "Segundo o Censo Escolar 2025: anos finais do Ensino Fundamental, Ensino Médio, Educação de Jovens e Adultos (EJA) e Educação Especial. Confirme as vagas com a secretaria.",
    funcionamento: "Segundo o QEdu, a escola atende nos períodos da manhã, da tarde e da noite e tem ao menos uma turma em tempo integral. Confirme os horários com a secretaria."
  },
  diferenciais: [] // ex.: [{titulo:"...", texto:"..."}]
};

/* ============ FOTOGRAFIAS ============ */
var FOTOS = [
 {n:1,cat:"Área externa",nome:"Fachada e faixa da escola (frente)",card:"Fachada da escola",fonte:"Fachada da escola, vista da frente",credito:"",w:1600,h:1200,
  alt:"Fachada da escola vista de frente, com a faixa de identificação, o brasão e a entrada",
  desc:"Fachada da escola vista de frente, com a faixa de identificação, o brasão e a porta de entrada.",
  util:"É por aqui que alunos e famílias chegam à escola. Na frente da entrada há espaço para estacionar carros e motos."},
 {n:2,cat:"Área externa",nome:"Secretaria e pátio das bicicletas",card:"Secretaria e bicicletas",fonte:"Secretaria, junto ao pátio das bicicletas",credito:"",w:1600,h:1200,
  alt:"Área da secretaria junto ao pátio com bicicletas e motos estacionadas perto da parede azul e dos canteiros",
  desc:"Área da secretaria junto ao pátio das bicicletas, ao lado da parede azul e dos canteiros.",
  util:"Reserva um lugar para quem vem de bicicleta ou moto guardar o veículo durante as aulas."},
 {n:3,cat:"Corredores",nome:"Corredores e circulação",card:"Corredores e circulação",fonte:"Corredores da escola",credito:"",w:1600,h:1200,
  alt:"Corredor coberto com pilares azuis e brancos, cadeiras azuis e vasos de plantas",
  desc:"Varanda coberta com pilares azuis e brancos, vasos de plantas e cadeiras ao lado das portas.",
  util:"Liga os ambientes entre si e oferece sombra a quem circula. As cadeiras azuis servem de área de espera."},
 {n:4,cat:"Corredores",nome:"Piso superior",card:"Piso superior",fonte:"Piso superior, corredor",credito:"",rotate:180,w:1200,h:1600,
  alt:"Janela com grade de proteção e extintor de incêndio fixado na parede, no andar de cima",
  desc:"Janela ampla com grade de proteção e extintor de incêndio fixado na parede, no andar de cima.",
  util:"Mostra os itens de segurança presentes nas passagens do andar superior, além da iluminação natural."},
 {n:5,cat:"Pátio interno",nome:"Vista do pátio interno",card:"Vista do pátio interno",fonte:"Pátio interno, visto do piso superior",credito:"",w:1600,h:1200,
  alt:"Telhados de cerâmica e pátio interno da escola vistos da janela do andar de cima",
  desc:"Telhados de cerâmica e o pátio interno vistos da janela do andar de cima, com os blocos de salas ao redor.",
  util:"Ajuda a entender como a escola se organiza: os blocos de salas são distribuídos em torno de um espaço aberto."},
 {n:6,cat:"Pátio interno",nome:"Pátio e área coberta",card:"Pátio e área coberta",fonte:"Pátio interno e área coberta",credito:"",w:1600,h:1200,
  alt:"Passagem coberta com corrimão azul, escada e blocos de salas vistos de cima",
  desc:"Passagem coberta com corrimão azul e degraus, ligando o pátio aos blocos de salas.",
  util:"É a circulação protegida entre o pátio e as salas, com escada e corrimão para apoio."}
];
var CATS = ["Todas"].concat(FOTOS.map(function(f){return f.cat}).filter(function(c,i,a){return a.indexOf(c)===i}));

/* ============ UTILITÁRIOS ============ */
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
var ICON={
 chev:'<path d="M6 9l6 6 6-6"/>',
 play:'<path d="M7 4l13 8-13 8z" fill="currentColor"/>',
 pause:'<path d="M8 5v14M16 5v14" stroke-width="3.5"/>',
 pin:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
 clockw:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 bike:'<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-8h5l3 8M10 8H8"/>',
 leaf:'<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z"/><path d="M5 19c3-5 6-8 10-10"/>',
 door:'<path d="M5 21V4h10v17M3 21h18"/><circle cx="12" cy="12.5" r=".8" fill="currentColor"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 x:'<path d="M18 6L6 18M6 6l12 12"/>',
 zoom:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/>',
 check:'<path d="M5 12l5 5 9-10"/>',
 star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
};
function ic(n,extra){return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"'+(extra||"")+'>'+ICON[n]+'</svg>'}
function toast(msg){var t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(function(){t.classList.remove("show")},3600)}
function todo(txt){return '<span class="todo">'+esc(txt)+'</span>'}
/* carregamento e erro de imagens */
function bindImg(img){
  var box=img.parentElement;
  function ok(){box.classList.remove("ld")}
  function bad(){box.classList.remove("ld");img.style.display="none";if(!box.querySelector(".imgerr")){var d=document.createElement("div");d.className="imgerr";d.textContent="Não foi possível carregar esta imagem.";box.appendChild(d)}}
  if(img.complete&&img.naturalWidth)ok();else if(img.complete)bad();
  img.addEventListener("load",ok);img.addEventListener("error",bad);
}

/* ============ NAVEGAÇÃO ============ */
var hd=$("#hd"),nav=$("#nav"),burger=$("#burger");
function setMenu(o){nav.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Fechar menu":"Abrir menu")}
burger.addEventListener("click",function(){setMenu(!nav.classList.contains("open"))});
function goTo(id){var el=document.getElementById(id);if(!el)return;setMenu(false);hd.classList.remove("hide");
  var y=el.getBoundingClientRect().top+window.scrollY-(id==="player"?84:0);
  window.scrollTo({top:y,behavior:reduce?"auto":"smooth"})}
document.addEventListener("click",function(e){var a=e.target.closest("[data-go]");if(a){e.preventDefault();goTo(a.getAttribute("href").slice(1))}});
document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});
var lastY=0,ticking=false;
function onScroll(){
  var y=window.scrollY,max=document.documentElement.scrollHeight-innerHeight;
  $("#prog").style.transform="scaleX("+(max>0?y/max:0)+")";
  $("#top").classList.toggle("show",y>700);
  if(!nav.classList.contains("open")){ if(y>lastY+8&&y>260)hd.classList.add("hide"); else if(y<lastY-8||y<120)hd.classList.remove("hide") }
  lastY=y;ticking=false;
}
addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
$("#top").addEventListener("click",function(){window.scrollTo({top:0,behavior:reduce?"auto":"smooth"})});
/* destaque do menu */
(function(){
  var links={};$$("nav a.l").forEach(function(a){links[a.getAttribute("href").slice(1)]=a});
  if(!("IntersectionObserver" in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$("nav a.l").forEach(function(a){a.removeAttribute("aria-current")});var l=links[e.target.id];if(l)l.setAttribute("aria-current","true")}})},{rootMargin:"-45% 0px -50% 0px"});
  ["inicio","escola","espacos","galeria","diferenciais","contato"].forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s)});
})();
$("#yr").textContent=new Date().getFullYear();

/* ============ NOSSA ESCOLA (cartões) ============ */
(function(){
  var S=ESCOLA.sobre;
  var items=[
   {i:"book",t:"Nossa história",v:S.historia,ph:"A escola ainda não publicou a sua história."},
   {i:"target",t:"Missão e valores",v:S.missao,ph:"A escola ainda não publicou sua missão e seus valores."},
   {i:"compass",t:"Proposta pedagógica",v:S.proposta,ph:"A escola ainda não publicou sua proposta pedagógica."},
   {i:"layers",t:"Etapas de ensino",v:S.etapasTexto,ph:"A escola ainda não informou as etapas de ensino oferecidas."},
   {i:"clockw",t:"Funcionamento",v:S.funcionamento,ph:"A escola ainda não informou turnos e horários."}
  ];
  var h="";
  items.forEach(function(it,k){
    h+='<div class="acard"><button aria-expanded="false" aria-controls="ab'+k+'">'+'<span class="ico">'+ic(it.i)+'</span><h3>'+esc(it.t)+(it.v?'':'<span class="tag">a preencher</span>')+'</h3><span class="chev">'+ic("chev")+'</span></button>'
     +'<div class="body" id="ab'+k+'"><div>'+(it.v?it.v.split("\n\n").map(function(p){return '<p>'+esc(p)+'</p>'}).join(""):'<p>'+todo(it.ph)+'</p>')+'</div></div></div>';
  });
  var acc=$("#acc");acc.innerHTML=h;
  $$(".acard>button",acc).forEach(function(b){b.addEventListener("click",function(){
    var open=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",!open);b.nextElementSibling.classList.toggle("open",!open)})});
})();

/* ============ LIGHTBOX ============ */
var LB={list:[],i:0,last:null};
(function(){
  var lb=$("#lb"),img=$("img",lb),b=$(".cp b",lb),sp=$(".cp span",lb),sm=$(".cp .count",lb),cr=$(".cp .credit",lb);
  function show(i){LB.i=(i+LB.list.length)%LB.list.length;var f=LB.list[LB.i];img.src="img/foto"+f.n+".jpg";img.alt=f.alt;img.classList.toggle("photo-rotated",f.rotate===180);b.textContent=f.nome;sp.textContent=f.desc;sm.textContent="Fonte: "+f.fonte+" · Foto "+(LB.i+1)+" de "+LB.list.length;cr.textContent=f.credito?"Crédito: "+f.credito:"";cr.hidden=!f.credito}
  LB.open=function(list,i){LB.list=list;LB.last=document.activeElement;show(i);lb.classList.add("open");$(".x",lb).focus();Slide&&Slide.suspend("lb",true)};
  function close(){lb.classList.remove("open");Slide.suspend("lb",false);if(LB.last&&LB.last.focus)LB.last.focus()}
  $(".x",lb).onclick=close;$(".pv",lb).onclick=function(){show(LB.i-1)};$(".nx",lb).onclick=function(){show(LB.i+1)};
  lb.addEventListener("click",function(e){if(e.target===lb)close()});
  document.addEventListener("keydown",function(e){
    if(!lb.classList.contains("open"))return;
    if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(LB.i-1);if(e.key==="ArrowRight")show(LB.i+1);
    if(e.key==="Tab"){var f=$$("button",lb);var first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
  });
  var sx=null;img.addEventListener("pointerdown",function(e){sx=e.clientX});
  img.addEventListener("pointerup",function(e){if(sx===null)return;var d=e.clientX-sx;sx=null;if(Math.abs(d)>50)show(LB.i+(d<0?1:-1))});
})();

/* ============ VISITA VIRTUAL ============ */
var Slide=(function(){
  var idx=0,playing=true,timer=null,why={},DUR=3000;
  var slides=$("#slides"),dots=$("#dots"),info=$("#info"),spaces=$("#spaces"),pfill=$("#pfill"),pp=$("#pp"),stage=$("#stage");
  var sh="",dh="",ch="";
  FOTOS.forEach(function(f,k){
    sh+='<figure class="slide'+(k===0?' on':'')+'" aria-hidden="'+(k!==0)+'"><div class="bd" style="background-image:url(img/t'+f.n+'.jpg)"></div>'
      +'<button aria-label="Ampliar foto: '+esc(f.nome)+'"><img class="'+(f.rotate===180?'photo-rotated':'')+'" src="img/foto'+f.n+'.jpg" width="'+f.w+'" height="'+f.h+'" alt="'+esc(f.alt)+'"'+(k===0?'':' loading="lazy"')+'></button></figure>';
    dh+='<button role="tab" aria-selected="'+(k===0)+'" aria-label="Foto '+(k+1)+': '+esc(f.nome)+'" data-k="'+k+'"></button>';
    ch+='<button role="tab" class="sp" aria-selected="'+(k===0)+'" data-k="'+k+'"><img src="img/t'+f.n+'.jpg" width="640" height="'+Math.round(640*f.h/f.w)+'" alt="" loading="lazy"><b>'+(k+1)+'</b><span>'+esc(f.card)+'</span></button>';
  });
  slides.innerHTML=sh;dots.innerHTML=dh;spaces.innerHTML=ch;
  function paint(){
    $$(".slide",slides).forEach(function(s,k){s.classList.toggle("on",k===idx);s.setAttribute("aria-hidden",k!==idx)});
    $$("button",dots).forEach(function(b,k){b.setAttribute("aria-selected",k===idx)});
    $$(".sp",spaces).forEach(function(b,k){b.setAttribute("aria-selected",k===idx)});
    $("#count").textContent=(idx+1)+" / "+FOTOS.length;
    var f=FOTOS[idx];
    info.classList.remove("sw");void info.offsetWidth;info.classList.add("sw");
    info.innerHTML='<span class="no">Espaço '+(idx+1)+' de '+FOTOS.length+' · '+esc(f.cat)+'</span><span class="source">Fonte: '+esc(f.fonte)+'</span>'+(f.credito?'<span class="credit">Crédito: '+esc(f.credito)+'</span>':'')+'<h3>'+esc(f.nome)+'</h3><p class="d">'+esc(f.desc)+'</p><div class="util"><h4>Para que serve</h4><p>'+esc(f.util)+'</p></div>';
  }
  function suspended(){for(var k in why)if(why[k])return true;return false}
  function bar(run){pfill.classList.remove("run");void pfill.offsetWidth;if(run)pfill.classList.add("run")}
  function restart(){clearTimeout(timer);bar(playing&&!suspended());
    if(playing&&!suspended())timer=setTimeout(function(){idx=(idx+1)%FOTOS.length;paint();restart()},DUR)}
  function icon(){pp.innerHTML=playing?ic("pause"):ic("play");pp.setAttribute("aria-label",playing?"Pausar apresentação":"Continuar apresentação")}
  function go(i){idx=(i+FOTOS.length)%FOTOS.length;paint();restart()}
  pp.addEventListener("click",function(){playing=!playing;icon();restart();toast(playing?"Apresentação em andamento":"Apresentação pausada")});
  $("#sprev").onclick=function(){go(idx-1)};$("#snext").onclick=function(){go(idx+1)};
  dots.addEventListener("click",function(e){var b=e.target.closest("button");if(b)go(+b.dataset.k)});
  spaces.addEventListener("click",function(e){var b=e.target.closest(".sp");if(b){go(+b.dataset.k);goTo("player")}});
  /* teclado nas abas */
  [spaces,dots].forEach(function(c){c.addEventListener("keydown",function(e){
    if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();go(idx+(e.key==="ArrowRight"?1:-1));$$("button",c)[idx].focus()}})});
  stage.addEventListener("keydown",function(e){if(e.key==="ArrowRight")go(idx+1);if(e.key==="ArrowLeft")go(idx-1);if(e.key===" "&&e.target===stage){e.preventDefault();pp.click()}});
  slides.addEventListener("click",function(e){if(e.target.closest(".slide button"))LB.open(FOTOS,idx)});
  var sx=null;stage.addEventListener("pointerdown",function(e){sx=e.clientX});
  stage.addEventListener("pointerup",function(e){if(sx===null)return;var d=e.clientX-sx;sx=null;if(Math.abs(d)>50)go(idx+(d<0?1:-1))});
  function suspend(k,v){why[k]=v;restart()}
  document.addEventListener("visibilitychange",function(){suspend("hidden",document.hidden)});
  if("IntersectionObserver" in window){new IntersectionObserver(function(es){suspend("off",!es[0].isIntersecting)},{threshold:.25}).observe($("#player"))}
  $$("img",slides).forEach(function(i){i.parentElement.parentElement.classList.add("ld");i.addEventListener("load",function(){i.parentElement.parentElement.classList.remove("ld")});i.addEventListener("error",function(){i.parentElement.parentElement.classList.remove("ld");i.style.display="none"})});
  icon();paint();restart();
  return {suspend:suspend};
})();

/* ============ GALERIA ============ */
(function(){
  var gal=$("#gal"),fl=$("#filters"),cur="Todas";
  fl.innerHTML=CATS.map(function(c){var n=c==="Todas"?FOTOS.length:FOTOS.filter(function(f){return f.cat===c}).length;return '<button aria-pressed="'+(c===cur)+'" data-c="'+esc(c)+'">'+esc(c)+'<em>'+n+'</em></button>'}).join("");
  function render(){
    var list=FOTOS.filter(function(f){return cur==="Todas"||f.cat===cur});
    gal.innerHTML=list.map(function(f,k){return '<button class="gc ld" style="animation-delay:'+(k*60)+'ms" data-n="'+f.n+'" aria-label="Ampliar: '+esc(f.nome)+'"><img class="'+(f.rotate===180?'photo-rotated':'')+'" src="img/t'+f.n+'.jpg" srcset="img/t'+f.n+'.jpg 640w, img/foto'+f.n+'.jpg 1600w" sizes="(max-width:700px) 92vw, 33vw" width="'+f.w+'" height="'+f.h+'" alt="'+esc(f.alt)+'" loading="lazy"><span class="zoom">'+ic("zoom")+'</span><span class="cap"><b>'+esc(f.nome)+'</b><small>'+esc(f.cat)+'</small><small class="source">Fonte: '+esc(f.fonte)+'</small><span class="caption">'+esc(f.desc)+'</span>'+(f.credito?'<small class="credit">Crédito: '+esc(f.credito)+'</small>':'')+'</span></button>'}).join("");
    $$(".gc img",gal).forEach(bindImg);
    $$(".gc",gal).forEach(function(b,k){b.addEventListener("click",function(){LB.open(list,k)})});
  }
  fl.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;cur=b.dataset.c;$$("button",fl).forEach(function(x){x.setAttribute("aria-pressed",x===b)});render()});
  render();
})();

/* ============ DIFERENCIAIS ============ */
(function(){
  var fotos=[
   {i:"door",t:"Entrada identificada",x:"Fachada com o nome da escola e o brasão na parede, e porta de entrada voltada para a rua.",f:"Foto: Fachada e estacionamento"},
   {i:"shield",t:"Itens de segurança à vista",x:"Extintores de incêndio fixados nas paredes e janelas com grades de proteção.",f:"Fotos: Corredores e Corredor superior"},
   {i:"bike",t:"Lugar para bicicletas e motos",x:"Área própria no pátio lateral para guardar bicicletas e motos, além de estacionamento na frente.",f:"Fotos: Pátio lateral e Fachada"},
   {i:"leaf",t:"Plantas pelos espaços",x:"Canteiros no pátio lateral e vasos de plantas nos corredores deixam o ambiente mais agradável.",f:"Fotos: Pátio lateral e Corredores"}
  ];
  $("#dfoto").innerHTML=fotos.map(function(d,k){return '<div class="dc rv" style="--d:'+k*.08+'s"><span class="ico">'+ic(d.i)+'</span><h3>'+esc(d.t)+'</h3><p>'+esc(d.x)+'</p><small>'+esc(d.f)+'</small></div>'}).join("");
  var ed=ESCOLA.diferenciais,h="";
  if(ed&&ed.length){h=ed.map(function(d,k){return '<div class="dc rv" style="--d:'+k*.08+'s"><span class="ico">'+ic("star")+'</span><h3>'+esc(d.titulo)+'</h3><p>'+esc(d.texto)+'</p></div>'}).join("")}
  else{for(var k=1;k<=3;k++)h+='<div class="dc empty rv" style="--d:'+k*.08+'s"><span class="ico">'+ic("plus")+'</span><h3>Diferencial '+k+'<span class="tag">a preencher</span></h3><p>'+todo("Espaço reservado para a escola informar um diferencial confirmado.")+'</p></div>'}
  $("#dedit").innerHTML=h;
})();

/* ============ FAQ ============ */
(function(){
  var q=[
   ["Como faço para solicitar a matrícula?","Clique em “Fazer matrícula”, preencha o formulário e revise as informações. Ao final, você escolhe como enviar a solicitação à escola."],
   ["Posso conhecer a escola antes de matricular?","Sim. Comece pela visita virtual e pela galeria desta página. Para uma visita presencial, use os dados da seção Contato e combine com a escola."],
   ["Quais documentos preciso apresentar?","A lista de documentos é definida pela escola. Confirme com a secretaria pelos canais de contato antes de ir até lá."],
   ["As fotografias do site são reais?","Sim. Todas as imagens foram tiradas na própria escola e mostram os ambientes como eles são."],
   ["Meus dados são enviados quando preencho o formulário?","O formulário só prepara a solicitação no seu aparelho. O envio acontece somente se você escolher um canal disponível, como o WhatsApp, e confirmar."]
  ];
  $("#faqs").innerHTML=q.map(function(p){return '<details><summary>'+esc(p[0])+ic("chev")+'</summary><p>'+esc(p[1])+'</p></details>'}).join("");
})();

/* ============ CONTATO ============ */
(function(){
  var E=ESCOLA,r=[
   ["pin","Endereço",E.endereco,"Endereço a preencher",E.endereco?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(E.endereco):""],
   ["phone","Telefone",E.telefone,"Telefone a preencher",E.telefone?"tel:"+E.telefone.replace(/[^\d+]/g,""):""],
   ["mail","E-mail",E.email,"E-mail a preencher",E.email?"mailto:"+E.email:""],
   ["clock","Horário de atendimento",E.horario,"Horário a preencher",""]
  ];
  $("#cinfo").innerHTML=r.map(function(x,k){return '<div class="cc"><span class="ico">'+ic(x[0])+'</span><div><dt>'+x[1]+'</dt><dd>'+(x[2]?(x[4]?'<a href="'+esc(x[4])+'" target="_blank" rel="noopener">'+esc(x[2])+'</a>':esc(x[2])):todo(x[3]))+'</dd></div></div>'}).join("");
  var names={instagram:"Instagram",facebook:"Facebook",youtube:"YouTube"};
  $("#soc").innerHTML=Object.keys(names).map(function(k){var u=E.redes&&E.redes[k];return u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+names[k]+'</a>':'<span title="A escola ainda não informou">'+names[k]+' · a preencher</span>'}).join("");
  $("#wabtn").addEventListener("click",function(){
    if(E.whatsapp)window.open("https://wa.me/"+E.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Olá! Gostaria de saber mais sobre a "+E.nome+"."),"_blank","noopener");
    else toast("O WhatsApp da escola ainda não foi cadastrado.");
  });
})();

/* ============ MATRÍCULA (modal + formulário) ============ */
(function(){
  var mod=$("#mod"),panel=$("#panel"),last=null,E=ESCOLA;
  var etapaField=E.etapas&&E.etapas.length
   ?'<select id="etapa" name="etapa" required><option value="">Selecione</option>'+E.etapas.map(function(x){return '<option>'+esc(x)+'</option>'}).join("")+'</select>'
   :'<input id="etapa" name="etapa" type="text" placeholder="Ex.: 6º ano" autocomplete="off" required>';
  function formHTML(){return '<header><div><h2 id="mt">Solicitar matrícula</h2><p>Preencha os dados abaixo. Você revisa tudo antes de enviar.</p></div><button class="xbtn" type="button" aria-label="Fechar" data-close>'+ic("x")+'</button></header>'
   +'<form id="mf" novalidate>'
   +'<div class="f"><label for="resp">Nome do responsável <i>*</i></label><input id="resp" name="resp" type="text" autocomplete="name"><div class="err" id="e-resp" aria-live="polite"></div></div>'
   +'<div class="f"><label for="aluno">Nome do aluno <i>*</i></label><input id="aluno" name="aluno" type="text" autocomplete="off"><div class="err" id="e-aluno" aria-live="polite"></div></div>'
   +'<div class="f"><label for="tel">Telefone para contato <i>*</i></label><input id="tel" name="tel" type="tel" inputmode="tel" placeholder="(00) 00000-0000" autocomplete="tel"><div class="err" id="e-tel" aria-live="polite"></div></div>'
   +'<div class="f"><label for="mail">E-mail <i>*</i></label><input id="mail" name="mail" type="email" placeholder="nome@email.com" autocomplete="email"><div class="err" id="e-mail" aria-live="polite"></div></div>'
   +'<div class="f full"><label for="etapa">Etapa ou série de interesse <i>*</i></label>'+etapaField+'<div class="err" id="e-etapa" aria-live="polite"></div></div>'
   +'<div class="f full"><label for="msg">Mensagem adicional</label><textarea id="msg" name="msg" maxlength="500" placeholder="Conte algo que a escola deva saber (opcional)"></textarea><div class="hint"><span id="mc">0</span>/500</div></div>'
   +'<div class="fa"><div id="banner"></div><button class="btn btn-cyan" type="submit" id="sub">Revisar e enviar</button><p class="fnote">Campos com * são obrigatórios. Nada é enviado até você confirmar.</p></div></form>'}
  var rules={
   resp:function(v){return v.trim().length<3?"Informe o nome completo do responsável.":""},
   aluno:function(v){return v.trim().length<3?"Informe o nome completo do aluno.":""},
   tel:function(v){var d=v.replace(/\D/g,"");return (d.length<10||d.length>11)?"Informe o telefone com DDD, por exemplo (65) 99999-9999.":""},
   mail:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())?"":"Informe um e-mail válido, como nome@email.com."},
   etapa:function(v){return v.trim()?"":"Informe a etapa ou série de interesse."}
  };
  function check(id,show){var el=$("#"+id),f=el.closest(".f"),m=rules[id](el.value);
    if(show!==false){f.classList.toggle("bad",!!m);f.classList.toggle("good",!m&&el.value.trim()!=="");$("#e-"+id).textContent=m;el.setAttribute("aria-invalid",!!m)}return !m}
  function bindForm(){
    var form=$("#mf");
    Object.keys(rules).forEach(function(id){var el=$("#"+id);el.addEventListener("blur",function(){check(id)});el.addEventListener("input",function(){if(el.closest(".f").classList.contains("bad"))check(id)});el.addEventListener("change",function(){check(id)})});
    $("#tel").addEventListener("input",function(e){var d=e.target.value.replace(/\D/g,"").slice(0,11),o=d;
      if(d.length>10)o="("+d.slice(0,2)+") "+d.slice(2,7)+"-"+d.slice(7);else if(d.length>6)o="("+d.slice(0,2)+") "+d.slice(2,6)+"-"+d.slice(6);else if(d.length>2)o="("+d.slice(0,2)+") "+d.slice(2);e.target.value=o});
    $("#msg").addEventListener("input",function(e){$("#mc").textContent=e.target.value.length});
    form.addEventListener("submit",function(e){e.preventDefault();
      var bad=Object.keys(rules).filter(function(id){return !check(id)});
      if(bad.length){$("#banner").innerHTML='<div class="banner" role="alert">Corrija '+(bad.length>1?"os "+bad.length+" campos destacados":"o campo destacado")+' para continuar.</div>';$("#"+bad[0]).focus();return}
      $("#banner").innerHTML="";
      var d={responsavel:$("#resp").value.trim(),aluno:$("#aluno").value.trim(),telefone:$("#tel").value,email:$("#mail").value.trim(),etapa:$("#etapa").value.trim(),mensagem:$("#msg").value.trim(),escola:E.nome,data:new Date().toISOString()};
      if(E.endpoint)send(d);else done(d,false);
    });
  }
  function resumo(d){return "Solicitação de matrícula - "+E.nome+"\nResponsável: "+d.responsavel+"\nAluno: "+d.aluno+"\nTelefone: "+d.telefone+"\nE-mail: "+d.email+"\nEtapa/série de interesse: "+d.etapa+(d.mensagem?"\nMensagem: "+d.mensagem:"")}
  function send(d){
    var b=$("#sub");b.disabled=true;b.innerHTML='<span class="spin"></span>Enviando...';
    var ctl=new AbortController(),to=setTimeout(function(){ctl.abort()},15000);
    fetch(E.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),signal:ctl.signal})
     .then(function(r){clearTimeout(to);if(!r.ok)throw 0;done(d,true)})
     .catch(function(){clearTimeout(to);b.disabled=false;b.textContent="Tentar novamente";$("#banner").innerHTML='<div class="banner" role="alert">Não foi possível enviar agora. Verifique a conexão e tente novamente.</div>'});
  }
  function done(d,sent){
    var txt=resumo(d),wa=E.whatsapp?"https://wa.me/"+E.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent(txt):"";
    var mail=E.email?"mailto:"+E.email+"?subject="+encodeURIComponent("Solicitação de matrícula")+"&body="+encodeURIComponent(txt):"";
    var msg=sent?'<p>Solicitação enviada para a escola. Guarde o resumo abaixo.</p>'
      :(wa||mail?'<p class="warn">Seus dados ainda <b>não foram enviados</b>. Escolha um canal abaixo para concluir.</p>'
      :'<p class="warn">Seus dados <b>não foram enviados a ninguém</b>: a escola ainda não cadastrou um canal de recebimento neste site. Copie o resumo e entregue na secretaria ou envie pelos contatos da escola.</p>');
    panel.innerHTML='<header><div></div><button class="xbtn" type="button" aria-label="Fechar" data-close>'+ic("x")+'</button></header><div class="done"><span class="ok">'+ic("check")+'</span><h3 id="mt">'+(sent?"Matrícula enviada":"Solicitação pronta")+'</h3>'+msg+'<pre>'+esc(txt)+'</pre><div class="row">'
      +(wa?'<a class="btn btn-cyan" href="'+esc(wa)+'" target="_blank" rel="noopener">Enviar pelo WhatsApp</a>':'')
      +(mail?'<a class="btn btn-line" href="'+esc(mail)+'">Enviar por e-mail</a>':'')
      +'<button class="btn btn-line" type="button" id="cp">Copiar resumo</button><button class="btn btn-line" type="button" data-close>Fechar</button></div></div>';
    $("#cp").addEventListener("click",function(){
      function fb(){var ta=document.createElement("textarea");ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand("copy");toast("Resumo copiado")}catch(e){toast("Selecione o texto e copie manualmente")}ta.remove()}
      if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(function(){toast("Resumo copiado")},fb);else fb();
    });
    $(".xbtn",panel).focus();
  }
  function open(){last=document.activeElement;panel.innerHTML=formHTML();bindForm();mod.classList.add("open");document.body.style.overflow="hidden";setMenu(false);Slide.suspend("mod",true);setTimeout(function(){$("#resp").focus()},50)}
  function close(){mod.classList.remove("open");document.body.style.overflow="";Slide.suspend("mod",false);if(last&&last.focus)last.focus()}
  document.addEventListener("click",function(e){if(e.target.closest("[data-matricula]"))open();else if(e.target.closest("[data-close]")||e.target===mod)close()});
  document.addEventListener("keydown",function(e){
    if(!mod.classList.contains("open"))return;
    if(e.key==="Escape")close();
    if(e.key==="Tab"){var f=$$("button,input,select,textarea,a[href]",panel).filter(function(x){return !x.disabled});if(!f.length)return;var a=f[0],z=f[f.length-1];
      if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
  });
})();

/* ============ ANIMAÇÕES AO ROLAR ============ */
(function(){
  var els=$$(".rv");
  if(reduce||!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});
  els.forEach(function(e){if(e.getBoundingClientRect().top<innerHeight)e.classList.add("in");io.observe(e)});
})();
bindImg($("#heroimg"));onScroll();