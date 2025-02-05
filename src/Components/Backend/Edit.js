import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Slider from "../slider/Slider";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  // const { sliders } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
         
         <Slider attributes={attributes}/>
        </div>
      </div>
    </>
  );
};
export default Edit;
