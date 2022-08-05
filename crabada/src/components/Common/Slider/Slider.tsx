import "./Slider.scss";

const ranges: number = 7;

const Slider: React.FC<{
  value: number;
  onChangeFiltersHandler: Function;
  name: string;
}> = (props) => {
  const { value, name, onChangeFiltersHandler } = props;

  const onChangeRangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeFiltersHandler(name, +value);
  };

  return (
    <div className="slider-container">
      <div className="slider-ranges">
        {[...Array(ranges)].map((_, index) => (
          <span className="range" key={index}></span>
        ))}
      </div>
      <input
        type="range"
        value={value}
        min="0"
        max={ranges - 1}
        className="slider"
        onChange={onChangeRangeHandler}
      />
    </div>
  );
};

export default Slider;
