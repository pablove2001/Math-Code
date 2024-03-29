import Menu from "@/components/Menu";
import { TypeOptionMenu } from "@/types/TypeOptionMenu";

export default function Home() {
  const optionMenu: TypeOptionMenu[] = [
    {
      text: "Addition",
      navegateTo: "/addition",
      color: "bg-orange-400",
    },
    {
      text: "Subtraction",
      navegateTo: "/subtraction",
      color: "bg-blue-400",
    },
    {
      text: "Division",
      navegateTo: "/division",
      color: "bg-orange-300",
    },
    {
      text: "Multiplication",
      navegateTo: "/addition",
      color: "bg-red-400",
    },
    {
      text: "Random",
      navegateTo: "/random",
      color: "bg-gray-400",
    },
    {
      text: "Add operators",
      navegateTo: "/add-operators",
      color: "bg-green-400",
    },
  ];
  return <Menu title="Math Code" optionMenu={optionMenu} />;
}
