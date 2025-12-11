import { Bell, Headset, Menu, Search, UserRound } from "lucide-react";
import "./Header.css";

const HeaderComponent = () => {
  return (
    <header>
      <section className="container-header flex">
        <div className="left-side">
          <div className="div-menu">
            <Menu strokeWidth={1.5} size={28} className="icon-header" />
          </div>

          <div className="input-search">
            <input type="text" placeholder="PROCURAR..." />
            <Search strokeWidth={1.5} className="icon-search" />
          </div>
        </div>
        <div className="right-side">
          <div className="user">
            <span>Novo</span>
            <div className="nav-div-icon-user">
              <UserRound className="icon-user" />
            </div>
          </div>
          <div className="support">
            <span>suporte</span>
            <Headset strokeWidth={1.5} className="headset" />
          </div>
          <Bell strokeWidth={1.5} size={32} className="bell" />
        </div>
      </section>
    </header>
  );
};

export default HeaderComponent;
