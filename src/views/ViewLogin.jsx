import Login from "../components/Login";
import Elipse197 from "../assets/Elipse 197.svg";
import Elipse216 from "../assets/Elipse 216.svg";
import Elipse32966 from "../assets/Grupo 32966.svg";
import Elipse32967 from "../assets/Grupo 32967.svg";
import Elipse36052 from "../assets/Grupo 36052.svg";
import Elipse36075 from "../assets/Grupo 36075.svg";

const ViewLogin = () => {
  return (
    <>
      <div className="flex items-start  place-items-center justify-center relative h-screen">
        <section className="w-full h-full flex items-center justify-center absolute overflow-hidden">
          <div
            className="absolute top-0 right-0"
            style={{ transform: "translateX(40%)" }}
          >
            <img src={Elipse32967} alt="elipse1" />
          </div>
          <img
            src={Elipse36052}
            alt=""
            style={{ transform: "translateX(-700%) translateY(-500%)" }}
          />

          <img
            src={Elipse197}
            alt=""
            style={{ transform: "translateX(-7000%) translateY(-100%)" }}
          />

          <div
            className="absolute left-0"
            style={{ transform: "translateX(-20%)", bottom: "-250px" }}
          >
            <img src={Elipse32966} alt="" />
          </div>
          <img
            src={Elipse36075}
            alt="elipse1"
            style={{ transform: "translateX(600%) translateY(1500%)" }}
            className="absolute"
          />
          <img
            src={Elipse216}
            alt=""
            style={{ transform: "translateX(7000%) translateY(3000%)" }}
          />
        </section>
        <Login />
      </div>
    </>
  );
};

export default ViewLogin;
