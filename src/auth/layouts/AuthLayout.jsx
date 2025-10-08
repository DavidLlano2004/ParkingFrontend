import React from "react";
import { Icons } from "../../assets/icons/IconsProvider";
import { Images } from "../../assets/images/ImagesProvider";
import { Button } from "@heroui/button";
import { InputPassword } from "../../shared/components/inputs/InputPassword";
import { InputSimple } from "../../shared/components/inputs/InputSimple";
import { Outlet } from "react-router";
const { IconCarBlack, IconMotorByBlack } = Icons;
const { ImageCarGroupMotorByLarge } = Images;

export default function AuthLayout() {
  return (
    <main className="bg-bg-template w-full h-screen flex lg:flex-row flex-col lg:p-3 p-0 gap-4 lg:overflow-hidden">
      <article className="bg-black-custom flex-1 lg:rounded-[60px] rounded-br-[60px] rounded-bl-[60px] py-10 lg:px-16 px-10 flex-col flex">
        <div className="flex gap-4">
          <div className="rounded-full bg-green-1-custom p-2">
            <img className="w-6 xl:w-8" src={IconCarBlack} alt="icon_car" />
          </div>
          <div className="rounded-full bg-green-1-custom p-2">
            <img
              className="w-6 xl:w-8"
              src={IconMotorByBlack}
              alt="icon_motorby"
            />
          </div>
        </div>

        <div className=" flex-1 flex justify-center items-center">
          <div>
            <img
              className="lg:w-auto w-[400px]"
              src={ImageCarGroupMotorByLarge}
              alt="image_car_motor_large"
            />
          </div>
        </div>
        <div>
          <h1 className="text-white xl:text-[35px] lg:text-[30px] text-lg lg:text-start text-center xl:w-[65%]">
            Tu parqueadero, organizado y eficiente en segundos.
          </h1>
        </div>
      </article>

      <article className="bg-white flex-1 rounded-[60px] p-10 flex flex-col">
        <Outlet />
      </article>
    </main>
  );
}
