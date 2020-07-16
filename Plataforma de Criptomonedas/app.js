new Vue({
    el: '#app',
    data(){
        return {
            name: 'Bitcoin',
            symbol:'BTC',
            img: 'https://storage.googleapis.com/www-paredro-com/uploads/2019/04/bitcoin.jpg',
            changePercent:0,
            value:0,
            color: 'f4f4f4',
            prices: [4000,5640,7852,6598,2130,1035,9536,7485],

            price: 8400,
            
            pricesWithDays: [
                { day:'Lunes', value:8400 },
                { day:'Martes', value:7900 },
                { day:'Miercoles', value:8400 },
                { day:'Jueves', value:9000 },
                { day:'Viernes', value:9400 },
                { day:'Sabado', value:10000 },
                { day:'Domingo', value:10200 },
            ],

            showPrices: false
        }
    },
    /* Propiedad Computada / Computed property -> Propiedades 
        que se calculan en tiempo real en base a los valores de otras propiedades*/
    computed:{
        title(){
            return `${this.name} - ${this.symbol}`
        },
        convertedValue (){
            if(!this.value){
                return 0
            }

            return this.value / this.price
        }
    },
    /* watcher -> Disparador de codigo que se ejecuta cada vez que se genera
                  un cambio en una propiedad*/
    watch:{
        showPrices(newVal, oldVal){
            console.log(newVal, oldVal);
        }
    },

    methods: {
        toggleShowPrices(){
            this.showPrices=!this.showPrices;

            this.color = this.color.split('').reverse().join('');
        }
    }
})