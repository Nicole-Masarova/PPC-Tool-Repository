function testingFetch() {
let url = 'https://www.seasoned.co/services/services/rest/config';
let header = new Headers({
'Access-Control-Allow-Origin':'*',
'Content-Type': 'multipart/form-data'
});
let request = new Request(url, {
    method: 'GET',
    body: null,
    headers: header,
    mode: 'no-cors'
});
    fetch('https://www.seasoned.co/services/services/rest/config', {'mode': 'no-cors'})
        .then((response) => {
                console.log('response: ', response);
                return response.json();
        })
        .then((data) => {
            console.log(data.message);
        });
}
testingFetch();
