import { getAuthData } from "../utils/authDataUtils";

async function requester(method, url, data) {
    const options = createOptions(method, data);

    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204
            && response.headers.get('Content-Type') == null) {
            return;
        }

        try {
            return await response.json();
        }
        catch (error) {
            alert(error.message);
            throw error;
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method, data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const authData = getAuthData();
    if (authData) {
        options.headers['X-Authorization'] = authData.accessToken;
    }

    return options;
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export default requester = {
    get,
    post,
    put,
    del
};