import { getBoxCSS ,getBorderBoxCSS} from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { iconsStyle ,iconRadius,indicator,activeIndicator,indicatoRadius,indicatorBorder} = attributes;

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

	`}} />;
}
export default Style;