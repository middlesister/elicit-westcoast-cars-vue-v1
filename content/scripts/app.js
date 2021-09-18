const app = Vue.createApp({
    // CreateApp takes a configuration object
    // pure javascript

    // data is a keyword, cannot be named differently
    // handles our properties/states
    // has to return an object
    data() {
        return {
            displayForm: false,
            regNo: 'MPJ076',
            make: 'Volkswagen',
            model: 'Tiguan',
            modelYear: 2008,
            mileage: 13500,
            imageUrl: 'https://i.postimg.cc/N09fbtKZ/car1.jpg',
        }
    },
    computed: {
        vehicleName() {
            // can include conditionals,
            // calls to REST api:s etc
            return this.make + ' ' + this.model;
        },
    },
    methods: {

        getVehicleName() {
            return `(${this.make} - ${this.model})`; 
        },

        setMake(event) {
            this.make = event.target.value;
        },

        onDisplayShowForm() {
            this.displayForm = true;
        }

    }

});

app.mount('#vehicle-admin');