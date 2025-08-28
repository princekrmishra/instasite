import { HelpCircle, icons, LogOut, Settings, Wallet } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

/**
 * Sidebar footer component that renders navigation and account action buttons.
 *
 * Renders a set of footer options (Settings, Help Center, My Subscription, Sign Out)
 * as ghost-styled buttons. Clicking an option navigates to its `path` using the Next.js
 * router; clicking "Sign Out" clears `localStorage` and `sessionStorage` and redirects
 * to the root path ("/").
 *
 * @returns {JSX.Element} The footer element containing option buttons.
 */
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
