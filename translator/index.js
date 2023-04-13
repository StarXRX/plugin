(function(h,o,e,S,R,u,C){"use strict";const{ScrollView:P,Text:k,TextInput:B,Platform:m}=e.ReactNative,{OS:N}=m,O=o.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default,y=o.findByProps("openLazy","hideActionSheet"),d=o.findByProps("push","pushLazy","pop"),T=o.findByProps("getRenderCloseButton"),{default:w,getRenderCloseButton:z}=T,L=o.findByName("Icon"),{FormRow:b}=C.Forms,a=[],f=[],E=e.stylesheet.createThemedStyleSheet({codeBlock:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:R.semanticColors.BACKGROUND_SECONDARY,color:R.semanticColors.TEXT_NORMAL,marginTop:10,borderRadius:3,padding:10}});f.push(u.before("openLazy",y,function(s){const[c,p,l]=s;p==="MessageLongPressActionSheet"&&c.then(function(g){const D=u.after("default",g,function(M,V){e.React.useEffect(function(){return function(){D()}},[]);let[_,v]=V.props?.children?.props?.children?.props?.children,t=_?.props?.message??l?.message;if(!v||!t)return;t.content;let r;const F=function(){return e.React.createElement(w,{initialRouteName:"RawPage",goBackOnBackPress:!0,screens:{RawPage:{title:"ViewRaw",headerLeft:z(function(){return d.pop()}),render:function(){const[I,U]=e.React.useState(t.content);return e.React.createElement(P,{style:{flex:1,marginHorizontal:13,marginVertical:10}},e.React.createElement(O,{text:"Save",color:"brand",size:"small",onPress:function(){({...t});let i=a.find(function(n){return n.id==t.id});if(i){remove=a.indexOf(i),a.splice(remove,1);let n={};n.novocontent=r,n.id=t.id,a.push(n),t.content=r}else{let n={};n.novocontent=r,n.id=t.id,a.push(n),t.content=r}d.pop()}}),N=="ios"?e.React.createElement(B,{style:E.codeBlock,onChangeText:function(i){return r=i},defaultValue:t.content,multiline:!0}):e.React.createElement(B,{style:E.codeBlock,onChangeText:function(i){return r=i},defaultValue:t.content,multiline:!0}),e.React.createElement(k,null,"go to another conversation and come back to it for editing to take effect"))}}}})};v.push(e.React.createElement(b,{label:"Edit Message local",leading:e.React.createElement(L,{source:S.getAssetIDByName("ic_message_edit")}),onPress:function(){y.hideActionSheet(),d.push(F)}}))})})}));const A=o.findByName("RowManager");f.push(u.after("generate",A.prototype,function(s,c){let[p]=s;if(p.rowType!==1)return;let l=a.find(function(g){return g.id==c.message.id});l&&(c.message.content=l.novocontent)}));const x=function(){return f.forEach(function(s){return s()})};return h.onUnload=x,h})({},vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.ui,vendetta.patcher,vendetta.ui.components);
