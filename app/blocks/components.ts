import type { ComponentType } from "react";
import Login01 from "./login-01/block";
import Login02 from "./login-02/block";
import Login03 from "./login-03/block";
import Login04 from "./login-04/block";
import Login05 from "./login-05/block";
import Signup01 from "./signup-01/block";
import Signup02 from "./signup-02/block";
import Signup03 from "./signup-03/block";
import Signup04 from "./signup-04/block";
import Signup05 from "./signup-05/block";

/** The component for each built block, by id. registry.ts holds everything else about it. */
export const blockComponents: Record<string, ComponentType> = {
  "login-01": Login01,
  "login-02": Login02,
  "login-03": Login03,
  "login-04": Login04,
  "login-05": Login05,
  "signup-01": Signup01,
  "signup-02": Signup02,
  "signup-03": Signup03,
  "signup-04": Signup04,
  "signup-05": Signup05,
};
