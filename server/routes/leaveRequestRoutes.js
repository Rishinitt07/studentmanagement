const express = require('express');
const { createLeaveRequest, getMyLeaveRequests } = require('../controllers/leaveRequestController');
const authMiddleware = require('../middleware/authMiddleware');  

const router = express.Router();

router.post('/create', authMiddleware, createLeaveRequest);

router.get('/my-requests', authMiddleware, getMyLeaveRequests);

module.exports = router;
