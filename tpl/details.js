const Detail=Vue.component('Detail-component',{
	template:'<h1>this is detail</h1>',
	data:function(){
		return {
			id:0
		}
	},
	created:function(){
		this.id=this.$route.params.id
	}
});