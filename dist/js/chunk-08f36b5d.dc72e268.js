(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f36b5d"],{"311d":function(t,a,s){},df71:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"disc"},[t._v(" Altura ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.altura,expression:"altura"}],attrs:{type:"number",placeholder:"ex.: 1.70"},domProps:{value:t.altura},on:{input:function(a){a.target.composing||(t.altura=a.target.value)}}}),s("span",{staticClass:"disc"},[t._v(" Peso ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.peso,expression:"peso"}],attrs:{type:"number",placeholder:"ex.: 60.4"},domProps:{value:t.peso},on:{input:function(a){a.target.composing||(t.peso=a.target.value)}}})]),s("div",{staticClass:"button-group"},[s("button",{staticClass:"btn1",attrs:{disabled:t.disableButton},on:{click:t.Calc}},[t._v("Calcular")]),s("button",{staticClass:"btn2",on:{click:t.Clear}},[t._v("Limpar")])])])},i=[],r=s("4ee7"),o={data(){return{altura:"",peso:"",imc:"",uid:""}},mounted(){this.uid=r["a"].currentUser.uid,this.buscarImcsDoServidor()},computed:{disableButton(){return!this.peso||!this.altura}},methods:{Calc(){this.altura=this.altura.replace(",","."),this.imc=this.peso/(this.altura*this.altura),this.imc=this.imc.toFixed(1),this.$emit("mostrar-tabela",this.imc),this.Add(),this.altura="",this.peso=""},async Add(){await r["b"].add({peso:this.peso,altura:this.altura,imc:this.imc,data:(new Date).getDate()+" / "+((new Date).getMonth()+1)+" / "+(new Date).getFullYear(),owner:this.uid}),this.buscarImcsDoServidor(),this.altura="",this.peso=""},Clear(){this.altura="",this.peso="",this.imc="",this.$emit("clear")},async buscarImcsDoServidor(){this.tarefas=[];const t=await r["b"].where("owner","==",this.uid).get();for(const a of t.docs)this.tarefas.push({id:a.id,titulo:a.data().titulo})}}},u=o,l=(s("ec03"),s("2877")),c=Object(l["a"])(u,e,i,!1,null,"3f0f46ae",null);a["default"]=c.exports},ec03:function(t,a,s){"use strict";s("311d")}}]);
//# sourceMappingURL=chunk-08f36b5d.dc72e268.js.map