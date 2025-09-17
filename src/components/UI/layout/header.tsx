'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";
import { signOutFunc } from "@/actions/sign-out";
import { useSession } from "next-auth/react";

export const BusIcon = () => {
  return (
    <svg
      className="w-9 h-9"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {/* корпус */}
      <rect x="4" y="12" width="56" height="32" rx="4" ry="4" fill="#FFB300" />
      {/* окна */}
      <rect x="12" y="16" width="10" height="12" rx="1" fill="#4FC3F7" />
      <rect x="24" y="16" width="10" height="12" rx="1" fill="#4FC3F7" />
      <rect x="36" y="16" width="10" height="12" rx="1" fill="#4FC3F7" />
      <rect x="48" y="16" width="6" height="12" rx="1" fill="#4FC3F7" />
      {/* двери */}
      <rect x="48" y="22" width="8" height="14" rx="1" fill="#F57C00" />
      {/* фары */}
      <circle cx="8" cy="34" r="2.5" fill="#FFF176" />
      <circle cx="56" cy="34" r="2.5" fill="#FFF176" />
      {/* колёса */}
      <circle cx="18" cy="48" r="6" fill="#212121" />
      <circle cx="18" cy="48" r="3" fill="#616161" />
      <circle cx="46" cy="48" r="6" fill="#212121" />
      <circle cx="46" cy="48" r="3" fill="#616161" />
      {/* нижняя линия */}
      <rect x="4" y="38" width="56" height="4" fill="#F57C00" />
    </svg>
  );
};


interface HeaderProps {
  mainNav: typeof siteConfig.mainNav;
}

export default function Header({ mainNav }: HeaderProps) {
  const pathname = usePathname();
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";

  const handleSignOut = async () => {
    await signOutFunc();
    window.location.reload();
  };

  return (
    <Navbar className={`h-[${siteConfig.header.height}] mb-4 row-start-1 w-full`} >
      <NavbarBrand>
        <Link
          className="flex items-center gap-2 text-inherit no-underline"
          href={"/"}
        >
          <BusIcon />
          <p className="font-bold text-inherit">{siteConfig.name}</p>
        </Link>

      </NavbarBrand>
      {isAuthenticated && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {mainNav.map((item) => {
            const isActive = item.href === pathname;
            return (
              <NavbarItem key={item.title}>
                <Link
                  className={isActive ? "nav-link-active" : "nav-link"}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            );
          }
          )}
        </NavbarContent>)}
      <NavbarContent justify="end">
        {isAuthenticated && <p className="text-base">{session?.user?.email}</p>}
        <NavbarItem className="hidden lg:flex">
          {!isAuthenticated ? (
            <Button as={Link} color="primary" href="#" variant="flat" onPress={() => setLoginOpen(true)}>
              Login
            </Button>) : (
            <Button as={Link} color="primary" href="#" variant="flat" onPress={handleSignOut}>
              Exit
            </Button>)}
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onPress={() => setRegistrationOpen(true)}>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setRegistrationOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </Navbar>
  );
}
