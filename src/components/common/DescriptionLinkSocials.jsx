import React from "react";
import LinkSocial from './LinkSocial' ; 

function DescriptionLinkSocials(props) {
  return (
    <div className="flex flex-row gap-4">
        <LinkSocial link={"./assets/images/icon/fb-social.svg"} />
        <LinkSocial link={"./assets/images/icon/youtube-social.svg"} />
    </div>
  );
}

export default DescriptionLinkSocials;
