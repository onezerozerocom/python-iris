/* ---------- iris.csv (PetalLength 결측 5개 포함) ---------- */
const IRIS_CSV=`SepalLength,SepalWidth,PetalLength,PetalWidth,Species
5.1,3.5,1.4,0.2,Iris-setosa
4.9,3,1.4,0.2,Iris-setosa
4.7,3.2,1.3,0.2,Iris-setosa
4.6,3.1,1.5,0.2,Iris-setosa
5,3.6,1.4,0.2,Iris-setosa
5.4,3.9,1.7,0.4,Iris-setosa
4.6,3.4,1.4,0.3,Iris-setosa
5,3.4,1.5,0.2,Iris-setosa
4.4,2.9,1.4,0.2,Iris-setosa
4.9,3.1,1.5,0.1,Iris-setosa
5.4,3.7,1.5,0.2,Iris-setosa
4.8,3.4,1.6,0.2,Iris-setosa
4.8,3,1.4,0.1,Iris-setosa
4.3,3,1.1,0.1,Iris-setosa
5.8,4,1.2,0.2,Iris-setosa
5.7,4.4,1.5,0.4,Iris-setosa
5.4,3.9,1.3,0.4,Iris-setosa
5.1,3.5,1.4,0.3,Iris-setosa
5.7,3.8,1.7,0.3,Iris-setosa
5.1,3.8,1.5,0.3,Iris-setosa
5.4,3.4,,0.2,Iris-setosa
5.1,3.7,1.5,0.4,Iris-setosa
4.6,3.6,1,0.2,Iris-setosa
5.1,3.3,1.7,0.5,Iris-setosa
4.8,3.4,1.9,0.2,Iris-setosa
5,3,1.6,0.2,Iris-setosa
5,3.4,1.6,0.4,Iris-setosa
5.2,3.5,1.5,0.2,Iris-setosa
5.2,3.4,1.4,0.2,Iris-setosa
4.7,3.2,1.6,0.2,Iris-setosa
4.8,3.1,1.6,0.2,Iris-setosa
5.4,3.4,1.5,0.4,Iris-setosa
5.2,4.1,1.5,0.1,Iris-setosa
5.5,4.2,1.4,0.2,Iris-setosa
4.9,3.1,1.5,0.1,Iris-setosa
5,3.2,1.2,0.2,Iris-setosa
5.5,3.5,1.3,0.2,Iris-setosa
4.9,3.1,1.5,0.1,Iris-setosa
4.4,3,1.3,0.2,Iris-setosa
5.1,3.4,1.5,0.2,Iris-setosa
5,3.5,1.3,0.3,Iris-setosa
4.5,2.3,1.3,0.3,Iris-setosa
4.4,3.2,1.3,0.2,Iris-setosa
5,3.5,1.6,0.6,Iris-setosa
5.1,3.8,1.9,0.4,Iris-setosa
4.8,3,1.4,0.3,Iris-setosa
5.1,3.8,1.6,0.2,Iris-setosa
4.6,3.2,,0.2,Iris-setosa
5.3,3.7,1.5,0.2,Iris-setosa
5,3.3,1.4,0.2,Iris-setosa
7,3.2,4.7,1.4,Iris-versicolor
6.4,3.2,4.5,1.5,Iris-versicolor
6.9,3.1,4.9,1.5,Iris-versicolor
5.5,2.3,4,1.3,Iris-versicolor
6.5,2.8,4.6,1.5,Iris-versicolor
5.7,2.8,4.5,1.3,Iris-versicolor
6.3,3.3,4.7,1.6,Iris-versicolor
4.9,2.4,3.3,1,Iris-versicolor
6.6,2.9,4.6,1.3,Iris-versicolor
5.2,2.7,3.9,1.4,Iris-versicolor
5,2,3.5,1,Iris-versicolor
5.9,3,4.2,1.5,Iris-versicolor
6,2.2,4,1,Iris-versicolor
6.1,2.9,,1.4,Iris-versicolor
5.6,2.9,3.6,1.3,Iris-versicolor
6.7,3.1,4.4,1.4,Iris-versicolor
5.6,3,4.5,1.5,Iris-versicolor
5.8,2.7,4.1,1,Iris-versicolor
6.2,2.2,4.5,1.5,Iris-versicolor
5.6,2.5,3.9,1.1,Iris-versicolor
5.9,3.2,4.8,1.8,Iris-versicolor
6.1,2.8,4,1.3,Iris-versicolor
6.3,2.5,4.9,1.5,Iris-versicolor
6.1,2.8,4.7,1.2,Iris-versicolor
6.4,2.9,4.3,1.3,Iris-versicolor
6.6,3,4.4,1.4,Iris-versicolor
6.8,2.8,4.8,1.4,Iris-versicolor
6.7,3,5,1.7,Iris-versicolor
6,2.9,4.5,1.5,Iris-versicolor
5.7,2.6,3.5,1,Iris-versicolor
5.5,2.4,3.8,1.1,Iris-versicolor
5.5,2.4,3.7,1,Iris-versicolor
5.8,2.7,3.9,1.2,Iris-versicolor
6,2.7,5.1,1.6,Iris-versicolor
5.4,3,4.5,1.5,Iris-versicolor
6,3.4,4.5,1.6,Iris-versicolor
6.7,3.1,4.7,1.5,Iris-versicolor
6.3,2.3,,1.3,Iris-versicolor
5.6,3,4.1,1.3,Iris-versicolor
5.5,2.5,4,1.3,Iris-versicolor
5.5,2.6,4.4,1.2,Iris-versicolor
6.1,3,4.6,1.4,Iris-versicolor
5.8,2.6,4,1.2,Iris-versicolor
5,2.3,3.3,1,Iris-versicolor
5.6,2.7,4.2,1.3,Iris-versicolor
5.7,3,4.2,1.2,Iris-versicolor
5.7,2.9,4.2,1.3,Iris-versicolor
6.2,2.9,4.3,1.3,Iris-versicolor
5.1,2.5,3,1.1,Iris-versicolor
5.7,2.8,4.1,1.3,Iris-versicolor
6.3,3.3,6,2.5,Iris-virginica
5.8,2.7,5.1,1.9,Iris-virginica
7.1,3,5.9,2.1,Iris-virginica
6.3,2.9,5.6,1.8,Iris-virginica
6.5,3,5.8,2.2,Iris-virginica
7.6,3,6.6,2.1,Iris-virginica
4.9,2.5,4.5,1.7,Iris-virginica
7.3,2.9,6.3,1.8,Iris-virginica
6.7,2.5,5.8,1.8,Iris-virginica
7.2,3.6,6.1,2.5,Iris-virginica
6.5,3.2,5.1,2,Iris-virginica
6.4,2.7,5.3,1.9,Iris-virginica
6.8,3,5.5,2.1,Iris-virginica
5.7,2.5,,2,Iris-virginica
5.8,2.8,5.1,2.4,Iris-virginica
6.4,3.2,5.3,2.3,Iris-virginica
6.5,3,5.5,1.8,Iris-virginica
7.7,3.8,6.7,2.2,Iris-virginica
7.7,2.6,6.9,2.3,Iris-virginica
6,2.2,5,1.5,Iris-virginica
6.9,3.2,5.7,2.3,Iris-virginica
5.6,2.8,4.9,2,Iris-virginica
7.7,2.8,6.7,2,Iris-virginica
6.3,2.7,4.9,1.8,Iris-virginica
6.7,3.3,5.7,2.1,Iris-virginica
7.2,3.2,6,1.8,Iris-virginica
6.2,2.8,4.8,1.8,Iris-virginica
6.1,3,4.9,1.8,Iris-virginica
6.4,2.8,5.6,2.1,Iris-virginica
7.2,3,5.8,1.6,Iris-virginica
7.4,2.8,6.1,1.9,Iris-virginica
7.9,3.8,6.4,2,Iris-virginica
6.4,2.8,5.6,2.2,Iris-virginica
6.3,2.8,5.1,1.5,Iris-virginica
6.1,2.6,5.6,1.4,Iris-virginica
7.7,3,6.1,2.3,Iris-virginica
6.3,3.4,5.6,2.4,Iris-virginica
6.4,3.1,5.5,1.8,Iris-virginica
6,3,4.8,1.8,Iris-virginica
6.9,3.1,5.4,2.1,Iris-virginica
6.7,3.1,5.6,2.4,Iris-virginica
6.9,3.1,5.1,2.3,Iris-virginica
5.8,2.7,5.1,1.9,Iris-virginica
6.8,3.2,5.9,2.3,Iris-virginica
6.7,3.3,5.7,2.5,Iris-virginica
6.7,3,5.2,2.3,Iris-virginica
6.3,2.5,5,1.9,Iris-virginica
6.5,3,5.2,2,Iris-virginica
6.2,3.4,5.4,2.3,Iris-virginica
5.9,3,5.1,1.8,Iris-virginica`;

