import { NavLink, useLocation } from "react-router";
import { paths } from "../../../routes/paths";
import { Icons } from "../../../assets/icons/IconsProvider";
const { IconParkingFill, IconParkingStroke, IconUserFill, IconUserStroke } =
  Icons;

export const OptionsAdmin = () => {
  const { pathname } = useLocation();

  return (
    <>
      <NavLink
        end
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-green-1-custom" : "bg-white"
          } lg:w-15 lg:h-15 w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-1-custom transition-all duration-200`
        }
        to={paths.LAYOUT}
      >
        <img
          className="lg:w-[26px] w-[20px]"
          src={pathname === paths.LAYOUT ? IconParkingFill : IconParkingStroke}
          alt=""
        />
      </NavLink>
      <NavLink
        end
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-green-1-custom" : "bg-white"
          } lg:w-15 lg:h-15 w-12 h-12 rounded-full flex justify-center hover:bg-green-1-custom transition-all duration-200`
        }
        to={paths.USERS}
      >
        <img
          className="lg:w-[26px] w-[20px]"
          src={pathname === paths.USERS ? IconUserFill : IconUserStroke}
          alt=""
        />
      </NavLink>
    </>
  );
};
