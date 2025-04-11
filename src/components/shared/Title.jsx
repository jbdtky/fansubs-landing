
export const Title = ({ children, element: Element = 'h1', className, style }) => {
  return (
    <Element className={`font-semibold text-center ${className}`}  style={style}>
      {children}
    </Element>
  );
};

