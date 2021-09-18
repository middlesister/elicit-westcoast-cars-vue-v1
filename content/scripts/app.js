const app = Vue.createApp({
    // CreateApp takes a configuration object
    // pure javascript

    // data is a keyword, cannot be named differently
    // handles our properties/states
    // has to return an object
    data() {
        return {
            regNo: 'MPJ076',
            make: 'Volkswagen',
            model: 'Tiguan',
            modelYear: 2008,
            mileage: 13500,
            vehicleName: '',
        }
    },
    methods: {

        getVehicleName() {
            this.vehicleName = `(${this.make} - ${this.model})`;
        }
    }

});

app.mount('#vehicle-admin');