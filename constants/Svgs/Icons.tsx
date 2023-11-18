type Props = {
  className: string;
  stroke: string;
  fill: string;
};

export const BottomCurvedline: React.FC<Props> = ({
  className,
  stroke,
  fill,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="246"
      height="123"
      viewBox="0 0 246 123"
      fill={fill}
      stroke={stroke}
      className={className}
    >
      <path
        d="M243 1.14441e-05C243 15.7586 239.896 31.3629 233.865 45.9219C227.835 60.481 218.995 73.7097 207.852 84.8527C196.709 95.9957 183.481 104.835 168.922 110.865C154.363 116.896 138.758 120 123 120C107.241 120 91.6369 116.896 77.0779 110.865C62.5188 104.835 49.2901 95.9957 38.1471 84.8527C27.0041 73.7097 18.165 60.481 12.1344 45.9219C6.10388 31.3629 3 15.7586 3 0"
        stroke="#47C1FE"
        stroke-opacity="0.7"
        stroke-width="5"
      />
    </svg>
  );
};

export const TopCurvedline: React.FC<Props> = ({
  className,
  stroke,
  fill,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="246"
      height="123"
      viewBox="0 0 246 123"
      fill={fill}
      stroke={stroke}
      className={className}
    >
      <path
        d="M243 123C243 107.241 239.896 91.6369 233.865 77.0778C227.835 62.5188 218.995 49.2901 207.852 38.1471C196.709 27.0041 183.481 18.165 168.922 12.1344C154.363 6.10388 138.758 3 123 3C107.241 3 91.6369 6.1039 77.0779 12.1345C62.5188 18.165 49.2901 27.0041 38.1471 38.1471C27.0041 49.2901 18.165 62.5188 12.1344 77.0779C6.10388 91.6369 3 107.241 3 123"
        stroke="#47C1FE"
        stroke-opacity="0.3"
        stroke-width="5"
      />
    </svg>
  );
};
