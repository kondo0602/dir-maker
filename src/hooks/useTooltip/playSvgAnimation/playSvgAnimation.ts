/**
 * svgのアニメーションスタート(クリック後にCopyTooltipのチェックマークのアニメーションを再生するために使用)
 * 対象のSVGのanimate要素にはidを付与し、begin属性に"<id>.begin"を設定する
 *
 * @param animationElement - 対象のanimate要素
 * @returns なし
 */
export const playSvgAnimation = (
	animationElement: SVGAnimateElement | null,
) => {
	if (animationElement) {
		animationElement.beginElement();
	}
};
