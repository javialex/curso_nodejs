const crypto = require('crypto');
/**
 * Considerar mucho la entropía
 * @type {string}
 */
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);