const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const storySchema = require("../schema/storySchema");

// const dbUser = process.env.dbUser;
// const dbPass = process.env.dbPass;
require("../../env");

const dbUri = process.env.dbUri;
const submissionPass = process.env.PASS;

mongoose.connect(dbUri);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>
{
	console.log("connected to db");
})

const Story = mongoose.model("Story", storySchema);


//temporary setup
// const stories1 = new Story(
// {
// 	title: "pastaman origins",
// 	desc: "the start"
// })
// const stories2 = new Story(
// {
// 	title: "pastaman origins gaiden",
// 	desc: "the start...gaiden"
// })
// const stories3 = new Story(
// {
// 	title: "pastaman II",
// 	desc: "the sequel"
// })

// stories1.save((err, docs) =>
// {
// 	if (err) return console.error(err);
// })
// stories2.save((err, docs) =>
// {
// 	if (err) return console.error(err);
// })
// stories3.save((err, docs) =>
// {
// 	if (err) return console.error(err);
// })


router.get("/stories", (req, res) =>
{
	Story.find((err, docs) =>
	{
		if (err) return console.error(err);
		res.json(docs);
	})
})

router.post("/stories", (req, res) =>
{
	let password = req.body.pass;

	if (password === submissionPass)
	{


		Story.findOne({"title": req.body.title}, (err, docs) =>
		{
			if (err) return console.error(err);
			console.log(docs);
			if (docs === null)
			{
				// if (docs.title !== req.body.title)
				{
					let submission = new Story(
					{
						title: req.body.title,
						desc: req.body.desc
					});
					submission.save((err, docs) =>
					{
						if (err) return console.error(err);
						console.log("submitted this: " + docs);
						res.send("submitted this: " + docs);
					})
				}
				// else
				{
					
				}				
			}
			else
			{
				console.log(docs._id);
				console.log("title already exists");
				res.send("title already exists");
			}
		})
	}
	else
	{
		console.log("wrong pass, can't submit");
		res.end("wrong pass, can't submit");
	}
})

router.put("/stories/:id", (req, res) =>
{
	let id = req.params.id;
	Story.update({_id: id}, 
	{
		$set: 
		{
			title: req.body.title,
			desc: req.body.desc
		}
	}, (err, docs) =>
	{
		if (err) console.error(err);
		console.log(docs);
		res.send("updated story");
	})
})

module.exports = router;