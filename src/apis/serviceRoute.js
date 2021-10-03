export const serviceRoute = {
  login: { url: "auth/login", type: "post" },
  register: { url: "auth/register", type: "post" },
  resetPassword: (email) => ({
    url: `auth/resetpassword?email=${email}`,
    type: "get",
  }),
  verifyPasswordToken: (token) => ({
    url: `auth/resetpassword/${token}`,
    type: "get",
  }),
  changePassword: { url: `auth/resetpassword`, type: "post" },
  createJob: { url: "jobs", type: "post" },
  getJobDetail: (jobId) => ({
    url: `jobs/${jobId}`,
    type: "get",
  }),
  getAllJob: { url: "jobs", type: "get" },
  deleteJob: { url: "jobs", type: "delete" },
  applyJob: { url: "candidates/jobs", type: "post" },
  getAvailableJobs: { url: "candidates/jobs", type: "get" },
  getAppliedJobs: { url: "candidates/jobs/applied", type: "get" },
  getPostedJobs: { url: "recruiters/jobs", type: "get" },
  getCondidateJob: (jobId) => ({
    url: `recruiters/jobs/${jobId}/candidates`,
    type: "get",
  }),
};
