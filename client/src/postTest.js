import React from "react";
import { useState } from "react";

const PostTest = () => {
  const [value, setValue] = useState("");

  const submitFunc = (e) => {
    e.preventDefault();
    fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setValue("");
        console.log(response);
      });
  };

  return (
    <form onSubmit={(e) => submitFunc(e)}>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="What's happening?"
        maxLength={280}
        value={value}
      />
      <button type="submit" value="test" />
    </form>
  );
};

export default PostTest;
