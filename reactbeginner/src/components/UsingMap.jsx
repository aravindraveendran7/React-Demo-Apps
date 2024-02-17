//here we use map to loop through array of json objects.
//1.inside the return state start with '{}' statements
//2.where ever you js is used use '{}'

export function UsingMap() {
  const userDetails = [
    {
      firstname: "john",
      lastname: "isac",
      email: "isac23@gmail.com",
    },
    {
      firstname: "samual",
      lastname: "makri",
      email: "samual@gmail.com",
    },
    {
      firstname: "bean",
      lastname: "jones",
      email: "beanjones@gmail.com",
    },
  ];
  return (
    <>
      {userDetails.map((userDetail) => (
        <ul key={Math.random()}>
          <li>{userDetail.firstname}</li>
          <li>{userDetail.lastname}</li>
          <li>{userDetail.email}</li>
        </ul>
      ))}
    </>
  );
}
