(function(){
const G=document.getElementById('docs'),F=document.getElementById('filters'),Q=document.getElementById('q');if(!G)return;let cat='Tous';
const ico=d=>/PNG|JPG|JPEG/.test(d.format)?'image':(d.categorie==='Certifications'||d.categorie==='Attestations')?'award':'file';
F.innerHTML=['Tous',...CATEGORIES].map(c=>`<button class="chip" aria-pressed="${c===cat}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
F.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;F.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));draw()});
Q.addEventListener('input',draw);
function draw(){
const q=Q.value.trim().toLowerCase();
const L=DOCUMENTS.filter(d=>d.publie&&(cat==='Tous'||d.categorie===cat)&&(d.titre+' '+d.desc+' '+d.categorie).toLowerCase().includes(q));
G.innerHTML=L.length?L.map(d=>{
const view=d.fichier&&/PDF|PNG|JPG|JPEG/.test(d.format);
const acts=d.fichier?(view?`<a class="btn s" href="${esc(d.fichier)}" target="_blank" rel="noopener" data-i="eye">Consulter</a>`:'')+`<a class="btn s g" href="${esc(d.fichier)}" download data-i="download">Télécharger</a>`:`<span class="btn s" aria-disabled="true">Bientôt disponible</span>`;
return `<article class="card doc"><div class="top">${icon(ico(d))}<span class="fmt">${esc(d.format)}</span></div><span class="cat">${esc(d.categorie)}</span><h3>${esc(d.titre)}</h3><p>${esc(d.desc)}</p><div class="acts">${acts}</div></article>`}).join(''):'<p class="empty">Aucun document ne correspond à votre recherche. Essayez un autre mot ou choisissez « Tous ».</p>';
G.querySelectorAll('[data-i]').forEach(e=>e.insertAdjacentHTML('afterbegin',icon(e.dataset.i)));
}
draw();
})();
