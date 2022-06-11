import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export const NotificationsNav = () => {
  return (
    <div className="flex space-x-4 sm:space-x-5 mx-8 sm:pr-8 pr-6 py-1 text-gray-300 border-r-1 border-gray-300">
      <RiNotificationLine size={20} />
      <RiUserAddLine size={20} />
    </div>
  );
};
