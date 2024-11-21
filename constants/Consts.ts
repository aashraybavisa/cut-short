import { TabListItem } from "@/lib/types";

export const tabList: TabListItem[] = [
  {
    routeName: "index",
    title: "Home",
    activeIconName: "home",
    blurIconName: "home-outline",
  },
  {
    routeName: "explore",
    title: "Explore",
    activeIconName: "search",
    blurIconName: "search-outline",
  },
  {
    routeName: "account",
    title: "Account",
    activeIconName: "person",
    blurIconName: "person-outline",
  },
  {
    routeName: "order",
    title: "Orders",
    activeIconName: "time",
    blurIconName: "time-outline",
  },
];

export default { tabList };
