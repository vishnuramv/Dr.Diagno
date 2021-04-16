import { BASEURL } from "../constant";

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
	const response = await fetch(BASEURL + "/auth/token/", reqOptions);
	const data = await response.json();
	console.log(data);
	localStorage.setItem("access-token", data.access);
	localStorage.setItem("refresh-token", data.refresh);
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
	formData.append("username", name);
	formData.append("email", email);
	formData.append("password", password);
	formData.append("age", age);
	formData.append("gender", gender);
	formData.append(
		"bloodgroup",
		bloodGroup === "male" ? 0 : bloodGroup === "female" ? 1 : 2
	);

	const reqOptions = {
		method: "POST",
		headers: {
			Accept: "application/json",
		},
		body: formData,
	};
	const response = await fetch(BASEURL + "/auth/register/", reqOptions);
	const data = await response.json();
	console.log(data);
	await login(email, password);
};

/**
 * google login
 * @param accesstoken -> This is the accesstoken of the user obtained from Google
 */
export const googleLogin = async (accesstoken) => {
	const reqOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ access_token: accesstoken }),
	};
	const response = await fetch(
		BASEURL + "/auth/rest-auth/google/",
		reqOptions
	);
	const data = await response.json();
	console.log(data);
};

/**
 * get the profile info of current user
 */
export const getProfile = async () => {
	const token = localStorage.getItem("access-token");

	if (token) {
		const reqOptions = {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
				Accept: "application/json",
			},
		};
		const response = await fetch(BASEURL + "/auth/me", reqOptions);
		const data = await response.json();
		return data;
	}
};

export const logout = () => {
	localStorage.removeItem("access-token");
};


export const refresh = async () => {
	const token = localStorage.getItem("refresh-token");
	if (token) {
		const reqOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refresh: token }),
		};
		const response = await fetch(
			BASEURL + "/auth/token/refresh",
			reqOptions
		);
		const data = await response.json();
		localStorage.setItem("access-token", data.access);
	}
}