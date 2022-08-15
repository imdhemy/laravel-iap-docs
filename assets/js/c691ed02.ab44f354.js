"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3,description:"Learn how to use liap event listeners."},o="Event Listeners",s={unversionedId:"get-started/event-listeners",id:"get-started/event-listeners",title:"Event Listeners",description:"Learn how to use liap event listeners.",source:"@site/docs/get-started/event-listeners.mdx",sourceDirName:"get-started",slug:"/get-started/event-listeners",permalink:"/laravel-iap-docs/docs/get-started/event-listeners",draft:!1,editUrl:"https://github.com/imdhemy/laravel-iap-docs/blob/master/docs/get-started/event-listeners.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Learn how to use liap event listeners."},sidebar:"tutorialSidebar",previous:{title:"Routing",permalink:"/laravel-iap-docs/docs/get-started/routing"},next:{title:"App Store",permalink:"/laravel-iap-docs/docs/category/app-store"}},p={},l=[{value:"Creating an Event Listener",id:"creating-an-event-listener",level:2},{value:"Accessing the Event Data",id:"accessing-the-event-data",level:2},{value:"Handling an event example",id:"handling-an-event-example",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-listeners"},"Event Listeners"),(0,i.kt)("p",null,"If you enabled the ",(0,i.kt)("a",{parentName:"p",href:"/docs/category/server-notifications"},"server notifications"),"\non your IAP provider control panel, LIAP will trigger a purchase event once a\nnotification is received."),(0,i.kt)("h2",{id:"creating-an-event-listener"},"Creating an Event Listener"),(0,i.kt)("p",null,"Your application should create an event listener to handle the different\nstates of the subscription life cycle. Each state update will trigger a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/server-notifications/event-list"},"specific event")," which you can listen to as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app\\Listeners\\AutoRenewSubscription.php"',title:'"app\\Listeners\\AutoRenewSubscription.php"'},"namespace App\\Listeners;\n\nuse Imdhemy\\Purchases\\Events\\GooglePlay\\SubscriptionRenewed;\n\nclass AutoRenewSubscription\n{\n  /**\n  * Auto-renews the subscription.\n  *\n  * @param SubscriptionRenewed $event\n  * @return void\n  */\n  public function handle(SubscriptionRenewed $event) {\n    // Do something with the subscription\n  }\n}\n\n")),(0,i.kt)("p",null,"Add the created listener to the associated event key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/liap.php"',title:'"config/liap.php"'},"\n[\n  // .. Other configurations are trimmed out for brevity\n  'eventListeners' => [\n    SubscriptionRenewed::class => [\\App\\Listeners\\AutoRenewSubscription::class],\n  ],\n]\n\n")),(0,i.kt)("h2",{id:"accessing-the-event-data"},"Accessing the Event Data"),(0,i.kt)("p",null,"All triggered events implement\n",(0,i.kt)("inlineCode",{parentName:"p"},"Imdhemy\\Purchases\\Contracts\\PurchaseEventContract")," interface, which allows\nyou to access to the notification data through the ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerNotification()")," method."),(0,i.kt)("p",null,"The server notification in turn gives you access to the related subscription\nthrough the ",(0,i.kt)("inlineCode",{parentName:"p"},"getSubscription()")," method."),(0,i.kt)("p",null,"The subscription instance gives you access to the following methods:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getExpiryTime()")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subscription expiry time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getItemId()")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subscription item ID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getProvider()")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subscription provider. (",(0,i.kt)("inlineCode",{parentName:"td"},"'app_store'")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"'google_play'"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getUniqueIdentifier()")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subscription unique identifier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getProviderRepresentation()")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subscription provider original representation. This is useful for accessing extra subscription data ifrequired.")))),(0,i.kt)("h2",{id:"handling-an-event-example"},"Handling an event example"),(0,i.kt)("p",null,"Below is an example of how to handle an incoming purchase event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app\\Listeners\\AutoRenewSubscription.php"',title:'"app\\Listeners\\AutoRenewSubscription.php"'},"namespace App\\Listeners;\n\nuse Imdhemy\\Purchases\\Events\\GooglePlay\\SubscriptionRenewed;\nuse App\\Repositories\\SubscriptionRepository;\nuse App\\User;\n\nclass AutoRenewSubscription\n{\n     /**\n      * @param SubscriptionRepository\n      */\n     public function __construct(SubscriptionRepository $subscriptionRepository)\n     {\n         $this->subscriptionRepository = $subscriptionRepository;\n     }\n\n    /**\n    * Auto-renews the subscription.\n    *\n    * @param SubscriptionRenewed $event\n    * @return void\n    */\n    public function handle(SubscriptionRenewed $event)\n    {\n       // The following data can be retrieved from the event\n       $subscription = $event->getServerNotification()->getSubscription();\n       $uniqueIdentifier = $subscription->getUniqueIdentifier();\n       $expirationTime = $subscription->getExpiryTime();\n\n       // The following steps are up to you, this is only an imagined scenario.\n       $subscription = $this->subscriptionRepository->find($uniqueIdentifier);\n       $subscription->setExpiryTime($expirationTime->getCarbon());\n       $subscription->save();\n\n        // Let's say you want to send a notification to the user\n       $this->notifyUserAboutUpdate($subscription->getUser());\n    }\n\n    /**\n     * Notify the user about the subscription update.\n     *\n     * @param User $user\n     * @return void\n     */\n    private function notifyUserAboutUpdate($user)\n    {\n        // Send an email to the user\n    }\n}\n")))}u.isMDXComponent=!0}}]);