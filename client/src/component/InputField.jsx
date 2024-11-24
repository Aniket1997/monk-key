// src/components/InputField.jsx
export default function InputField({
    type,
    value,
    onChange,
    placeholder,
    name,
    error,
  }) {
    return (
      <div className="mb-4">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
  