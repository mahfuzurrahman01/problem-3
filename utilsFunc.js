import { buttonStyles } from "./styles";

export const renderContent = (variant, children, onClick) => {
    // here we refactor the code both "icon-arrow-primary" and 'primary' in one if condition. 
    // Also styles will come from styles.js which make the styles centralized on a file
    if (variant === 'icon-arrow-primary' || variant === 'primary') {
        return <button style={buttonStyles.primary} onClick={onClick}>
            {
                variant !== "primary" && <span>&rarr;</span>
            }
            {children}
        </button>;
    }
    // here we refactor the code both "icon-arrow-secondary" and 'secondary' in one if condition.
    // Also styles will come from styles.js which make the styles centralized on a file
    else if (variant === 'icon-arrow-secondary' || variant === 'secondary') {
        return <button style={buttonStyles.secondary} onClick={onClick}>
            {
                variant !== 'secondary' && <span>&rarr;</span>
            }
            {children}
        </button>;
    } else {
        return <button onClick={onClick}>{children}</button>
    }
}