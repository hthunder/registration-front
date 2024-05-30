import React, { useRef } from "react";
import classes from "./AvatarUploader.module.css";

type AvatarUploaderProps = {
  file?: File;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  file,
  onChange,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileInputClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <label className={classes.label}>
        <span className={classes.labelText}>Avatar:</span>
        <input
          type="file"
          name="avatar"
          ref={inputRef}
          id="avatar"
          className={classes.hiddenFileInput}
          onChange={onChange}
        />
      </label>
      <div className={classes.wrapper}>
        <button
          type="button"
          onClick={handleFileInputClick}
          className={classes.button}
        >
          Choose File
        </button>
        <span>{file ? file.name : "No file chosen"}</span>
      </div>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};
