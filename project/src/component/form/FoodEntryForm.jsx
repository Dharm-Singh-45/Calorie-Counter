import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { InputField } from './InputField';
import { MealTypeSelect } from './MealTypeSelect';
import { getTodayDate } from '../../utils/date';

export function FoodEntryForm({ onAddEntry }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !calories) return;

    const newEntry = {
      id: crypto.randomUUID(),
      name,
      calories: parseInt(calories),
      date: getTodayDate(),
      mealType,
    };

    onAddEntry(newEntry);
    setName('');
    setCalories('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Food Name Input */}
      <InputField
        label="Food Name"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter food name"
        required
        className="focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Calories Input */}
      <InputField
        label="Calories"
        id="calories"
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Enter calories"
        min="0"
        required
        className="focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Meal Type Selector */}
      <MealTypeSelect
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        className="focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Food Entry
      </button>
    </form>
  );
}
