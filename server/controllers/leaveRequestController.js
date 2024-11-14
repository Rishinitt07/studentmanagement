const { sql } = require('../config/db');

const createLeaveRequest = async (req, res) => {
  const { subject, content } = req.body;
  const studentId = req.user.studentId;  

  if (!subject || !content) {
    return res.status(400).json({ message: 'Subject and Content are required' });
  }

  try {
    await sql.query`
      INSERT INTO LeaveRequest (Subject, Content, StudentID)
      VALUES (${subject}, ${content}, ${studentId})
    `;

    return res.status(201).json({ message: 'Leave request submitted successfully' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getMyLeaveRequests = async (req, res) => {
  const studentId = req.user.studentId;

  try {
    const result = await sql.query`SELECT * FROM LeaveRequest WHERE StudentID = ${studentId}`;
    return res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createLeaveRequest, getMyLeaveRequests };