/* ---------- 유틸 ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const sum=a=>a.reduce((s,x)=>s+x,0);
const mean=a=>sum(a)/a.length;
const std=a=>{const m=mean(a);return Math.sqrt(sum(a.map(x=>(x-m)**2))/(a.length-1))};
const quantile=(a,q)=>{const s=[...a].sort((x,y)=>x-y);const p=(s.length-1)*q,b=Math.floor(p),f=p-b;return s[b+1]!==undefined?s[b]+f*(s[b+1]-s[b]):s[b]};
const median=a=>quantile(a,.5);
const r2=v=>+v.toFixed(2);
const CIRC='①②③④⑤⑥⑦⑧⑨⑩';
const COLS=['SepalLength','SepalWidth','PetalLength','PetalWidth'];
const SPECIES=['Iris-setosa','Iris-versicolor','Iris-virginica'];
const spColor=s=>`var(--s${SPECIES.indexOf(s)+1})`;

/* ---------- 데이터: 원본 → 결측치 채움 → 이상치 제거 → 정규화 ---------- */
const RAW=IRIS_CSV.trim().split('\n').slice(1).map((line,i)=>{const p=line.trim().split(',');return{i,v:p.slice(0,4).map(x=>x===''?null:+x),sp:p[4]}});
const colVals=(rows,j)=>rows.map(r=>r.v[j]).filter(x=>x!==null);
const MISS_N=RAW.filter(r=>r.v.includes(null)).length;
// numpy와 같은 pairwise 합산 → 파이썬 실행 결과와 끝자리까지 같은 평균
function pwSum(a){const n=a.length;if(n<8)return a.reduce((s,x)=>s+x,0);
  if(n<=128){const r=a.slice(0,8);let i=8;for(;i<n-(n%8);i+=8)for(let j=0;j<8;j++)r[j]+=a[i+j];let s=((r[0]+r[1])+(r[2]+r[3]))+((r[4]+r[5])+(r[6]+r[7]));for(;i<n;i++)s+=a[i];return s}
  let n2=Math.floor(n/2);n2-=n2%8;return pwSum(a.slice(0,n2))+pwSum(a.slice(n2))}
const PL_MEAN=pwSum(colVals(RAW,2))/colVals(RAW,2).length;
const MEAN_STR=String(PL_MEAN);
const FILLED=RAW.map(r=>({...r,v:r.v.map(x=>x===null?PL_MEAN:x),filled:r.v[2]===null}));
const SW=FILLED.map(r=>r.v[1]);
const Q1=quantile(SW,.25),Q3=quantile(SW,.75),IQR=Q3-Q1,UPPER=Q3+1.5*IQR,LOWER=Q1-1.5*IQR;
const isOut=v=>v>UPPER||v<LOWER;
const OUTS=FILLED.filter(r=>isOut(r.v[1]));
const KEPT=FILLED.filter(r=>!isOut(r.v[1]));
const MM=COLS.map((_,j)=>{const v=colVals(KEPT,j);return{min:Math.min(...v),max:Math.max(...v)}});
const NORMAL=KEPT.map((r,k)=>({i:k,v:r.v.map((x,j)=>(x-MM[j].min)/(MM[j].max-MM[j].min))}));

/* ---------- pandas 출력 형식 ---------- */
function decNeeded(v){for(let d=0;d<6;d++){if(Math.abs(v-+v.toFixed(d))<1e-9*Math.max(1,Math.abs(v)))return d}return 6}
const colDec=vals=>Math.max(1,...vals.map(decNeeded));
function frameText(rows,labels){
  const trunc=rows.length>60,shown=trunc?[...rows.slice(0,5),null,...rows.slice(-5)]:rows;
  const cells=labels.map((_,j)=>{const d=colDec(shown.filter(Boolean).map(r=>r.v[j]));return shown.map(r=>r?r.v[j].toFixed(d):'...')});
  const w=labels.map((l,j)=>Math.max(l.length,...cells[j].map(c=>c.length)));
  const idx=shown.map(r=>r?String(r.i):'..'),iw=Math.max(...idx.map(s=>s.length));
  const lines=[' '.repeat(iw)+labels.map((l,j)=>'  '+l.padStart(w[j])).join('')];
  shown.forEach((r,k)=>lines.push(idx[k].padEnd(iw)+labels.map((_,j)=>'  '+cells[j][k].padStart(w[j])).join('')));
  if(trunc)lines.push('',`[${rows.length} rows x ${labels.length} columns]`);
  return lines.join('\n');
}
function seriesText(pairs,foot){const iw=Math.max(...pairs.map(p=>String(p[0]).length)),vw=Math.max(...pairs.map(p=>String(p[1]).length));return pairs.map(([i,v])=>String(i).padEnd(iw)+'    '+String(v).padStart(vw)).join('\n')+'\n'+foot}
const INFO_TEXT=`<class 'pandas.core.frame.DataFrame'>
RangeIndex: ${RAW.length} entries, 0 to ${RAW.length-1}
Data columns (total 5 columns):
 #   Column       Non-Null Count  Dtype
---  ------       --------------  -----
${COLS.map((c,j)=>` ${j}   ${c.padEnd(11)}  ${colVals(RAW,j).length} non-null    float64`).join('\n')}
 4   Species      ${RAW.length} non-null    object
dtypes: float64(4), object(1)
memory usage: 6.0+ KB`;

