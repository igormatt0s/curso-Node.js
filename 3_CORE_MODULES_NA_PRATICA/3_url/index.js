const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parseUrl = new url.URL(address);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get('produtos'));
console.log(parseUrl.origin);
console.log(parseUrl.protocol);
console.log(parseUrl.href);