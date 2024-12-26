import React from 'react';

export function InputField({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  min,
  required = false,
}) {
  return (
    <div className="mb-4">
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 mb-1"
      >
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        required={required}
        className="block w-full px-4 py-2 text-sm border rounded-md shadow-sm border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
      />
    </div>
  );
}
