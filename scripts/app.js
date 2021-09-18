const app = Vue.createApp({
    // CreateApp takes a configuration object
    // pure javascript

    // data is a keyword, cannot be named differently
    // handles our properties/states
    // has to return an object
    data() {
        return {
            vehicles: [],
            displayForm: false,
            displayShowForm: true,
            regNo: '',
            make: '',
            model: '',
            modelYear: '',
            mileage: '',
            imageUrl: '',
        }
    },
    computed: {
        vehicleName() {
            // can include conditionals,
            // calls to REST api:s etc
            return this.make + ' ' + this.model;
        },
    },
    created() {
        this.loadAllVehicles();
    },
    methods: {

        getVehicleName() {
            return `(${this.make} - ${this.model})`; 
        },

        setMake(event) {
            this.make = event.target.value;
        },

        onDisplayShowForm() {
            this.displayShowForm = !this.displayShowForm;
            this.displayForm = true;
        },

        addVehicle(event) {
            event.preventDefault();
            this.vehicles.push({
                    regNo: this.regNo,
                    make: this.make,
                    model: this.model,
                    modelYear: this.modelYear,
                    milage: this.mileage,
                    imageUrl: 'https://i.postimg.cc/N09fbtKZ/car1.jpg'
            });
            this.regNo = '';
            this.make = '';
            this.model = '';
            this.modelYear = '';
            this.mileage = '';
        },

        onCancelVehicle(event) {
            event.preventDefault();
            this.displayShowForm = !this.displayShowForm;
            this.displayForm = false;
        },

        loadAllVehicles() {
            // vehicles.forEach(vehicle) => {
	        //    this.vehicles.push(vehicle);
            // });

            // this.vehicles = vehicles;

            this.vehicles = vehicles.map((vehicle) => {
                return vehicle;
            });

            console.log(this.vehicles);
        }

    }

});

app.mount('#vehicle-admin');