import fs from 'fs';
const [,, file] = process.argv;
const html = fs.readFileSync(file,'utf8');
const body = html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'');
const parts = body.split(/(?=<h2[ >])/);
function syl(w){w=w.toLowerCase().replace(/[^a-z]/g,'');if(!w)return 0;if(w.length<=3)return 1;w=w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,'');const m=w.match(/[aeiouy]{1,2}/g);return m?m.length:1;}
function text(h){return h.replace(/<[^>]+>/g,' ').replace(/&[a-z]+;|&#\d+;/g,' ').replace(/\s+/g,' ').trim();}
for(const p of parts){
  const t=text(p); const title=(p.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)||['',''])[1].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  if(!t||!title)continue;
  const sents=t.split(/(?<=[.!?])\s+(?=[A-Z"“(])/).filter(s=>s.split(/\s+/).length>1);
  const words=t.split(/\s+/).filter(w=>/[a-zA-Z]/.test(w));
  const sy=words.reduce((a,w)=>a+syl(w),0);
  const long=words.filter(w=>syl(w)>=3).length;
  const wps=words.length/sents.length, spw=sy/words.length;
  const fk=0.39*wps+11.8*spw-15.59;
  const longest=sents.map(s=>s.split(/\s+/).length).sort((a,b)=>b-a).slice(0,3);
  // body = the words the reader must read: no sim captions or readouts, no collapsed extras, no footer
  const bodyWords=text(p.replace(/<(div|p|span)[^>]*class="[^"]*\b(caption|readout|sim-title|slot-note)\b[^"]*"[^>]*>[\s\S]*?<\/\1>/g,' ').replace(/<details[\s\S]*?<\/details>/g,' ').replace(/<footer[\s\S]*?<\/footer>/g,' ')).split(/\s+/).filter(w=>/[a-zA-Z]/.test(w)).length;
  console.log(`${fk.toFixed(1).padStart(5)}  w/s ${wps.toFixed(1).padStart(5)}  long% ${(100*long/words.length).toFixed(0).padStart(3)}  top ${longest.join('/')}  words ${String(words.length).padStart(4)} body ${String(bodyWords).padStart(4)}  ${title.slice(0,60)}`);
}
