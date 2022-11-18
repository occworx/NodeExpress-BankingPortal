const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const { debug } = require('console');


app.set('views', path.join( __dirname + '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));
console.log(path.join(__dirname,'/json','/accounts.json'));
const accountData = fs.readFileSync(
    path.join(__dirname,'/json','/accounts.json'), { encoding : 'UTF8' }
);
const accounts = JSON.parse(accountData);

const userData  = fs.readFileSync(
    path.join(__dirname,'/json','/users.json'), { encoding : 'UTF8' }
);
const users = JSON.parse(userData);

app.get('/', (req,res) => {
    res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.get('/savings', (req,res) => {
  res.render('account',{ account: accounts.savings });
});

app.get('/checkings', (req,res) => {
    res.render('account',{ account: accounts.checkings });
  });

app.get('/credit', (req,res) => {
    res.render('account',{ account: accounts.credit });
});

app.get('/profile', (req,res) => {
    res.render('profile', { user: user[0] });
});

app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});