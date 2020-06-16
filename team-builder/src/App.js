import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from "./Form";
import TeamMember from "./TeamMember";

// set default team list
const initialTeamMemberList = [
  {
    id: uuid(),
    username: "Gabriel",
    email: "Gabriel@microsoft.com",
    role: "Team Leader",
  },
];
// set default form
const initialFormValues = {
  username: "",
  email: "",
  role: "",
};
function App() {
  // set state
  const [teamMembers, setTeamMembers] = useState(initialTeamMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  // input change handler
  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    // set for with new values
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // submit handler
  const onSubmit = (evt) => {
    evt.preventDefault();

    // handle errors
    if (!formValues.username || !formValues.email || !formValues.role) {
      setError("You need to fill out all the info");
      return;
    }
    setError("");
    // set valies for new team member
    const newTeamMember = {
      id: uuid(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    //  set new team member
    setTeamMembers((teamMembers) => [newTeamMember, ...teamMembers]); // this is better when new state depends on old state
    // e) optionally clear the form
    setFormValues(initialFormValues);
  };
  return (
    <div>
      {/* render form */}
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {/* map through teamMembers array creating new team member */}
      {teamMembers.map((teamMember) => {
        return <TeamMember key={teamMember.id} details={teamMember} />;
      })}
    </div>
  );
}
export default App;
