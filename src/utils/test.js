let today = new Date("2021-12-02");
console.log(
	today.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
	})
);
