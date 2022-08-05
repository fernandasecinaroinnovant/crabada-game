import "./slider.scss";

const Slider: React.FC<{
  value: number;
  onChangeFiltersHandler: Function;
  name: string;
  maxRange: number;
}> = (props) => {
  const { value, name, onChangeFiltersHandler, maxRange } = props;

  const onChangeRangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeFiltersHandler(name, +value);
  };

  return (
    <div className="slider-container">
      <div className="slider-ranges">
        {[...Array(maxRange + 1)].map((_, index) => (
          <span className="range" key={index}></span>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max={maxRange}
        step="1"
        onChange={onChangeRangeHandler}
      />
      <input
        type="range"
        min="0"
        max={maxRange}
        step="1"
        onChange={onChangeRangeHandler}
      />
    </div>
  );
};

export default Slider;
