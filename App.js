import "./App.scss";
import { BsGrid1X2 } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { TbChartDots3 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import usersPhoto1 from "./assets/imgs/users-img-desktop.png";
import usersPhoto2 from "./assets/imgs/users-img-mobile.png";
import { BsPinAngleFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { Chart } from "./Chart";

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar__content">
          <h1>WeHR</h1>
          <p className="choose">MAIN MENU</p>
          <ul>
            <li>
              <BsGrid1X2 />
              <span>Dashboard</span>
            </li>
            <li>
              <FaUserPlus />
              <span>Recruitment</span>
            </li>
            <li>
              <AiOutlineSchedule />
              <span>Schedule</span>
            </li>
            <li>
              <MdGroups />
              <span>Employee</span>
            </li>
            <li>
              <TbChartDots3 />
              <span>Department</span>
            </li>
          </ul>
          <ul>
            <p className="choose">OTHER</p>
            <li>
              <BiSupport />
              <span>Support</span>
            </li>
            <li>
              <RiSettings3Fill />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="header">
          <div className="three__line">
            <IoMdMenu />
          </div>

          <div className="search__bar">
            <input type="text" placeholder="Search" name="search" />
            <FiSearch />
          </div>
          <div className="phone__search">
            <FiSearch fontSize="20px" color="#b2b2b2" />
          </div>
          <div className="user">
            <span>
              <FaBell />
            </span>

            <span>
              <RiMessage2Fill />
            </span>
            <picture>
              <source srcset={usersPhoto2} media="(max-width: 400px)" />
              <img className="user__img" src={usersPhoto1} alt="/" />
            </picture>
            <p>Admirra John</p>
            <IoIosArrowDown color="#737898" fontSize="20px" />
          </div>
        </div>
        <hr />

        <div className="content">
          <div>
            <h2 className="dashboard">Dashboard</h2>
            <div className="left__content">
              <div className="item__1">
                <h1>Avaible Position</h1>
                <span>24</span> <p>4 Urgently needed</p>
              </div>
              <div className="item__2">
                <h1>Job Open</h1>
                <span>10</span>
                <p>4 Active hiring</p>
              </div>
              <div className="item__3">
                <h1>New Employees</h1>
                <span>24</span>
                <p>4 Department</p>
              </div>
            </div>

            <div className="left__content2">
              <div className="item__4">
                <div>
                  <h1>Total Employees </h1>
                  <span>216</span>
                  <p>190 Men</p>
                  <p>96 Women</p>
                </div>
                <div className="statistic">
                  <Chart />
                </div>
              </div>
              <div className="item__5">
                <div>
                  <h1>Talent Request</h1>
                  <span>16</span>
                  <p>6 Men</p>
                  <p>10 Women</p>
                </div>
                <div className="statistic">
                  <Chart />
                </div>
              </div>
              <div className="item__6">
                <div className="heading__6">
                  <h1>Announcement</h1>
                  <div className="head__text">
                    <p>
                      Today, 13 Sep 2021 <IoIosArrowDown />
                    </p>
                  </div>
                </div>
                <div className="block1 block">
                  <div>
                    <h3>Outing schedule for every departement</h3>
                    <p>5 Minutes ago</p>
                  </div>
                  <div className="icons">
                    <BsPinAngleFill />
                    <BsThreeDots />
                  </div>
                </div>
                <div className="block2 block">
                  <div>
                    <h3>Meeting HR Department</h3>
                    <p>Yesterday, 12:30 PM</p>
                  </div>
                  <div className="icons">
                    <BsPinAngleFill />
                    <BsThreeDots />
                  </div>
                </div>
                <div className="block3 block">
                  <div>
                    <h3>
                      IT Department need two more talents for UX/UI Designer
                      position
                    </h3>
                    <p>Yesterday, 09:15 AM</p>
                  </div>
                  <div className="icons">
                    <BsPinAngleFill /> <BsThreeDots />
                  </div>
                </div>

                <button>See All Announcement</button>
              </div>
            </div>
          </div>
          <div className="right__content">
            <div className="item__7">
              <h1>Recently Activity</h1>
              <span>10.40 AM, Fri 10 Sept 2021</span>
              <h2>You Posted a New Job</h2>
              <p>
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
              <div className="button__7">
                <p>Today you makes 12 Activity</p>
                <button>See All Activity</button>
              </div>
            </div>
            <div className="item__8">
              <div className="heading__8">
                <h1>Upcoming Schedule</h1>
                <div className="head__text8">
                  <span>
                    Today, 13 Sep 2021 <IoIosArrowDown />
                  </span>
                </div>
              </div>
              <span>Priority</span>
              <div className="block1 block">
                <div>
                  <h3>Review candidate applications</h3>
                  <p>Today - 11.30 AM</p>
                </div>
                <div className="icons">
                  <BsThreeDots />
                </div>
              </div>
              <span>Other</span>
              <div className="block2 block">
                <div>
                  <h3>Interview with candidates</h3>
                  <p>Today - 10.30 AM</p>
                </div>
                <div className="icons">
                  <BsThreeDots />
                </div>
              </div>
              <div className="block3 block">
                <div>
                  <h3>
                    Short meeting with product designer from IT Departement
                  </h3>
                  <p>Today - 09.15 AM</p>
                </div>
                <div className="icons">
                  <BsThreeDots />
                </div>
              </div>
              <button>Creat a New Schedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
