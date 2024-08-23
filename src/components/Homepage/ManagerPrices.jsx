import { h } from "preact";
import { useState } from "preact/hooks";
import SquareButton from "../SquareButton";
import PriceCard from "../Homepage/Cards/PriceCard";
import data from "../../data.json";

const ManagerPrices = () => {
  const [activeService, setActiveService] = useState("Online");

  const handleClick = (serviceName) => {
    setActiveService((prevService) =>
      prevService === serviceName ? null : serviceName,
    );
  };

  return (
    <>
      <div class="flex justify-center mb-8">
        {data.services.map((service) => (
          <div class="mx-4" key={service.shortName}>
            <SquareButton
              text={service.shortName}
              onClick={() => handleClick(service.shortName)}
              isActive={activeService === service.shortName}
            />
          </div>
        ))}
      </div>
      <div class="mx-auto flex flex-wrap mb-14">
        {data.services.map((service) =>
          service.plans.map(
            (plan) =>
              (activeService === null ||
                activeService === service.shortName) && (
                <PriceCard
                  item={plan.name}
                  features={plan.features}
                  key={plan.name}
                  typeService={
                    service.shortName === "Online"
                      ? plan.name
                      : service.shortName
                  }
                />
              ),
          ),
        )}
      </div>
    </>
  );
};

export default ManagerPrices;
