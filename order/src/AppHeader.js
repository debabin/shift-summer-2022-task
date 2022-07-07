import BoxIcon from "./resources/box-icon-colored.png"

export const AppHeader = () => {
  return (
    <div className="app-header">
      <img src={BoxIcon} className="header-icon" alt="icon" />
      <div className="header-label">Royal Delivery services </div>
    </div>
  );
}