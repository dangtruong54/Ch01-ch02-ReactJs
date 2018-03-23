const uuidv4 = require('uuid/v4');

let items = [
    {
        id      : uuidv4(),
        name    : "123 Lorem ipsum dolor sit amet,  adipiscing elit",
        level   : 0 // 0 Small - 1 Medium - 2 - High
    },
    {
        id      : uuidv4(),
        name    : "def Lorem ipsum  sit amet, consectetur  elit",
        level   : 1 // 0 Small - 1 Medium - 2 - High
    },
    {
        id      : uuidv4(),
        name    : "ghj Lorem ipsum  sit amet, consectetur adipiscing elit",
        level   : 2 // 0 Small - 1 Medium - 2 - High
    }
];
export default items;   