import { css } from "@panda-styled-system/css";
import { ChangeEvent, FormEvent, useState } from "react";

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={css({
        inlineSize: "100%",
        display: "flex",
        alignItems: "center",
      })}
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className={css({
          padding: "8px",
          border: "1px solid #ccc",
          borderLeftRadius: 4,
          flex: "1",
          outline: "none",
        })}
      />
      <button
        type="submit"
        className={css({
          padding: "8px 16px",
          backgroundColor: "primary",
          color: "#fff",
          border: "none",
          borderRightRadius: 4,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#005bb5",
          },
        })}
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
