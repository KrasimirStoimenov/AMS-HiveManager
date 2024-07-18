async function requester(method, url, data) {
    const options = {};

    if (data) {
        options.method = method;
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
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