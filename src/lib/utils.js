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

export const thisYear = () => {
	const date = new Date(Date.now());

	return date.getFullYear();
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

export function clickOutside(node) {

	const handleClick = event => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent('click_outside', node)
			)
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	}
}

export function typewriter(node, params, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		delay: params.delay,
		duration,
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	}
}
