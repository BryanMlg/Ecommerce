const fs = require('fs');

fs.writeFileSync('./.env.local', `API_URL = https://api.escuelajs.co/api/v1/\n`);
