import { getBoxCSS ,getBorderBoxCSS} from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id,device }) => {
	const { iconsStyle ,iconRadius,indicator,activeIndicator,indicatoRadius,indicatorBorder,innerGap,containerHeigh,contentAlignment} = attributes;

	const mainSl = `#${id}`;
	const icon = `${mainSl} .icon`;
	const prev = `${mainSl} .prev`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${icon},.icon svg{
		width: ${iconsStyle?.width};
		height: ${iconsStyle?.height};
		fill: ${iconsStyle?.color};
		background-color:${iconsStyle?.bg};
		border-radius: ${getBoxCSS(iconRadius)}
		
		}
		${prev}{
		transform: rotate(180deg);
		display: inline-block;
		
		}
		
		.carousel-indicators [data-bs-target] {
		width:${indicator?.width}!important; 
		height: ${indicator?.height}!important;
		background-color:${indicator?.color};
		border-radius: ${getBoxCSS(indicatoRadius)}
		
	}
		.carousel-indicators .active {
		width:${activeIndicator?.width}!important; 
		height: ${activeIndicator?.height}!important;
		background-color:${activeIndicator?.color};
		${getBorderBoxCSS(indicatorBorder)}
		
		
		}
		.d-block{
		height:100%;
		object-fit:cover;
		}

		.caption{
		position: absolute;
  bottom: 100px;
  left: ${innerGap[device]};
  right: ${innerGap[device]};
  height: 200px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 5px;
  max-width: 100%;
  text-align: ${contentAlignment};
  z-index: 2;
		
		}
  .overly{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  }
  .caroselContainer{
  position: relative;
  height: ${containerHeigh[device]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  }
  .caroselWrapper{
  max-width:100%;
   position: relative;
  z-index: 1;
  }

  @media (max-width: 768px) {
  .carouselContainer {
    height: 300px; 
  }

  .caption {
    bottom: 50px; 
    left: 10px;
    right: 10px;
    height: auto; 
    padding: 5px;
  }

  .caption h3 {
    font-size: 1.5rem; 
  }

  .caption p {
    font-size: 1rem; 
  }
}








  

	`}} />;
}
export default Style;