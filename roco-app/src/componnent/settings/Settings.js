import React from "react";
import "./settings.style.scss";
import { Link } from "react-router-dom";

const Settings = () => {
  const settingsMenuArray = [
    {
      linkTitle: "ניהול משתמשים",
      linkUrl: "/settings/User-Management",
      className: "setting-link",
    },
    {
      linkTitle: "ניהול כיתות",
      linkUrl: "/settings/list-classes",
      className: "setting-link",
    },
    {
      linkTitle: "מעמ ומכפילי שכר",
      linkUrl: "/settings/VAT-multipliers",
      className: "setting-link",
    },
    {
      linkTitle: "מידע לקורס",
      linkUrl: "/settings/Course-information",
      className: "setting-link",
    },
    {
      linkTitle: "ניהול תחומים",
      linkUrl: "/settings/Domain-management",
      className: "setting-link",
    },
    {
      linkTitle: "משובים",
      linkUrl: "/settings/Feedbacks",
      className: "setting-link",
    },
    {
      linkTitle: "סמסטרים",
      linkUrl: "/settings/Semesters",
      className: "setting-link",
    },
    {
      linkTitle: "מילון",
      linkUrl: "/settings/Dictionary",
      className: "setting-link",
    },
    {
      linkTitle: "סיבת החזר",
      linkUrl: "/settings/Refund-Reason",
      className: "setting-link",
    },
    {
      linkTitle: "חוברות קרוסים",
      linkUrl: "/settings/Course-books",
      className: "setting-link",
    },
    {
      linkTitle: "מכירות אונלין",
      linkUrl: "/settings/Online-sales",
      className: "setting-link",
    },
    {
      linkTitle: "חגים",
      linkUrl: "/settings/Holidays",
      className: "setting-link",
    },
    {
      linkTitle: "ניהול בניינים",
      linkUrl: "/settings/buildings",
      className: "setting-link",
    },
    {
      linkTitle: "קופונים",
      linkUrl: "/settings/coupons",
      className: "setting-link",
    },
  ];

  let settingsLinks = settingsMenuArray.map(
    ({ linkUrl, linkTitle, className }, index) => (
      <Link key={index} to={linkUrl} className={className}>
        {linkTitle}
      </Link>
    )
  );
  return <div className="settings-container">{settingsLinks}</div>;
};

export default Settings;
