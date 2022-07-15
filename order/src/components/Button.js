export const Button = ({ children, type, onClick }) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}