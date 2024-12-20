const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root Domain)
console.log(myUrl.host);

//Host name (does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

//Parms object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//Loop
myUrl.searchParams.forEach((value, name ) => console.log(`${name}: ${value}`));