const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD:aulas/products-house-v2/src/database/old/User.js
const db = require("../db.json");
=======
const db = require("./db.json");
>>>>>>> 78d45166fc95424bd76e169cb17bfabdaf8c55ca:aulas/products-house-v2/src/database/User.js

const User = {
    findOne: (email) => {
        const user = db.users.find(user => user.email === email);

        return user;
    },

    create: (user) => {
        const newUser = {
            id: user.id = crypto.randomUUID(),
            name: user.name,
            email: user.email,
            password: user.hash,
            isAdmin: false
        }

        db.users.push(newUser);
        const dbJson = JSON.stringify(db, null, 4);
        fs.writeFileSync(path.resolve("src", "database", "db.json"), dbJson, 'utf8');
    }
}

module.exports = User
