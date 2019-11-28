const app = require('./start/app');
const { port } = require('./config/vars');

app.listen(port || 3333, () => console.log(`Server running is port: ${port || 3333}`));
