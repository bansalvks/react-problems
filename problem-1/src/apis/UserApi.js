export const fakeFetchUserList = () => {
  console.log("FetchUserList called");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("FetchUserList success");
      resolve([
        {
          id: 1,
          name: "John Doe",
          email: "john@fake.com",
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane@fake.com",
        },
        {
          id: 3,
          name: "Jack Doe",
          email: "jack@fake.com",
        },
        {
          id: 4,
          name: "Jill Doe",
          email: "jill@fake.com",
        },
        {
          id: 5,
          name: "Jasper Doe",
          email: "jasper@fake.com",
        },
      ]);
    }, 2000);
  });
};

const UserApi = {
  fakeFetchUserList,
};

export default UserApi;
