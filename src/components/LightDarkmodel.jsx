import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function LightDarkmodel() {
  const [isDark, setIsDark] = useState(false);

  // Khi component mount, lấy trạng thái từ cookie và set state
  useEffect(() => {
    const mode = Cookies.get("mode");
    if (mode === "dark-mode") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
      console.log("Cookie: dark mode");
    } else {
      setIsDark(false);
      document.body.classList.remove("dark-mode");
      console.log("Cookie: light mode");
    }
  }, []);

  // Khi toggle thay đổi
  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsDark(checked);
    if (checked) {
      document.body.classList.add("dark-mode");
      Cookies.set("mode", "dark-mode", { expires: 7 });
      console.log("change to dark mode");
    } else {
      document.body.classList.remove("dark-mode");
      Cookies.remove("mode");
      console.log("change to light mode");
    }
  };

  return (
    <label htmlFor="darkmode">
      Dark Mode
      <input
        id="darkmode"
        type="checkbox"
        checked={isDark}
        onChange={handleChange}
      />
    </label>
  );
}

export default LightDarkmodel;
