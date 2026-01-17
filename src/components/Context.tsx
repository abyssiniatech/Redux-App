import { useContext } from "react";

import { UserContext } from "./Usecontext";
const UserProfile = () => {
  const user = useContext(UserContext);

  if (!user) return null;

  return (
    <section className="w-500 rounded bg-teal-400 text-white m-auto p-40">
      <h1>useContext Hook</h1>
      <h2>My name is {user.name}</h2>
      <button onClick={() => user.setName("Abel")}>
        Change Name
      </button>
    </section>
  );
};

export default UserProfile;
