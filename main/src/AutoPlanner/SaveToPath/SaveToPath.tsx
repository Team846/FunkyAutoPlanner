import React from "react";

interface SaveToPathProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const SaveToPath: React.FC<SaveToPathProps> = ({ text, setText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textbox">Path to Save File: </label>
      <input
        id="textbox"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type Path to Save File"
      />
    </div>
  );
};

export default SaveToPath;