import * as RoutePath from "./routes.constant";

export const roles = {
  Recruiter: 1,
  Candidate: 2,
};

export const RoleRoutes = {
  [roles.Recruiter]: {
    roleID: roles.Recruiter,
    pages: [
      {
        key: "recuter-home",
        path: RoutePath.userManage,
        // component: ManageUser,
      },
    ],
  },
  [roles.Candidate]: {
    roleID: roles.Candidate,
    pages: [
      {
        key: "candidate-home",
        path: RoutePath.userManage,
        // component: ManageUser,
      },
    ],
  },
};
