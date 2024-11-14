const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sql } = require('../config/db');

const signup = async (req, res) => {
  const { username, password, name } = req.body;

  try {
    const result = await sql.query`SELECT * FROM StudentInfo WHERE Username = ${username}`;
    if (result.recordset.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql.query`
      INSERT INTO StudentInfo (Username, Password, Name)
      VALUES (${username}, ${hashedPassword}, ${name})
    `;
    
    return res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await sql.query`SELECT * FROM StudentInfo WHERE Username = ${username}`;
    if (result.recordset.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = result.recordset[0];

    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { studentId: user.StudentID, username: user.Username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    return res.status(200).json({
      message: 'Login successful',
      token,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login };
