import { h } from "preact";

const PriceCard = ({ item, features, typeService }) => {
  const customButton = "Empieza ya";
  const whatsapp = import.meta.env.PUBLIC_WHATSAPP_NUMBER;
  const mensajeWhatsApp =
  `Hola,%20Estoy%20interesado/a%20en%20recibir%20más%20información%20sobre%20el%20plan%20de%20alimentación%20*${typeService}*.%20¿Podrías%20ayudarme?`;

  return (
    <div className="relative w-[21.875rem] mx-auto bg-atlantis-100 rounded-lg shadow-md rounded-tr-[60px] rounded-bl-[60px] pb-16 flex flex-col transition duration-300 ease-in-out hover:bg-atlantis-200 dark:hover:bg-atlantis-800 transform hover:scale-105 mb-6">
      <div className="flex-grow">
        <div className="p-4 flex flex-col items-center justify-center">
          <p className="text-[24px] font-semibold text-center p-4 pb-6">
            {item}
          </p>
          <svg
            width="187"
            height="3"
            viewBox="0 0 187 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 2L187 1" stroke="#3C3C3C"></path>
          </svg>
        </div>
        <ul className="text-left pl-4 list-none mb-16">
          {features.map((feat, index) => (
            <li
              key={index}
              className="py-3 flex items-center before:content-[''] before:block before:w-4 before:h-4 before:bg-[url('/comprobado.png')] before:bg-cover before:bg-no-repeat before:mr-3 text-pretty"
            >
              {feat}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-4 right-4">
        <a
         href={`https://wa.me/${whatsapp}?text=${mensajeWhatsApp}`}
         target="_blank"
        >
          <button
            type="button"
            className="py-2 w-44 h-12 bg-atlantis-600 rounded-full hover:bg-atlantis-900"
            style={{ color: "white" }}
          >
            {customButton}
          </button>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
