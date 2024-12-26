import React from 'react';

export function EntryCard({ entry, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Entry Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{entry.name}</h3>
        <p className="text-sm text-gray-600">
          {entry.calories} calories • <span className="capitalize">{entry.mealType}</span>
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(entry.id)}
        className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 rounded-md transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
