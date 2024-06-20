import {
	renderStatus,
	setupPageBasics,
	renderUsers, //rendering information
	renderPosts,
	renderNewUser,
} from './render-functions.js';
import {
	checkResponseStatus,
	getUserPosts,
	createNewUser, // getting information
	getUsers,
} from './fetch-functions.js';

export default function app(appDiv) {
	const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } =
		setupPageBasics(appDiv);
	//destructure, objects only 1 value otherwise you will see [] array.

	checkResponseStatus().then((res) => renderStatus(statusDiv, res));

	getUsers().then((res) => renderUsers(usersUl, res));

	usersUl.addEventListener('click', (e) => {
		if (e.target.matches('button')) {
			const buttonClicked = e.target.dataset.userId;
			getUserPosts(buttonClicked).then((res) => renderPosts(postsUl, res));
		}
	});
	//each event listener can only have one target
	//so the only way to get what element we are targeting is with e.target.
	newUserForm.addEventListener('submit', (e) => {
		// e is our form event
		e.preventDefault(); //prevent "e" (form)
		//FormData takes all the form results into an object
		const formData = new FormData(e.target); //insert event form into variable formData
		const formObject = Object.fromEntries(formData); // Creates a new object that contains both the key and value pairs.
		createNewUser(formObject).then((res) => renderNewUser(newUserDiv, res));
		e.target.reset();
	});
}
