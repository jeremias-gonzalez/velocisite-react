import { useState , useEffect } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from "./Logo";
import Handlemode from "./Handlemode";


export default function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');

    const handleSidebarToggle = (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
        console.log('Sidebar Toggled');
    };

    const handleDocumentClick = (e) => {
        if (sidebar && openSidebarButton) {
            // Verifica si el clic está fuera del sidebar y del botón
            if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
                sidebar.classList.add('-translate-x-full');
                console.log('Sidebar Closed');
            }
        }
    };

    if (openSidebarButton) {
        openSidebarButton.addEventListener('click', handleSidebarToggle);
    }

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', handleDocumentClick);

    return () => {
        // Limpieza al desmontar el componente
        if (openSidebarButton) {
            openSidebarButton.removeEventListener('click', handleSidebarToggle);
        }
        document.removeEventListener('click', handleDocumentClick);
    };
}, []);
  const menuItems = [
    "Home",
    "About",
    "Proyects",
    "Services",
    "FAQ`S",
    "Contact",
   
  ];

  return (
    <Navbar
      
    
      onMenuOpenChange={setIsMenuOpen}
      className="  bg-transparent backdrop-blur-sm bg-gray/30 dark:backdrop-blur-sm dark:bg-white/10 "
    >
      <NavbarContent className="sm:hidden  " justify="start">
        <NavbarMenuToggle  aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3  " justify="center">
        <NavbarBrand>
         
   
         <Logo/>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4  mx-64 my-2 " justify="center">
      
        <NavbarBrand>
    
       
        </NavbarBrand>
      
        <NavbarItem>
        
          <Link className="text-green  font-bold" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-black font-bold">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-green font-bold" href="#">
            Proyects
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link className="text-black font-bold" href="#">
            Services
          </Link>
        </NavbarItem>
          <Link className="text-green font-bold" href="#">
            FAQ`S
          </Link>
       
        <NavbarItem>
          <Link className="text-black font-bold" href="#">
           Contact
          </Link>
        </NavbarItem>
        
      </NavbarContent>
     
     
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
       
        </NavbarItem>
        <NavbarItem>
        <Handlemode/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className=" backdrop-blur bg-gray/10 dark:backdrop-blur dark:bg-white/10  dark:rounded-sm">
        {menuItems .map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-bolder "
              color={
                index === 2 ? "green" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}