export const dayOfTheWeek = () => {
	const date = new Date(Date.now());
	const dayAsANumber = date.getDay();
	const dayNames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday"
	];

	return dayNames[dayAsANumber];
}

export const localeDateString = () => {
	const date = new Date(Date.now());

	let options = {
		weekday : "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		dayPeriod: "short",
	};

	return new Intl.DateTimeFormat(undefined, options).format(date);
}
