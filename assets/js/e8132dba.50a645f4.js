"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,description:"A guide to App Store product receipt validation."},p="Sell Products",i={unversionedId:"app-store/sell-products",id:"app-store/sell-products",title:"Sell Products",description:"A guide to App Store product receipt validation.",source:"@site/docs/app-store/sell-products.mdx",sourceDirName:"app-store",slug:"/app-store/sell-products",permalink:"/laravel-iap-docs/docs/app-store/sell-products",draft:!1,editUrl:"https://github.com/imdhemy/laravel-iap-docs/blob/master/docs/app-store/sell-products.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A guide to App Store product receipt validation."},sidebar:"tutorialSidebar",previous:{title:"App Store",permalink:"/laravel-iap-docs/docs/category/app-store"},next:{title:"Sell Subscriptions",permalink:"/laravel-iap-docs/docs/app-store/sell-subscriptions"}},s={},c=[{value:"Create products",id:"create-products",level:2},{value:"Validate receipts",id:"validate-receipts",level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sell-products"},"Sell Products"),(0,o.kt)("p",null,"There are two types of products you can sell, ",(0,o.kt)("strong",{parentName:"p"},"Consumables")," and ",(0,o.kt)("strong",{parentName:"p"},"Non-Consumables"),". Consumable in-app purchases\nare depleted as they are used and ",(0,o.kt)("strong",{parentName:"p"},"Can be purchased multiple times"),", for example, lives or gems in a game, or a\nboosts in a dating app. Non-consumable in-app purchases are purchased once and ",(0,o.kt)("strong",{parentName:"p"},"Can only be purchased once"),", for\nexample, additional filters in a photo app, or cosmetic items in a game."),(0,o.kt)("h2",{id:"create-products"},"Create products"),(0,o.kt)("p",null,"To offer in-app purchases inside your app, you need to add their information in App Store Connect."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/"},"App Store Connect"),"."),(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("strong",{parentName:"li"},"My App"),", select your app."),(0,o.kt)("li",{parentName:"ol"},"In the sidebar, under ",(0,o.kt)("strong",{parentName:"li"},"Features"),", select ",(0,o.kt)("strong",{parentName:"li"},"In-App Purchases"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the add button (+).\n",(0,o.kt)("img",{src:r(9950).Z,width:"1916",height:"992"})),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Consumable")," or ",(0,o.kt)("strong",{parentName:"li"},"Non-Consumable"),"."),(0,o.kt)("li",{parentName:"ol"},"Fill the form by adding the reference name and product ID."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Create")," button.")),(0,o.kt)("h2",{id:"validate-receipts"},"Validate receipts"),(0,o.kt)("p",null,"An App Store receipt is a binary encrypted file signed with an Apple certificate. Your mobile application should\nreceive the receipt once a successful purchase is made, and you should validate the receipt on your server to ensure\nthat the purchase is valid."),(0,o.kt)("p",null,"You can verify the receipt using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," Facade as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="ProductController.php"',title:'"ProductController.php"'},"use Imdhemy\\Purchases\\Facades\\Product;\nuse Exception;\n\n// Verify the receipt on App Store\n$receiptResponse = Product::appStore()->receiptData($receipt)->verifyReceipt();\n\n// Check the values of the response to verify transactions as needed.\n$receipt = $receiptResponse->getReceipt();\n$inAppList = $receipt->getInApp(); // contains all purchased products\n\n// Depending on your business, you can loop over all products, or just the first one.\n$productPurchased = false;\nforeach ($inAppList as $inApp) {\n    if ($inApp->getProductId() === $productId) {\n        $productPurchased = true;\n        break;\n    }\n}\n\nif ($productPurchased) {\n    // Do something with the product\n}\n\nthrow new Exception('Product not purchased');\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Code samples above are for guidance only. You should use maintain your own business logic.")))}u.isMDXComponent=!0},9950:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-product-114d1374b60ff5145dd927ab6bff3bd7.png"}}]);