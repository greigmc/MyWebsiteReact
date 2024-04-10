"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2347],{2347:(i,n,t)=>{t.d(n,{LinkInstance:()=>o});var e=t(5900);function s(i,n){const t=((s=i.map((i=>i.id))).sort(((i,n)=>i-n)),s.join("_"));var s;let o=n.get(t);return void 0===o&&(o=(0,e.sZ)(),n.set(t,o)),o}class o{constructor(i){this.container=i,this._drawLinkLine=(i,n)=>{const t=i.options.links;if(null===t||void 0===t||!t.enable)return;const s=this.container,o=s.actualOptions,l=n.destination,a=i.getPosition(),r=l.getPosition();let c=n.opacity;s.canvas.draw((n=>{var d,k,p;let u;const h=null===(d=i.options.twinkle)||void 0===d?void 0:d.lines;if(null!==h&&void 0!==h&&h.enable){const i=h.frequency,n=(0,e.tX)(h.color);(0,e.sZ)()<i&&n&&(u=n,c=(0,e.Gu)(h.opacity))}if(!u){const n=void 0!==t.id?s.particles.linksColors.get(t.id):s.particles.linksColor;u=(0,e.BE)(i,l,n)}if(!u)return;const y=null!==(k=i.retina.linksWidth)&&void 0!==k?k:0,g=null!==(p=i.retina.linksDistance)&&void 0!==p?p:0,{backgroundMask:f}=o;!function(i){let n=!1;const{begin:t,end:s,maxDistance:o,context:l,canvasSize:a,width:r,backgroundMask:c,colorLine:d,opacity:k,links:p}=i;if((0,e.Sp)(t,s)<=o)(0,e.pS)(l,t,s),n=!0;else if(p.warp){let i,r;const c={x:s.x-a.width,y:s.y},d=(0,e.oW)(t,c);if(d.distance<=o){const n=t.y-d.dy/d.dx*t.x;i={x:0,y:n},r={x:a.width,y:n}}else{const n={x:s.x,y:s.y-a.height},l=(0,e.oW)(t,n);if(l.distance<=o){const n=-(t.y-l.dy/l.dx*t.x)/(l.dy/l.dx);i={x:n,y:0},r={x:n,y:a.height}}else{const n={x:s.x-a.width,y:s.y-a.height},l=(0,e.oW)(t,n);if(l.distance<=o){const n=t.y-l.dy/l.dx*t.x;i={x:-n/(l.dy/l.dx),y:n},r={x:i.x+a.width,y:i.y+a.height}}}}i&&r&&((0,e.pS)(l,t,i),(0,e.pS)(l,s,r),n=!0)}if(!n)return;l.lineWidth=r,c.enable&&(l.globalCompositeOperation=c.composite),l.strokeStyle=(0,e.iz)(d,k);const{shadow:u}=p;if(u.enable){const i=(0,e.tX)(u.color);i&&(l.shadowBlur=u.blur,l.shadowColor=(0,e.iz)(i))}l.stroke()}({context:n,width:y,begin:a,end:r,maxDistance:g,canvasSize:s.canvas.size,links:t,backgroundMask:f,colorLine:u,opacity:c})}))},this._drawLinkTriangle=(i,n,t)=>{var s;const o=i.options.links;if(null===o||void 0===o||!o.enable)return;const l=o.triangles;if(!l.enable)return;const a=this.container,r=a.actualOptions,c=n.destination,d=t.destination,k=null!==(s=l.opacity)&&void 0!==s?s:.5*(n.opacity+t.opacity);k<=0||a.canvas.draw((n=>{var t;const s=i.getPosition(),p=c.getPosition(),u=d.getPosition(),h=null!==(t=i.retina.linksDistance)&&void 0!==t?t:0;if((0,e.Sp)(s,p)>h||(0,e.Sp)(u,p)>h||(0,e.Sp)(u,s)>h)return;let y=(0,e.tX)(l.color);if(!y){const n=void 0!==o.id?a.particles.linksColors.get(o.id):a.particles.linksColor;y=(0,e.BE)(i,c,n)}y&&function(i){const{context:n,pos1:t,pos2:s,pos3:o,backgroundMask:l,colorTriangle:a,opacityTriangle:r}=i;!function(i,n,t,e){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath()}(n,t,s,o),l.enable&&(n.globalCompositeOperation=l.composite),n.fillStyle=(0,e.iz)(a,r),n.fill()}({context:n,pos1:s,pos2:p,pos3:u,backgroundMask:r.backgroundMask,colorTriangle:y,opacityTriangle:k})}))},this._drawTriangles=(i,n,t,e)=>{var s,o,l;const a=t.destination;if(null===(s=i.links)||void 0===s||!s.triangles.enable||null===(o=a.options.links)||void 0===o||!o.triangles.enable)return;const r=null===(l=a.links)||void 0===l?void 0:l.filter((i=>{const n=this._getLinkFrequency(a,i.destination);return a.options.links&&n<=a.options.links.frequency&&e.findIndex((n=>n.destination===i.destination))>=0}));if(null!==r&&void 0!==r&&r.length)for(const c of r){const e=c.destination;this._getTriangleFrequency(n,a,e)>i.links.triangles.frequency||this._drawLinkTriangle(n,t,c)}},this._getLinkFrequency=(i,n)=>s([i,n],this._freqs.links),this._getTriangleFrequency=(i,n,t)=>s([i,n,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}async drawParticle(i,n){const{links:t,options:e}=n;if(null===t||void 0===t||!t.length)return;const s=t.filter((i=>e.links&&(e.links.frequency>=1||this._getLinkFrequency(n,i.destination)<=e.links.frequency)));for(const l of s){var o;this._drawTriangles(e,n,l,s),l.opacity>0&&(null!==(o=n.retina.linksWidth)&&void 0!==o?o:0)>0&&this._drawLinkLine(n,l)}await Promise.resolve()}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:t}=i,{distance:e,width:s}=i.options.links;t.linksDistance=e*n,t.linksWidth=s*n}particleDestroyed(i){i.links=[]}}}}]);
//# sourceMappingURL=2347.7bddf1d8.chunk.js.map