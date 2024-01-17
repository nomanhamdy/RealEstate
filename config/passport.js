const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { readDataFromFile } = require('../utils/fileOps');

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'username' },
        async (username, password, done) => {
            try {
                const users = readDataFromFile('users.json');
                const user = users.find(u => u.username === username);

                if (!user || !await bcrypt.compare(password, user.password)) {
                    return done(null, false, { message: 'Invalid credentials' });
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        const users = readDataFromFile('users.json');
        const user = users.find(u => u.id === id);
        done(null, user);
    });
};
