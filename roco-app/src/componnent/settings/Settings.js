import React from "react";
import "./settings.style.scss";
import { Link } from "react-router-dom";

const Settings = () => {
  const settingsMenuArray = [
    { linkTitle: "ניהול משתמשים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "ניהול כיתות", linkUrl: "/", className: "setting-link" },
    { linkTitle: "מעמ ומכפילי שכר", linkUrl: "/", className: "setting-link" },
    { linkTitle: "מידע לקורס", linkUrl: "/", className: "setting-link" },
    { linkTitle: "ניהול תחומים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "משובים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "סמסטרים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "מילון", linkUrl: "/", className: "setting-link" },
    { linkTitle: "סיבת החזר", linkUrl: "/", className: "setting-link" },
    { linkTitle: "חוברות קרוסים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "מכירות אונלין", linkUrl: "/", className: "setting-link" },
    { linkTitle: "חגים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "ניהול בניינים", linkUrl: "/", className: "setting-link" },
    { linkTitle: "קופונים", linkUrl: "/", className: "setting-link" },
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
