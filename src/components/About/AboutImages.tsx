import React, { FC } from "react";

type Props = {
  setCategory: (arg: boolean) => void;
  containerClass: string;
  titleOne: string;
  titleTwo?: string;
}

export const AboutImages: FC<Props> = ({ setCategory, containerClass, titleOne, titleTwo }) => (
  <div className={containerClass} onClick={() => setCategory(true)}>
  <div className="image">
    <span />
    <span />
    <span />
    <span />
  </div>
  {titleTwo ?
    <div className="align-text">
      <div className="left-content">
        <h1>{titleOne}</h1>
      </div>
      <div className="right-content">
        <h1>{titleTwo}</h1>
      </div>
    </div> :
    <div className="content">
      <h1>{titleOne}</h1>
    </div>
  }
</div>
)