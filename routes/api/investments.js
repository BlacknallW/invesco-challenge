const express = require("express");
const router = express.Router();


const Investments = require("../../models/Investments");
//@route Post /api/invesments
//@desc Post Investment Information
//@access Public
router.post("/", async (req, res) => {
	const {
		investmentid,
		region,
		office,
		registrationreceived,
		investmentname,
		dealstatus,
		city,
		state,
		dealsource,
		aquisitionofficer
	} = req.body;

	try {
		const newInvestments = new Investments({
			investmentid,
			region,
			office,
			registrationreceived,
			investmentname,
			dealstatus,
			city,
			state,
			dealsource,
			aquisitionofficer
        });
        
        const investments = await newInvestments.save()
        res.json(investments)
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

//@route Get api/investments
//@desc Get all investment information
//@access Public
router.get("/", async(req,res) => {
    try {
        investments = await Investments.find()
        res.json(investments)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})
module.exports = router