const BASEURL = "http://localhost:8000/";

/**
 * login user
 * @param email -> email of user
 * @param password -> password of user
 */
export const login = async (email, password) => {
	const reqOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		// mocking the email as the username
		body: JSON.stringify({ username: email, password }),
	};
	const response = await fetch(BASEURL + "auth/token", reqOptions);
	const data = await response.json();
	console.log(data);
};

/**
 * register a new user
 * @param userinfo -> { name, email, password, age, gender, bloodGroup, image }
 */
export const signup = async ({
	name,
	email,
	password,
	age,
	gender,
	bloodGroup,
	image,
}) => {
	const formData = new FormData();
	formData.append("image", image);
	formData.append("name", name);
	formData.append("email", email);
	formData.append("password", password);
	formData.append("age", age);
	formData.append("gender", gender);
	formData.append("bloodgroup", bloodGroup);

	const reqOptions = {
		method: "POST",
		headers: {
			Accept: "application/json",
		},
		body: formData,
	};
	const response = await fetch(BASEURL + "auth/register", reqOptions);
	const data = await response.json();
	console.log(data);
};
