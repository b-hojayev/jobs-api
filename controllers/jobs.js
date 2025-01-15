const getAllJobs = (req, res) => {
  res.json(req.user);
};

const getSingleJob = (req, res) => {
  res.send("single job");
};

const createJob = (req, res) => {
  res.send("create");
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
