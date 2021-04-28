Vue.component('showform', {
    template: '#show-form',
    data(){
        return{
            data:{nama:'', email:''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.jenis = "";
            this.data.genre = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        dataBuku: {}
    },
    methods: {
        getData: function(Value){
            this.dataBuku = {
                judul : Value.judul,
                jenis : Value.jenis,
                genre : Value.genre
            }
        }
    }
})