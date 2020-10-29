const createTitle = (
  title,
  { subtitle, subtitleSymbol = ":", suffix = " | Beto Muniz" } = {}
) => {
  let customTitle = `${title}`;

  if (subtitle) {
    customTitle = `${customTitle}${subtitleSymbol} ${subtitle}`;
  }

  return `${customTitle}${suffix}`;
};

export default createTitle;
