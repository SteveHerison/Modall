import Estrela from "../../assets/images/icon-star.svg";
import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";
import { useState } from "react";

const formList = [
  {
    id: 1,
    pergunta: "What is Frontend Mentor, and how will it help me?",
    response:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    pergunta: "Is Frontend Mentor free?",
    response: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    id: 3,
    pergunta: "Can I use Frontend Mentor projects in my portfolio?",
    response: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
  },
  {
    id: 4,
    pergunta: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    response: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
  },
];

const Modal = () => {
  const [visibleIndex, setVisibleIndex] = useState(false);

  function toggleVisible(index) {
    if (visibleIndex === index) {
      setVisibleIndex(true);
    } else {
      setVisibleIndex(index);
    }
  }

  return (
    <div className="absolute inset-0 md:bottom-[30rem] flex items-center justify-center z-10 container m-auto md:max-w-[40rem] p-5">
      <section className="bg-white rounded-xl p-4 flex flex-col h-auto">
        <div className="flex items-center gap-6">
          <img src={Estrela} alt="estrela" className="w-5" />
          <h1 className="text-3xl font-semibold text-purple-950">FAQs</h1>
        </div>
        {formList.map(({ id, pergunta, response }, index) => (
          <div key={id} className="h-full">
            <ul className="flex flex-col border-b">
              <li
                className="text-md flex items-center justify-between w-full gap-10 cursor-pointer pt-4 font-bold text-purple-950"
                onClick={() => toggleVisible(index)}>
                {pergunta}{" "}
                {visibleIndex !== index ? (
                  <img src={Plus} alt="img abrir" />
                ) : (
                  <img src={Minus} alt="img abrir" />
                )}
              </li>
              <br />
              {visibleIndex === index && (
                <p className=" pb-5 text-md font-sans text-purple-950 opacity-70 ">
                  {response}
                </p>
              )}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Modal;
