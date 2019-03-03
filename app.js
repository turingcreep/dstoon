const express = require('express'),
	app = express()
	port = 3000;

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`DStoon is now listening on port ${port} for requests...`));
