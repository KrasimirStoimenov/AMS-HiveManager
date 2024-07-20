async function requester(method, url, data) {
    const options = {};

    if (data) {
        options.method = method;
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
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