const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getSingleJob = async (req, res) => {
  const {
    params: { id: jobId },
    user: { userId },
  } = req;

  const job = await Job.findOne({ createdBy: userId, _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json(job);
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = (req, res) => {
  res.send("update job");
};

const deleteJob = (req, res) => {
  res.send("delete job");
};

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
  updateJob,
};
