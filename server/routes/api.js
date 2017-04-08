const express = require("express");
const router = express.Router();

const stories = 
[{
	title: "pastaman origins",
	desc: "the start"
},
{
	title: "pastaman origins gaiden",
	desc: "the start...gaiden"
},{
	title: "pastaman II",
	desc: "the sequel"
}];

router.get("/stories", (req, res) =>
{
	res.json(stories);
})


module.exports = router;