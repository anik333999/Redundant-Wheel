var gdjs;(function(g){class R{constructor(s){this._debugDraw=null;this._debugDrawContainer=null;this._instanceContainer=s,this._debugDrawRenderedObjectsPoints={},this._debugDraw=null}getRendererObject(){return this._debugDrawContainer}renderDebugDraw(s,h,_,P){const p=this._instanceContainer.getRenderer().getRendererObject();(!this._debugDraw||!this._debugDrawContainer)&&(this._debugDrawContainer=new PIXI.Container,this._debugDraw=new PIXI.Graphics,this._debugDrawContainer.addChild(this._debugDraw),p&&p.addChild(this._debugDrawContainer));const t=this._debugDraw;for(let i in this._debugDrawRenderedObjectsPoints)this._debugDrawRenderedObjectsPoints[i].wasRendered=!1;const u=(i,e,n,c,r)=>{t.line.color=n,t.fill.color=n,t.drawCircle(c,r,3),_&&(i[e]||(i[e]=new PIXI.Text(e,{fill:n,fontSize:12}),this._debugDrawContainer.addChild(i[e])),i[e].position.set(c,r))};t.clear(),t.beginFill(),t.alpha=.8,t.lineStyle(2,255,1);const d=[0,0];for(let i=0;i<s.length;i++){const e=s[i],n=this._instanceContainer.getLayer(e.getLayer());if((!e.isVisible()||!n.isVisible())&&!h||!e.getRendererObject())continue;const r=e.getAABB();t.fill.alpha=.2,t.line.color=7835368,t.fill.color=7835368;const o=[];o.push.apply(o,n.applyLayerTransformation(r.min[0],r.min[1],0,d)),o.push.apply(o,n.applyLayerTransformation(r.max[0],r.min[1],0,d)),o.push.apply(o,n.applyLayerTransformation(r.max[0],r.max[1],0,d)),o.push.apply(o,n.applyLayerTransformation(r.min[0],r.max[1],0,d)),t.drawPolygon(o)}for(let i=0;i<s.length;i++){const e=s[i],n=this._instanceContainer.getLayer(e.getLayer());if((!e.isVisible()||!n.isVisible())&&!h||!e.getRendererObject())continue;const r=e.id;this._debugDrawRenderedObjectsPoints[r]||(this._debugDrawRenderedObjectsPoints[r]={wasRendered:!0,points:{}});const o=this._debugDrawRenderedObjectsPoints[r];o.wasRendered=!0;const w=e.getHitBoxes();for(let a=0;a<w.length;a++){const l=[];w[a].vertices.forEach(b=>{b=n.applyLayerTransformation(b[0],b[1],0,d),l.push(b[0]),l.push(b[1])}),t.fill.alpha=0,t.line.alpha=.5,t.line.color=16711680,t.drawPolygon(l)}t.fill.alpha=.3;const D=n.applyLayerTransformation(e.getCenterXInScene(),e.getCenterYInScene(),0,d);u(o.points,"Center",16776960,D[0],D[1]);const f=n.applyLayerTransformation(e.getX(),e.getY(),0,d);if(u(o.points,"Position",16711680,f[0],f[1]),e instanceof g.SpriteRuntimeObject){let a=e.getPointPosition("origin");(Math.abs(a[0]-f[0])>=1||Math.abs(a[1]-f[1])>=1)&&(a=n.applyLayerTransformation(a[0],a[1],0,d),u(o.points,"Origin",16711680,a[0],a[1]))}if(P&&e instanceof g.SpriteRuntimeObject){if(!e._animationFrame)continue;for(const a in e._animationFrame.points.items){let l=e.getPointPosition(a);l=n.applyLayerTransformation(l[0],l[1],0,d),u(o.points,a,255,l[0],l[1])}}}for(const i in this._debugDrawRenderedObjectsPoints){const e=this._debugDrawRenderedObjectsPoints[i];if(e.wasRendered)continue;const n=e.points;for(const c in n)this._debugDrawContainer.removeChild(n[c])}t.endFill()}clearDebugDraw(){if(this._debugDraw&&this._debugDraw.clear(),this._debugDrawContainer){this._debugDrawContainer.destroy({children:!0});const s=this._instanceContainer.getRenderer().getRendererObject();s&&s.removeChild(this._debugDrawContainer)}this._debugDraw=null,this._debugDrawContainer=null,this._debugDrawRenderedObjectsPoints={}}}g.DebuggerPixiRenderer=R,g.DebuggerRenderer=g.DebuggerPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=DebuggerPixiRenderer.js.map
