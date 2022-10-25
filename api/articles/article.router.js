const express = require('express');
const articleController = require('./article.controller');
const router = express.Router()

router.get("/", articleController.getAll);
router.get("/:id", articleController.getById);

module.exports = router