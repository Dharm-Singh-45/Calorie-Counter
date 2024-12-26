import React from 'react';

export function MealTypeSelect({ value, onChange }) {
  return (
    <div className="mb-4">
      {/* Label */}
      <label
        htmlFor="mealType"
        className="block text-sm font-medium text-gray-900 mb-1"
      >
        Meal Type
      </label>

      {/* Select Dropdown */}
      <select
        id="mealType"
        value={value}
        onChange={onChange}
        className="block w-full px-4 py-2 text-sm border rounded-md shadow-sm border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
    </div>
  );
}
