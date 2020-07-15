new Vue({
    el: '#app',
    data(){
        return {
            name: 'Bitcoin',
            img: 'https://storage.googleapis.com/www-paredro-com/uploads/2019/04/bitcoin.jpg',
            changePercent:0,
            prices: [4000,5640,7852,6598,2130,1035,9536,7485],
            pricesWithDays: [
                { day:'Lunes', value:8400 },
                { day:'Martes', value:7900 },
                { day:'Miercoles', value:8200 },
                { day:'Jueves', value:9000 },
                { day:'Viernes', value:9400 },
                { day:'Sabado', value:10000 },
                { day:'Domingo', value:10200 },
            ],

            showPrices: false
        }
    },

    methods: {
        toggleShowPrices(){
            this.showPrices=!this.showPrices;
        }
    }
})