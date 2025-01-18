(function(e,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(e=typeof globalThis!="undefined"?globalThis:e||self,e["resize-textarea-vue3"]=r(e.Vue))})(this,function(e){"use strict";var r=(t,i)=>{const s=t.__vccOpts||t;for(const[o,n]of i)s[o]=n;return s};const h={name:"ResizeTextarea",props:{placeholder:{type:String,default:""},rows:{type:Number,default:2},cols:{type:Number,default:0},minHeight:{type:Number,default:50},maxHeight:{type:Number,default:null},modelValue:{type:[String,Number],default:""},autoResize:{type:Boolean,default:!0}},emits:["update:modelValue"],data(){return{textareaContent:"",height:"",isScrollEnabled:!1}},computed:{styles(){return{resize:this.autoResize?"none !important":"",padding:`5${this.unit}`,height:this.height,overflow:`${this.isScrollEnabled?"scroll":"hidden"} !important`}},unit(){return"px"}},watch:{textareaContent(){this.$emit("update:modelValue",this.textareaContent),this.resize()},modelValue(){this.textareaContent=this.modelValue,this.resize()}},methods:{resize(){const t=this.$refs.textarea;this.height="auto !important",e.nextTick(()=>{this.minHeight&&(this.height=`${t.scrollHeight<this.minHeight?this.minHeight:t.scrollHeight}${this.unit}`),this.maxHeight&&(t.scrollHeight>this.maxHeight?(this.height=`${this.maxHeight}${this.unit}`,this.isScrollEnabled=!0):this.isScrollEnabled=!1)})}},created(){e.nextTick(()=>{this.textareaContent=this.modelValue})},mounted(){this.resize()}},u=["rows","cols","placeholder"];function d(t,i,s,o,n,a){return e.withDirectives((e.openBlock(),e.createElementBlock("textarea",{style:e.normalizeStyle(a.styles),ref:"textarea",rows:s.rows,cols:s.cols,placeholder:s.placeholder,wrap:"hard",onFocus:i[0]||(i[0]=(...l)=>a.resize&&a.resize(...l)),"onUpdate:modelValue":i[1]||(i[1]=l=>n.textareaContent=l)},null,44,u)),[[e.vModelText,n.textareaContent]])}var m=r(h,[["render",d]]),c={install:(t,i)=>{t.component("resize-textarea",m)}};return c});
