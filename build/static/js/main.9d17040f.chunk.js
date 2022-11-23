(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),i=(n(14),n(5)),o=n(1),l=n(2),u=n(3),m=n(4),h=(n(15),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return r.a.createElement("li",{className:"habit"},r.a.createElement("span",{className:"habit-name"},t),r.a.createElement("span",{className:"habit-count"},n),r.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},r.a.createElement("i",{className:"fas fa-plus-square"})),r.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},r.a.createElement("i",{className:"fas fa-minus-square"})),r.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},r.a.createElement("i",{className:"fas fa-trash"})))}}]),n}(a.Component)),b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).formRef=r.a.createRef(),e.inputRef=r.a.createRef(),e.onSubmit=function(t){t.preventDefault();var n=e.inputRef.current.value;n&&e.props.onAdd(n),e.formRef.current.reset()},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{ref:this.formRef,className:"add-form",onSubmit:this.onSubmit},r.a.createElement("input",{ref:this.inputRef,type:"text",className:"add-input",placeholder:"Habit"}),r.a.createElement("button",{className:"add-button"},"Add"))}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"habits"},r.a.createElement(b,{onAdd:this.props.onAdd}),r.a.createElement("ul",null,this.props.habits.map((function(t){return r.a.createElement(h,{key:t.id,habit:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,onDelete:e.props.onDelete})}))),r.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset All"))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),r.a.createElement("span",null,"Habit Tracker"),r.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),n}(a.Component),d=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=Object(i.a)(e.state.habits),a=n.indexOf(t);n[a].count++,e.setState({habit:t})},e.handleDecrement=function(t){var n=Object(i.a)(e.state.habits),a=n.indexOf(t),r=n[a].count-1;n[a].count=r<0?0:r,e.setState({habit:t})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return e.count=0,e}));e.setState({habits:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),r.a.createElement(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),n}(a.Component);n(16);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.9d17040f.chunk.js.map