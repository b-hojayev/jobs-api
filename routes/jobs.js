const express = require("express");
const router = express.Router();

const {
  createJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
  updateJob,
} = require("../controllers/jobs");

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:id", getSingleJob);
router.delete("/:id", deleteJob);
router.patch("/:id", updateJob);

module.exports = router;
