import HOUSES from "../constants/houses";

export const getHouse = () => {
  return HOUSES[Math.floor(Math.random() * HOUSES.length)];
};
