const PHONE="917015945078";
const wa=t=>`https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
const DIR="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent("HARI MARBLES AND BUILDING MATERIALS, Maholi, Near Chungi, Hasanpur, Faridabad, Haryana 121107");
document.querySelectorAll("[data-dir]").forEach(a=>a.href=DIR);
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa("Hello HARI MARBLES AND BUILDING MATERIALS, I would like to enquire about your premium tiles and marble collections."));

const g=(a,b)=>`linear-gradient(135deg,${a},${b})`;
const IMG={wall:"url(assets/images/wall-tiles.png)",int:"url(assets/images/showroom-interior.png)"};
const cats=[
["Floor Tiles","Elegant floor tiles for living rooms, bedrooms, offices and commercial spaces.",g("#e9e2d4","#b9ad98")],
["Wall Tiles","Contemporary wall tile designs, textured surfaces and decorative patterns.",IMG.wall],
["Bathroom Tiles","Modern wall and floor tile options for stylish bathrooms.",g("#dfe6ea","#9fb3bf")],
["Kitchen Tiles","Backsplash and kitchen wall tiles for a fresh, tidy look.",g("#f1ebe0","#c9b48a")],
["Marble Collection","Marble in white, grey, beige and dark natural patterns.",g("#f4f4f2","#8d8d8d")],
["Decorative Tiles","Artistic, patterned and feature-wall tile designs.",g("#d9c9a8","#6b5a3a")],
["Large-Format Tiles","Large-format tiles for spacious, seamless interiors.",g("#ece7de","#a69b88")],
["Building Materials","Building materials for your project. Contact us for details.",IMG.int]
];
const box=document.getElementById("cats");
cats.forEach(([n,d,bg])=>{
 const e=document.createElement("article");e.className="cat";
 e.innerHTML=`<div class="pic" style="background-image:${bg}"></div><div class="t"><h3>${n}</h3><p>${d}</p><a class="btn" target="_blank" rel="noopener" href="${wa(`Hello HARI MARBLES AND BUILDING MATERIALS, I would like to enquire about ${n}.`)}">ENQUIRE NOW</a></div>`;
 box.appendChild(e);
});

const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".reveal,.cat").forEach(el=>io.observe(el));

addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("off"),700));
const nav=document.getElementById("nav"),mb=document.getElementById("menuBtn");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

const lb=document.getElementById("lb"),li=lb.querySelector("img");
document.querySelectorAll("[data-lb]").forEach(i=>i.onclick=()=>{li.src=i.src;li.alt=i.alt;lb.classList.add("on")});
lb.onclick=()=>lb.classList.remove("on");
addEventListener("keydown",e=>e.key==="Escape"&&lb.classList.remove("on"));

document.getElementById("eSend").onclick=()=>{
 const n=document.getElementById("eName").value.trim(),m=document.getElementById("eMsg").value.trim();
 window.open(wa(`Hello HARI MARBLES AND BUILDING MATERIALS, ${n?"my name is "+n+". ":""}I would like to enquire about ${m||"your premium tiles and marble collections"}.`),"_blank");
};
