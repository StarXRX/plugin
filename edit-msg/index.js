(function(h,n,e,v,R,l,C){"use strict";const{ScrollView:P,Text:k,TextInput:y,Platform:T}=e.ReactNative,{OS:m}=T,A=n.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default,B=n.findByProps("openLazy","hideActionSheet"),u=n.findByProps("push","pushLazy","pop"),L=n.findByProps("getRenderCloseButton"),{default:M,getRenderCloseButton:z}=L,N=n.findByName("Icon"),{FormRow:O}=C.Forms,d=[],f=[],E=e.stylesheet.createThemedStyleSheet({codeBlock:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:R.semanticColors.BACKGROUND_SECONDARY,color:R.semanticColors.TEXT_NORMAL,marginTop:10,borderRadius:3,padding:10}});f.push(l.before("openLazy",B,function(s){const[i,p,c]=s;p==="MessageLongPressActionSheet"&&i.then(function(g){const D=l.after("default",g,function(V,_){e.React.useEffect(function(){return function(){D()}},[]);let[w,S]=_.props?.children?.props?.children?.props?.children,t=w?.props?.message??c?.message;if(!S||!t)return;t.content;let o;const F=function(){return e.React.createElement(M,{initialRouteName:"MessagePage",goBackOnBackPress:!0,screens:{MessagePage:{title:"EditMessage",headerLeft:z(function(){return u.pop()}),render:function(){const[I,U]=e.React.useState(t.content);return e.React.createElement(P,{style:{flex:1,marginHorizontal:13,marginVertical:10}},e.React.createElement(A,{text:"Save",color:"brand",size:"small",onPress:function(){({...t});let a=d.find(function(r){return r.id==t.id});if(a)a.novocontent=o,t.content=o;else{let r={};r.novocontent=o,r.id=t.id,d.push(r),t.content=o}u.pop()}}),m=="ios"?e.React.createElement(y,{style:E.codeBlock,onChangeText:function(a){return o=a},defaultValue:t.content,multiline:!0}):e.React.createElement(y,{style:E.codeBlock,onChangeText:function(a){return o=a},defaultValue:t.content,multiline:!0}),e.React.createElement(k,{style:{fontSize:20,fontWeight:"bold",color:"#333",textAlign:"center",marginTop:20}},"Go to another conversation and come back to it for editing to take effect"))}}}})};S.push(e.React.createElement(O,{label:"Edit Message local",leading:e.React.createElement(N,{source:v.getAssetIDByName("ic_message_edit")}),onPress:function(){B.hideActionSheet(),u.push(F)}}))})})}));const b=n.findByName("RowManager");f.push(l.after("generate",b.prototype,function(s,i){let[p]=s;if(p.rowType!==1)return;let c=d.find(function(g){return g.id==i.message.id});c&&(i.message.content=c.novocontent)}));const x=function(){return f.forEach(function(s){return s()})};return h.onUnload=x,h})({},vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.ui,vendetta.patcher,vendetta.ui.components);
