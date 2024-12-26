export const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };
  
  export const getTodayDate = () => {
    return formatDate(new Date());
  };