import { useEffect } from "react";

const FilterButtons = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".button-value");
    const list = document.querySelectorAll(".list-item");

    const handleButtonClick = (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      list.forEach((picture) => {
        if (filter === "all") {
          picture.style.display = "block";
        } else {
          picture.style.display = picture.classList.contains(filter)
            ? "block"
            : "none";
        }
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return null; // This component doesn't render anything
};

export default FilterButtons;
