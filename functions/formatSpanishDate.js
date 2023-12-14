const formatSpanishDate = (rawDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(rawDate);
  return date.toLocaleDateString("es-ES", options);
};

export default formatSpanishDate;
