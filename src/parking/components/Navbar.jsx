import { useSelector } from "react-redux";
import { Images } from "../../assets/images/ImagesProvider";
import { NavLink, useLocation } from "react-router";
import { paths } from "../../routes/paths";
import { Icons } from "../../assets/icons/IconsProvider";
import { OptionsAdmin } from "./optionsRoles/OptionsAdmin";
import { OptionsEmployee } from "./optionsRoles/OptionsEmployee";
import { useLogout } from "../../auth/hooks/useLogout";
const { ImageAdmin, ImageEmployee } = Images;
const { IconLogoutStroke, IconSettingsFill, IconSettingsStroke } = Icons;

export const Navbar = () => {
  const { mutationLogout } = useLogout();
  const { rol } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <section className="flex-1 py-8 flex flex-col justify-between">
      <div className=" flex justify-center">
        <img
          className="lg:w-15 w-12"
          src={rol === "Administrativo" ? ImageAdmin : ImageEmployee}
          alt="image_profile"
        />
      </div>
      <div className="flex justify-center flex-col items-center gap-3">
        {rol === "Administrativo" ? <OptionsAdmin /> : <OptionsEmployee />}
      </div>
      <div className="flex justify-center flex-col items-center gap-3">
        <NavLink
          end
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-green-1-custom" : "bg-white"
            } lg:w-15 lg:h-15 w-12 h-12 rounded-full flex justify-center hover:bg-green-1-custom transition-all duration-200`
          }
          to={paths.SETTINGS}
        >
          <img
            className="lg:w-[26px] w-[20px]"
            src={
              pathname === paths.SETTINGS
                ? IconSettingsFill
                : IconSettingsStroke
            }
            alt=""
          />
        </NavLink>
        <button
          onClick={() => mutationLogout.mutate()}
          className={
            "lg:w-15 lg:h-15 w-12 h-12 rounded-full flex justify-center bg-white hover:bg-green-1-custom transition-all duration-200 cursor-pointer"
          }
        >
          <img
            className="lg:w-[26px] w-[20px]"
            src={IconLogoutStroke}
            alt="icon_logout"
          />
        </button>
      </div>
    </section>
  );
};
