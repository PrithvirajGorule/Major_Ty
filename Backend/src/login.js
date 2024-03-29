import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors module


const app = express();
app.use(cors()); // Use cors middleware

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Vaishnavi**18',
  database: 'supplychain',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  const q = 'SELECT * FROM users WHERE username = ? AND password_hash = ?';
  const values = [username, password]; // Note: You should hash the password before comparing in a real-world scenario

  db.query(q, values, (err, data) => {
    if (err) {
      console.error('Error executing signin query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (data.length === 0) {
      // Invalid credentials
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Signin successful
    return res.json({ success: true, user: data[0] });
  });
});

app.get('/', (req, res) => {
  res.json('hello this is backend');
});

app.get('/register', (req, res) => {
  const q = 'select * from users';
  db.query(q, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post('/register', (req, res) => {
  const {
    first_name,
    last_name,
    username,
    email,
    password,
    date_of_birth,
    gender,
    address_street,
    address_city,
    address_state,
    address_zip,
    phone_number,
    role // Add role parameter
  } = req.body;

  // Perform validation on user input

  const q =
    'INSERT INTO users (`first_name`, `last_name`, `username`, `email`, `password_hash`, `date_of_birth`, `gender`, `address_street`, `address_city`, `address_state`, `address_zip`, `phone_number`, `role`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    first_name,
    last_name,
    username,
    email,
    password, // Note: It's recommended to hash the password before storing it
    date_of_birth,
    gender,
    address_street,
    address_city,
    address_state,
    address_zip,
    phone_number,
    role // Add role parameter
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error('Error executing registration query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Registration successful
    return res.json({ success: true, user: data.insertId });
  });
});

app.delete('/register/:userId', (req, res) => {
  const userId = req.params.userId;
  const q = 'DELETE FROM users WHERE user_id = ?';

  db.query(q, [userId], (err, data) => {
    if (err) {
      console.error('Error executing delete query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Deletion successful
    return res.json({ success: true });
  });
});

app.put('/register/:userId', (req, res) => {
  const userId = req.params.userId;
  const {
    first_name,
    last_name,
    username,
    email,
    date_of_birth,
    gender,
    address_street,
    address_city,
    address_state,
    address_zip,
    phone_number,
    role // Add role parameter
  } = req.body;

  // Perform validation on user input

  const q =
    'UPDATE users SET `first_name`=?, `last_name`=?, `username`=?, `email`=?, `date_of_birth`=?, `gender`=?, `address_street`=?, `address_city`=?, `address_state`=?, `address_zip`=?, `phone_number`=?, `role`=? WHERE user_id=?';
  const values = [
    first_name,
    last_name,
    username,
    email,
    date_of_birth,
    gender,
    address_street,
    address_city,
    address_state,
    address_zip,
    phone_number,
    role, // Add role parameter
    userId
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error('Error executing update query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Update successful
    return res.json({ success: true });
  });
});


app.listen(8800, () => {
  console.log('Connected to the backend!');
});
