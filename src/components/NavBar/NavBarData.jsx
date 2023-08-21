import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavBarData = [
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "Characters",
    path: "/characters",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Staff",
        path: "characters/staff",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Students",
        path: "characters/students",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Houses",
    path: "/houses",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Gryffindor",
        path: "houses/gryffindor",
        icon: <IoIcons.IoIosPaper />,
        image: "./gryffindor.png",
      },
      {
        title: "Hufflepuff",
        path: "houses/hufflepuff",
        icon: <IoIcons.IoIosPaper />,
        image: "./hufflepuff.jpg",
      },
      {
        title: "Ravenclaw",
        path: "houses/ravenclaw",
        icon: <IoIcons.IoIosPaper />,
        image: "./src/components/NavBar/ravenclawr.jpg",
      },
      {
        title: "Slytherin",
        path: "houses/slytherin",
        icon: <IoIcons.IoIosPaper />,
        image: "src/components/NavBar/slytherin.jpg",
      },
    ],
  },
  {
    title: "Movies",
    path: "/movies",
  },
  {
    title: "Spells",
    path: "/spells",
  },
];