/* ---------- 차트 ---------- */
function niceStep(span,n){const s0=span/n;const mag=10**Math.floor(Math.log10(s0));const e=s0/mag;return(e>=7.5?10:e>=3.5?5:e>=1.5?2:1)*mag}
function ticks(lo,hi,n=5){if(hi===lo)return[lo];const st=niceStep(hi-lo,n);const out=[];for(let v=Math.ceil(lo/st-1e-9)*st;v<=hi+st*1e-9;v+=st)out.push(+v.toFixed(10));return out}
const tf=v=>{const a=Math.abs(v);return a>=100?String(Math.round(v)):String(+v.toFixed(a>=10?1:2))};
function boxStats(v){const q1=quantile(v,.25),q3=quantile(v,.75),iqr=q3-q1,lf=q1-1.5*iqr,uf=q3+1.5*iqr;const inn=v.filter(x=>x>=lf&&x<=uf);return{q1,q3,med:median(v),wlo:Math.min(...inn),whi:Math.max(...inn),outs:v.filter(x=>x<lf||x>uf),n:v.length}}
function vboxSVG(groups,o={}){
  const w=o.w||520,h=o.h||300,m={l:40,r:12,t:12,b:30},iw=w-m.l-m.r,ih=h-m.t-m.b;
  const all=groups.flatMap(g=>g.vals);let lo=Math.min(...all),hi=Math.max(...all);const pad=(hi-lo||1)*.05;lo-=pad;hi+=pad;
  const Y=v=>m.t+ih-(v-lo)/(hi-lo)*ih,bw=iw/groups.length;
  let s=`<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(o.label||'상자그림')}">`;
  ticks(lo,hi,6).filter(t=>t>=lo&&t<=hi).forEach(t=>{s+=`<line class="grid" x1="${m.l}" x2="${w-m.r}" y1="${Y(t)}" y2="${Y(t)}"/><text class="tick" x="${m.l-6}" y="${Y(t)+4}" text-anchor="end">${tf(t)}</text>`});
  s+=`<line class="base" x1="${m.l}" x2="${w-m.r}" y1="${m.t+ih}" y2="${m.t+ih}"/>`;
  groups.forEach((g,i)=>{const st=boxStats(g.vals),cx=m.l+bw*i+bw/2,hw=Math.min(30,bw*.28),cap=hw*.55;
    s+=`<line x1="${cx}" x2="${cx}" y1="${Y(st.whi)}" y2="${Y(st.q3)}" style="stroke:var(--ink-2)" stroke-width="1.3"/><line x1="${cx}" x2="${cx}" y1="${Y(st.q1)}" y2="${Y(st.wlo)}" style="stroke:var(--ink-2)" stroke-width="1.3"/>`;
    s+=`<line x1="${cx-cap}" x2="${cx+cap}" y1="${Y(st.whi)}" y2="${Y(st.whi)}" style="stroke:var(--ink-2)" stroke-width="1.3"/><line x1="${cx-cap}" x2="${cx+cap}" y1="${Y(st.wlo)}" y2="${Y(st.wlo)}" style="stroke:var(--ink-2)" stroke-width="1.3"/>`;
    s+=`<rect x="${cx-hw}" y="${Y(st.q3)}" width="${hw*2}" height="${Math.max(1,Y(st.q1)-Y(st.q3))}" rx="3" style="fill:color-mix(in oklab,var(--s1) 22%,var(--surface));stroke:var(--s1)" stroke-width="1.5" data-tip="${esc(`${g.label}\nQ1 ${tf(st.q1)} · 중앙값 ${tf(st.med)} · Q3 ${tf(st.q3)}\n수염 ${tf(st.wlo)} ~ ${tf(st.whi)}`)}"/>`;
    s+=`<line x1="${cx-hw}" x2="${cx+hw}" y1="${Y(st.med)}" y2="${Y(st.med)}" style="stroke:var(--s2)" stroke-width="2.5" pointer-events="none"/>`;
    [...new Set(st.outs)].forEach(x=>{s+=`<circle cx="${cx}" cy="${Y(x)}" r="4" style="fill:var(--surface);stroke:var(--out-ink)" stroke-width="1.8" data-tip="${esc(`${g.label} 이상치: ${x}`)}"/>`});
    s+=`<text class="lab" x="${cx}" y="${h-9}" text-anchor="middle">${esc(g.label)}</text>`;
  });
  return s+'<\/svg>';
}
function swChart(){
  const one=v=>v.toFixed(1),inside=SW.filter(v=>!isOut(v)),maxIn=Math.max(...inside),minIn=Math.min(...inside);
  const outVals=[...new Set(SW.filter(isOut))].sort((a,b)=>a-b);
  const dMin=Math.floor(Math.min(...SW)*10-1)/10,dMax=Math.ceil(Math.max(...SW)*10+1)/10;
  const x=v=>60+(v-dMin)/(dMax-dMin)*660,baseY=300,boxY=70,counts={};
  const dots=FILLED.map(r=>{const v=r.v[1],k=one(v);counts[k]=(counts[k]||0)+1;return`<circle class="${isOut(v)?'sw-dot-out':'sw-dot'}" cx="${x(v).toFixed(1)}" cy="${baseY-5-(counts[k]-1)*6.5}" r="3" data-tip="${esc(`${r.i}번 · SepalWidth ${one(v)}${isOut(v)?'\n→ 이상치':''}`)}"/>`}).join('');
  let tk='';for(let t=Math.ceil(dMin*2)/2;t<=dMax+1e-9;t+=.5)tk+=`<line class="sw-tick" x1="${x(t)}" y1="${baseY}" x2="${x(t)}" y2="${baseY+5}"/><text class="sw-axis" x="${x(t)}" y="${baseY+20}">${t.toFixed(1)}</text>`;
  return `<svg class="chart" viewBox="0 0 760 350" role="img" aria-label="SepalWidth 값 150개의 분포와 상한선 ${r2(UPPER)}, 하한선 ${r2(LOWER)}">
<rect class="sw-out-zone" x="${x(dMin)}" y="30" width="${x(LOWER)-x(dMin)}" height="${baseY-30}"/><rect class="sw-out-zone" x="${x(UPPER)}" y="30" width="${x(dMax)-x(UPPER)}" height="${baseY-30}"/>
<line class="sw-limit" x1="${x(LOWER)}" y1="30" x2="${x(LOWER)}" y2="${baseY}"/><line class="sw-limit" x1="${x(UPPER)}" y1="30" x2="${x(UPPER)}" y2="${baseY}"/>
<text class="sw-limit-label" x="${x(LOWER)}" y="20">하한선 ${r2(LOWER)}</text><text class="sw-limit-label" x="${x(UPPER)}" y="20">상한선 ${r2(UPPER)}</text>
<line class="sw-whisker" x1="${x(minIn)}" y1="${boxY}" x2="${x(Q1)}" y2="${boxY}"/><line class="sw-whisker" x1="${x(Q3)}" y1="${boxY}" x2="${x(maxIn)}" y2="${boxY}"/>
<line class="sw-whisker" x1="${x(minIn)}" y1="${boxY-10}" x2="${x(minIn)}" y2="${boxY+10}"/><line class="sw-whisker" x1="${x(maxIn)}" y1="${boxY-10}" x2="${x(maxIn)}" y2="${boxY+10}"/>
<rect class="sw-box" x="${x(Q1)}" y="${boxY-16}" width="${x(Q3)-x(Q1)}" height="32" rx="3"/><line x1="${x(median(SW))}" x2="${x(median(SW))}" y1="${boxY-16}" y2="${boxY+16}" style="stroke:var(--s2)" stroke-width="2.5"/>
${outVals.map(v=>`<circle class="sw-box-out" cx="${x(v)}" cy="${boxY}" r="5"/>`).join('')}
<text class="sw-note" x="${x(Q1)}" y="${boxY-22}">Q1 ${r2(Q1)}</text><text class="sw-note" x="${x(Q3)}" y="${boxY-22}">Q3 ${r2(Q3)}</text>
<text class="sw-note sw-start" x="${x(minIn)-4}" y="${boxY+30}">최솟값 ${one(minIn)}</text><text class="sw-note sw-end" x="${x(maxIn)+4}" y="${boxY+30}">최댓값 ${one(maxIn)}</text>
${dots}<line class="sw-baseline" x1="60" y1="${baseY}" x2="720" y2="${baseY}"/>${tk}
<text class="sw-axis-title" x="390" y="${baseY+42}">SepalWidth (cm) · 점 하나가 꽃 한 송이</text><\/svg>`;
}
const BP_LABELS=[{y:36,from:162,t:'이상치',s:'1.5 × IQR보다 멀리 떨어진 값'},{y:72,from:176,t:'최댓값',s:'이상치를 뺀 가장 큰 값'},{y:114,from:196,t:'제3사분위수 (Q3)',s:'75% 위치의 값'},{y:158,from:196,t:'중앙값 (제2사분위수)',s:'50% 위치의 값'},{y:202,from:196,t:'제1사분위수 (Q1)',s:'25% 위치의 값'},{y:248,from:176,t:'최솟값',s:'이상치를 뺀 가장 작은 값'}];
const BP_DIAGRAM=`<svg class="chart" viewBox="0 0 560 280" style="max-width:560px" role="img" aria-label="상자그림의 이상치, 최댓값, 제3사분위수, 중앙값, 제1사분위수, 최솟값 위치">
<rect class="bp-panel" x="40" y="12" width="210" height="256" rx="10"/>
<circle class="bp-outlier" cx="145" cy="30" r="5"/><circle class="bp-outlier" cx="145" cy="42" r="5"/>
<line class="bp-line" x1="145" y1="72" x2="145" y2="114"/><line class="bp-line" x1="145" y1="202" x2="145" y2="248"/>
<line class="bp-line" x1="118" y1="72" x2="172" y2="72"/><line class="bp-line" x1="118" y1="248" x2="172" y2="248"/>
<rect class="bp-box" x="100" y="114" width="90" height="88"/><line class="bp-median" x1="100" y1="158" x2="190" y2="158"/>
<path class="bp-bracket" d="M88 114 H80 V202 H88"/><text class="bp-iqr" x="74" y="162">IQR</text>
${BP_LABELS.map(l=>`<line class="bp-leader" x1="${l.from}" y1="${l.y}" x2="292" y2="${l.y}"/><circle class="bp-dot" cx="${l.from}" cy="${l.y}" r="3"/><text class="bp-label" x="302" y="${l.y-2}">${l.t}<tspan class="bp-sub" x="302" dy="15">${l.s}</tspan></text>`).join('')}
<\/svg>`;
const IRIS_SVG=`<svg class="iris-svg" viewBox="0 0 320 300" role="img" aria-label="붓꽃의 꽃잎(Petal)과 꽃받침(Sepal)"><path class="iris-stem" d="M160 232 V300"/><g class="iris-sepal"><path d="M160 155 C120 148 70 160 62 195 C58 220 90 222 112 204 C132 188 150 170 160 160 Z"/><path d="M160 155 C200 148 250 160 258 195 C262 220 230 222 208 204 C188 188 170 170 160 160 Z"/><path d="M155 158 C138 186 136 226 160 242 C184 226 182 186 165 158 Z"/></g><g class="iris-sepal-mark"><path d="M150 164 C130 178 108 192 92 202"/><path d="M170 164 C190 178 212 192 228 202"/><path d="M160 166 V220"/></g><g class="iris-petal-shape"><path d="M160 152 C136 122 136 72 160 46 C184 72 184 122 160 152 Z"/><path d="M157 150 C128 136 102 106 110 76 C134 78 154 114 159 146 Z"/><path d="M163 150 C192 136 218 106 210 76 C186 78 166 114 161 146 Z"/></g><circle class="iris-core" cx="160" cy="153" r="7"/><g class="iris-callout"><line x1="178" y1="86" x2="236" y2="54"/><circle cx="178" cy="86" r="3.5"/><rect class="petal-tag" x="236" y="34" width="72" height="40" rx="6"/><text x="272" y="51">꽃잎</text><text class="en" x="272" y="66">Petal</text></g><g class="iris-callout"><line x1="84" y1="205" x2="58" y2="238"/><circle cx="84" cy="205" r="3.5"/><rect class="sepal-tag" x="12" y="238" width="80" height="40" rx="6"/><text x="52" y="255">꽃받침</text><text class="en" x="52" y="270">Sepal</text></g><\/svg>`;

