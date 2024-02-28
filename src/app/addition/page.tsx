import Menu from "@/components/Menu";
import { TypeOptionMenu } from "@/types/TypeOptionMenu";

export default function Addition() {
  const optionMenu: TypeOptionMenu[] = [
    {
      text: "Enter the result",
      navegateTo: "/addition",
      color: "bg-orange-400",
    },
    {
      text: "Complete the operation",
      navegateTo: "/subtraction",
      color: "bg-blue-400",
    },
    {
      text: "Greater, less than, or equal to",
      navegateTo: "/division",
      color: "bg-orange-300",
    },
    {
      text: "Random",
      navegateTo: "/addition",
      color: "bg-red-400",
    },
  ];
  return <Menu title="Adition" optionMenu={optionMenu} />;
}
