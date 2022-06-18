import React, { FC } from "react";

type Props = {
  setCategory: (arg: boolean) => void;
  containerClass: string;
  titleOne: string;
  titleTwo?: string;
  isVisible?: boolean;
}

export const AboutImages: FC<Props> = ({ setCategory, containerClass, titleOne, titleTwo, isVisible }) => ( 
<div className={containerClass} onClick={() => setCategory(true)}>
  <div className={isVisible ? "image" : "imgHover"}>
    <span />
    <span />
    <span />
    <span />
  </div>
  {titleTwo ?
    <div className="align-text">
      <div className={isVisible ? "left-content" : "leftContentHover"}>
        <h1>{titleOne}</h1>
      </div>
      <div className={isVisible ? "right-content" : "rightContentHover"}>
        <h1>{titleTwo}</h1>
      </div>
    </div> :
    <div className={isVisible ? "content" : "contentHover"}>
      <h1>{titleOne}</h1>
    </div>
  }
</div>
)