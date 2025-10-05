import React from "react";
import { Icons } from "../../assets/icons/IconsProvider";
import { Images } from "../../assets/images/ImagesProvider";
import { Button } from "@heroui/button";
import { InputPassword } from "../../shared/components/inputs/InputPassword";
import { InputSimple } from "../../shared/components/inputs/InputSimple";
import { Outlet } from "react-router";
const { IconCarBlack, IconMotorByBlack } = Icons;
const { ImageCarGroupMotorByLarge } = Images;

export const AuthLayout = () => {
  return (
    <main className="bg-bg-template w-full h-screen flex flex-row p-2 gap-4 overflow-hidden">
      <article className="bg-black-custom flex-1 rounded-[60px] py-10 px-16 flex flex-col">
        <div className="flex gap-4">
          <div className="rounded-full bg-green-1-custom p-2">
            <img className="w-8" src={IconCarBlack} alt="icon_car" />
          </div>
          <div className="rounded-full bg-green-1-custom p-2">
            <img className="w-8" src={IconMotorByBlack} alt="icon_motorby" />
          </div>
        </div>

        <div className=" flex-1 flex justify-center items-center">
          <div>
            <img src={ImageCarGroupMotorByLarge} alt="image_car_motor_large" />
          </div>
        </div>
        <div>
          <h1 className="text-white text-[35px] w-[65%]">
            Tu parqueadero, organizado y eficiente en segundos.
          </h1>
        </div>
      </article>

      <article className="bg-white flex-1 rounded-[60px] p-20 flex flex-col">
        <Outlet/>
      </article>
    </main>
  );
};
