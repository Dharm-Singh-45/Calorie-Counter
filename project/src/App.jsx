import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';
import { FoodEntryForm } from './component/form/FoodEntryForm';
import { DailyLog } from './component/entries/DailyLog';

function App() {
  const [entries, setEntries] = useState(() => {
    // Retrieve stored entries from Local Storage on component load
    const storedEntries = localStorage.getItem('calorieEntries');
    return storedEntries ? JSON.parse(storedEntries) : [];
  });

  useEffect(() => {
    // Store entries in Local Storage whenever they are updated
    localStorage.setItem('calorieEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Utensils className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Calorie Counter</h1>
          </div>
          <p className="text-gray-600">Track your daily food intake and calories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Entry</h2>
            <FoodEntryForm onAddEntry={handleAddEntry} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Summary</h2>
            <DailyLog entries={entries} onDeleteEntry={handleDeleteEntry} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
