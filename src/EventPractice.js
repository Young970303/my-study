import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextFrom = {
      form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFrom);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>.
      <input
        type="text"
        name="username"
        placeholder="준영"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메롱"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
