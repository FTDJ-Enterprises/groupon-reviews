(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a.n(r);var o=e=>l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:e.fill?"gold":"#a5a8ab"},l.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}));var s=()=>l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),l.a.createElement("polyline",{points:"22 4 12 14.01 9 11.01"})),c=a(1);const m=c.default.p`
  font-family: "Open Sans", sans-serif;
  font-weight: ${e=>e.bold?"bold":"normal"};
  font-size: 14px;
  ${e=>e.margin?"margin-left: 15px":null};
  color: ${e=>e.color?e.color:"black"};
`,u=c.default.div`
  padding: 10px 5px 0px 0px;
`,d=c.default.div`
  display: flex;
  flex-direction: row;
  ${e=>e.firstLine?"justify-content: space-between":null}
`;var p=e=>{let t=[],a=e.review.star,n=5-a;for(let e=0;e<a;e++)t.push(l.a.createElement(o,{fill:!0,key:e}));for(let e=0;e<n;e++)t.push(l.a.createElement(o,{key:e+a}));return l.a.createElement("div",null,l.a.createElement(d,{firstLine:!0,className:"firstLine"},l.a.createElement(d,null,l.a.createElement(u,null,t),l.a.createElement(m,{bold:!0},e.review.name),e.review.verified?l.a.createElement(m,{margin:!0,color:"#a5a8ab"},l.a.createElement(s,null)," Verified Purchaser"):null),l.a.createElement(m,null,e.review.date.substring(4,15))),l.a.createElement(m,null,e.review.text))};var f=e=>l.a.createElement("div",null,e.reviews.map(e=>l.a.createElement(p,{key:e.id,review:e})));var h=e=>l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 35 35"},l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"half_grad"},l.a.createElement("stop",{offset:"50%",stopColor:"gold"}),l.a.createElement("stop",{offset:"50%",stopColor:"#a5a8ab",stopOpacity:"1"}))),l.a.createElement("path",{d:"M20.388,10.918L32,12.118l-8.735,7.749L25.914, 31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0, 12.118l11.547-1.2L16.026,0.6L20.388,10.918z",fill:"url(#half_grad)"}));function v(e){const t=e.reduce((e,t)=>e+t.star,0);return Math.round(t/e.length*10)/10}var w=e=>{let[t,a]=function(e){let t=Math.trunc(e);return[t,Math.trunc(Math.round(10*(e-t)))]}(e.avgReview);let n=[];[8,9].includes(a)&&t++;for(let e=0;e<t;e++)n.push(l.a.createElement(o,{fill:!0,key:e}));for([7,6,5,4,3].includes(a)&&n.push(l.a.createElement(h,{key:99}));n.length<5;)n.push(l.a.createElement(o,{key:n.length+1}));return n};const E=c.default.h1`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0px;
`,g=c.default.div`
  display: flex;
  flex-direction: row;
`,x=c.default.div`
  padding: 10px 5px 0px 0px;
`,y=c.default.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin-left: 15px;
  color: #0076d6;
`;class k extends l.a.Component{constructor(){super(),this.state={reviews:[]}}componentDidMount(){let e=Math.floor(100*Math.random());fetch(`http://localhost:3001/api/${e}/reviews/`).then(e=>e.json()).then(e=>this.setState({reviews:e})).catch(e=>console.log(e))}render(){const{reviews:e}=this.state;return l.a.createElement("div",null,l.a.createElement(E,null,"Customer Reviews"),l.a.createElement(g,null,e.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null,l.a.createElement(w,{avgReview:v(e)})),l.a.createElement(y,null,v(e)+` (${e.length} ratings)`)):l.a.createElement("p",null,"There are no reviews...")),l.a.createElement(f,{reviews:this.state.reviews}))}}var b=k;i.a.render(l.a.createElement(b,null),document.getElementById("reviews"))}},[[20,1]]]);