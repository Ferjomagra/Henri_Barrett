const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hbarret_project',{
	useUnifiedTopology: true,
	useNewUrlParser: true
})


.then(db=> console.log('Db conectada'))
.catch((err) => console.error(err)); 