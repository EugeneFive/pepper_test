import { getUser, getInfractions } from './api.service.js';

/**
* @param {string} user_id
*/
async function prepareData(user_id) {
	try {
		const userInfractions = await getInfractions(user_id);
		const sorted = userInfractions.sort((a, b) => a.points - b.points);

		return {
			worst: formatData(sorted[0]?.reason),
			mostRecent: formatData(sorted[userInfractions.length - 1]?.reason),
		};
	} catch (error) {
		console.warn(error);
	}
}

/**
* @param {string} reason
*/
function formatData(reason) {
	return reason.replace(
		/(http|https):\/\/\S+/,
		match => `<a href='${match}'>${match}</a>`,
	);
}

/**
* @param {string} username
*/
export async function getRelevantInfractionReasons(username) {
	try {
		const user = await getUser(username);
		const data = await prepareData(user.id);

		return new Promise(function (resolve) {
			resolve(data);
		});
	} catch(error) {
		console.warn(error);
	}
}
