import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../store/authApi";
import { selectCurrentToken, selectCurrentUser } from "../store/userSlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import logo from "../images/logo.gif";
import "./Component.css";
import { UserIcon } from "../images/userIcon";
import home from "../images/home.png";
import joystick from "../images/joystick.png";
import wreath from "../images/wreath.png";
import creator from "../images/creator.png";

export default function NavBar() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  return (
    <Navbar
      fluid={true}
      className="bg-primary fixed-top"
      style={{ backgroundColor: "#FF9494" }}
    >
      <Navbar.Brand
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <img
          style={{ height: 100, width: 100 }}
          src={logo}
          className="mr-1 h-6 sm:h-9"
          alt="Playboxx Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PlayBoxx
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            token ? (
              <img
                alt="User settings"
                src={user.profile_picture}
                className="profile"
              />
            ) : (
              <Avatar alt="User settings" src={<UserIcon />} rounded={true} />
            )
          }
        >
          {token ? (
            <>
              <Dropdown.Header>
                <span className="block text-sm">{user.username}</span>
                <span className="block truncate text-sm font-medium">
                  {user.first_name} {user.last_name}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => navigate("/profile")}>
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item onClick={() => navigate("/login")}>
                Log in
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => navigate("/signup")}>
                Sign up
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="navbar-collapse pt-1 justify-content-center">
        {/* <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link> */}
        {/* <Navbar.Link href="/games">Games</Navbar.Link>
        <Navbar.Link href="/leaderboard">Leaderboard</Navbar.Link>
        <Navbar.Link href="/creators">Creators</Navbar.Link> */}
        <NavLink
          to={"/" || "play-boxx/"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ height: 20, width: 20 }}
            src={home}
            className="mr-1 h-6 sm:h-9"
            alt="home icon"
          />
          Home
        </NavLink>
        <NavLink
          to={"/games" || "/play-boxx/games"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/games");
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ height: 20, width: 20 }}
            src={joystick}
            className="mr-1 h-6 sm:h-9"
            alt="game icon"
          />
          Games
        </NavLink>
        <NavLink
          to={"/leaderboard" || "/play-boxx/leaderboard"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/leaderboard");
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ height: 20, width: 20 }}
            src={wreath}
            className="mr-1 h-6 sm:h-9"
            alt="wreath icon"
          />
          Leaderboard
        </NavLink>
        <NavLink
          to={"/creators" || "/play-boxx/creators"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          onClick={(e) => {
            e.preventDefault();
            navigate("/creators");
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ height: 20, width: 20 }}
            src={creator}
            className="mr-1 h-6 sm:h-9"
            alt="creator icon"
          />
          Creators
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
