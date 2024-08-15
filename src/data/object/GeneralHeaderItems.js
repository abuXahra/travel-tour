import { FaHotel, FaTaxi } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdFlightTakeoff } from "react-icons/md";
import { RiVisaFill } from "react-icons/ri";

export const GeneralHeaderItems = [
  {
    title: "Flight",
    onClickFunc: "/flight-booking",
    Icon: <MdFlightTakeoff />,
    bgColor: "none",
    border: "none",
  },
  {
    title: "Hotel",
    onClickFunc: "/hotel-reservation",
    Icon: <FaHotel />,
    bgColor: "none",
    border: "none",
  },
  {
    title: "Taxi",
    onClickFunc: "/taxi-booking",
    Icon: <FaTaxi />,
    bgColor: "",
    border: "none",
  },
  {
    title: "Visa",
    onClickFunc: "/visa",
    Icon: <RiVisaFill />,
    bgColor: "none",
    border: "none",
  },
  {
    title: "Tour Package",
    onClickFunc: "/packages",
    Icon: <FiPackage />,
    bgColor: "none",
    border: "none",
  },
];
