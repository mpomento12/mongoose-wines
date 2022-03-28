const mongoose = require('mongoose');
""
mongoose.connect('mongodb+srv://mpomento123:mpomento123@cluster0.dcc95.mongodb.net/mpomento123?retryWrites=true&w=majority');

const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
