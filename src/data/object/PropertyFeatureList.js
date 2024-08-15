import { BiSolidBullseye } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import { LiaBathSolid } from "react-icons/lia";
import {
  MdBalcony,
  MdOutlineFamilyRestroom,
  MdOutlineGarage,
  MdRunCircle,
} from "react-icons/md";

export const PropertyFeatureList = [
  { title: "Balcony", icon: <MdBalcony /> },
  { title: "Wifi", icon: <FaWifi /> },
  { title: "Packing", icon: <MdOutlineGarage /> },
  { title: "Air Condition", icon: <BiSolidBullseye /> },
  { title: "Private bathroom", icon: <LiaBathSolid /> },
  { title: "Spa and wellness centre", icon: <MdRunCircle /> },
  { title: "Terrace", icon: <MdBalcony /> },
  { title: "Pets allowed", icon: <GiJumpingDog /> },
  { title: "Family rooms", icon: <MdOutlineFamilyRestroom /> },
];
