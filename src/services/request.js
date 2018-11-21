const db = `http://${window.location.hostname}:16548/api/`;
export const request = (url, method='GET', data) => {
    let options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    };
    if(data)  options.body = JSON.stringify(data); 
	return fetch(`${db}${url}`, options)
			.then(res => res.json())
			.catch(err => {console.log('DB connection is not okay')})
}