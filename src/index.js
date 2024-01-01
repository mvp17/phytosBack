import app from './app/app.js';
import './db/database.js';

function main() {
    const port = process.env.PORT;
    app.listen(port, () => { 
        console.log(`App listening on port ${port}`)
    });
}

main();
