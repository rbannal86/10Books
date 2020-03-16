import React from "react";
import "./AdditionalInformation.css";

const AdditionalInformation = props => {
  const renderCategories = () => {
    if (props.book.categories === null) return "N/A";
    else {
      let categoryString = props.book.categories.join(", ");
      return categoryString;
    }
  };

  if (props.open) {
    return (
      <div className="ai_top_level">
        <div className="ai_information">
          <div className="ai_categories">
            Categories: <span>{renderCategories()}</span>
          </div>
          <div className="ai_publisher">
            Publisher: <span>{props.book.publisher || "N/A"}</span>
          </div>
          <div className="ai_published">
            Published: <time>{props.book.publishedDate}</time>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default AdditionalInformation;
