import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import menuData from '@/data/menu.json';

const PageHeader = () => {
    const menuItems = menuData.menu_items;

    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
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