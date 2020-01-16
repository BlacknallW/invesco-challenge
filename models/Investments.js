const mongoose = require("mongoose");

const InvestmentsSchema = new mongoose.Schema({
	investmentid: {
		type: Number,
		required: true
	},
	region: {
		type: String,
		required: true,
	},
	office: {
		type: String,
		required: true
	},
	registrationreceived: {
        type: String,
        required: true
	},
	investmentname: {
		type: String,
		required: true
    },
    dealstatus: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: Array,
        required: true
    },
    dealsource: {
        type: String,
        required: true
    },
    aquisitionofficer: {
        type: String, 
        required: true
    } 
});

module.exports = Investments = mongoose.model("investments", InvestmentsSchema);
