(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d2c90ae"],{"6a10":function(s,i,a){"use strict";a("83c8")},"83c8":function(s,i,a){},c66d:function(s,i,a){"use strict";a.r(i);var t=function(){var s=this,i=s.$createElement,a=s._self._c||i;return a("div",{staticClass:"App"},[a("div",{staticClass:"circle"}),a("div",{staticClass:"profile"},[a("div",{staticClass:"name"},[s._v(s._s(s.user_info.nome))]),a("div",{staticClass:"info"},[s._v(s._s(s.user_info.email))]),a("br"),a("div",{staticClass:"info"},[s._v("Entrou em: "+s._s(s.user_info.entrou_em))]),a("div",{staticClass:"info"},[s._v("Nesceu em: "+s._s(s.user_info.data_nasc))])])])},e=[],n=a("4ee7"),o={name:"App",data(){return{user_info:{},uid:""}},mounted(){this.uid=n["a"].currentUser.uid,this.buscarPerfilDoServidor()},methods:{async buscarPerfilDoServidor(){this.user_info=[];const s=await n["c"].where("owner","==",this.uid).get();for(const i of s.docs)this.user_info={peso:i.data().peso,altura:i.data().altura,data_nasc:i.data().data_nasc,nome:i.data().nome,email:i.data().email,entrou_em:i.data().entrou_em},this.CalcImc()},CalcImc(){this.user_info.imc=this.user_info.peso/(this.user_info.altura*this.user_info.altura),this.user_info.imc=this.user_info.imc.toFixed(1)}}},r=o,c=(a("6a10"),a("2877")),u=Object(c["a"])(r,t,e,!1,null,"733f898c",null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0d2c90ae.e19bc27a.js.map