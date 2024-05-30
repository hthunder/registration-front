import { AvatarUploader, FormField } from "../../../shared/ui/";
import { useRegistrationForm } from "../model/useRegistrationForm.ts";
import classes from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  const { formData, handleChange, handleSubmit, errors, submissionMessage } =
    useRegistrationForm();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1 className={classes.formHeading}>Create account</h1>
      <div className={classes.formFieldsWrapper}>
        <FormField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <FormField
          label="Birthday"
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          error={errors.birthday}
        />
        <FormField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <AvatarUploader
          file={formData.avatar}
          onChange={handleChange}
          error={errors.avatar}
        />
      </div>

      <button className={classes.button} type="submit">
        Sign up
      </button>
      {submissionMessage && (
        <div className={classes.result}>{submissionMessage}</div>
      )}
    </form>
  );
};
