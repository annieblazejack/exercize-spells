export default function Button(props) {
  /**
   * {
   *  children: "Click",
   *  disabled: true,
   *  className:"text-red"
   *  onClick: () => console.log("hello")
   * }
   */

  const { children, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`p-1 px-2 m-1 bg-slate-100 rounded-sm  ${
        restProps.disabled === true ? 'text-slate-400' : 'text-black'
      } ${restProps.className ?? ''}`}
    >
      {children}
    </button>
  );
}
