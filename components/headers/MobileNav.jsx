"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function MobileNav() {
  const pathname = usePathname();

  // Check if a menu item or its submenu matches the current path
  const checkActiveLink = (item) => {
    if (item.subMenu?.length) {
      return item.subMenu.some(
        (elm) => elm.href.split("/")[1] === pathname.split("/")[1]
      );
    }
    return item.href.split("/")[1] === pathname.split("/")[1];
  };

  // Toggle a submenu open or closed
  const toggleSubMenu = (index) => {
    const menuItemGroups = document.querySelectorAll(
      "#mainnav-mobi .menu-item-has-children"
    );
    const currentItem = menuItemGroups[index];
    const subMenu = currentItem.querySelector(".sub-menu");

    if (!subMenu) return;

    // Collapse all other submenus
    menuItemGroups.forEach((item, i) => {
      if (i !== index) item.querySelector(".sub-menu").style.height = "0px";
    });

    // Toggle current submenu
    const computedHeight = window.getComputedStyle(subMenu).height;
    subMenu.style.height =
      computedHeight === "0px" ? subMenu.scrollHeight + "px" : "0px";

    // Ensure mobile menu expands to fit content
    const mobileMenu = document.querySelector("#mainnav-mobi .menu");
    mobileMenu.style.height = "fit-content";
  };

  // Close the entire mobile menu (called on any link click)
  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector("#mainnav-mobi .menu");
    const toggler = document.querySelector(".btn-menu");
    if (mobileMenu && toggler) {
      mobileMenu.style.height = "0px";
      toggler.classList.remove("active");

      // Collapse all submenus
      const subMenus = document.querySelectorAll("#mainnav-mobi .sub-menu");
      subMenus.forEach((sm) => (sm.style.height = "0px"));
    }
  };

  // Automatically collapse mobile menu if window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) closeMobileMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="mainnav-mobi" className="mainnav">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${item.className} ${checkActiveLink(item) ? "active" : ""}`}
          >
            {item.subMenu.length ? (
              <>
                <a onClick={() => toggleSubMenu(index)}>{item.title}</a>
                <span className="btn-submenu" onClick={() => toggleSubMenu(index)} />
                <ul className="sub-menu">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={checkActiveLink(subItem) ? "active" : ""}
                    >
                      <Link href={subItem.href} title="" onClick={closeMobileMenu}>
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href} title="" onClick={closeMobileMenu}>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
