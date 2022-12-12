const Line = ({ emoji }) => {
  return (
    <div className="emoji-container">
      <div className="emoji-content">
        <span>{emoji.symbol}</span>
        <span>{emoji.title}</span>
      </div>
    </div>
  );
};
export default Line;
