
const db = 'http://localhost:3001/';
export const request = (url, method='GET', data) => {
    let options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    };
    if(data)  options.body = JSON.stringify(data); 
    return fetch(`${db}${url}`, options).then(res => res.ok ? res.json() : [{title:'loading'}]).catch(err => {throw new Error(err)})
}