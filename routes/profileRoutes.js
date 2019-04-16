const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res, next) => {
  res.json({ dashboardElements: [1, 2, 3, 4] })
});

router.get('/terms-and-conditions', (req, res, next) => {
  res.json({ termsAndConditions: true })
});

module.exports = router;
