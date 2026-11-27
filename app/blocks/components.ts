import type { ComponentType } from "react";
import Dashboard01 from "./dashboard-01/block";
import Preview from "./preview/block";
import Preview02 from "./preview-02/block";
import Login01 from "./login-01/block";
import Login02 from "./login-02/block";
import Login03 from "./login-03/block";
import Login04 from "./login-04/block";
import Login05 from "./login-05/block";
import ChartAreaAxes from "./chart-area-axes/block";
import ChartAreaDefault from "./chart-area-default/block";
import ChartAreaInteractive from "./chart-area-interactive/block";
import ChartAreaLegend from "./chart-area-legend/block";
import ChartAreaLinear from "./chart-area-linear/block";
import ChartAreaStacked from "./chart-area-stacked/block";
import ChartAreaStackedExpand from "./chart-area-stacked-expand/block";
import ChartAreaStep from "./chart-area-step/block";
import ChartLineDefault from "./chart-line-default/block";
import ChartLineDots from "./chart-line-dots/block";
import ChartLineInteractive from "./chart-line-interactive/block";
import ChartLineLabel from "./chart-line-label/block";
import ChartLineLinear from "./chart-line-linear/block";
import ChartLineMultiple from "./chart-line-multiple/block";
import ChartLineStep from "./chart-line-step/block";
import ChartBarDefault from "./chart-bar-default/block";
import ChartBarMultiple from "./chart-bar-multiple/block";
import ChartBarInteractive from "./chart-bar-interactive/block";
import ChartBarActive from "./chart-bar-active/block";
import ChartBarHorizontal from "./chart-bar-horizontal/block";
import ChartBarLabel from "./chart-bar-label/block";
import ChartBarLabelCustom from "./chart-bar-label-custom/block";
import ChartBarMixed from "./chart-bar-mixed/block";
import ChartBarNegative from "./chart-bar-negative/block";
import ChartBarStacked from "./chart-bar-stacked/block";
import ChartPieSimple from "./chart-pie-simple/block";
import ChartPieDonut from "./chart-pie-donut/block";
import ChartPieDonutActive from "./chart-pie-donut-active/block";
import ChartPieDonutText from "./chart-pie-donut-text/block";
import ChartPieLabel from "./chart-pie-label/block";
import ChartPieLabelCustom from "./chart-pie-label-custom/block";
import ChartPieLabelList from "./chart-pie-label-list/block";
import ChartPieLegend from "./chart-pie-legend/block";
import ChartPieSeparatorNone from "./chart-pie-separator-none/block";
import ChartPieStacked from "./chart-pie-stacked/block";
import ChartRadialSimple from "./chart-radial-simple/block";
import ChartRadialLabel from "./chart-radial-label/block";
import ChartRadialGrid from "./chart-radial-grid/block";
import ChartRadialText from "./chart-radial-text/block";
import ChartRadialShape from "./chart-radial-shape/block";
import ChartRadialStacked from "./chart-radial-stacked/block";
import ChartRadarDefault from "./chart-radar-default/block";
import ChartRadarDots from "./chart-radar-dots/block";
import ChartRadarMultiple from "./chart-radar-multiple/block";
import ChartRadarLinesOnly from "./chart-radar-lines-only/block";
import ChartRadarLegend from "./chart-radar-legend/block";
import ChartRadarGridCircle from "./chart-radar-grid-circle/block";
import ChartRadarGridCircleFill from "./chart-radar-grid-circle-fill/block";
import ChartRadarGridCircleNoLines from "./chart-radar-grid-circle-no-lines/block";
import ChartRadarGridCustom from "./chart-radar-grid-custom/block";
import ChartRadarGridFill from "./chart-radar-grid-fill/block";
import ChartRadarGridNone from "./chart-radar-grid-none/block";
import ChartPieInteractive from "./chart-pie-interactive/block";
import ChartAreaGradient from "./chart-area-gradient/block";
import ChartAreaIcons from "./chart-area-icons/block";
import ChartLineDotsColors from "./chart-line-dots-colors/block";
import ChartLineDotsCustom from "./chart-line-dots-custom/block";
import ChartLineLabelCustom from "./chart-line-label-custom/block";
import ChartRadarIcons from "./chart-radar-icons/block";
import ChartRadarLabelCustom from "./chart-radar-label-custom/block";
import ChartRadarRadius from "./chart-radar-radius/block";
import ChartTooltipDefault from "./chart-tooltip-default/block";
import ChartTooltipIndicatorLine from "./chart-tooltip-indicator-line/block";
import ChartTooltipIndicatorNone from "./chart-tooltip-indicator-none/block";
import ChartTooltipLabelCustom from "./chart-tooltip-label-custom/block";
import ChartTooltipLabelFormatter from "./chart-tooltip-label-formatter/block";
import ChartTooltipLabelNone from "./chart-tooltip-label-none/block";
import ChartTooltipFormatter from "./chart-tooltip-formatter/block";
import ChartTooltipIcons from "./chart-tooltip-icons/block";
import ChartTooltipAdvanced from "./chart-tooltip-advanced/block";
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
  "dashboard-01": Dashboard01,
  preview: Preview,
  "preview-02": Preview02,
  "login-01": Login01,
  "login-02": Login02,
  "login-03": Login03,
  "login-04": Login04,
  "login-05": Login05,
  "chart-area-axes": ChartAreaAxes,
  "chart-area-default": ChartAreaDefault,
  "chart-area-interactive": ChartAreaInteractive,
  "chart-area-legend": ChartAreaLegend,
  "chart-area-linear": ChartAreaLinear,
  "chart-area-stacked": ChartAreaStacked,
  "chart-area-stacked-expand": ChartAreaStackedExpand,
  "chart-area-step": ChartAreaStep,
  "chart-line-default": ChartLineDefault,
  "chart-line-dots": ChartLineDots,
  "chart-line-interactive": ChartLineInteractive,
  "chart-line-label": ChartLineLabel,
  "chart-line-linear": ChartLineLinear,
  "chart-line-multiple": ChartLineMultiple,
  "chart-line-step": ChartLineStep,
  "chart-bar-default": ChartBarDefault,
  "chart-bar-multiple": ChartBarMultiple,
  "chart-bar-interactive": ChartBarInteractive,
  "chart-bar-active": ChartBarActive,
  "chart-bar-horizontal": ChartBarHorizontal,
  "chart-bar-label": ChartBarLabel,
  "chart-bar-label-custom": ChartBarLabelCustom,
  "chart-bar-mixed": ChartBarMixed,
  "chart-bar-negative": ChartBarNegative,
  "chart-bar-stacked": ChartBarStacked,
  "chart-pie-simple": ChartPieSimple,
  "chart-pie-donut": ChartPieDonut,
  "chart-pie-donut-active": ChartPieDonutActive,
  "chart-pie-donut-text": ChartPieDonutText,
  "chart-pie-label": ChartPieLabel,
  "chart-pie-label-custom": ChartPieLabelCustom,
  "chart-pie-label-list": ChartPieLabelList,
  "chart-pie-legend": ChartPieLegend,
  "chart-pie-separator-none": ChartPieSeparatorNone,
  "chart-pie-stacked": ChartPieStacked,
  "chart-radial-simple": ChartRadialSimple,
  "chart-radial-label": ChartRadialLabel,
  "chart-radial-grid": ChartRadialGrid,
  "chart-radial-text": ChartRadialText,
  "chart-radial-shape": ChartRadialShape,
  "chart-radial-stacked": ChartRadialStacked,
  "chart-radar-default": ChartRadarDefault,
  "chart-radar-dots": ChartRadarDots,
  "chart-radar-multiple": ChartRadarMultiple,
  "chart-radar-lines-only": ChartRadarLinesOnly,
  "chart-radar-legend": ChartRadarLegend,
  "chart-radar-grid-circle": ChartRadarGridCircle,
  "chart-radar-grid-circle-fill": ChartRadarGridCircleFill,
  "chart-radar-grid-circle-no-lines": ChartRadarGridCircleNoLines,
  "chart-radar-grid-custom": ChartRadarGridCustom,
  "chart-radar-grid-fill": ChartRadarGridFill,
  "chart-radar-grid-none": ChartRadarGridNone,
  "chart-pie-interactive": ChartPieInteractive,
  "chart-area-gradient": ChartAreaGradient,
  "chart-area-icons": ChartAreaIcons,
  "chart-line-dots-colors": ChartLineDotsColors,
  "chart-line-dots-custom": ChartLineDotsCustom,
  "chart-line-label-custom": ChartLineLabelCustom,
  "chart-radar-icons": ChartRadarIcons,
  "chart-radar-label-custom": ChartRadarLabelCustom,
  "chart-radar-radius": ChartRadarRadius,
  "chart-tooltip-default": ChartTooltipDefault,
  "chart-tooltip-indicator-line": ChartTooltipIndicatorLine,
  "chart-tooltip-indicator-none": ChartTooltipIndicatorNone,
  "chart-tooltip-label-custom": ChartTooltipLabelCustom,
  "chart-tooltip-label-formatter": ChartTooltipLabelFormatter,
  "chart-tooltip-label-none": ChartTooltipLabelNone,
  "chart-tooltip-formatter": ChartTooltipFormatter,
  "chart-tooltip-icons": ChartTooltipIcons,
  "chart-tooltip-advanced": ChartTooltipAdvanced,
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
