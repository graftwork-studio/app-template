import type { ComponentType } from "react";
import Login01 from "./login-01/block";
import Login02 from "./login-02/block";
import Login03 from "./login-03/block";
import Login04 from "./login-04/block";
import Login05 from "./login-05/block";
import ChartBarDefault from "./chart-bar-default/block";
import ChartBarMultiple from "./chart-bar-multiple/block";
import ChartBarInteractive from "./chart-bar-interactive/block";
import Sidebar01 from "./sidebar-01/block";
import Sidebar02 from "./sidebar-02/block";
import Sidebar03 from "./sidebar-03/block";
import Sidebar04 from "./sidebar-04/block";
import Sidebar05 from "./sidebar-05/block";
import Sidebar06 from "./sidebar-06/block";
import Sidebar07 from "./sidebar-07/block";
import Sidebar08 from "./sidebar-08/block";
import Sidebar09 from "./sidebar-09/block";
import Sidebar10 from "./sidebar-10/block";
import Sidebar11 from "./sidebar-11/block";
import Sidebar12 from "./sidebar-12/block";
import Sidebar13 from "./sidebar-13/block";
import Sidebar14 from "./sidebar-14/block";
import Sidebar15 from "./sidebar-15/block";
import Sidebar16 from "./sidebar-16/block";
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
  "chart-bar-default": ChartBarDefault,
  "chart-bar-multiple": ChartBarMultiple,
  "chart-bar-interactive": ChartBarInteractive,
  "sidebar-01": Sidebar01,
  "sidebar-02": Sidebar02,
  "sidebar-03": Sidebar03,
  "sidebar-04": Sidebar04,
  "sidebar-05": Sidebar05,
  "sidebar-06": Sidebar06,
  "sidebar-07": Sidebar07,
  "sidebar-08": Sidebar08,
  "sidebar-09": Sidebar09,
  "sidebar-10": Sidebar10,
  "sidebar-11": Sidebar11,
  "sidebar-12": Sidebar12,
  "sidebar-13": Sidebar13,
  "sidebar-14": Sidebar14,
  "sidebar-15": Sidebar15,
  "sidebar-16": Sidebar16,
  "signup-01": Signup01,
  "signup-02": Signup02,
  "signup-03": Signup03,
  "signup-04": Signup04,
  "signup-05": Signup05,
};
