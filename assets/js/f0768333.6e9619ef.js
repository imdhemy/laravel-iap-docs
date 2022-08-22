"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2,description:"A Guide to App Store Subscription receipt validation."},a="Sell Subscriptions",s={unversionedId:"app-store/sell-subscriptions",id:"app-store/sell-subscriptions",title:"Sell Subscriptions",description:"A Guide to App Store Subscription receipt validation.",source:"@site/docs/app-store/sell-subscriptions.mdx",sourceDirName:"app-store",slug:"/app-store/sell-subscriptions",permalink:"/laravel-iap-docs/docs/app-store/sell-subscriptions",draft:!1,editUrl:"https://github.com/imdhemy/laravel-iap-docs/blob/master/docs/app-store/sell-subscriptions.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"A Guide to App Store Subscription receipt validation."},sidebar:"tutorialSidebar",previous:{title:"Sell Products",permalink:"/laravel-iap-docs/docs/app-store/sell-products"},next:{title:"Testing and Mocking",permalink:"/laravel-iap-docs/docs/app-store/testing-and-mocking"}},p={},c=[{value:"Receipt Validation",id:"receipt-validation",level:2},{value:"Available Methods",id:"available-methods",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sell-subscriptions"},"Sell Subscriptions"),(0,i.kt)("p",null,"There are two types of subscriptions, ",(0,i.kt)("strong",{parentName:"p"},"Auto-renewable")," and ",(0,i.kt)("strong",{parentName:"p"},"Non-renewable")," subscriptions. The former provides\n",(0,i.kt)("strong",{parentName:"p"},"ongoing")," access to the content users purchase, it allows Family sharing, and it can be automatically renewed. The\nlatter provides access to the content for a limited period of time, and it cannot be renewed. So people need to\npurchase a new subscription to continue enjoying the content."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.apple.com/app-store-connect/#/dev75708c031"},"Offer auto-renewable subscription"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.apple.com/app-store-connect/#/devfe9203d26"},"Offer non-renewable subscription"),".")),(0,i.kt)("h2",{id:"receipt-validation"},"Receipt Validation"),(0,i.kt)("p",null,"An App Store receipt is a binary encrypted file singed with an Apple certificate. Your mobile application should\nreceive the receipt once a successful purchase is made. The receipt should be validated against the Apple App Store\non your server, and here ",(0,i.kt)("strong",{parentName:"p"},"LIAP")," comes into play."),(0,i.kt)("p",null,"You can verify the receipt using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," Facade as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Imdhemy\\Purchases\\Facades\\Subscription;\n\n// Verifiy the receipt on App Store servers.\n// For non-renewable subscriptions, you can use the `verifyReceipt` method.\n// Subscription::appStore()->receiptData($receipt)->verifyReceipt();\n$receiptResponse = Subscription::appStore()->receiptData($receipt)->verifyRenewable();\n\n// Get the receipt status\n$receiptStatus = $receiptResponse->getStatus();\n\nif($status->isValid()) {\n    $latestReceiptInfo = $status->getLatestReceiptInfo();\n    // You can loop all of them or either get the first one (recently purchased).\n    $receiptInfo = $latestReceiptInfo[0];\n\n    $productId = $receiptInfo->getProductId();\n    $transactionId = $receiptInfo->getTransactionId();\n    $originalTransactionId = $receiptInfo->getOriginalTransactionId();\n    $expiresDate = $receiptInfo->getExpiresDate();\n    // And so on...\n} else {\n    // The receipt is invalid\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getLatestReceiptInfo()")," method returns an array of objects containing all the transactions for the subscription,\nincluding the initial purchase, and subsequent renewals. You can use the values to determine if the subscription\nexpired or not, Just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getter")," methods to get the values."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Code samples above are for guidance only. You should use maintain your own business logic.")),(0,i.kt)("h2",{id:"available-methods"},"Available Methods"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/app-store/sell-products#available-methods"},"Sell Products")," for available methods."))}u.isMDXComponent=!0}}]);