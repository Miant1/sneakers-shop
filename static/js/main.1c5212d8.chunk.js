(this["webpackJsonpreact-sneaker"]=this["webpackJsonpreact-sneaker"]||[]).push([[0],{16:function(e,t,a){e.exports={item:"Card_item__q7lYI",favorite:"Card_favorite__1nLJt",like:"Card_like__dmbdh",mainImg:"Card_mainImg__3GfzV",info:"Card_info__31Ibl",priceAndAdd:"Card_priceAndAdd__sdMVZ",price:"Card_price__FQshC",addBtn:"Card_addBtn__2QPqg"}},18:function(e,t,a){e.exports={headerWrapper:"Header_headerWrapper__3c7PT",headerLeft:"Header_headerLeft__2npg-",logo:"Header_logo__2gAbO",logoWrapper:"Header_logoWrapper__1TkNt",logoName:"Header_logoName__3WT2-",headerRight:"Header_headerRight__1dc9e",cart:"Header_cart__2NpQc"}},22:function(e,t,a){e.exports={infoBlock:"InfoCart_infoBlock__1iZ42",title:"InfoCart_title__3VSmj",content:"InfoCart_content__eERXS",comeBack:"InfoCart_comeBack__355VN"}},28:function(e,t,a){e.exports={wrapper:"infoPages_wrapper__1y2Y1",comeBack:"infoPages_comeBack__1OU8P"}},38:function(e,t,a){e.exports={app:"App_app__2ziFi"}},45:function(e,t,a){},5:function(e,t,a){e.exports={contentWrapper:"Pages_contentWrapper__2fIXt",titleWrapper:"Pages_titleWrapper__1t98T",title:"Pages_title__R01FR",search:"Pages_search__1ekW1",searchIcon:"Pages_searchIcon__1XrWi",closeIcon:"Pages_closeIcon__2YPG-",sneakers:"Pages_sneakers__1S1Fx"}},6:function(e,t,a){e.exports={drawerWrapper:"Drawer_drawerWrapper__2Uhnl",drawer:"Drawer_drawer__3Kr_H",header:"Drawer_header__1Mt_9",title:"Drawer_title__2IYBm",close:"Drawer_close__2-giV",inner:"Drawer_inner__wVlQF",item:"Drawer_item__2zvKd",photo:"Drawer_photo__2lM_f",info:"Drawer_info__2taDe",name:"Drawer_name__3DAGM",price:"Drawer_price__2V4Uo",cancel:"Drawer_cancel__3hRSK",footer:"Drawer_footer__1CG8G",sum:"Drawer_sum__2dwjv",tax:"Drawer_tax__2hHc0",checkout:"Drawer_checkout__2f2G7",drawerWrapperVis:"Drawer_drawerWrapperVis__2F4Jv"}},74:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(37),s=a.n(n),i=a(13),o=(a(45),a(14)),d=a(15),l=a(9),j=a.n(l),b=a(17),p=a(4),u=a(38),m=a.n(u),f=a(2),h=a(18),O=a.n(h),x=Object(c.createContext)({}),_=function(){var e=Object(c.useContext)(x),t=e.cartItems,a=e.setCartItems,r=t.reduce((function(e,t){return Number(t.price)+Number(e)}),0);return{cartItems:t,setCartItems:a,totalPrice:r}},v=a(0),g=function(e){var t=e.onOpenCart,a=_().totalPrice;return Object(v.jsxs)("div",{className:O.a.headerWrapper,children:[Object(v.jsx)("div",{className:O.a.headerLeft,children:Object(v.jsxs)(i.b,{to:"/",className:O.a.logoWrapper,children:[Object(v.jsx)("img",{className:O.a.logo,src:"img/logo.png",alt:"logo"}),Object(v.jsxs)("div",{className:O.a.logoName,children:[Object(v.jsx)("h2",{children:"sneakers shop"}),Object(v.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(v.jsxs)("div",{className:O.a.headerRight,children:[Object(v.jsxs)("div",{className:O.a.cart,onClick:t,children:[Object(v.jsx)("i",{className:"fas fa-shopping-cart"}),Object(v.jsxs)("span",{children:[a," \u0433\u0440\u043d"]})]}),Object(v.jsx)(i.b,{to:"/favorite",children:Object(v.jsx)("i",{className:"fas fa-heart"})}),Object(v.jsx)(i.b,{to:"/orders",children:Object(v.jsx)("i",{className:"fas fa-user-circle"})})]})]})},N=a(6),k=a.n(N),C=a(22),w=a.n(C),I=function(e){var t=e.title,a=e.description,r=e.image,n=e.setIsOrderComplete,s=Object(c.useContext)(x).onCloseCart;return Object(v.jsxs)("div",{className:w.a.infoBlock,children:[Object(v.jsx)("h3",{className:w.a.title,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(v.jsxs)("div",{className:w.a.content,children:[Object(v.jsx)("img",{src:r,alt:"empty-cart"}),Object(v.jsx)("h3",{children:t}),Object(v.jsx)("p",{children:a}),Object(v.jsxs)("button",{className:w.a.comeBack,onClick:function(){s(),setTimeout((function(){n(!1)}),500)},children:[Object(v.jsx)("i",{className:"fas fa-arrow-left"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})]})},y=a(7),W=a.n(y),A=function(e){var t=e.onCloseCart,a=e.items,r=e.onRemove,n=e.opened,s=Object(c.useState)(!1),i=Object(p.a)(s,2),o=i[0],d=i[1],l=Object(c.useState)(null),u=Object(p.a)(l,2),m=u[0],f=u[1],h=Object(c.useState)(!1),O=Object(p.a)(h,2),x=O[0],g=O[1],N=_(),C=N.cartItems,w=N.setCartItems,y=N.totalPrice,A=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,W.a.post("https://60eecc2feb4c0a0017bf462d.mockapi.io/orders",{items:C});case 4:t=e.sent,a=t.data,f(a.id),d(!0),w([]),c=0;case 10:if(!(c<C.length)){e.next=17;break}return r=C[c],e.next=14,W.a.delete("https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/".concat(r.id));case 14:c++,e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 :(");case 22:g(!1);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"".concat(k.a.drawerWrapper," ").concat(n?k.a.drawerWrapperVis:""),children:Object(v.jsx)("div",{className:k.a.drawer,children:a.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:k.a.header,children:[Object(v.jsx)("h3",{className:k.a.title,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(v.jsx)("img",{className:k.a.close,src:"img/close-icon.svg",alt:"close",onClick:t})]}),Object(v.jsx)("div",{className:k.a.inner,children:a.map((function(e,t){return Object(v.jsxs)("div",{className:k.a.item,children:[Object(v.jsx)("div",{className:k.a.photo,style:{backgroundImage:"url(".concat(e.imageUrl,")")}}),Object(v.jsxs)("div",{className:k.a.info,children:[Object(v.jsx)("p",{className:k.a.name,children:e.title}),Object(v.jsxs)("span",{className:k.a.price,children:[e.price," \u0433\u0440\u043d."]})]}),Object(v.jsx)("img",{className:k.a.cancel,onClick:function(){return r(e.id)},src:"img/close-icon.svg",alt:"close"})]},t)}))}),Object(v.jsxs)("div",{className:k.a.footer,children:[Object(v.jsxs)("div",{className:k.a.sum,children:[Object(v.jsx)("p",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(v.jsx)("div",{}),Object(v.jsxs)("span",{children:[y," \u0433\u0440\u043d."]})]}),Object(v.jsxs)("div",{className:k.a.tax,children:[Object(v.jsx)("p",{children:"\u041d\u0430\u043b\u043e\u0433 5%: "}),Object(v.jsx)("div",{}),Object(v.jsxs)("span",{children:[Math.round(.05*y)," \u0433\u0440\u043d."]})]}),Object(v.jsxs)("button",{disabled:x,onClick:A,className:k.a.checkout,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(v.jsx)("i",{className:"fas fa-arrow-right"})]})]})]}):Object(v.jsx)(I,{title:o?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:o?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(m," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:o?"/img/order-done.png":"/img/empty-cart.png",setIsOrderComplete:d})})})},D=a(5),P=a.n(D),S=a(16),F=a.n(S),T=a(40),B=function(e){var t=e.id,a=e.title,r=e.imageUrl,n=e.price,s=e.onAddToCart,i=e.onClickFavorite,o=e.favorited,d=void 0!==o&&o,l=e.loading,j=Object(c.useState)(d),b=Object(p.a)(j,2),u=b[0],m=b[1],f=Object(c.useContext)(x).isItemAdded,h={id:t,parentId:t,title:a,price:n,imageUrl:r};return Object(v.jsx)("div",{className:F.a.item,children:l?Object(v.jsxs)(T.a,{speed:2,width:210,height:260,viewBox:"0 0 210 260",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(v.jsx)("rect",{x:"0",y:"15",rx:"10",ry:"10",width:"150",height:"91"}),Object(v.jsx)("rect",{x:"0",y:"122",rx:"3",ry:"3",width:"150",height:"15"}),Object(v.jsx)("rect",{x:"0",y:"141",rx:"3",ry:"3",width:"93",height:"15"}),Object(v.jsx)("rect",{x:"0",y:"178",rx:"8",ry:"8",width:"80",height:"24"}),Object(v.jsx)("rect",{x:"118",y:"170",rx:"8",ry:"8",width:"32",height:"32"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:F.a.favorite,children:i&&Object(v.jsx)("img",{className:F.a.like,src:u?"img/liked-icon.svg":"img/unliked-icon.svg",alt:"unliked",onClick:function(){m(!u),i(h)}})}),Object(v.jsx)("img",{className:F.a.mainImg,src:r,alt:"sneaker"}),Object(v.jsx)("p",{className:F.a.info,children:a}),Object(v.jsxs)("div",{className:F.a.priceAndAdd,children:[Object(v.jsxs)("div",{className:F.a.price,children:[Object(v.jsx)("p",{children:"\u0446\u0435\u043d\u0430:"}),Object(v.jsxs)("span",{children:[n," \u0433\u0440\u043d."]})]}),s&&Object(v.jsx)("img",{className:F.a.addBtn,onClick:function(){s(h)},src:f(t)?"img/added-icon.svg":"img/add-icon.svg",alt:"add"})]})]})})},V=function(e){var t=e.items,a=e.onAddToCart,r=e.onAddToFavorite,n=(e.cartItems,e.isLoading),s=Object(c.useState)(""),i=Object(p.a)(s,2),l=i[0],j=i[1];return Object(v.jsxs)("div",{className:P.a.contentWrapper,children:[Object(v.jsxs)("div",{className:P.a.titleWrapper,children:[Object(v.jsx)("h1",{className:P.a.title,children:l?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u043c\u0435: '".concat(l,"'"):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(v.jsxs)("div",{className:P.a.search,children:[Object(v.jsx)("input",{onChange:function(e){j(e.target.value)},type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:l}),Object(v.jsx)("i",{className:"fas fa-search",id:P.a.searchIcon}),l?Object(v.jsx)("i",{className:"fas fa-times",onClick:function(){j("")},id:P.a.closeIcon}):null]})]}),Object(v.jsx)("div",{className:P.a.sneakers,children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())}));return(n?Object(d.a)(Array(10)):e).map((function(e,t){return Object(v.jsx)(B,Object(o.a)({onClickFavorite:function(e){return r(e)},onAddToCart:function(e){return a(e)},loading:n},e),t)}))}()})]})},H=a(28),R=a.n(H),U=function(e){var t=e.imgUrl,a=e.title,c=e.info;return Object(v.jsxs)("div",{className:R.a.wrapper,children:[Object(v.jsx)("img",{src:t,alt:"emotion"}),Object(v.jsx)("h3",{children:a}),Object(v.jsx)("p",{children:c}),Object(v.jsxs)(i.b,{to:"/",className:R.a.comeBack,onClick:function(){},children:[Object(v.jsx)("i",{className:"fas fa-arrow-left"}),Object(v.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})]})},L=function(){var e=Object(c.useContext)(x),t=e.favoriteItems,a=e.onAddToFavorite,r=e.onAddToCart;return Object(v.jsx)("div",{className:P.a.contentWrapper,children:t.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:P.a.titleWrapper,children:Object(v.jsx)("h1",{className:P.a.title,children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(v.jsx)("div",{className:P.a.sneakers,children:t.map((function(e){return Object(v.jsx)(B,Object(o.a)({onClickFavorite:function(e){return a(e)},onAddToCart:function(e){return r(e)},favorited:!0},e),e.id)}))})]}):Object(v.jsx)(U,{imgUrl:"img/nofavorite-icon.png",title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :(",info:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})},G=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!0),s=Object(p.a)(n,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){try{Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://60eecc2feb4c0a0017bf462d.mockapi.io/orders");case 2:t=e.sent,a=t.data,r(a.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.items))}),[])),l(!1);case 6:case"end":return e.stop()}}),e)})))()}catch(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e)}}),[]),console.log(a),Object(v.jsxs)("div",{className:P.a.contentWrapper,children:[Object(v.jsx)("div",{className:P.a.titleWrapper,children:Object(v.jsx)("h1",{className:P.a.title,children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),a.length>0?Object(v.jsx)("div",{className:P.a.sneakers,children:(i?Object(d.a)(Array(10)):a).map((function(e,t){return Object(v.jsx)(B,Object(o.a)({loading:i},e),t)}))}):Object(v.jsx)(U,{imgUrl:"img/noorders-icon.png",title:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 :(",info:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u0430\u0437\u043e\u0432."})]})};var M=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),s=Object(p.a)(n,2),i=s[0],l=s[1],u=Object(c.useState)([]),h=Object(p.a)(u,2),O=h[0],_=h[1],N=Object(c.useState)([]),k=Object(p.a)(N,2),C=k[0],w=k[1],I=Object(c.useState)(!0),y=Object(p.a)(I,2),D=y[0],P=y[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,a,c,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([W.a.get("https://60eecc2feb4c0a0017bf462d.mockapi.io/cart"),W.a.get("https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite"),W.a.get("https://60eecc2feb4c0a0017bf462d.mockapi.io/items")]);case 3:t=e.sent,a=Object(p.a)(t,3),c=a[0],n=a[1],s=a[2],P(!1),_(c.data),w(n.data),r(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=O.find((function(e){return Number(e.parentId)===Number(t.id)})),e.prev=1,!a){e.next=8;break}return _(O.filter((function(e){return Number(e.parentId)!==Number(t.id)}))),e.next=6,W.a.delete("https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/".concat(a.id));case 6:e.next=14;break;case 8:return _([].concat(Object(d.a)(O),[t])),e.next=11,W.a.post("https://60eecc2feb4c0a0017bf462d.mockapi.io/cart",t);case 11:c=e.sent,r=c.data,_((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(o.a)(Object(o.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!C.find((function(e){return e.id===t.id}))){e.next=6;break}W.a.delete("https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite/".concat(t.id)),w(C.filter((function(e){return Number(e.id)!==Number(t.id)}))),e.next=11;break;case 6:return e.next=8,W.a.post("https://60eecc2feb4c0a0017bf462d.mockapi.io/favorite",t);case 8:a=e.sent,c=a.data,w([].concat(Object(d.a)(C),[c]));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){l(!i)};return Object(v.jsx)(x.Provider,{value:{items:a,cartItems:O,favoriteItems:C,isItemAdded:function(e){return O.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToCart:S,onAddToFavorite:F,onCloseCart:T,setCartItems:_},children:Object(v.jsxs)("div",{className:m.a.app,children:[Object(v.jsx)(A,{onCloseCart:T,items:O,onRemove:function(e){try{_(O.filter((function(t){return Number(t.id)!==Number(e)}))),W.a.delete("https://60eecc2feb4c0a0017bf462d.mockapi.io/cart/".concat(e))}catch(t){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0441 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:i}),Object(v.jsx)(g,{onOpenCart:function(){l(!i)}}),Object(v.jsx)(f.a,{path:"",exact:!0,children:Object(v.jsx)(V,{onAddToCart:S,onAddToFavorite:F,items:a,cartItems:O,isLoading:D})}),Object(v.jsx)(f.a,{path:"favorite",children:Object(v.jsx)(L,{})}),Object(v.jsx)(f.a,{path:"orders",children:Object(v.jsx)(G,{})})]})})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(i.a,{children:Object(v.jsx)(M,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1c5212d8.chunk.js.map