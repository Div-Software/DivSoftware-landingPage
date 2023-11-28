/**
 * A function used to scroll into the selected section with an smooth animation
 * @param {string} id The id of the section component
 * @param {Function} callback A callback function to be executed after scrolling
 */
export const scrollIntoSection = (id: string, callback?: () => void) => {
	const targetElement = document.querySelector(id)!;

	if (targetElement) {
		window.scrollTo({
			behavior: 'smooth',
			top: targetElement.getBoundingClientRect().top + window.scrollY,
		});
		if (callback) {
			setTimeout(callback, 1000);
		}
	}
};
