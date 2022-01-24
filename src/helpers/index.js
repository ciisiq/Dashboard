// pegar a data atual e converter padrao Brasil
export const FormatDate = (date) => {
  const fullDate = new Date(date);

  if (fullDate) {
    return fullDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};

// pegar a hora atual e converter padrao Brasil
export const GetHours = (date) => {
  const fullDate = new Date(date);

  if (fullDate) {
    return fullDate.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};
