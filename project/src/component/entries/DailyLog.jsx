import React from 'react';
import { Calendar } from 'lucide-react';
import { EntryCard } from './EntryCard';
import { calculateTotalCalories } from '../../utils/calories';
import { getTodayDate } from '../../utils/date';

export function DailyLog({ entries, onDeleteEntry }) {
  const todayEntries = entries.filter((entry) => entry.date === getTodayDate());
  const totalCalories = calculateTotalCalories(todayEntries);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="w-6 h-6 text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Today's Log</h2>
        </div>
        <div className="text-sm font-medium text-gray-700">
          Total: <span className="text-indigo-600 font-semibold">{totalCalories} calories</span>
        </div>
      </div>

      {/* Entries Section */}
      <div className="space-y-4">
        {todayEntries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} onDelete={onDeleteEntry} />
        ))}

        {/* Empty State */}
        {todayEntries.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No entries logged for today. Start tracking your meals!
          </p>
        )}
      </div>
    </div>
  );
}
