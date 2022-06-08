import { render, screen } from "@testing-library/react";
import { NotificationsNav } from ".";

jest.mock("react-icons/ri", () => ({
  __esModule: true,
  RiNotificationLine: () => <div data-testid="RiNotificationLine" />,
  RiUserAddLine: () => <div data-testid="RiUserAddLine" />,
}));

describe("<NotificationNav />", () => {
  it("should render correctly", () => {
    render(<NotificationsNav />);

    expect(screen.getByTestId(/rinotificationline/i)).toBeInTheDocument();
    expect(screen.getByTestId(/riuseraddline/i)).toBeInTheDocument();
  });
});
