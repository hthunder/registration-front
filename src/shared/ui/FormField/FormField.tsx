import classes from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
}) => (
  <div>
    <label className={classes.label}>
      <span className={classes.labelText}>{label}:</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={classes.input}
      />
    </label>
    {error && <div className={classes.error}>{error}</div>}
  </div>
);
