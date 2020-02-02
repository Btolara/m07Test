import React from "react";

const SkillItems = ({ title, value, color }) => {
  return (
    <div className="skillItems">
      <div className="skillItems_container">
        <div className="skillItems_title">{title}</div>
        <div className="skillItems_bar">
          <div
            style={{
              backgroundColor: color,
              width: value,
              height: "15px",
              borderRadius: "20px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillItems;
