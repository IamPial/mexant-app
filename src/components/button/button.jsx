const Button = ({ btnStyle, btnType, btnTitle }) => {
  return (
    <button className={btnStyle} type={btnType}>
      {btnTitle}
    </button>
  );
};
export default Button;
