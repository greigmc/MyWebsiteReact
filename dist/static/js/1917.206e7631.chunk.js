"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1917],{1917:(t,i,o)=>{o.d(i,{bounceHorizontal:()=>s,bounceVertical:()=>r});var e=o(5900);const n=0,c=0;function s(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"left"!==t.direction&&"right"!==t.direction)return;t.bounds.right<c&&"left"===t.direction?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&"right"===t.direction&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const i=t.particle.velocity.x;let o=!1;if("right"===t.direction&&t.bounds.right>=t.canvasSize.width&&i>n||"left"===t.direction&&t.bounds.left<=c&&i<n){const i=(0,e.Gu)(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-i,o=!0}if(!o)return;const s=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&"right"===t.direction?t.particle.position.x=t.canvasSize.width-s:t.bounds.left<=c&&"left"===t.direction&&(t.particle.position.x=s),"split"===t.outMode&&t.particle.destroy()}function r(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"bottom"!==t.direction&&"top"!==t.direction)return;t.bounds.bottom<c&&"top"===t.direction?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&"bottom"===t.direction&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const i=t.particle.velocity.y;let o=!1;if("bottom"===t.direction&&t.bounds.bottom>=t.canvasSize.height&&i>n||"top"===t.direction&&t.bounds.top<=c&&i<n){const i=(0,e.Gu)(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-i,o=!0}if(!o)return;const s=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&"bottom"===t.direction?t.particle.position.y=t.canvasSize.height-s:t.bounds.top<=c&&"top"===t.direction&&(t.particle.position.y=s),"split"===t.outMode&&t.particle.destroy()}}}]);
//# sourceMappingURL=1917.206e7631.chunk.js.map