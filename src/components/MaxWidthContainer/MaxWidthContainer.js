import './MaxWidthContainer.scss'

/**
 * Container component that reduces the max width of its children to 1440px. This is
 * done so that content is displayed in the middle of the screen for ultrawide montiors.
 * 
 * Note: the className of this component is "max-width-container". Use this classname when needing
 * to add additional SCSS styles to this wrapper.
 * @component 
 */
export const MaxWidthContainer = ({ children }) => <div className='max-width-container'>{children}</div>;