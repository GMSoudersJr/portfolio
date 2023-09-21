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

	/**
	 * @type {Intl.DateTimeFormatOptions}
	 */
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


/**
 * @param {HTMLElement} node
 */
export function clickOutside(node) {

	/**
	 * @param {MouseEvent} event
	 */
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

/**
 * @typedef {object} Params
 * @property {number} delay seconds to wait to begin
 */
/**
 * @param {HTMLElement} node
 * @param {Params} params
 */
export function typewriter(node, params, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	/**
	 * @type {?string}
	 */
	const text = node.textContent || "";
	const duration = text.length / (speed * 0.01);

	return {
		delay: params.delay,
		duration,
		/**
		 * @param {number} t
		 */
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	}
}

/**
 * @param {string} countryCode - converts a two character string representing a country
 * code into the character codes for producing emoji flags.
 */
export function convertStringToFlagEmojiCode(countryCode) {
	const charCodeOffset = 127397;
	const codePoints = countryCode
		.toUpperCase()
		.split('')
		.map(char => charCodeOffset + char.charCodeAt(0));
	return String.fromCodePoint(...codePoints);
}

/**
 * @typedef {Object} CountryData
 * @property {number} visits
 * @property {string} country
 * @property {string} countryCode
 */
/**
 * @param {CountryData} someCountry - a country to compare in the function.
 * @param {CountryData} anotherCountry - another country to compare in the
 * function.
 */
export function sorter(someCountry, anotherCountry) {
	return anotherCountry.visits - someCountry.visits;
}
