"use strict";(self.webpackChunklookbook=self.webpackChunklookbook||[]).push([[225],{9295:(l,p,e)=>{e.d(p,{c:()=>t});var a=e(5879);let t=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#n=this.\u0275cmp=a.Xpm({type:o,selectors:[["app-animated-bg-right"]],decls:4,vars:0,consts:[[1,"animated-bg-right"]],template:function(s,d){1&s&&(a.TgZ(0,"div",0),a._UZ(1,"i")(2,"i")(3,"i"),a.qZA())},styles:[".animated-bg-right[_ngcontent-%COMP%]{position:absolute;right:25%}.animated-bg-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#fff6f6;box-shadow:0 15px 30px #b195e2;bottom:0;position:absolute;height:100px;width:100px;border-radius:100%;opacity:.3;transform:scale(1.3);animation:ripple1 3s linear infinite}.animated-bg-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2){animation:ripple2 3s linear infinite}.animated-bg-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3){animation:ripple3 3s linear infinite}@media only screen and (max-width: 1023px){.animated-bg-right[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width: 1024px) and (max-width: 1279px){.animated-bg-right[_ngcontent-%COMP%]{display:none}}"]})}return o})()},8089:(l,p,e)=>{e.d(p,{x:()=>t});var a=e(5879);let t=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#n=this.\u0275cmp=a.Xpm({type:o,selectors:[["app-animated-bg"]],decls:4,vars:0,consts:[[1,"animated-bg"]],template:function(s,d){1&s&&(a.TgZ(0,"div",0),a._UZ(1,"i")(2,"i")(3,"i"),a.qZA())},styles:[".animated-bg[_ngcontent-%COMP%]{position:relative;top:50px}.animated-bg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#fff6f6;box-shadow:0 15px 30px #f3c4c3;bottom:0;position:absolute;height:100px;width:100px;border-radius:100%;opacity:.3;transform:scale(1.3);animation:ripple1 3s linear infinite}.animated-bg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2){animation:ripple2 3s linear infinite}.animated-bg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3){animation:ripple3 3s linear infinite}"]})}return o})()},2225:(l,p,e)=>{e.r(p),e.d(p,{ProjectModule:()=>M});var a=e(6814),t=e(5879),o=e(9380),m=e(2058),g=e(2296),s=e(1175),d=e(4867),f=e(8089),u=e(9295);function _(n,r){if(1&n&&(t.TgZ(0,"a",10)(1,"mat-icon"),t._uU(2," launch "),t.qZA(),t._uU(3," Live link"),t.qZA()),2&n){const i=t.oxw(2);t.s9C("href",i.projectData.url,t.LSH)}}function x(n,r){if(1&n&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&n){const i=r.$implicit;t.xp6(1),t.hij(" ",i," ")}}function C(n,r){if(1&n&&(t.TgZ(0,"div")(1,"h2",6),t._uU(2,"Roles"),t.qZA(),t.TgZ(3,"mat-chip-set",11),t.YNc(4,x,2,1,"mat-chip",12),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",i.projectData.roles)}}function v(n,r){if(1&n&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&n){const i=r.$implicit;t.xp6(1),t.hij(" ",i," ")}}function P(n,r){if(1&n&&(t.TgZ(0,"div")(1,"h2",6),t._uU(2,"Tech Stack"),t.qZA(),t.TgZ(3,"mat-chip-set",13),t.YNc(4,v,2,1,"mat-chip",12),t.qZA()()),2&n){const i=t.oxw(2);t.xp6(4),t.Q6J("ngForOf",i.projectData.techStack)}}function b(n,r){if(1&n&&(t.TgZ(0,"div",1),t._UZ(1,"app-animated-bg"),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.YNc(4,_,4,1,"a",4),t.qZA(),t._UZ(5,"app-animated-bg-right"),t.TgZ(6,"div",5)(7,"h2",6),t._uU(8,"Project Overview"),t.qZA(),t.TgZ(9,"p",7),t._uU(10),t.qZA(),t._UZ(11,"p",8),t.YNc(12,C,5,1,"div",9),t.YNc(13,P,5,1,"div",9),t.qZA(),t._UZ(14,"app-animated-bg"),t.qZA()),2&n){const i=t.oxw();t.xp6(3),t.s9C("src",i.projectData.image,t.LSH),t.xp6(1),t.Q6J("ngIf",i.projectData.url),t.xp6(6),t.Oqu(i.projectData.shortDescription),t.xp6(1),t.Q6J("innerHTML",i.projectData.description,t.oJD),t.xp6(1),t.Q6J("ngIf",i.projectData.roles),t.xp6(1),t.Q6J("ngIf",i.projectData.techStack)}}let O=(()=>{class n{constructor(i,c){this.sharedService=i,this.route=c,this.data=[],this.projectData={id:0,image:"",name:"",shortDescription:"",url:"",status:""}}ngOnInit(){this.sub=this.route.params.subscribe(i=>{this.id=+i.id}),this.sharedService.getHomePageData().subscribe(i=>{this.projectData=i.portfolioProjectsData.filter(c=>c.id==this.id)[0]})}ngOnDestroy(){this.sub.unsubscribe()}static#t=this.\u0275fac=function(c){return new(c||n)(t.Y36(o.F),t.Y36(m.gz))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-project-details"]],decls:1,vars:1,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"image-wrapper"],["alt","project-image",3,"src"],["class","btn-style","mat-raised-button","","color","primary","target","_blank",3,"href",4,"ngIf"],[1,"text-wrapper"],[1,"title"],[1,"desc"],[1,"desc",3,"innerHTML"],[4,"ngIf"],["mat-raised-button","","color","primary","target","_blank",1,"btn-style",3,"href"],["aria-label","Dog selection",1,"desc"],[4,"ngFor","ngForOf"],["aria-label","Dog selection",1,"desc-chips"]],template:function(c,D){1&c&&t.YNc(0,b,15,6,"div",0),2&c&&t.Q6J("ngIf",D.projectData)},dependencies:[a.sg,a.O5,g.zs,s.Hw,d.HS,d.J4,f.x,u.c],styles:[".wrapper[_ngcontent-%COMP%]{margin:0% 25%}.image-wrapper[_ngcontent-%COMP%]{text-align:center}.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;padding-bottom:2rem}.text-wrapper[_ngcontent-%COMP%]{padding:5% 0%}.title[_ngcontent-%COMP%]{font-weight:900;font-size:calc(24px + 3 * (100vw - 300px) / 1620);padding:7% 0% 1%}.desc[_ngcontent-%COMP%]{font-size:calc(16px + 3 * (100vw - 300px) / 1620);padding:1% 0%}.desc-chips[_ngcontent-%COMP%]{padding:0% 0% 10%}@media only screen and (max-width: 1023px){.wrapper[_ngcontent-%COMP%]{margin:0%}.text-wrapper[_ngcontent-%COMP%]{padding:2rem}}"]})}return n})();var h=e(563);const Z=[{path:":id",component:O}];let M=(()=>{class n{static#t=this.\u0275fac=function(c){return new(c||n)};static#n=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[a.ez,h.K,m.Bz.forChild(Z),d.Hi,m.Bz,h.K,d.Hi]})}return n})()}}]);