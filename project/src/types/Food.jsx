// Valid meal types
export const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack'];

// Helper function to validate a food entry
export const isValidFoodEntry = (entry) => {
  return (
    entry &&
    typeof entry.id === 'string' &&
    typeof entry.name === 'string' &&
    typeof entry.calories === 'number' &&
    typeof entry.date === 'string' &&
    MEAL_TYPES.includes(entry.mealType)
  );
};

// Helper function to create a new food entry
export const createFoodEntry = ({ name, calories, mealType }) => ({
  id: crypto.randomUUID(),
  name,
  calories: Number(calories),
  date: new Date().toISOString().split('T')[0],
  mealType,
});