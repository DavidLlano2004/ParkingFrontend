import { Skeleton } from "@heroui/react";
import React from "react";

export const SkeletonParkings = () => {
  return (
    <section className=" bg-white flex-12 rounded-[30px] px-10 py-8">
      <div>
        <div className="flex items-center justify-between  flex-wrap">
          <Skeleton className="rounded-[25px]" isLoaded={false}>
            <div className="h-[37px] w-[157px] rounded-lg bg-secondary" />
          </Skeleton>
          <div className="flex justify-between gap-3 lg:mt-0 mt-5 lg:w-auto w-full">
            <div className="lg:w-auto flex-2">
              <Skeleton className="rounded-[25px]" isLoaded={false}>
                <div className="h-[45px] w-[249px] rounded-lg bg-secondary" />
              </Skeleton>
            </div>
            <div className="lg:flex-1">
              <Skeleton className="rounded-[25px]" isLoaded={false}>
                <div className="h-[45px] w-[214px] rounded-lg bg-secondary" />
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-left text-gray-500">
              <thead className="text-sm text-[#878787] border-b border-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[30px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[30px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 lg:table-cell hidden text-center"
                  >
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[30px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[30px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[30px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200 text-sm">
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="rounded-2xl" isLoaded={false}>
                        <div className="w-14 h-14 bg-secondary rounded-2xl" />
                      </Skeleton>
                      <div className="flex flex-col gap-1">
                        <Skeleton className="rounded-[25px]" isLoaded={false}>
                          <div className="h-[15px] w-[100px] bg-secondary rounded-lg" />
                        </Skeleton>
                        <Skeleton className="rounded-[25px]" isLoaded={false}>
                          <div className="h-[12px] w-[80px] bg-secondary rounded-lg" />
                        </Skeleton>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[60px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4 text-center lg:table-cell hidden">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[60px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Skeleton className="rounded-[25px]" isLoaded={false}>
                      <div className="h-[13px] w-[60px] bg-secondary rounded-lg" />
                    </Skeleton>
                  </td>
                  <td className="text-center">
                    <div className="flex gap-3 justify-center">
                      <Skeleton className="rounded-2xl" isLoaded={false}>
                        <div className="w-10 h-10 bg-secondary rounded-2xl" />
                      </Skeleton>
                      <Skeleton className="rounded-2xl" isLoaded={false}>
                        <div className="w-10 h-10 bg-secondary rounded-2xl" />
                      </Skeleton>
                      <Skeleton className="rounded-2xl" isLoaded={false}>
                        <div className="w-10 h-10 bg-secondary rounded-2xl" />
                      </Skeleton>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
