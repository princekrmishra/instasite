import { HelpCircle, icons, LogOut, Settings, Wallet } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function SideBarFooter() {
  const router = useRouter();
  const options = [
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
    {
      name: "Help Center",
      icon: HelpCircle,
      path: "/help",
    },
    {
      name: "My Subscription",
      icon: Wallet,
      path: "/pricing",
    },
    {
      name: "Sign Out",
      icon: LogOut,
      action: "logout",
    },
  ];

  const onOptionClick = (option) => {
    if (option.path) {
      router.push(option.path);
    } else if (option.action === "logout") {
      localStorage.clear(); 
      sessionStorage.clear(); 

      // ✅ Redirect to home or login
      router.push("/");
    }
  };

  return (
    <div className="p-2 mb-10">
      {options.map((options, index) => (
        <Button
          variant="ghost"
          onClick={() => onOptionClick(options)}
          className="w-full flex justify-start my-3 cursor-pointer"
          key={index}
        >
          <options.icon />
          {options.name}
        </Button>
      ))}
    </div>
  );
}

export default SideBarFooter;
