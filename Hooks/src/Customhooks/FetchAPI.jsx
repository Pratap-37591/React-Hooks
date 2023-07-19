import useFetch from "./useFetch";

const FetchAPI = () => {
  const user = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {user.map((userInfo) => (
        <div>
          <span>
            {userInfo.id}. {userInfo.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default FetchAPI;
