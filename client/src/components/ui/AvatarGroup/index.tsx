import { Avatar as AntAvatar } from "antd";

import type { UserType } from "@/types/Users";
import { firstStringLetters } from "@/utils/string";
import { AvatarGroupMaxStyles } from "./style";

interface PropTypes {
  users?: UserType[];
}

const mockUsers = [
  {
    id: 1,
    name: "Mic",
    surname: "L",
    pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
  },
  {
    id: 2,
    name: "John",
    surname: "Dohn",
    pic: "https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
  },
  {
    id: 3,
    name: "John",
    surname: "Dohn",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80"
  },
  {
    id: 4,
    name: "Mic",
    surname: "L"
  }
];

const AvatarGroup = ({ users = mockUsers }: PropTypes) => {
  return (
    <AntAvatar.Group maxCount={3} size="small" maxStyle={AvatarGroupMaxStyles}>
      {users.map(({ id, pic, name, surname }) => {
        const initials = firstStringLetters([name, surname]);
        return (
          <AntAvatar key={id} src={pic}>
            {initials}
          </AntAvatar>
        );
      })}
    </AntAvatar.Group>
  );
};

export default AvatarGroup;
