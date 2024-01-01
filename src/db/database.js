import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost/phytos';
// uri = 'mongodb://localhost/phytos'
async function run() {
    await mongoose.connect(uri)
      .then(() => console.log('Database is connected with URI: ' + `${uri}`))
      .catch(err => console.log(err));
}
run().catch(console.dir);
