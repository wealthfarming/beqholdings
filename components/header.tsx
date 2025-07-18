'use client';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import menuData from '@/data/menu.json';
import { ListIcon, PlusIcon, XIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import React, { useState } from "react";

const PageHeader = () => {
    const menuItems = menuData.menu_items;

    return (
        <div className="w-full flex flex-row md:px-16 px-4 py-4 z-[2000]">
            <Sheet>
                <SheetTrigger>
                    <div className="md:hidden flex items-center justify-center ">
                        <p className="text-gray-600 dark:text-gray-300 flex items-center w-16 h-16 p-4 rounded-full bg-gray-200 dark:bg-[#9690a214]">
                            <ListIcon size={28} />
                        </p>
                    </div>
                </SheetTrigger>
                <SheetContent side='left' showCloseButton={false}>
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex items-center  px-4 py-4">
                                <SheetPrimitive.Close className="ring-offset-background focus:ring-ring  data-[state=open]:bg-secondary  rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
                                    <div className="flex items-center justify-center ">
                                        <p className="text-gray-600 dark:text-gray-300 flex items-center w-16 h-16 p-4 rounded-full bg-gray-200 dark:bg-[#9690a214]">
                                            <XIcon size={28} />
                                        </p>
                                    </div>
                                </SheetPrimitive.Close>
                            </div>
                        </SheetTitle>

                        <div className="flex flex-col gap-5 pt-4">
                            {
                                menuItems.map((item, index) => (
                                    <div key={`${item.title.en}-${index}`}>
                                        {item.children.length > 0 ? (
                                            <ExpandableMenuItem item={
                                                {
                                                    title: item.title.en,
                                                    link: item.url,
                                                    child: item.children.map((child: any) => ({
                                                        title: child.title.en,
                                                        link: child.url,
                                                        child: child.children || [],
                                                        open_in_new_tab: child.open_in_new_tab || false
                                                    }))
                                                }
                                            } />
                                        ) : (
                                            <a
                                                href={item.url}
                                                className="text-gray-800 dark:text-gray-200 hover:underline"
                                                target='_self'
                                            >
                                                {item.title.en}
                                            </a>
                                        )}
                                    </div>
                                ))
                            }
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-[0.95rem] text-start mt-4">
                            © 2016-2023
                            <a href="https://beqholdings.com/" target="_blank" rel="noopener" className="text-[#bf9b30] px-2">BeQ Holdings.</a>
                            All rights reserved
                        </p>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <a
                href="/"
                className=" items-center justify-start md:pl-16 pl-4 flex "
            >
                <Image
                    src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752715746/BEQ-HOLDINGS-logo-dark_nvnrsd.png"
                    alt="Logo"
                    width={100}
                    height={50}
                    className="mr-4 float-left"
                />
            </a>

            <NavigationMenu className='!w-full max-w-none z-[100] md:flex hidden'>

                <NavigationMenuList className="flex items-center justify-between w-full max-w-none">

                    <div className="flex w-full items-center justify-center gap-4">
                        {menuItems.map((item, index) => (
                            <NavigationMenuItem key={`${item.title.en}-${index}`}>
                                {item.children.length > 0 ? (
                                    <>
                                        <NavigationMenuTrigger>{item.title.en}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="p-2">
                                                <RenderMenuItems items={item.children} depth={1} />
                                            </div>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        href={item.url}
                                    // target={item.open_in_new_tab ? '_blank' : undefined}
                                    >
                                        {item.title.en}
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

function RenderMenuItems({ items, depth = 0 }: { items: any[]; depth?: number }) {
    return items.map((item, index) => (
        <div key={`${item.title.en}-${index}`} className={`pl-${depth * 4}`}>
            {item.children.length > 0 ? (
                <>
                    <NavigationMenuTrigger>{item.title.en}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="p-2">
                            <RenderMenuItems items={item.children} depth={depth + 1} />
                        </div>
                    </NavigationMenuContent>
                </>
            ) : (
                <NavigationMenuLink
                    href={item.url}
                    target={item.open_in_new_tab ? '_blank' : undefined}
                >
                    {item.title.en}
                </NavigationMenuLink>
            )}
        </div>
    ));
}

export default PageHeader;

type ExpandableMenuItemType = {
    title: string;
    link: string;
    child?: ExpandableMenuItemType[];
};

type ExpandableMenuProps = {
    items: ExpandableMenuItemType[];
};

const ExpandableMenu: React.FC<ExpandableMenuProps> = ({ items }) => {
    return (
        items.map((item, idx) => (
            <ExpandableMenuItem key={item.title + idx} item={item} />
        ))
    );
};

const ExpandableMenuItem: React.FC<{ item: ExpandableMenuItemType }> = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    const hasChild = item.child && item.child.length > 0;

    return (
        <div className="w-full ">
            <div
                className="flex items-center cursor-pointer justify-between select-none w-full "
                onClick={() => hasChild && setExpanded((prev) => !prev)}
            >
                <a
                    href={item.link}
                    className={`mr-2 hover:underline ${hasChild ? 'pointer-events-none ' : ''}`}
                    tabIndex={hasChild ? -1 : 0}
                    aria-disabled={hasChild ? true : false}
                >
                    {item.title}
                </a>
                {hasChild && (
                    <span
                        className={`ml-1 transition-transform duration-300 ease-in-out ${expanded ? 'rotate-45' : 'rotate-0'}`}
                    >
                        <PlusIcon size={20} />
                    </span>
                )}
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    maxHeight: hasChild && expanded ? '500px' : '0',
                    opacity: hasChild && expanded ? 1 : 0,
                }}
            >
                {hasChild && (
                    <div className="ml-4 pl-2 flex flex-col gap-5 py-2">
                        <ExpandableMenu items={item.child!} />
                    </div>
                )}
            </div>
        </div>
    );
};

export { ExpandableMenu };