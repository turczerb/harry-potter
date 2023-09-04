import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavBarData = [
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "Characters",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Staff",
        path: "characters/staff",
        icon: <IoIcons.IoIosPaper />,
        image: "./teacher.png",
      },
      {
        title: "Students",
        path: "characters/students",
        icon: <IoIcons.IoIosPaper />,
        image: "./kidz.png",
      },
    ],
  },
  {
    title: "Houses",

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
        image: "./hufflepuff.png",
      },
      {
        title: "Ravenclaw",
        path: "houses/ravenclaw",
        icon: <IoIcons.IoIosPaper />,
        image: "./ravenclaw.png",
      },
      {
        title: "Slytherin",
        path: "houses/slytherin",
        icon: <IoIcons.IoIosPaper />,
        image: "./slytherin.png",
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
