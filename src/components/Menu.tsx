"use client";

import OptionMenu from "@/components/OptionMenu";
import { TypeOptionMenu } from "@/types/TypeOptionMenu";
import SettingIcon from "@/components/SettingIcon";

export default function Menu({
  title,
  optionMenu,
}: {
  title: string;
  optionMenu: TypeOptionMenu[];
}) {
  return (
    <div className="min-h-screen bg-emerald-200 flex flex-col justify-center items-center">
      <SettingIcon />
      <div className="p-5 mb-10 flex items-center justify-center bg-red-300 text-3xl">
        <h1>{title}</h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        {optionMenu.map((option, index) => (
          <OptionMenu
            key={index}
            text={option.text}
            navegateTo={option.navegateTo}
            color={option.color}
          />
        ))}
      </div>
    </div>
  );
}
