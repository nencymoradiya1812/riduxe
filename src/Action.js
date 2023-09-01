import { DEC, INC } from "./Actiontype";

export const add = () => {
  return {
    type: INC,
  };
};

export const remove = () => {
  return {
    type: DEC,
  };
};
