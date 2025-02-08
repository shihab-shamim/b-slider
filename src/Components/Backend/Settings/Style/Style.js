import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl, 
  SelectControl,
  Flex,
  __experimentalNumberControl as NumberControl
} from "@wordpress/components";
import { ColorControl, ColorsControl, Label, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";


const Style = ({ attributes, setAttributes }) => {
  const { iconsStyle ,iconRadius,indicator,activeIndicator,indicatoRadius,indicatorBorder,overlyColor,slideMargin,sliderRadius,titleTypho,titleColor,titlePadding,desTypho,descolor,desPadding,titleAnimation} = attributes;

  console.log(titleAnimation);


  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Slider", "b-blocks")}
        initialOpen={false}
      >
        <ColorControl value={overlyColor}  label={__("Overly Color","b-blocks")} onChange={(value)=>{
         setAttributes({overlyColor:value})
        }} />

        <BoxControl values={slideMargin} label={__("Margin","b-blocks")} onChange={(value)=>{
          setAttributes({slideMargin:value})
          
        }}  />

        <BoxControl values={sliderRadius} label={__("Border Radius","b-blocks")} onChange={(value)=>{
          setAttributes({sliderRadius:value})
          
        }}  />

      </PanelBody>

      {/* title */}
      <PanelBody
      className="bPlPanelBody"
      title={__("Title", "b-blocks")}
      initialOpen={false}
      >
        <Typography value={titleTypho} onChange={(value)=>{
          setAttributes({titleTypho:value})
        }}  />

        <ColorControl value={titleColor} onChange={(value)=>{
          setAttributes({titleColor:value})
        }}  />
           <BoxControl values={titlePadding} label={__("Padding","b-blocks")} onChange={(value)=>{
          setAttributes({titlePadding:value})
          
        }}  />
         <Flex  align='center'>
        
             <Label><strong>Animation</strong> </Label>
           <span style={{marginTop:"20px"}}>  <SelectControl
             
             value={titleAnimation?.effect} 
             onChange={ ( value ) => { 
               setAttributes({titleAnimation: {...titleAnimation, effect:value} })
             } }
             options={ [
               { value: null, label: 'Select a Effect', disabled: true },
               { value: 'slideInFromRight', label: 'Fade in Right' },
               { value: 'slideInFromLeft', label: 'Fade in Left' },
               { value: 'slideInFromTop', label: 'Fade in Top' },
               { value: 'slideInFromBottom', label: 'Fade in Bottom' },
               { value: 'zoomInFromBottom', label: 'Fade in Zoom' }, 
               
             ] }
           
           /></span>
        
          </Flex>

          <Flex  align='center'>
        
        <Label><strong>Delay(s)</strong> </Label>
      <span style={{marginTop:"20px"}}>  <NumberControl
        
        value={titleAnimation?.delay} 
        step={0.1}
        onChange={ ( value ) => { 
          setAttributes({titleAnimation: {...titleAnimation, delay:value} })
        } }
        
      
      /></span>
   
     </Flex>

      </PanelBody>
      {/* des */}
      <PanelBody
      className="bPlPanelBody"
      title={__("Description", "b-blocks")}
      initialOpen={false}
      >
        <Typography value={desTypho} onChange={(value)=>{
          setAttributes({desTypho:value})
        }}  />

        <ColorControl value={descolor} onChange={(value)=>{
          setAttributes({descolor:value})
        }}  />
           <BoxControl values={desPadding} label={__("Margin","b-blocks")} onChange={(value)=>{
          setAttributes({desPadding:value})
          
        }}  />

      </PanelBody>


      {/* Arrow */}
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Arrow", "b-blocks")}
        initialOpen={false}
      >
        {/* color */}
        <ColorControl label='Color' value={iconsStyle?.color} onChange={(value=>
        setAttributes({iconsStyle:updateData(iconsStyle,value,"color")})
        )} />
        {/* background Color */}
        <ColorControl  label='Background Color' value={iconsStyle?.bg} onChange={(value=>
        setAttributes({iconsStyle:updateData(iconsStyle,value,"bg")})
        )} />

<UnitControl
	onChange={ value =>{
    setAttributes({iconsStyle:updateData(iconsStyle,value,"width")})
    
  } }
	label="WIDTH"
	isUnitSelectTabbable

  value={iconsStyle?.width}
	
  />
<UnitControl
	onChange={ value =>{
    setAttributes({iconsStyle:updateData(iconsStyle,value,"height")})
    
  } }
	label="Height"
	isUnitSelectTabbable

  value={iconsStyle?.height}
	
  />


        <BoxControl
        Style={{marginTop:"50px",border:"1px solid red"}}
        label="Radius"
         values={iconRadius} onChange={(value)=>{
          setAttributes({iconRadius: value})
        }} />
      </PanelBody>

{/*  indicators */}
      <PanelBody
      
      className="bPlPanelBody"
      title={__("Indicator", "b-blocks")}
      initialOpen={false}
    >
      <ColorControl label='Color' value={indicator?.color} onChange={(value=>
        setAttributes({indicator:updateData(indicator,value,"color")})
        )} />

        <UnitControl
	onChange={ value =>{
    setAttributes({indicator:updateData(indicator,value,"width")})
    
  } }
	label="Width"
	isUnitSelectTabbable

  value={indicator?.width}
	
  />
        <UnitControl
	onChange={ value =>{
    setAttributes({indicator:updateData(indicator,value,"height")})
    
  } }
	label="Height"
	isUnitSelectTabbable

  value={indicator?.height}
	
  />
<BoxControl
      
      label="Radius"
       values={indicatoRadius} onChange={(value)=>{
        setAttributes({indicatoRadius: value})
      }} />


  <Label>Active Indicator</Label>
  <ColorControl label='Color' value={activeIndicator?.color} onChange={(value=>
        setAttributes({activeIndicator:updateData(activeIndicator,value,"color")})
        )} />

        <UnitControl
	onChange={ value =>{
    setAttributes({activeIndicator:updateData(activeIndicator,value,"width")})
    
  } }
	label="Width"
	isUnitSelectTabbable

  value={activeIndicator?.width}
	
  />
        <UnitControl
	onChange={ value =>{
    setAttributes({activeIndicator:updateData(activeIndicator,value,"height")})
    
  } }
	label="Height"
	isUnitSelectTabbable

  value={activeIndicator?.height}
	
  />

<BorderBoxControl
            __next40pxDefaultSize
         
            label={ __( 'Borders' ) }
            onChange={(value)=>{
              setAttributes({ indicatorBorder: value })
            } }
            value={ indicatorBorder }
        />


    </PanelBody>

    </>
  );
};

export default Style;
