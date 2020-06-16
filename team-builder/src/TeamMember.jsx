import React from "react";

function TeamMember(props) {
  const { details } = props;
  // catch error
  if (!details) {
    return <h3>Working fetching your team members&apos;s details...</h3>;
  }

  return (
    //   return  team member
    <div>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
export default TeamMember;
