/**
 * AIInput is a simple controlled textarea component used to capture the
 * user's free‑form prompt for the AI.  It renders a styled textarea
 * with rounded corners that fits into the dark theme defined by the app.
 *
 * Props:
 *  - value: string – The current value of the textarea.
 *  - onChange: function – Callback invoked when the text changes.
 *  - placeholder: string – Placeholder text shown when the textarea is empty.
 */
export default function AIInput({ value, onChange, placeholder }) {
  return (
    <textarea
      className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
    />
  );
}
