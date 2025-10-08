import React from "react";
import { NavLink, useLocation } from "react-router";
import { paths } from "../../../routes/paths";
import { Icons } from "../../../assets/icons/IconsProvider";
import { Tooltip } from "@heroui/react";
const {
  IconDashboardFill,
  IconDashboardStroke,
  IconClipboardFill,
  IconClipboardStroke,
} = Icons;

export const OptionsEmployee = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Tooltip content="Panel de control" placement="right" showArrow={true}>
        <NavLink
          end
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-green-1-custom" : "bg-white"
            } w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-1-custom transition-all duration-200`
          }
          to={paths.LAYOUT}
        >
          <img
            className="lg:w-[22px] w-[20px]"
            src={
              pathname === paths.LAYOUT
                ? IconDashboardFill
                : IconDashboardStroke
            }
            alt=""
          />
        </NavLink>
      </Tooltip>
      <Tooltip content="Registro de vehículos" placement="right" showArrow={true}>
        <NavLink
          end
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-green-1-custom" : "bg-white"
            } w-12 h-12 rounded-full flex justify-center hover:bg-green-1-custom transition-all duration-200`
          }
          to={paths.REGISTERVEHICLE}
        >
          <img
            className="lg:w-[22px] w-[20px]"
            src={
              pathname === paths.REGISTERVEHICLE
                ? IconClipboardFill
                : IconClipboardStroke
            }
            alt=""
          />
        </NavLink>
      </Tooltip>
    </>
  );
};
