/**
 * A module utilised in the dynamic building of navigation content, which is based on the value of the local storage
 * 'authenticated' key.
 *
 * @module build-navigation
 * @author Michael Muzzarelli, muzzarellm1@nku.edu
 */
const name = 'build-navigation';

/**
 * Build the dynamic navigation content based on the 'authenticated' value: if the value is true, build a link to an
 * existing user account; if the value is false, build a link to the sign-in page and a button to the registration page.
 */
function buildNavigation() {
	let navigation = document.getElementById('navbar-collapse');

	if (checkAuthentication()) {
		navigation.append(buildNavigationButton('Account', 'account.html', 'me-5 py-3 px-4'));
	} else {
		let container = buildNavigationContainer('ms-auto me-3');

		container.append(buildNavigationItem('Sign In', 'sign-in.html'));

		navigation.append(container);
		navigation.append(buildNavigationButton('Register', 'register.html', 'me-5 py-3 px-4'));
	}
}

/**
 * Build a Bootstrap 'navbar-nav' list, a container element to hold navigation items ('nav-item') that hold navigation
 * links ('nav-link').
 *
 * @param classes	the non-standard CSS classes that should be appended to this element.
 *
 * @returns {HTMLUListElement}	a Bootstrap 'navbar-nav' list.
 */
function buildNavigationContainer(classes) {
	let container = document.createElement('ul');

	container.setAttribute('class', `navbar-nav ${classes}`);

	return container;
}

/**
 * Build a Bootstrap 'nav-item' and inner 'nav-link' element.
 *
 * @param text	the inner text of the link.
 * @param href	the URL that the link should direct a user to.
 *
 * @returns {HTMLLIElement}		a Bootstrap 'nav-item' element.
 */
function buildNavigationItem(text, href) {
	let item = document.createElement('li');
	item.setAttribute('class', 'nav-item');

	let anchor = document.createElement('a');
	anchor.setAttribute('class', 'nav-link');
	anchor.setAttribute('href', href);
	anchor.innerText = text;

	item.append(anchor);

	return item;
}

/**
 * Build a Bootstrap 'btn-primary' button element to be appended to the navigation menu.
 *
 * @param text		the inner text of the button.
 * @param href		the URL that the button should direct a user to.
 * @param classes	the non-standard CSS classes that should be appended to this element.
 *
 * @returns {HTMLAnchorElement}		a Bootstrap 'btn-primary' button.
 */
function buildNavigationButton(text, href, classes) {
	let anchor = document.createElement('a');

	anchor.setAttribute('class', `btn btn-primary ${classes}`);
	anchor.setAttribute('role', 'button');
	anchor.setAttribute('href', href);
	anchor.innerText = text;

	return anchor;
}

/* explicitly call this function on each page load */
buildNavigation();