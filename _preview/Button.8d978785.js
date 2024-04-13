import{d as ut,r as y,n as ct,o as dt,a as g,c as w,s as Ae,b as A,i as S,t as $,e as H,w as q,v as De,x as Me,y as Fe,h as Ue,F as pt,A as ve,B as me,m as z,C as vt,j as mt}from"./entry.bcc9fae7.js";import{m as de,A as ft,B as yt,C as Y,w as $e}from"./helpers.7602a90c.js";import{_ as ht}from"./MoonLoader.vue.7fe6630b.js";import{a as _t,b,E as K,c as gt}from"./index.053adc9b.js";import{t as bt,f as Pt}from"./funnel_event_helper.35b1096b.js";import{d as Q,e as ee,h as te,j as wt}from"./Attributions.d5135362.js";import{F as Be}from"./FunnelServices.57c717c2.js";import{P as B,O as St}from"./PaymentServices.7cf2e745.js";import{c as It}from"./orderform_helpers.cf5767f1.js";import{u as Et}from"./index.cca9defc.js";import{P as V,N as Ve,A as We}from"./HLConst.dfc90e13.js";import"./index.01cff31b.js";import"./HLImage.vue.e6cc7391.js";import"./client-only.ec35b5aa.js";import"./HtmlPreview.vue.0eb24488.js";import"./currency_helper.0e2fcc1c.js";var fe={};Object.defineProperty(fe,"__esModule",{value:!0});function re(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?re=function(t){return typeof t}:re=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(s)}var He="https://js.stripe.com/v3",xt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,je="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Tt=function(){for(var t=document.querySelectorAll('script[src^="'.concat(He,'"]')),a=0;a<t.length;a++){var c=t[a];if(xt.test(c.src))return c}return null},kt=function(t){var a=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",c=document.createElement("script");c.src="".concat(He).concat(a);var p=document.head||document.body;if(!p)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return p.appendChild(c),c},Ot=function(t,a){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:a})},ae=null,Lt=function(t){return ae!==null||(ae=new Promise(function(a,c){if(typeof window>"u"||typeof document>"u"){a(null);return}if(window.Stripe&&t&&console.warn(je),window.Stripe){a(window.Stripe);return}try{var p=Tt();p&&t?console.warn(je):p||(p=kt(t)),p.addEventListener("load",function(){window.Stripe?a(window.Stripe):c(new Error("Stripe.js not available"))}),p.addEventListener("error",function(){c(new Error("Failed to load Stripe.js"))})}catch(E){c(E);return}})),ae},Rt=function(t,a,c){if(t===null)return null;var p=t.apply(void 0,a);return Ot(p,c),p},Ge=function(t){var a=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(t),`
`);if(t===null||re(t)!=="object")throw new Error(a);if(Object.keys(t).length===1&&typeof t.advancedFraudSignals=="boolean")return t;throw new Error(a)},ne,pe=!1,qe=function(){for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];pe=!0;var p=Date.now();return Lt(ne).then(function(E){return Rt(E,a,p)})};qe.setLoadParameters=function(s){if(pe&&ne){var t=Ge(s),a=Object.keys(t),c=a.reduce(function(p,E){var W;return p&&s[E]===((W=ne)===null||W===void 0?void 0:W[E])},!0);if(c)return}if(pe)throw new Error("You cannot change load parameters after calling loadStripe");ne=Ge(s)};fe.loadStripe=qe;var Nt=fe;const Ct=ve(()=>me(()=>import("./Recaptcha.eae5b067.js"),[],import.meta.url).then(s=>s.default||s)),At=ve(()=>me(()=>import("./NewPaypalSmartBtnSubscription.3419f83a.js"),["./NewPaypalSmartBtnSubscription.3a186e73.css"],import.meta.url).then(s=>s.default||s)),Dt=ve(()=>me(()=>import("./NewPaypalSmartBtnOrder.9b73ad26.js"),["./NewPaypalSmartBtnSubscription.3a186e73.css"],import.meta.url).then(s=>s.default||s)),Mt=["id","href","target","aria-label"],Ft={key:0,style:{"margin-right":"5px"},class:"button-icon-start"},Ut={class:"main-heading-button"},$t={key:1,style:{"margin-left":"5px"},class:"button-icon-end"},Bt={class:"sub-heading-button"},Vt={key:1,class:"recaptcha-container button-recaptcha-container"},Wt={key:0},jt=["disabled","id","aria-label"],Gt={key:0,class:"button-icon-start"},Ht={class:"main-heading-button"},qt={key:1,class:"button-icon-end"},zt={class:"sub-heading-button"},Kt={class:"btn-loader-position",style:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"}},Jt={key:3,style:{width:"70%",margin:"auto"},class:"paypal-content"},Xt={key:4,class:"card-el-error-msg error-message",style:{"justify-content":"center"}},Zt={inheritAttrs:!1},ma=ut({...Zt,__name:"Button",props:{element:{type:Object,required:!0},classStyles:{type:Array,required:!0}},setup(s){var xe,Te,ke,Oe,Le,Re,Ne;const t=s,a=Et(),{openPopup:c}=gt(),{call:p,createMembershipToken:E,mailTo:W,sms:ze,goToNextFunnelStep:j,openUrl:oe,getNextFunnelStepURL:Ke,goToStep:Je}=_t(),Xe=mt(),{$bus:ye}=Xe;let D=(Te=(xe=t.element.extra)==null?void 0:xe.text)==null?void 0:Te.value;D=de(D);let M=(Oe=(ke=t.element.extra)==null?void 0:ke.subText)==null?void 0:Oe.value;M=de(M);const Ze=a.value.funnelId,Ye=a.value.stepId,Qe=a.value.funnelPageId,v=a.value.locationId,x=(Ne=(Re=(Le=t.element.extra)==null?void 0:Le.productId)==null?void 0:Re.value)==null?void 0:Ne.id,he=y("avascript: void(0)"),d=y(!1),se=y(!1),_e=y(""),ge=y(""),ie=y(),le=y(!1),be=y(""),J=y(""),O=y(""),P=y(!1),et=ct(()=>{var e;return((e=ie.value)==null?void 0:e.price.type)==="recurring"}),m=y(),h=y(""),X=y(!1),F=y(),G=y(""),Pe=()=>{const{action:{value:e}}=t.element.extra,n=(D??"")+" "+(M??"");if(D||M)return n;if(e===b.GO_TO_URL){const{visitWebsite:{value:r}}=t.element.extra;return r==null?void 0:r.url}return n},tt=e=>{if(!e){G.value="Verification failed! Please try again";return}G.value="",F.value=e};dt(()=>{const{action:{value:e}}=t.element.extra;if(e===b.GO_TO_NEXT_STEP||e===b.SELL_PRODUCT){const n=a.value.funnelDomain,r=a.value.funnelNextPageId;n?he.value=`https://${n}${a.value.funnelNextStep}`:r&&(he.value=`https://${window.location.host}/v2/preview/${r}`)}(e===b.CLICK_TO_CALL||e===b.CLICK_TO_SMS||e===b.GO_TO_URL||e===b.GO_TO_STEP)&&(se.value=!0,_e.value=st()),a.value.orderFormVersion===2&&x&&e===b.SELL_PRODUCT&&at()});async function at(){var e,n,r;try{const o=await Be.findProductById({productId:x});ie.value={...o,qty:1,amount:o.price.amount},J.value=(e=o==null?void 0:o.price)==null?void 0:e.currency}catch(o){const l=((r=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:r.message)||(o==null?void 0:o.message)||"Not able to fetch products!";console.error(l),alert("Not able to fetch products!")}}async function rt(){var n,r,o,l,u,L,R,I,N,C,k,T;const{action:e}=t.element.extra;switch(e.value){case"openPopup":{bt(a.value.stepId),c();break}case"url":{const{visitWebsite:i}=t.element.extra;oe(i.value);break}case"hide-element":{const{hideElements:i}=t.element.extra;yt(i.value);break}case"show-element":{const{showElements:i}=t.element.extra;ft(i.value);break}case"scroll-to-element":{const{scrollToElement:i}=t.element.extra;ye.$emit("scroll-to-element",i.value);break}case"go-to-next-funnel-step":{d.value=!0,j();break}case b.GO_TO_STEP:{d.value=!0,j(t.element.extra.stepPath.value);break}case"sell-product":{if(d.value)return;if(d.value=!0,a.value.orderFormVersion===2)if(z("provider").value==="pp")le.value=!0;else{if((((r=(n=a.value)==null?void 0:n.paymentProviderDetails)==null?void 0:r.provider)===V.AUTHORIZE_NET||((l=(o=a.value)==null?void 0:o.paymentProviderDetails)==null?void 0:l.provider)===V.WHITE_LABEL&&((L=(u=a.value)==null?void 0:u.paymentProviderDetails)==null?void 0:L.whiteLabelProvider)===V.AUTHORIZE_NET)&&a.value.merchantLoginId){we(We);return}else if((((I=(R=a.value)==null?void 0:R.paymentProviderDetails)==null?void 0:I.provider)===V.NMI||((C=(N=a.value)==null?void 0:N.paymentProviderDetails)==null?void 0:C.provider)===V.WHITE_LABEL&&((T=(k=a.value)==null?void 0:k.paymentProviderDetails)==null?void 0:T.whiteLabelProvider)===V.NMI)&&a.value.nmiMerchantGatewayId){we(Ve);return}const i=a.value.stripePublishableKey,f=a.value.stripeAccountId,_=a.value.stripePublishableKey;if(i&&_)be.value=await Nt.loadStripe(i,{stripeAccount:f||void 0});else{alert("Stripe account not found!");return}nt()}else ot();break}case"click-to-call":{const i=t.element.extra;p(i[K.PHONE_NUMBER].value);break}case"click-to-sms":{const i=t.element.extra;ze(i[K.PHONE_NUMBER].value);break}case"click-to-mail":{const i=t.element.extra;W(i[K.EMAIL_ADDRESS].value);break}case b.GO_TO_MEMBERSHIP:{try{let i;const f=a.value.locationId,{ct:_,previewUrl:U}=z(`_mf_${f}`).value;location.hostname==="localhost"?i=`http://localhost:4040/library/?domain=${U}&token=${_}&location_id=${f}`:i=`${U}/library?&token=${_}&location_id=${f}`,oe({url:i,newTab:!1})}catch{alert("Sorry something went wrong.")}break}default:console.error(`Invalid action type received: ${e.value}`)}}function Z(e){var n,r,o,l,u,L,R;try{const I=e==null?void 0:e.membershipPurchase;I!=null&&I.length&&E(v,I[0].token);const N=e==null?void 0:e.membershipToken;N&&E(v,N),vt(()=>{Pt("track","Upsell")});const{saleAction:C,stepPath:k,visitWebsite:T}=t.element.extra;if(!C)if(a.value.funnelNextStep){j();return}else throw new Error("Redirect not handled");if(a.value.orderFormVersion===2){const i=`_pl_${a.value.funnelId}`,f=localStorage.getItem(i);if(f){let _=JSON.parse(f);_.products.push(ie.value),_.total+=(r=(n=m.value)==null?void 0:n.order)==null?void 0:r.amount,_.tax=(u=(l=(o=m.value)==null?void 0:o.order)==null?void 0:l.taxSummary)==null?void 0:u.map(U=>{var Ce;const ce=(Ce=_==null?void 0:_.tax)==null?void 0:Ce.find(lt=>lt._id===U._id);return ce?{...ce,amount:ce.amount+U.amount}:U}),$e(i,JSON.stringify(_))}}else{const i=`_pl_v1_${a.value.funnelId}`,f=localStorage.getItem(i);if(f){let _=JSON.parse(f);_.push((R=(L=t==null?void 0:t.element.extra)==null?void 0:L.productId)==null?void 0:R.value),$e(i,JSON.stringify(_))}}switch(C.value){case"url":if(T&&T.value&&T.value.url){oe(T.value);break}else throw new Error("Redirect not handled");case"step-path":if(k&&k.value){j(k.value);break}else throw new Error("Redirect not handled");default:if(a.value.funnelNextStep){j();break}else throw new Error("Redirect not handled")}}catch{alert(`Order successfully placed! 
 However, Something went wrong while displaying this webpage, please contact the seller.`),d.value=!1;return}}const ue=async()=>{var r;let e=localStorage.getItem("_ud");e&&(e=JSON.parse(e));const n=e==null?void 0:e.customer_id;if(!n){h.value="Contact not found!";return}if(X.value&&!F.value){G.value="Invalid Captcha!",P.value=!1,d.value=!1;return}if(m.value=await It({contactId:n,domain:a.value.domain,pageUrl:a.value.pageUrl,locationId:v,productPreviewList:[{_id:x,qty:1}],store:a.value,subType:St.UPSELL,traceId:e==null?void 0:e.traceId,reCaptchaToken:F.value}),F.value=void 0,(r=m.value)!=null&&r.error){m.value.status===429&&(X.value=!0),h.value=m.value.message??"Error creating order!",P.value=!1,d.value=!1;return}};async function nt(){var e,n;try{if(!x)throw new Error("No product Id found for initiating stripe payment");if(h.value="",await ue(),!m.value||(e=m.value)!=null&&e.error)return;const r={altId:v,altType:"location",orderId:m.value.order._id,reCaptchaToken:F.value},o=await B.initiateStripePayment(r);if(!o.success){h.value=o.message||"We're sorry, but something went wrong. Please try again.";return}const{clientSecret:l,paymentMethodId:u}=o;if(l){const f=await be.value.confirmCardPayment(l,{payment_method:u,setup_future_usage:"off_session"});if(f.error){console.error("Failed to confirm card payment!",f.error),f.error.message&&alert(f.error.message);return}}const{orderId:L,paymentIntentId:R,subscriptionId:I,invoiceId:N,subId:C,txnId:k}=o,T={altId:v,altType:"location",orderId:L,paymentIntentId:R,subscriptionId:I,invoiceId:N,isAuth:!1,subId:C,txnId:k,attribution:{eventData:Q(),sessionId:ee(v),sessionFingerprint:te(v)}},i=await B.verifyStripePayment(T);if(console.log("verifyPaymentResponseData",i),!i.success){h.value=i.message||"We're sorry, but something went wrong. Please try again.";return}await Z(i)}catch(r){if(((n=r==null?void 0:r.response)==null?void 0:n.status)===429){X.value=!0,P.value=!1,d.value=!1;return}h.value=Y(r),d.value=!1,console.error(r)}}async function we(e){var n,r,o;try{if(!x)throw new Error("No product Id found for initiating stripe payment");if(P.value=!0,h.value="",await ue(),!m.value||(n=m.value)!=null&&n.error)return;let l;if((r=m.value)!=null&&r.order._id){l={altId:v,altType:"location",orderId:(o=m.value)==null?void 0:o.order._id,attribution:{eventData:Q(),sessionId:ee(v),sessionFingerprint:te(v)}};let u;switch(e){case We:{u=await B.authorizeNetOrderPayment(l);break}case Ve:{u=await B.nmiOrderPayment(l);break}default:console.log("Invalid payment provider");break}if(console.log(u),P.value=!1,!u.success){h.value=u.message||"We're sorry, but something went wrong. Please try again.";return}await Z({membershipPurchase:u.membershipPurchase,membershipToken:u.membershipToken})}}catch(l){d.value=!1,P.value=!1,console.log(l),h.value=Y(l)}}async function ot(){if(x)try{const e=wt(),n={...Q(),fbEventId:e},r=ee(v),o=te(v),l=await Be.funnelPayment({fingerprint:z("msgsndr_id").value,productList:[x],locationId:v,funnelId:Ze,stepId:Ye,pageId:Qe,domain:a.value.domain,pageUrl:a.value.pageUrl,source:"payment_button",submissionType:3,eventData:n,sessionId:r,sessionFingerprint:o,_mp:z("_mp").value});await Z(l)}catch(e){console.log(e)}finally{d.value=!0}}async function Se(e,n){var r,o;try{if(!x)throw new Error("No product Id found for initiating paypal payment");if(P.value=!0,O.value="",h.value="",await ue(),!m.value||(r=m.value)!=null&&r.error)return;const l={altId:v,altType:"location",orderId:(o=m.value)==null?void 0:o.order._id},u=await B.initiatePayPalPayment(l);if(!u.success){h.value=u.message||"We're sorry, but something went wrong. Please try again.";return}if(n.subscription&&u.plan_id)return n.subscription.create(u);if(n.order&&u.id)return u.id}catch(l){console.log(l.message),O.value=Y(l),P.value=!1}}async function Ie(e){try{if(!x)throw new Error("No product Id found for paypal payment");P.value=!0,O.value="",h.value="";const n={facilitatorAccessToken:e.facilitatorAccessToken,orderId:m.value.order._id,paypalOrderId:e.orderID,altId:v,altType:"location",attribution:{eventData:Q(),sessionId:ee(v),sessionFingerprint:te(v)}};e.payerID&&(n.paypalPayerId=e.payerID),e.subscriptionID&&(n.paypalSubscriptionId=e.subscriptionID);const r=await B.verifyPayPalPayment(n);if(console.log("verifyPaymentResponseData",r),!r.success){h.value=r.message||"We're sorry, but something went wrong. Please try again.";return}const o=z("provider");o.value="pp",await Z(r)}catch(n){console.error(n.message),O.value=Y(n),P.value=!1}}function Ee(){P.value=!1,O.value="Transaction has been cancelled by the user!"}function st(){let e="";const{action:{value:n}}=t.element.extra;switch(n){case b.CLICK_TO_CALL:{let r=t.element.extra[K.PHONE_NUMBER].value;r=r.replace("tel:",""),e=`tel:${r}`;break}case b.CLICK_TO_SMS:{let r=t.element.extra[K.PHONE_NUMBER].value;r=r.replace("sms:",""),e=`sms:${r}`;break}case b.GO_TO_URL:{const{visitWebsite:{value:r}}=t.element.extra,{url:o,newTab:l}=r;e=o,e=de(e),e&&!e.startsWith("#")&&!/^https?:/.test(e)&&(e=`https://${e}`),ge.value=l?"_blank":"";break}case b.GO_TO_STEP:{const r=t.element.extra.stepPath.value;e=Ke(r,!1);break}}return e}async function it(e){a.value.videoExistsInPage&&ye.$emit("handle-redirect");const{action:{value:n}}=t.element.extra;if(n===b.GO_TO_STEP){const r=t.element.extra.stepPath.value;Je(e,r)}}return(e,n)=>{const r=Ct,o=At,l=Dt;return g(),w(pt,null,[se.value?(g(),w("a",{key:0,id:`${s.element.id}_btn`,href:_e.value,target:ge.value,class:Ae([s.classStyles,"text-center"]),onClick:n[0]||(n[0]=u=>it(u)),"aria-label":Pe()},[A("span",{style:q(d.value?"visibility: hidden;":""),class:"main-heading-group"},[s.element.extra.icon!==""?(g(),w("span",Ft)):S("",!0),A("span",Ut,$(H(D)),1),s.element.extra.icon!==""?(g(),w("span",$t)):S("",!0)],4),s.element.extra.subText&&s.element.extra.subText.value?(g(),w("span",{key:0,style:q(d.value?"visibility: hidden;":""),class:"sub-heading-group text-xs font-sans"},[A("span",Bt,$(H(M)),1)],4)):S("",!0)],10,Mt)):S("",!0),X.value?(g(),w("section",Vt,[De(r,{onExpired:n[1]||(n[1]=()=>F.value=""),onVerify:tt}),G.value?(g(),w("p",Wt,$(G.value),1)):S("",!0)])):S("",!0),se.value?S("",!0):Me((g(),w("button",{key:2,disabled:d.value,id:`${s.element.id}_btn`,style:q(d.value?"cursor: default;":""),class:Ae([s.classStyles]),onClick:rt,"aria-label":Pe()},[A("div",{style:q(d.value?"visibility: hidden;":""),class:"main-heading-group"},[s.element.extra.icon!==""?(g(),w("div",Gt)):S("",!0),A("div",Ht,$(H(D)),1),s.element.extra.icon!==""?(g(),w("div",qt)):S("",!0)],4),s.element.extra.subText&&s.element.extra.subText.value?(g(),w("div",{key:0,style:q(d.value?"visibility: hidden;":""),class:"text-xs font-sans"},[A("div",zt,$(H(M)),1)],4)):S("",!0),Me(A("div",Kt,[De(ht,{loading:d.value,color:"rgb(255, 255, 255)",size:"30px"},null,8,["loading"])],512),[[Fe,d.value]])],14,jt)),[[Fe,!le.value]]),le.value&&J.value?(g(),w("div",Jt,[H(et)?(g(),Ue(o,{key:0,initiatePaypalPayment:Se,onApprovePaypalPayment:Ie,onCancelPaypalPayment:Ee,paypalErrorMsg:O.value,processingPayment:P.value,currency:J.value},null,8,["paypalErrorMsg","processingPayment","currency"])):(g(),Ue(l,{key:1,initiatePaypalPayment:Se,onApprovePaypalPayment:Ie,onCancelPaypalPayment:Ee,paypalErrorMsg:O.value,processingPayment:P.value,currency:J.value},null,8,["paypalErrorMsg","processingPayment","currency"]))])):S("",!0),h.value?(g(),w("div",Xt,$(h.value),1)):S("",!0)],64)}}});export{ma as default};
