export const calculateTotalCalories = (entries) => {
    return entries.reduce((sum, entry) => sum + entry.calories, 0);
  };