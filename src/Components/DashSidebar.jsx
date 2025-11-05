import { useState } from "react";
import { Menu, X } from "lucide-react";

function DashSidebar() {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: "/home-line.png", iconActive: "/Solid.png" },
    { label: "Topics", icon: "/icon-park-outline_topic.png", iconActive: "/active_topic.png" },
    { label: "Preferences", icon: "/preferences.png", iconActive: "/preferences.png" },
    { label: "Characters", icon: "/character.png", iconActive: "/character.png" },
    { label: "Newsletter", icon: "/newsletter.png", iconActive: "/newsletter.png" },
    { label: "Automation", icon: "/fad_automation-4p.png", iconActive: "/fad_automation-4p.png" },
    { label: "Payments", icon: "/fluent_payment.png", iconActive: "/fluent_payment.png" },
  ];

  const preferenceItems = [
    { label: "Settings", icon: "/settings.png", iconActive: "/icons/settings.png" },
    { label: "Help Center", icon: "/help.png", iconActive: "/help.png" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded-md shadow-sm"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen lg:w-[20%] md:w-[40%] w-[65%] flex flex-col justify-between border-r border-[#E5E5E5] bg-[#F9F9FA] overflow-y-auto scrollbar-parent transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        onMouseEnter={(e) => e.currentTarget.classList.add("is-hovered")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("is-hovered")}
      >
        {/* Logo + Menus */}
        <div className="p-4">
          <div className="flex items-center gap-2 px-2 mb-8">
            <img src="/logo.png" alt="The Illuminated Press" className="w-[110px]" />
          </div>

          {/* Main menu */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-400 mb-2 px-2">MAIN MENU</p>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  iconActive={item.iconActive}
                  active={active === item.label}
                  onClick={() => {
                    setActive(item.label);
                    setOpen(false);
                  }}
                  className="font-semibold text-[16px]"
                />
              ))}
            </nav>
          </div>

          {/* Preference section */}
          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2 px-2">PREFERENCE</p>
            <nav className="flex flex-col gap-1">
              {preferenceItems.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  iconActive={item.iconActive}
                  active={active === item.label}
                  onClick={() => {
                    setActive(item.label);
                    setOpen(false);
                  }}
                  className="font-semibold text-[16px]"
                />
              ))}
            </nav>
          </div>
        </div>

        {/* Footer / Plan card */}
        <div className="p-4 border-t border-[#E5E5E5] md:mt-50">
          <div className="bg-[#EFF5ED] rounded-lg p-2.5 text-sm mb-2">
            <div className="flex items-start justify-between mb-3">
              <button className="flex bg-[#619746] items-center gap-1 font-medium text-white h-9 px-3 rounded-md relative">
                <img src="/Vector.png" alt="" className="absolute left-0" />
                <img src="/flame.png" alt="Plan" />
                <p className="text-xs font-semibold">Basic Plan</p>
              </button>
              <button className="text-[#73757C] text-sm">✕</button>
            </div>
            <p className="text-gray-600 text-xs">
              Upgrade to premium and enjoy the benefits for a long time –
              <span className="text-green-700 font-medium"> 24 Monday</span>
            </p>
            <button className="w-full mt-3 border bg-white border-gray-300 text-gray-800 rounded-md py-1.5 text-sm font-medium hover:bg-gray-100">
              Purchase New Plan
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ label, icon, iconActive, active, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left transition
        ${
          active
            ? "bg-white [box-shadow:0px_0px_0px_1px_#E5E5E5,0px_4px_8px_-5px_#00000026] text-gray-900 font-medium"
            : "text-gray-600 hover:bg-gray-50"
        }
        ${className}`}
    >
      <img
        src={active ? iconActive : icon}
        alt={label}
        className="w-5 h-5 object-contain"
      />
      <span>{label}</span>
    </button>
  );
}

export default DashSidebar;
