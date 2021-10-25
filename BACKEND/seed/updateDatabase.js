const mongoose = require("mongoose")
const qodequestionbank = require("../model/questions")
const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")
dotenv.config({ path: "../.env" })

/* Imports: */
const set_1 = require("./dataset_1.json")
const set_2 = require("./dataset_2.json")
var status = []

mongoose.connect(process.env.MONGO_CLOUD_URI, () =>
	console.log(`[*] SEED CONNECTED TO DB, COLLECTION~ ${process.env.CLOUD_DB_COLLECTION}`)
)

/* Script Needs a Fix :( */
let ERROR_FLAG = false
const updateDatabase = async () => {
	try {
		// await qodequestionbank.deleteMany({})
		// await qodequestionbank.drop();
		for (let x = 0; x < set_1.length; x++) {
			let newquestion = {
				question_id: set_1[x].question_id,
				problem_statement: set_1[x].problem_statement,
				topic: set_1[x].topic,
				link: set_1[x].link,
				status: set_1[x].status,
				favourite: set_1[x].favourite,
			}
			let data = new qodequestionbank(newquestion)
			try {
				const savedData = await data.save()
			} catch (err) {
				status.push({
					questionId: data.question_id,
					uploaded: false,
					error: err,
				})
			}
		}
		const factor = set_1.length - 1;
		for (let x = 0; x < set_2.length; x++) {
			let newquestion = {
				question_id: set_1[x].question_id + factor,
				problem_statement: set_1[x].problem_statement,
				topic: set_1[x].topic,
				link: set_1[x].link,
				status: set_1[x].status,
				favourite: set_1[x].favourite,
			}
			let data = new qodequestionbank(newquestion)
			try {
				const savedData = await data.save()
			} catch (err) {
				status.push({
					questionId: data.question_id,
					uploaded: false,
					error: err,
				})
			}
		}

	} catch (err) {
		ERROR_FLAG = true
		console.log(err)
	}
}

const executeSeeder = async()=>{
	await updateDatabase().then(() => {
	mongoose.connection.close()
	const DB_UPDATE_LOG = {
		message: ERROR_FLAG
			? "Cloud DB Not Updated"
			: "Question Bank Updated to Cloud DB",
		collection: process.env.CLOUD_DB_COLLECTION,
	}
	if (status.length > 0) {
		fs.writeFile(`./uploadStatus.json`, JSON.stringify(status), "utf8", () => {
			console.log("LOG FILE GENERATED")
		})
	}
	console.table(DB_UPDATE_LOG)
})
}

executeSeeder();
