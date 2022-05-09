import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
interface IProps {
  title: string;
  name: string;
}
const UploadDragger = (props: IProps) => {
  const { name, title } = props;
  const inputFile = useRef(null);
  const onButtonClick = () => {
    if (inputFile.current) {
      // inputFile.current.onClick();
    }
  };
  return (
    <div className="form-group form-image-custom">
      <label>{title}</label>
      <div className="image-wrapper" onClick={onButtonClick}>
        <span tabIndex={0} role="button">
          <input ref={inputFile} type="file" accept="image/*" name={name} />
          <div className="before-upload-show">
            <span>
              <FontAwesomeIcon className="icon" icon={faArrowUpFromBracket} />
            </span>
            <span>Upload</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default UploadDragger;
