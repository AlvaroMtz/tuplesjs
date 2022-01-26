# TuplesJs

TuplesJs is a Javascript library to add tuples.

## Installation

```bash
npm install tuplesjs
```

## Usage

```javascript
const T = require('tuplesjs')

const Status = T(Number, String)

# returns 'T { '0': 401, '1': 'No Authorize' }'
const status = new Status(401, 'No Authorize')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)