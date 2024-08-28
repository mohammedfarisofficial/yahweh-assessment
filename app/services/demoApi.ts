import { users } from "@/data";

export const findUserById = (id: string) => {
  const user = users.filter((user) => user.id === id);
  if (!!user.length) {
    return { status: 404, message: "User not found!" };
  }
  return { status: 200, user };
};

