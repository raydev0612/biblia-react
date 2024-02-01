import { Next } from "./CreateNext";
import { CreateRA } from "./CreateRA";
import { Vite } from "./CreateVite";
import Tabs from "./Tabs";
// import "./Tabs.css";

export default function TabTest() {
  const tabs = [
    {
      label: "Create React App",
      content: <CreateRA />,
    },
    {
      label: "Vite",
      content: <Vite />,
    },
    {
      label: "Next",
      content: <Next />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