/* ---------- 표·카드 ---------- */
function gridTable(head,body,o={}){const L=i=>i===0||o.left?'l ':'';return `<div class="tw"><table><thead><tr>${head.map((h,i)=>`<th class="${L(i)}">${h}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${r.map((c,i)=>typeof c==='object'&&c!==null?`<td class="${L(i)}${c.cls||''}">${c.v}</td>`:`<td class="${L(i)}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function card(title,body,o={}){return `<section class="card ${o.wide?'wide':''} ${o.cls||''}"${o.id?` id="${o.id}"`:''}><div class="card-h">${o.pre||''}<h3>${title}</h3>${o.sub?`<p>${o.sub}</p>`:''}</div>${body}</section>`}
const fact=(l,v,s,cls='')=>`<div class="fact ${cls}"><span>${l}</span><b>${v}</b>${s?`<small>${s}</small>`:''}</div>`;
const spCell=s=>`<span class="sp"><i style="background:${spColor(s)}"></i>${s}</span>`;
function irisTable(rows,cls,fmtCell){
  return `<div class="tw scroll" tabindex="0" aria-label="iris 데이터 전체 (표 안에서 스크롤)"><table><thead><tr><th class="l">번호</th>${COLS.map(c=>`<th>${c}</th>`).join('')}<th class="l">Species</th></tr></thead><tbody>${
    rows.map(r=>`<tr><td class="idx l">${r.i}</td>${r.v.map((x,j)=>{const c=cls(r,j);return`<td${c?` class="${c}"`:''}>${fmtCell(r,j)}</td>`}).join('')}<td class="l">${spCell(r.sp)}</td></tr>`).join('')}</tbody></table></div>`;
}
const guide=(title,inner)=>`<details class="guide"><summary><span>더 알아보기</span>${title}</summary>${inner}</details>`;
const dl=items=>`<dl>${items.map(([t,d])=>`<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`;
const pre=(t,cls='')=>`<pre class="py ${cls}">${esc(t)}</pre>`;

/* ---------- 활동 정의 ---------- */
const ATTR=(o)=>['AttributeError',`${o} has no attribute '{v}'`];
const ACTS={
  intro:{no:'01',fill:1,title:'데이터 불러오기',desc:'CSV 파일을 판다스 데이터프레임으로 읽어 옵니다.',
    lines:["import pandas as pd","iris = pd.{0}('iris.csv')","iris.{1}(3)"],
    blanks:[{a:['read_csv'],err:ATTR("module 'pandas'")},{a:['head'],err:ATTR("'DataFrame' object")}],
    msg:'좋아요.\nCSV를 데이터프레임으로 읽고 앞부분을 확인했습니다.',
    out:()=>{const rows=RAW.slice(0,3),d=COLS.map((_,j)=>colDec(rows.map(r=>r.v[j])));
      return gridTable(['',...COLS,'Species'],rows.map(r=>[`<b>${r.i}</b>`,...r.v.map((x,j)=>x.toFixed(d[j])),{v:r.sp,cls:'l'}]))+
      `<div class="insight"><span>✦</span><p><b>무엇을 알 수 있나요?</b><br>첫 3행만 봐도 열 이름, 값의 형태, 품종 표기 방식을 알 수 있습니다.</p></div>`}},
  info:{no:'02',fill:1,title:'데이터의 구조 확인하기',desc:'열마다 자료형과 결측치 개수를 한눈에 확인합니다. <code>info()</code>는 각 열의 값 개수(Non-Null Count)와 자료형(Dtype)을 보여 줍니다.',
    lines:["iris.{0}()"],blanks:[{a:['info'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n열별 자료형과 결측치 개수를 확인했습니다.',
    out:()=>`<div class="facts">${fact('RangeIndex',`${RAW.length} entries`,`0 to ${RAW.length-1}`)}${fact('데이터 열','5 columns','수치형 4 · 범주형 1')}${fact('Non-Null Count',`${colVals(RAW,2).length} / ${RAW.length}`,`PetalLength에 ${MISS_N}개 누락`,'hl')}</div>${pre(INFO_TEXT)}<p class="note"><b>읽어 보기</b> PetalLength는 값이 ${colVals(RAW,2).length}개뿐이므로 결측치가 ${MISS_N}개 있습니다.</p>`,
    after:()=>guide('info() 결과의 각 항목',dl([['RangeIndex','행 번호(인덱스)의 범위로, 0부터 149까지 150개의 행이 있습니다.'],['Data columns','데이터프레임에 있는 열의 전체 개수입니다.'],['#','열의 순서 번호로, 0부터 시작합니다.'],['Column','열의 이름입니다.'],['Non-Null Count','비어 있지 않은 값의 개수로, 전체 행 수보다 작으면 결측치가 있다는 뜻입니다.'],['Dtype','열의 자료형으로, float64는 실수이고 object는 문자열입니다.'],['dtypes','자료형별로 열이 몇 개인지 보여 줍니다.'],['memory usage','데이터프레임이 차지하는 메모리 크기입니다.']]))},
  describe:{no:'03',fill:1,title:'기초 통계량 확인하기',desc:'수치형 열마다 값의 개수, 평균, 표준편차, 최솟값, 사분위수, 최댓값을 확인합니다. <code>describe()</code>의 결과로 열마다 값이 어떻게 퍼져 있는지 비교해 보세요.',
    lines:["iris.{0}()"],blanks:[{a:['describe'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n수치형 열의 기초 통계량을 확인했습니다.',
    out:()=>{const st=COLS.map((_,j)=>{const v=colVals(RAW,j);return[v.length,mean(v),std(v),Math.min(...v),quantile(v,.25),median(v),quantile(v,.75),Math.max(...v)]});
      const d=st.map(colDec),names=['count','mean','std','min','25%','50%','75%','max'];
      return gridTable(['',...COLS],names.map((n,k)=>[`<b>${n}</b>`,...st.map((s,j)=>({v:s[k].toFixed(d[j]),cls:n==='count'&&s[k]<RAW.length?'c-miss':''}))]))+
      `<p class="note"><span class="key"><i style="background:var(--miss-bg);outline:1px solid var(--miss-ink)"></i>count가 ${RAW.length}보다 작음 = 결측치가 있는 열</span></p>`},
    after:()=>guide('describe() 결과의 각 항목',dl([['count','비어 있지 않은 값의 개수입니다.'],['mean','값을 모두 더해 개수로 나눈 평균입니다.'],['std','표준편차로, 값들이 평균에서 얼마나 흩어져 있는지 나타냅니다.'],['min','가장 작은 값(최솟값)입니다.'],['25%','제1사분위수로, 값을 작은 순서로 늘어놓았을 때 25% 위치의 값입니다.'],['50%','중앙값(제2사분위수)으로, 값을 작은 순서로 늘어놓았을 때 가운데 위치의 값입니다.'],['75%','제3사분위수로, 값을 작은 순서로 늘어놓았을 때 75% 위치의 값입니다.'],['max','가장 큰 값(최댓값)입니다.']]))},
  'missing-check':{no:'04',fill:1,title:'결측치 개수 확인하기',desc:'각 열에서 비어 있는 값의 개수를 셉니다. 두 빈칸에 알맞은 함수 이름을 넣어 보세요.',
    lines:["iris.{0}().{1}()"],blanks:[{a:['isnull','isna'],err:ATTR("'DataFrame' object")},{a:['sum'],err:ATTR("'DataFrame' object")}],
    msg:`정답입니다.\nPetalLength에 결측치 ${MISS_N}개가 있음을 확인했습니다.`,
    out:()=>pre(seriesText([...COLS.map((c,j)=>[c,RAW.length-colVals(RAW,j).length]),['Species',0]],'dtype: int64'))},
  mean:{no:'05',fill:1,title:'결측치가 있는 열의 평균 구하기',desc:'PetalLength의 빈칸에 넣을 값으로, 비어 있지 않은 값들의 평균을 구합니다.',
    lines:["iris['PetalLength'].{0}()"],blanks:[{a:['mean'],err:ATTR("'Series' object")}],
    msg:'정답입니다.\n비어 있는 값을 채울 기준 평균을 구했습니다.',
    out:()=>pre(MEAN_STR)+`<p class="note">PetalLength 평균 ≈ <b>${PL_MEAN.toFixed(2)} cm</b> — 결측치는 계산에서 자동으로 빠집니다.</p>`},
  missing:{no:'06',fill:1,title:'평균값으로 채우기',desc:'PetalLength 열의 결측치를 앞에서 구한 평균값으로 채운 뒤, 모든 열의 결측치가 0개인지 확인합니다.',
    lines:["mean = iris.PetalLength.mean()","iris.PetalLength.{0}(mean, inplace=True)","iris.{1}().{2}()"],
    blanks:[{a:['fillna'],err:ATTR("'Series' object")},{a:['isnull','isna'],err:ATTR("'DataFrame' object")},{a:['sum'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\nPetalLength의 결측치를 평균으로 채웠습니다.',
    out:()=>pre(seriesText([...COLS.map(c=>[c,0]),['Species',0]],'dtype: int64'))+`<div class="insight"><span>!</span><p><b>실행 후 확인</b><br>결측치를 채운 뒤 모든 열의 결측치가 0개인지 확인합니다.</p></div>`},
  'outlier-boxplot':{no:'07',title:'이상치 확인하기 1',desc:'네 수치형 열의 분포와 이상치를 상자그림으로 살펴봅니다.',
    lines:["import matplotlib.pyplot as plt","iris[['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth']].boxplot()"],blanks:[],
    msg:'상자그림을 그렸습니다.',
    out:()=>vboxSVG(COLS.map((c,j)=>({label:c,vals:colVals(FILLED,j)})),{label:'iris 네 수치형 열의 상자그림'})+`<p class="note">상자 = Q1~Q3, <span style="color:var(--s2);font-weight:600">주황 선</span> = 중앙값, <span style="color:var(--out-ink);font-weight:600">○</span> = 이상치. 상자·점에 마우스를 올려 보세요.</p>`,
    after:()=>guide('상자그림 읽는 법',`<p>상자그림은 사분위수를 이용해 데이터의 분포와 모양, 극단값을 한눈에 보여 주는 그래프입니다.</p>${BP_DIAGRAM}${dl([['상자','제1사분위수부터 제3사분위수까지로, 가운데 50%의 데이터가 들어 있습니다.'],['IQR','제3사분위수 - 제1사분위수로, 상자의 길이와 같습니다.'],['수염','상자 위아래로 뻗은 선으로, 이상치를 뺀 최댓값과 최솟값까지 이어집니다.'],['이상치','상자에서 1.5 × IQR보다 멀리 떨어진 값으로, 동그라미(○)로 표시됩니다.']])}<p>활동 07 결과에서는 SepalWidth의 위아래에 있는 동그라미가 이상치입니다.</p>`)},
  outlier:{no:'08',fill:1,title:'이상치 확인하기 2',desc:'제1사분위수, 제3사분위수와 IQR을 이용해 SepalWidth의 이상치를 찾습니다.',
    lines:["import {0} as np","q1, q3 = np.percentile(iris['SepalWidth'], [{1}, {2}])","iqr = q3 - q1","upper = {3}","lower = {4}","outliers = iris['SepalWidth'][(iris['SepalWidth'] {5}) | (iris['SepalWidth'] {6})]","outliers"],
    blanks:[{a:['numpy'],err:['ModuleNotFoundError',"No module named '{v}'"]},{a:['25']},{a:['75']},{a:['q3 + (1.5 * iqr)','q3 + 1.5 * iqr','q3 + (iqr * 1.5)','q3 + iqr * 1.5']},{a:['q1 - (1.5 * iqr)','q1 - 1.5 * iqr','q1 - (iqr * 1.5)','q1 - iqr * 1.5']},{a:['> upper']},{a:['< lower']}],
    msg:'정답입니다.\nSepalWidth의 제1·3 사분위수와 IQR로 이상치를 찾았습니다.',
    out:()=>pre(seriesText(OUTS.map(r=>[r.i,r.v[1].toFixed(1)]),'Name: SepalWidth, dtype: float64'))+`<p class="note">q1 = ${r2(Q1)}, q3 = ${r2(Q3)}, iqr = ${r2(IQR)} → 상한 <b>${r2(UPPER)}</b>, 하한 <b>${r2(LOWER)}</b>. 왼쪽 숫자는 행 번호(인덱스)입니다.</p>`},
  'outlier-drop':{no:'09',fill:1,title:'이상치 처리하기',desc:'이상치가 있는 행을 제거하고, 제거 전후의 데이터 크기를 비교합니다.',
    lines:["iris_outliers = iris.{0}(index=outliers.index)","print('이상치 제거 전:', iris.{1})","print('이상치 제거 후:', iris_outliers.{2})"],
    blanks:[{a:['drop'],err:ATTR("'DataFrame' object")},{a:['shape'],err:ATTR("'DataFrame' object")},{a:['shape'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n이상치 행을 제거하고 데이터 크기를 비교했습니다.',
    out:()=>pre(`이상치 제거 전: (${FILLED.length}, 5)\n이상치 제거 후: (${KEPT.length}, 5)`)+`<p class="note">이상치가 있던 ${OUTS.length}개 행(${OUTS.map(r=>r.i).join(', ')}번)이 지워지고, 열은 그대로 5개입니다.</p>`},
  normalize:{no:'10',fill:1,title:'MinMaxScaler로 정규화하기',desc:'네 수치형 열을 선택해 MinMaxScaler로 정규화합니다.',
    lines:["from sklearn.preprocessing import {0}","iris_new = iris_outliers[['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth']]","normal = MinMaxScaler().{1}(iris_new)","normal = pd.{2}(normal, columns=iris_new.columns)","print(normal); print(iris_new)"],
    blanks:[{a:['MinMaxScaler'],err:['ImportError',"cannot import name '{v}' from 'sklearn.preprocessing'"]},{a:['fit_transform'],err:ATTR("'MinMaxScaler' object")},{a:['DataFrame'],err:ATTR("module 'pandas'")}],
    msg:'정답입니다.\n네 가지 수치형 열을 0부터 1 사이로 정규화했습니다.',
    out:()=>`<div class="out-cols"><div><p>normal (정규화 후)</p>${pre(frameText(NORMAL,COLS))}</div><div><p>iris_new (정규화 전)</p>${pre(frameText(KEPT,COLS))}</div></div>`+
      gridTable(['열','최솟값 → 0','최댓값 → 1','계산식'],COLS.map((c,j)=>[`<b>${c}</b>`,MM[j].min,MM[j].max,`<span class="formula">(x − ${MM[j].min}) / (${MM[j].max} − ${MM[j].min})</span>`]))},
  'normalize-boxplot':{no:'11',title:'상자그림으로 정규화 확인하기',desc:'정규화 전과 후의 분포를 상자그림 두 개로 나란히 비교합니다. <code>plt.subplot(1, 2, n)</code>은 그림 영역을 가로로 두 칸 나눈 뒤 n번째 칸을 선택합니다.',
    lines:['import matplotlib.pyplot as plt','plt.figure(figsize=(12, 6))','plt.subplot(1, 2, 1)','iris_new.boxplot()','plt.subplot(1, 2, 2)','normal.boxplot()','plt.show()'],blanks:[],
    msg:'정규화 전후의 상자그림을 그렸습니다.',
    out:()=>`<div class="pair"><figure><figcaption>subplot(1, 2, 1) · iris_new (정규화 전, cm)</figcaption>${vboxSVG(COLS.map((c,j)=>({label:c,vals:colVals(KEPT,j)})),{w:440,h:300,label:'정규화 전 상자그림'})}</figure><figure><figcaption>subplot(1, 2, 2) · normal (정규화 후, 0 ~ 1)</figcaption>${vboxSVG(COLS.map((c,j)=>({label:c,vals:colVals(NORMAL,j)})),{w:440,h:300,label:'정규화 후 상자그림'})}</figure></div><p class="note">상자 모양(분포)은 그대로이고 세로축의 척도만 0 ~ 1로 바뀝니다. 정규화 후에는 네 열을 같은 기준으로 비교할 수 있습니다.</p>`}
};
const ACT_IDS=Object.keys(ACTS);

/* ---------- 연습문제 ---------- */
const QUIZ={
  preprocess:{title:'실행 결과로 알 수 있는 사실',intro:'활동 02와 활동 03의 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 02의 결과에서 결측치가 있는 열은 무엇인가요?',o:['SepalLength','SepalWidth','PetalLength','Species'],a:3,e:'info()에서 PetalLength만 145 non-null입니다.\n따라서 150 - 145 = 5개의 값이 비어 있습니다.'},
    {q:'활동 02의 결과에서 자료형이 나머지 열과 다른 열은 무엇인가요?',o:['SepalLength','PetalWidth','PetalLength','Species'],a:4,e:'Species의 자료형은 object이며, 품종 이름을 문자로 기록한 범주형 자료입니다.\n나머지 네 열은 모두 float64(실수)입니다.'},
    {q:'활동 03의 결과에서 최댓값과 최솟값의 차이가 가장 큰 열은 무엇인가요?',o:['SepalLength','SepalWidth','PetalLength','PetalWidth'],a:3,e:'describe()의 max에서 min을 빼면 PetalLength가 6.9 - 1.0 = 5.9로 가장 큽니다.\n값이 넓게 퍼져 있어 품종을 구분하는 데 도움이 될 수 있습니다.'}]},
  missing:{title:'결측치 처리 코드와 결과 이해하기',intro:'활동 04~06의 코드와 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 04의 <code>iris.isnull().sum()</code>은 무엇을 계산하나요?',o:['각 열의 평균','각 열의 결측치 개수','결측치가 있는 행의 개수','각 열의 전체 값 개수'],a:2,e:'isnull()은 값이 비어 있으면 True, 아니면 False로 바꿉니다.\nsum()은 True를 1로 세어 더하므로, 열마다 결측치 개수가 나옵니다.'},
    {q:'활동 06을 실행한 뒤 PetalLength의 빈칸에 들어간 값은 무엇인가요?',o:['0','1.0',MEAN_STR,'4.3'],a:3,e:`활동 06은 mean = iris.PetalLength.mean()으로 구한 평균을 빈칸에 넣습니다.\n활동 05의 실행 결과와 같은 ${MEAN_STR}입니다.`},
    {q:'활동 06의 <code>fillna(mean, inplace=True)</code>에서 <code>inplace=True</code>의 역할은 무엇인가요?',o:['원래 데이터를 직접 바꾼다','원래 데이터는 그대로 둔다','결측치가 있는 행을 지운다','결측치를 0으로 채운다'],a:1,e:'inplace=True는 새 데이터를 만들지 않고 원래 데이터를 직접 바꿉니다.\n그래서 활동 06의 결과에서 PetalLength의 결측치가 0개로 나옵니다.'}]},
  outlier:{title:'이상치 처리 코드와 결과 이해하기',intro:'활동 07~09의 코드와 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 08에서 <code>iqr = q3 - q1</code>의 값은 얼마인가요?',o:['0.5','1.5','2.05','4.05'],a:1,e:'SepalWidth의 제1사분위수 q1은 2.8이고, 제3사분위수 q3는 3.3입니다.\n따라서 iqr = 3.3 - 2.8 = 0.5입니다.'},
    {q:'활동 08의 실행 결과에서 이상치로 찾은 SepalWidth 값이 <u>아닌</u> 것은 무엇인가요?',o:['4.4','4.2','2.0','3.9'],a:4,e:'상한값은 3.3 + 1.5 × 0.5 = 4.05이고, 하한값은 2.8 - 1.5 × 0.5 = 2.05입니다.\n3.9는 2.05와 4.05 사이에 있으므로 이상치가 아닙니다.'},
    {q:'활동 09를 실행했을 때 <code>iris_outliers.shape</code>의 결과는 무엇인가요?',o:['(150, 5)','(146, 5)','(150, 4)','(4, 5)'],a:2,e:'drop()으로 이상치가 있는 4개의 행을 지웠으므로 행은 150 - 4 = 146개가 됩니다.\n열은 지우지 않았으므로 5개 그대로입니다.'}]},
  normalize:{title:'정규화 코드와 결과 이해하기',intro:'활동 10~11의 코드와 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 10에서 <code>MinMaxScaler</code>로 정규화한 값은 어느 범위에 있나요?',o:['-1부터 1 사이','0부터 1 사이','0부터 100 사이','평균 0, 표준편차 1'],a:2,e:'최소-최대 정규화는 각 열의 최솟값을 0, 최댓값을 1로 바꿉니다.\n그래서 활동 11의 오른쪽 상자그림은 모두 0부터 1 사이에 있습니다.'},
    {q:'정규화 전 SepalLength의 최솟값 4.3은 정규화 후 어떤 값이 되나요?',o:['0','0.5','1','4.3'],a:1,e:'정규화한 값은 (값 - 최솟값) ÷ (최댓값 - 최솟값)으로 계산합니다.\n4.3은 최솟값이므로 (4.3 - 4.3) ÷ (7.9 - 4.3) = 0이 됩니다.'},
    {q:'활동 11에서 <code>plt.subplot(1, 2, 2)</code>는 무엇을 하나요?',o:['그림 영역을 위아래 두 칸으로 나눈다','가로 두 칸 중 두 번째 칸을 선택한다','그림 두 개를 한 칸에 겹쳐 그린다','그림 크기를 1 × 2로 정한다'],a:2,e:'subplot(행, 열, 번호)는 그림 영역을 행 × 열 칸으로 나누고 그중 한 칸을 고릅니다.\n(1, 2, 2)는 1행 2열 중 두 번째, 즉 오른쪽 칸이라서 정규화 후 상자그림이 오른쪽에 그려집니다.'}]}
};

/* ---------- 상태 ---------- */
const S={inputs:{},executed:new Set(),check:{},err:{},quiz:{},seen:new Set(),ui:{step:0,codeTab:'step',showMissing:false}};
try{const d=JSON.parse(localStorage.getItem('iris-lab-v1')||'null');if(d){S.inputs=d.inputs||{};S.executed=new Set(d.executed||[]);S.quiz=d.quiz||{};S.seen=new Set(d.seen||[]);if(d.step>=0&&d.step<6)S.ui.step=d.step;S.ui.showMissing=!!d.showMissing}}catch(e){}
function save(){try{localStorage.setItem('iris-lab-v1',JSON.stringify({inputs:S.inputs,executed:[...S.executed],quiz:S.quiz,seen:[...S.seen],step:S.ui.step,showMissing:S.ui.showMissing}))}catch(e){}}
const norm=v=>String(v||'').replace(/\s+/g,'').replace(/[‘’]/g,"'");
const inp=(id,k)=>(S.inputs[id]||[])[k]||'';
const blankOk=(id,k)=>ACTS[id].blanks[k].a.some(a=>norm(a)===norm(inp(id,k)));

/* ---------- 단계 정의 ---------- */
const STEPS=[
{ title:'붓꽃 데이터 살펴보기', short:'먼저 알아보기', acts:[],
  goal:'분석을 시작하기 전에 붓꽃의 측정값이 CSV 파일에 어떻게 기록되어 있는지 확인해 보세요.',
  concept:'<p><b>붓꽃(Iris)</b>은 품종마다 꽃의 모양과 크기가 달라 데이터로 비교하기 좋은 식물입니다. 이번 실습에서는 세 품종(setosa · versicolor · virginica) 150송이의 측정값을 사용합니다. 측정한 부분은 <b>꽃받침(Sepal)</b>과 <b>꽃잎(Petal)</b>입니다.</p>',
  results(){
    return `<div class="cards">
      ${card('붓꽃을 관찰해 볼까요?',`<div class="intro-grid"><div style="display:grid;gap:12px"><p class="note" style="font-size:14.5px">붓꽃은 품종마다 꽃의 모양과 크기가 다릅니다. 그래서 데이터로 비교하기 좋은 식물입니다. 이번 실습에서는 꽃받침과 꽃잎의 측정값을 사용합니다.</p><div class="parts"><div class="pt"><b>꽃잎 Petal</b><span>색이 선명하고 넓게 펼쳐지는 부분</span></div><div class="sp2"><b>꽃받침 Sepal</b><span>꽃봉오리를 감싸 보호하는 바깥쪽 부분</span></div></div></div>${IRIS_SVG}</div>`,{wide:true})}
      ${card(`iris.csv 전체 내용 <span style="font-weight:400;color:var(--muted);font-size:13px">${RAW.length}행 · 5열 · 결측 ${MISS_N}개</span>`,
        `<div class="seg" role="group" aria-label="결측치 표시"><button type="button" data-act="miss" data-v="0" aria-pressed="${!S.ui.showMissing}">있는 그대로</button><button type="button" data-act="miss" data-v="1" aria-pressed="${S.ui.showMissing}">결측치 표시</button></div>`+
        irisTable(RAW,(r,j)=>S.ui.showMissing&&r.v[j]===null?'c-miss':'',(r,j)=>r.v[j]===null?(S.ui.showMissing?'NaN':''):r.v[j].toFixed(1)),
        {wide:true,sub:'표 안에서 스크롤하면 150개 관측값 전체를 확인할 수 있습니다. 빈칸이 어디에 있는지 찾아보세요.'})}
      ${card('iris.csv 한눈에',`<div class="facts">${fact('행',RAW.length,'관측값 (꽃 한 송이 = 1행)')}${fact('열',5,'변수')}${fact('품종',3,'범주')}${fact('확인할 결측치',MISS_N,'PetalLength 열','hl')}</div>`,{wide:true})}
      ${card('CSV에서 사용하는 속성',gridTable(['속성','의미','값'],[['<b>SepalLength</b>','꽃받침의 길이','cm'],['<b>SepalWidth</b>','꽃받침의 너비','cm'],['<b>PetalLength</b>','꽃잎의 길이','cm'],['<b>PetalWidth</b>','꽃잎의 너비','cm'],['<b>Species</b>','붓꽃의 품종 이름',SPECIES.map(spCell).join(' &nbsp;')]],{left:1}),{wide:true,sub:'길이와 너비의 단위는 cm입니다.'})}
    </div>`;
  }},
{ title:'데이터 읽기', short:'데이터 읽기', acts:['intro'],
  goal:'CSV 파일을 불러오고 데이터의 앞부분을 확인합니다. 표의 열 이름과 값이 어떤 형태로 기록되어 있는지 살펴보세요.',
  concept:'<p><b>pd.read_csv()</b>는 CSV 파일을 행과 열로 된 표(<b>DataFrame</b>)로 읽어 옵니다. <b>head(n)</b>은 앞에서부터 n개 행만 보여 주어 데이터의 첫인상을 빠르게 확인할 수 있습니다.</p>'},
{ title:'데이터의 특성 분석', short:'특성 분석', acts:['info','describe'], quiz:'preprocess',
  goal:'분석을 시작하기 전에 데이터의 크기, 열의 자료형, 기초 통계량을 확인합니다. 아래 코드를 순서대로 완성하며 데이터의 상태를 읽어 봅니다.',
  concept:'<p><b>info()</b>는 열마다 비어 있지 않은 값의 개수와 자료형을 보여 줍니다. <b>describe()</b>는 수치형 열의 평균·표준편차·사분위수·최솟값·최댓값을 보여 줍니다.</p><p>Non-Null 개수가 행 수보다 작으면 <b>결측치</b>가 있다는 뜻입니다.</p>'},
{ title:'결측치 처리', short:'결측치', acts:['missing-check','mean','missing'], quiz:'missing',
  goal:'결측치는 값이 비어 있는 칸을 말합니다. 열마다 결측치 개수를 확인한 뒤 평균값으로 빈칸을 채워 봅니다.',
  concept:'<p><b>isnull()</b>은 빈칸을 True로 바꾸고, <b>sum()</b>은 True를 1로 세어 열마다 결측치 개수를 구합니다. <b>fillna(값)</b>은 빈칸을 주어진 값으로 채웁니다.</p><p>여기서는 PetalLength의 빈칸 5개를 나머지 145개 값의 <b>평균</b>으로 채웁니다.</p>'},
{ title:'이상치 처리', short:'이상치', acts:['outlier-boxplot','outlier','outlier-drop'], quiz:'outlier',
  goal:'이상치는 다른 값들과 동떨어진 값을 말합니다. 상자그림으로 분포를 살펴본 뒤, 사분위수와 IQR로 이상치를 찾아 제거합니다.',
  concept:'<p><b>IQR(사분위 범위)</b> <span class="formula">IQR = Q3 − Q1</span> 은 가운데 50% 데이터가 퍼진 폭입니다.</p><p><span class="formula">상한 = Q3 + 1.5 × IQR</span> &nbsp;<span class="formula">하한 = Q1 − 1.5 × IQR</span> 밖의 값을 이상치로 봅니다. 상자그림의 수염 밖 동그라미가 바로 이 이상치입니다.</p>'},
{ title:'정규화', short:'정규화', acts:['normalize','normalize-boxplot'], quiz:'normalize',
  goal:'열마다 값의 범위가 다르면 서로 비교하기 어렵습니다. 최솟값을 0, 최댓값을 1로 바꾸는 최소-최대 정규화를 적용합니다.',
  concept:'<p><b>최소-최대 정규화</b>: <span class="formula">x\' = (x − min) / (max − min)</span></p><p>가장 작은 값은 0, 가장 큰 값은 1이 되고 나머지는 그 사이에 비율대로 놓입니다. 교과서처럼 이상치를 제거한 <b>iris_outliers</b>의 네 수치형 열에 적용합니다.</p>'}
];
const GROUPS={0:'시작',1:'01 데이터의 특성 분석',3:'02 데이터의 전처리'};
const stepDone=i=>i===0?S.seen.has(0):STEPS[i].acts.every(a=>S.executed.has(a));

/* ---------- 코드 문자열 ---------- */
function hl(src){
  const re=/(#[^\n]*)|('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")|\b(import|from|as|for|in|if|else|def|return|True|False|None|and|or|not|lambda)\b|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_]\w*)(?=\()/g;
  let out='',last=0,m;
  while((m=re.exec(src))){out+=esc(src.slice(last,m.index));const t=esc(m[0]);
    out+=m[1]?`<span class="c">${t}</span>`:m[2]?`<span class="s">${t}</span>`:m[3]?`<span class="k">${t}</span>`:m[4]?`<span class="n">${t}</span>`:`<span class="f">${t}</span>`;last=re.lastIndex}
  return out+esc(src.slice(last));
}
const GAP='\u0001';
function actCode(id){return ACTS[id].lines.map(l=>l.replace(/\{(\d)\}/g,(_,k)=>inp(id,+k).trim()||GAP+CIRC[k]+GAP)).join('\n')}
function stepCode(i){return STEPS[i].acts.map(id=>`# 활동 ${ACTS[id].no} · ${ACTS[id].title}\n${actCode(id)}`).join('\n\n')}
function fullCode(){return STEPS.slice(1).map((s,i)=>`# ${'='.repeat(8)} ${i+1}. ${s.title} ${'='.repeat(8)}\n${stepCode(i+1)}`).join('\n\n\n')}
const codeText=()=>S.ui.step===0&&S.ui.codeTab==='step'?IRIS_CSV:(S.ui.codeTab==='all'?fullCode():stepCode(S.ui.step));
function codeHTML(){
  if(S.ui.step===0&&S.ui.codeTab==='step')return esc(IRIS_CSV);
  return hl(codeText()).replace(new RegExp(GAP+'(.)'+GAP,'g'),'<span class="gap">$1 빈칸</span>');
}

/* ---------- 렌더링 ---------- */
function cellHTML(id){
  const a=ACTS[id],chk=S.check[id];
  return a.lines.map((l,n)=>`<div class="cl"><span class="ln">${n+1}</span><span>${l.split(/(\{\d\})/).map(p=>{const m=p.match(/^\{(\d)\}$/);if(!m)return hl(p);const k=+m[1],b=a.blanks[k],v=inp(id,k);
    const cls=chk===undefined?'':(blankOk(id,k)?'ok':'bad');
    return `<input class="blank ${cls}" data-id="${id}" data-k="${k}" value="${esc(v)}" placeholder="${CIRC[k]}" style="width:${Math.max(4,b.a[0].length+1.5)}ch" aria-label="빈칸 ${CIRC[k]}" autocomplete="off" autocapitalize="off" spellcheck="false">`}).join('')}</span></div>`).join('');
}
function actCard(id){
  const a=ACTS[id],done=S.executed.has(id),chk=S.check[id],err=S.err[id];
  let out='';
  if(err)out=`<div class="out"><div class="out-h err">실행 결과 · 오류</div>${pre(err,'err')}</div>`;
  else if(done)out=`<div class="out"><div class="out-h">실행 결과</div>${a.out()}</div>`;
  return `<section class="card wide act" id="act-${id}">
    <div class="act-top"><span class="act-no">활동 ${a.no}</span><span class="tag ${a.fill?'fill':''}">${a.fill?'코드 완성':'소스 코드'}</span>${done?'<span class="act-state">✓ 실행 완료</span>':''}</div>
    <div class="card-h"><h3>${a.title}</h3><p>${a.desc}</p></div>
    <div class="cell">${cellHTML(id)}</div>
    <div class="act-actions"><button type="button" class="btn primary" data-act="run" data-id="${id}">▶ ${done?'다시 실행':'실행'}</button>${a.blanks.length?`<button type="button" class="btn ${chk===true?'ok':''}" data-act="check" data-id="${id}">${chk===true?'완료됨 ✓':'정답 확인'}</button>`:''}</div>
    ${chk!==undefined?`<p class="fb ${chk?'good':'bad'}">${esc(chk?a.msg:'아직 정답과 달라요.\n빨간 칸에 입력한 내용을 다시 확인해 보세요.')}</p>`:''}
    ${out}${a.after?a.after():''}
  </section>`;
}
function quizCard(key){
  const Q=QUIZ[key];
  return card(Q.title,Q.items.map((it,n)=>{const qid=key+n,p=S.quiz[qid],ok=p===it.a;
    return `<div class="quiz-item"><p class="q"><b>${n+1}.</b>${it.q}</p><div class="opts">${it.o.map((o,k)=>`<button type="button" class="opt ${p===k+1?(ok?'right':'wrong'):''}" data-act="quiz" data-q="${qid}" data-v="${k+1}">${CIRC[k]} ${esc(o)}</button>`).join('')}</div>${p?`<p class="fb ${ok?'good':'bad'}">${esc(ok?'정답입니다.\n'+it.e:'정답이 아니에요.\n실행 결과를 다시 확인하고 한 번 더 골라 보세요.')}</p>`:''}</div>`}).join(''),
    {wide:true,cls:'quiz',pre:'<p class="eyebrow">연습문제</p>',sub:Q.intro});
}
function stepResults(i){
  const s=STEPS[i];
  if(s.results)return s.results();
  let h='<div class="cards">';
  s.acts.forEach((id,n)=>{
    h+=actCard(id);
    if(id==='missing'&&S.executed.has('missing'))h+=card(`평균값으로 채운 iris 데이터 <span style="font-weight:400;color:var(--muted);font-size:13px">${RAW.length}행 · 5열 · 결측 0개</span>`,
      irisTable(FILLED,(r,j)=>j===2&&r.filled?'c-imp':'',(r,j)=>j===2&&r.filled?MEAN_STR:r.v[j].toFixed(1)),
      {wide:true,sub:`<span class="key"><i style="background:var(--imp-bg);outline:1px solid var(--imp-ink)"></i>비어 있던 PetalLength를 평균값 ${MEAN_STR}로 채운 칸</span> (${FILLED.filter(r=>r.filled).map(r=>r.i).join(', ')}번 행)`});
    if(id==='outlier'&&S.executed.has('outlier')){
      h+=card(`SepalWidth 분포와 이상치 <span style="font-weight:400;color:var(--muted);font-size:13px">상한선 ${r2(UPPER)} · 하한선 ${r2(LOWER)} · 이상치 ${OUTS.length}개</span>`,
        swChart()+guide('상한선·하한선 계산',dl([['상한선',`Q3 + 1.5 × IQR = ${r2(Q3)} + 1.5 × ${r2(IQR)} = ${r2(UPPER)}`],['하한선',`Q1 - 1.5 × IQR = ${r2(Q1)} - 1.5 × ${r2(IQR)} = ${r2(LOWER)}`],['최댓값',`상한선 안쪽에서 가장 큰 값은 ${Math.max(...SW.filter(v=>!isOut(v))).toFixed(1)}이고, 상자그림의 수염이 여기까지 이어집니다.`],['최솟값',`하한선 안쪽에서 가장 작은 값은 ${Math.min(...SW.filter(v=>!isOut(v))).toFixed(1)}이고, 상자그림의 수염이 여기까지 이어집니다.`],['이상치',`상한선보다 큰 값 ${OUTS.filter(r=>r.v[1]>UPPER).map(r=>r.v[1].toFixed(1)).join(', ')} · 하한선보다 작은 값 ${OUTS.filter(r=>r.v[1]<LOWER).map(r=>r.v[1].toFixed(1)).join(', ')} (모두 ${OUTS.length}개)`]])),
        {wide:true,sub:'SepalWidth 값 150개를 점으로 쌓아 올리고, 그 위에 같은 데이터의 상자그림을 그렸습니다. 빨간 점선 바깥, 빨간 영역에 있는 값이 이상치입니다.'});
      h+=card('SepalWidth 이상치 확인하기',irisTable(FILLED,(r,j)=>j===1&&isOut(r.v[1])?'c-out':j===2&&r.filled?'c-imp':'',(r,j)=>j===2&&r.filled?String(+r.v[2].toFixed(6)):r.v[j].toFixed(1)),
        {wide:true,sub:`<span class="key"><i style="background:var(--out-bg);outline:1px solid var(--out-ink)"></i>SepalWidth가 상한값 ${r2(UPPER)}보다 크거나 하한값 ${r2(LOWER)}보다 작은 이상치</span> 표 안에서 스크롤하면 150개 관측값 전체를 확인할 수 있습니다.`});
    }
  });
  if(s.quiz)h+=quizCard(s.quiz);
  return h+'</div>';
}
function renderRail(){
  $('#rail').innerHTML=STEPS.map((s,i)=>`${GROUPS[i]?`<li class="group">${GROUPS[i]}</li>`:''}<li><button type="button" data-act="go" data-step="${i}" class="${stepDone(i)&&i!==S.ui.step?'done':''}" ${i===S.ui.step?'aria-current="step"':''}><span class="num">${stepDone(i)&&i!==S.ui.step?'✓':i===0?'·':i}</span><span>${s.short}</span></button></li>`).join('');
  const n=S.executed.size,pct=Math.round(n/ACT_IDS.length*100);
  $('#prog').innerHTML=`<div class="prog-top"><span>학습 진행률</span><b>${pct}%</b></div><div class="bar"><i style="width:${pct}%"></i></div><small>${ACT_IDS.length}개 활동 중 ${n}개 실행</small>
    <div class="tools"><button type="button" class="btn" data-act="runall">▶ 위에서부터 모두 실행</button><button type="button" class="btn" data-act="fill">🧑‍🏫 이 단계 정답 채우기</button><button type="button" class="btn" data-act="reset">↻ 다시 시작</button></div>`;
}
function renderFlow(){
  const st=S.ui.step,x=id=>S.executed.has(id);
  const miss=x('missing'),out=x('outlier-drop'),nz=x('normalize'),info=x('info')&&x('describe');
  const stages=[
    {to:0,on:st<=1,d:x('intro'),l:'원본 iris.csv',b:`${RAW.length}행 × 5열`,s:`결측 ${MISS_N}칸 · 품종 3개`},
    {to:2,on:st===2,d:info,l:'특성 분석',b:info?'수치형 4 · 범주형 1':'실행 전',s:'info() · describe()'},
    {to:3,on:st===3,d:miss,l:'결측치 처리',b:miss?'결측 0칸':`결측 ${MISS_N}칸`,s:miss?`평균 ${PL_MEAN.toFixed(2)}로 채움`:'fillna() 실행 전'},
    {to:4,on:st===4,d:out,l:'이상치 처리',b:out?`${KEPT.length}행`:`${RAW.length}행`,s:out?`SepalWidth ${OUTS.length}행 제거`:'IQR 탐지 전'},
    {to:5,on:st===5,d:nz,l:'정규화',b:nz?'0 ~ 1':'원래 단위(cm)',s:nz?'4개 열 Min-Max':'MinMaxScaler 실행 전'}
  ];
  $('#flow').innerHTML=stages.map(g=>`<li><button type="button" class="stage ${g.on?'on':''}" data-act="go" data-step="${g.to}"><span class="st-l">${g.l}${g.d?'<i>✓</i>':''}</span><b class="${g.d||g.to===0?'':'wait'}">${g.b}</b><small>${g.s}</small></button></li>`).join('');
}
function renderStep(){
  const i=S.ui.step,s=STEPS[i];
  S.seen.add(i);
  $('#main').innerHTML=`<header class="step-h"><p class="eyebrow">${i===0?'먼저 알아보기':`STEP ${i} / ${STEPS.length-1}`}</p><h2>${s.title}</h2><p class="goal">${br(s.goal)}</p></header>
  <div class="body">
    <div class="left">
      <div class="concept">${br(s.concept)}</div>
      <div id="results"></div>
      <nav class="pager">${i>0?`<button class="btn" type="button" data-act="go" data-step="${i-1}">← ${STEPS[i-1].short}</button>`:'<span></span>'}${i<STEPS.length-1?`<button class="btn primary" type="button" data-act="go" data-step="${i+1}">${STEPS[i+1].short} →</button>`:'<span></span>'}</nav>
    </div>
    <aside class="code" aria-label="파이썬 코드">
      <div class="code-h"><div class="code-tabs"><button type="button" data-act="tab" data-v="step" aria-pressed="${S.ui.codeTab==='step'}">${i===0?'iris.csv':'이 단계 코드'}</button><button type="button" data-act="tab" data-v="all" aria-pressed="${S.ui.codeTab==='all'}">전체 노트북</button></div><button class="btn" type="button" data-act="copy">복사</button></div>
      <div><pre id="code"></pre><p class="code-foot" id="code-foot"></p></div>
    </aside>
  </div>`;
  refresh();save();
}
function renderCode(){
  $('#code').innerHTML=codeHTML();
  const csv=S.ui.step===0&&S.ui.codeTab==='step';
  $('#code-foot').innerHTML=csv?'복사해서 메모장에 붙여 넣고 iris.csv(UTF-8)로 저장하면 Jupyter에서 그대로 쓸 수 있습니다.':'빈칸에 입력한 내용이 코드에 바로 반영됩니다.<br>노란 칸이 아직 비어 있는 빈칸입니다.';
}
// 문장마다 줄을 바꿔 한 줄에 한 문장씩 보이게 합니다 (…다. / …요. / …요? 뒤의 공백 → 줄바꿈)
const br=h=>h.replace(/(다\.|요\.|요\?) +/g,'$1<br>');
function refresh(){renderRail();renderFlow();$('#results').innerHTML=br(stepResults(S.ui.step));renderCode()}

/* ---------- 실행·채점 ---------- */
function run(id){
  const a=ACTS[id];delete S.err[id];
  for(let k=0;k<a.blanks.length;k++){
    const v=inp(id,k).trim(),ln=a.lines.findIndex(l=>l.includes(`{${k}}`))+1;
    const src=a.lines[ln-1].replace(/\{(\d)\}/g,(_,j)=>inp(id,+j).trim());
    if(!v){S.err[id]=`  File "<cell>", line ${ln}\n    ${src}\n\nSyntaxError: invalid syntax\n\n# 빈칸 ${CIRC[k]}이(가) 비어 있어요.`;S.executed.delete(id);return false}
    if(!blankOk(id,k)){const e=a.blanks[k].err;
      S.err[id]=e?`Traceback (most recent call last):\n  File "<cell>", line ${ln}, in <module>\n    ${src}\n${e[0]}: ${e[1].replace('{v}',v)}`:`# 실행은 되었지만 교과서와 다른 결과가 나옵니다.\n# 빈칸 ${CIRC[k]}에 넣은 '${v}'을(를) 다시 확인해 보세요.`;
      S.executed.delete(id);return false}
  }
  S.executed.add(id);return true;
}
function check(id){S.check[id]=ACTS[id].blanks.every((_,k)=>blankOk(id,k))}

/* ---------- 이벤트 ---------- */
document.addEventListener('input',e=>{
  const el=e.target;if(!el.classList.contains('blank'))return;
  const id=el.dataset.id,k=+el.dataset.k;
  (S.inputs[id]=S.inputs[id]||[])[k]=el.value;
  if(S.check[id]!==undefined){delete S.check[id];const c=el.closest('.act');c.querySelectorAll('input.blank').forEach(x=>x.classList.remove('ok','bad'));c.querySelector('.fb')?.remove();const b=c.querySelector('[data-act="check"]');if(b){b.textContent='정답 확인';b.classList.remove('ok')}}
  renderCode();save();
});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.classList.contains('blank')){e.preventDefault();e.target.closest('.act').querySelector('[data-act="run"]').click()}});
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  const act=b.dataset.act;
  if(act==='go'){S.ui.step=+b.dataset.step;renderStep();$('.step-h').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
  else if(act==='run'){run(b.dataset.id);refresh();save();document.getElementById('act-'+b.dataset.id)?.querySelector('.out')?.scrollIntoView({block:'nearest',behavior:'smooth'})}
  else if(act==='check'){check(b.dataset.id);refresh()}
  else if(act==='quiz'){S.quiz[b.dataset.q]=+b.dataset.v;refresh();save()}
  else if(act==='miss'){S.ui.showMissing=b.dataset.v==='1';refresh();save()}
  else if(act==='runall'){ACT_IDS.forEach(run);refresh();save()}
  else if(act==='fill'){STEPS[S.ui.step].acts.forEach(id=>{S.inputs[id]=ACTS[id].blanks.map(x=>x.a[0]);delete S.check[id]});refresh();save()}
  else if(act==='reset'){S.inputs={};S.executed.clear();S.check={};S.err={};S.quiz={};refresh();save()}
  else if(act==='tab'){S.ui.codeTab=b.dataset.v;b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderCode()}
  else if(act==='copy'){
    const txt=codeText().replace(new RegExp(GAP+'(.)'+GAP,'g'),'___');
    const done=()=>{b.textContent='복사됨';setTimeout(()=>b.textContent='복사',1400)};
    const fallback=()=>{const r=document.createRange();r.selectNodeContents($('#code'));const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='선택됨 → Ctrl+C'};
    try{navigator.clipboard.writeText(txt).then(done,fallback)}catch(_){fallback()}
  }
});
const tip=$('#tip');
document.addEventListener('pointermove',e=>{
  const t=e.target.closest&&e.target.closest('[data-tip]');
  if(!t){tip.hidden=true;return}
  tip.textContent=t.getAttribute('data-tip');tip.hidden=false;
  const r=tip.getBoundingClientRect();let x=e.clientX+14,y=e.clientY+14;
  if(x+r.width>innerWidth-8)x=e.clientX-r.width-14;if(y+r.height>innerHeight-8)y=e.clientY-r.height-14;
  tip.style.left=Math.max(8,x)+'px';tip.style.top=Math.max(8,y)+'px';
});
document.addEventListener('pointerleave',()=>tip.hidden=true);

renderStep();
