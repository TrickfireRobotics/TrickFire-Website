import './MaxWidthContainer.scss'

/**
 * Container component that reduces the max width of its children to 1440px. This is
 * done so that content is displayed in the middle of the screen for ultrawide montiors.
 * @component 
 */
export const MaxWidthContainer = ({ children }) => <div className='max-width-container'>{children}</div>;