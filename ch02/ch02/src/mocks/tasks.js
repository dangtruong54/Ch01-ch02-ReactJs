const uuidv4 = require('uuid/v4');

let items = [
    {
        id      : uuidv4(),
        name    : "abc Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        level   : 0 // 0 Small - 1 Medium - 2 - High
    },
    {
        id      : uuidv4(),
        name    : "def Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        level   : 1 // 0 Small - 1 Medium - 2 - High
    },
    {
        id      : uuidv4(),
        name    : "ghj Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        level   : 2 // 0 Small - 1 Medium - 2 - High
    }
];
export default items;   