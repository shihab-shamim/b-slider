import { __ } from '@wordpress/i18n';
import Button from 'react-bootstrap/Button';

import { PanelBody, SelectControl,__experimentalInputControl  as InputControl, TextareaControl, Flex} from '@wordpress/components';
import { updateData } from '../../../../utils/functions';
import {  IconLibrary, InlineMediaUpload } from '../../../../../../bpl-tools/Components';


const General = ({ attributes, setAttributes }) => {
  const { icon,sliders } = attributes;

 

  return (
  <>  <PanelBody className='bPlPanelBody' title={__('Slides', 'b-blocks')} initialOpen={false}>

{
  sliders.map((slider, index) =><PanelBody key={index} initialOpen={false} className='bPlPanelBody' title={__(`Slide ${index+1}(${slider?.title})`, 'b-blocks')}>

    <InlineMediaUpload
    value={slider?.img}
    label="Image"
     onChange={(value)=>{
   
      setAttributes({
        sliders: updateData(sliders, value,index,"img")
      
      })
    }} />
    <InputControl
	label="Title"
	labelPosition="top"
	value={slider?.title}
	type="text"
	isPressEnterToChange
	onChange={ ( nextValue ) => 
    setAttributes({
      sliders: updateData(sliders, nextValue,index,"title")
    
    })
   }
/>
    <TextareaControl
	label="Description"
	labelPosition="top"
	value={slider?.desc}
  rows={3}
	type="text"
	isPressEnterToChange
	onChange={ ( nextValue ) => 
    setAttributes({
      sliders: updateData(sliders, nextValue,index,"desc")
    
    })
   }
/>
<Flex>
  {/* duplicate */}
<Button
onClick={()=>{
  const newSlide = {...slider}; 
  const updatedSliders = [
   ...sliders.slice(0, index + 1),
    newSlide,
  ...sliders.slice(index + 1),
  ];
  
  setAttributes({
    sliders: updatedSliders,
  });


}}

variant="outline-primary">
<svg
  style={{ marginRight: "4px" }}
  stroke="red"
  fill="red"
  strokeWidth="2"
  viewBox="0 0 24 24"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="white"  // Ensures the inner parts are red
    stroke="blue " // Ensures the border is red
    strokeWidth="2"
    d="M4.5,17 L1,17 L1,1 L1,1 L17,1 L17,4.5 M7,7 L23,7 L23,23 L7,23 L7,7 Z M15,11 L15,19 L15,11 Z M11,15 L19,15 L11,15 Z"
  />
</svg>

   Slide</Button>

   {/* delete */}
<Button
onClick={()=>{
  setAttributes({
    sliders: sliders.filter((_, i) => i !== index), 
  });
}}
variant="outline-danger"> 
<svg  style={{ marginRight: "4px" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
  Slide</Button>
</Flex>

  </PanelBody>)
}

<Button
onClick={() =>{
  const newSlide ={
    img: "https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?s=2048x2048&w=is&k=20&c=bTE9WTRrEu0QmBJhr-3bqc4xO5jLpkuXFScIpSJWXRQ=",
    title: "new slide ",
    desc: "new Slides description"
  }
  const updatedSlide=[...sliders,newSlide]
  setAttributes({sliders:updatedSlide})


}}
style={{width:"220px"}} variant="primary">   <svg
    stroke="currentColor"
    fill="white"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    version="1.1"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
  </svg> Add Slides</Button>


</PanelBody>


{/* layout setting  (5)   */}
<PanelBody className='bPlPanelBody' title={__('Layout Setting', 'b-blocks')} initialOpen={false}>
    


{/* 5 no */}
<IconLibrary label={__("Arrow Style","b-block")}
onChange={(value)=>{
  setAttributes({ icon: updateData(icon, value) })
}}

/>

    </PanelBody>



  {/* slider option*/}
<PanelBody className='bPlPanelBody' title={__('Slider Options', 'b-blocks')} initialOpen={false}>
    



    </PanelBody>

    {/* indicator */}
<PanelBody className='bPlPanelBody' title={__('Slider Options', 'b-blocks')} initialOpen={false}>
    



    </PanelBody>
  
  </>
  )
}

export default General