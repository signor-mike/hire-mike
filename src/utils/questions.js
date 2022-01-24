import uniqid from "uniqid";

export default function() {
	const uniqueApplicant = (applicant) => {
		const foo = uniqid(applicant + "_");
		const fullString =
			foo +
			" " +
			"is pretty much unique. Because it has unique ID now. But seriously tho, we are over 7 billion of individuals and everyone is unique.";
		return fullString;
	};

	const fiveYears = (input) => {
		input = input.toLowerCase();
		if (input === "true" || input === "false") {
			// console.log(input);
			const today = `${new Date().getFullYear()}`;
			const inFiveYears = `${new Date().getFullYear() + 5}`;
			const result =
				input === "true" ? "happy" : "sad and/or dead or poor";
			const fullString = `Today is ${today} and in 5 years it will be ${inFiveYears}, and according to the input I'll be ${result}`;
			return fullString;
		} else return "told ya, I need either true or false";
	};

	const whyHire = (input) => {
		input = input.toLowerCase();

		if (input === "true" || input === "false") {
			if (input === "true")
				return `That's why. You're hiring and I am available.`;
			else return `Why are you even here?`;
		} else return "told ya, I need either true or false";
	};

	const whyThisJob = (input) => {
		const isNumber = !(parseInt(input) !== parseInt(input));
		const hasDots = input.includes(".");
		const hasCommas = input.includes(",");
		if (isNumber && !hasDots && !hasCommas) {
			if (parseInt(input) >= 1500)
				return "So I want this job because you are providing me with a nice salary";
			else if (parseInt(input) >= 1000)
				return "Is it after taxes? I still want this job.";
			else if (parseInt(input) >= 500) return "You are joking, right?";
			else return "Srsly? You are kidding me?";
		} else return "provide a number without dots or commas please";
	};

	const compensation = (input) => {
		const isNumber = !(parseInt(input) !== parseInt(input));
		const hasDots = input.includes(".");
		const hasCommas = input.includes(",");
		if (isNumber && !hasDots && !hasCommas) {
			if (parseInt(input) >= 1500)
				return "That would do. I'd be happy to work for you.";
			else if (parseInt(input) >= 1000)
				return "Is it after taxes? I still want it.";
			else if (parseInt(input) >= 500) return "You are joking, right?";
			else return "Srsly? You are kidding me?";
		} else return "provide a number without dots or commas please";
	};

	return { uniqueApplicant, fiveYears, whyHire, whyThisJob, compensation };
}
