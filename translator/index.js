(function(i,l,u,t,e,B,y,d){"use strict";const{ScrollView:E,Text:S,TextInput:v,Platform:C}=e.ReactNative,{OS:P}=C,b=t.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default,f=e.stylesheet.createThemedStyleSheet({codeBlock:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:d.semanticColors.BACKGROUND_SECONDARY,color:d.semanticColors.TEXT_NORMAL,marginTop:10,borderRadius:3,padding:10}});function w(a){let{message:s,onSave:o}=a;const[n,r]=e.React.useState(s.content);return e.React.createElement(e.React.Fragment,null,e.React.createElement(E,{style:{flex:1,marginHorizontal:13,marginVertical:10}},e.React.createElement(b,{text:"Save",color:"brand",size:"small",onPress:function(){o(n),y.showToast("Content saved",u.getAssetIDByName("toast_copy_link"))}}),P=="ios"?e.React.createElement(v,{style:f.codeBlock,multiline:!0,value:n,onChangeText:function(c){return r(c)}}):e.React.createElement(S,{selectable:!0,style:f.codeBlock},n)))}const p=t.findByProps("openLazy","hideActionSheet"),R=t.findByProps("push","pushLazy","pop"),A=t.findByProps("getRenderCloseButton"),{default:L,getRenderCloseButton:N}=A,T=t.findByName("Icon"),{FormRow:k}=B.Forms,_=l.before("openLazy",p,function(a){const[s,o,n]=a;o==="MessageLongPressActionSheet"&&s.then(function(r){const c=l.after("default",r,function(F,O){e.React.useEffect(function(){return function(){c()}},[]);let[D,g]=O.props?.children?.props?.children?.props?.children;const h=D?.props?.message??n?.message;if(!g||!h)return;const x=function(){return e.React.createElement(L,{initialRouteName:"RawPage",goBackOnBackPress:!0,screens:{RawPage:{title:"ViewRaw",headerLeft:N(function(){return R.pop()}),render:function(){return e.React.createElement(w,{message:h})}}}})};g.push(e.React.createElement(k,{label:"View Raw",leading:e.React.createElement(T,{source:u.getAssetIDByName("ic_chat_bubble_16px")}),onPress:function(){p.hideActionSheet(),R.push(x)}}))})})}),z=function(){return _()};return i.onUnload=z,i})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui.toasts,vendetta.ui);
