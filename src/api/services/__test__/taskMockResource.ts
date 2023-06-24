const taskMockResource = {
  createTask: [
    {
      name: "should create with success",
      exeption: null,
      input: {
        payload: { summary: "Example", userId: 6 },
        userData: {
          id: 1,
          email: "adasd@asdsad.com",
          role: {
            id: 2,
            name: "MANAGER",
            slug: "manager",
            description: "",
            updatedAt: new Date("2022-08-26 14:40:19"),
            createdAt: new Date("2022-08-26 14:40:19"),
            deletedAt: new Date("2022-08-26 14:40:19"),
          },
        },
      },
      mockedTaskRepositoryResponses: {
        createTask: {
          id: 1,
          summary: "Example",
          userId: 1,
          isCompleted: false,
        },
      },
      mockedUserRepositoryResponses: {
        getUserDetail: {
          id: 6,
          roleId: 2,
          firstName: "Manager",
          lastName: "Whatever",
          email: "some@email.com",
          password: "password",
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
          deletedAt: new Date("2022-08-26 14:40:19"),
        }
      },
      expectedOutput: {
        id: 1,
        summary: "Example",
        userId: 1,
        isCompleted: false,
      },
    },
    {
      name: "should throw error because tecnincian cannot create task for others",
      errorMessage: "Only Admins and Managers can create other users tasks",
      input: {
        payload: {
          summary: "Created by tecnician for another user",
          userId: 99,
        },
        userData: {
          id: 1,
          email: "adasd@asdsad.com",
          role: {
            id: 3,
            name: "TECHNICIAN",
            slug: "tecnincian",
            description: "",
            updatedAt: new Date("2022-08-26 14:40:19"),
            createdAt: new Date("2022-08-26 14:40:19"),
            deletedAt: new Date("2022-08-26 14:40:19"),
          },
        },
      },
      mockedTaskRepositoryResponses: {
        createTask: {
          id: 1,
          summary: "Example",
          userId: 1,
          isCompleted: false,
        },
      },
      mockedUserRepositoryResponses: {
        getUserDetail: {
          id: 99,
          roleId: 2,
          firstName: "Manager",
          lastName: "Whatever",
          email: "some@email.com",
          password: "password",
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
          deletedAt: new Date("2022-08-26 14:40:19"),
        }
      },
      expectedOutput: {
        id: 1,
        summary: "Example",
        userId: 1,
        isCompleted: false,
      },
    },
  ],
  updateTask: [
    {
      name: "should update the task",
      errorMessage: null,
      input: {
        taskId: 1,
        payload: {
          summary: "Updated by manager for another user",
          userId: 99,
          isCompleted: true,
        },
        userData: {
          id: 1,
          email: "adasd@asdsad.com",
          role: {
            id: 3,
            name: "MANAGER",
            slug: "manager",
            description: "",
            updatedAt: new Date("2022-08-26 14:40:19"),
            createdAt: new Date("2022-08-26 14:40:19"),
            deletedAt: new Date("2022-08-26 14:40:19"),
          },
        },
      },
      mockedTaskRepositoryResponses: {
        updateTask: true,
        getTask: {
          id: 1,
          userId: 99,
          summary: "Whatever",
          dateCompleted: new Date("2022-08-26 14:40:19"),
          isCompleted: false,
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
        },
      },
      mockedUserRepositoryResponses: {
        getUserDetail: {
          id: 1,
          roleId: 2,
          firstName: "Manager",
          lastName: "Whatever",
          email: "some@email.com",
          password: "password",
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
          deletedAt: new Date("2022-08-26 14:40:19"),
        }
      },
      expectedOutput: true,
    },
    {
      name: "should not update the task because no permissions",
      errorMessage: "Only Admins and Managers can modify other users tasks",
      input: {
        taskId: 1,
        payload: {
          summary: "Summary: This update will fail",
          userId: 99,
          isCompleted: false,
        },
        userData: {
          id: 1,
          email: "adasd@asdsad.com",
          role: {
            id: 3,
            name: "TECHNICIAN",
            slug: "technician",
            description: "",
            updatedAt: new Date("2022-08-26 14:40:19"),
            createdAt: new Date("2022-08-26 14:40:19"),
            deletedAt: new Date("2022-08-26 14:40:19"),
          },
        },
      },
      mockedTaskRepositoryResponses: {
        updateTask: false,
        getTask: {
          id: 1,
          userId: 99,
          summary: "Whatever 2",
          dateCompleted: new Date("2022-08-26 14:40:19"),
          isCompleted: false,
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
        },
      },
      mockedUserRepositoryResponses: {
        getUserDetail: {
          id: 99,
          roleId: 2,
          firstName: "Manager",
          lastName: "Whatever",
          email: "some@email.com",
          password: "password",
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
          deletedAt: new Date("2022-08-26 14:40:19"),
        }
      },
      expectedOutput: true,
    },
    {
      name: "should not update because task not found",
      errorMessage: "Task not found",
      input: {
        taskId: 1,
        payload: {
          summary: "Summary: This update will fail",
          userId: 1,
          isCompleted: false,
        },
        userData: {
          id: 1,
          email: "adasd@asdsad.com",
          role: {
            id: 3,
            name: "TECHNICIAN",
            slug: "technician",
            description: "",
            updatedAt: new Date("2022-08-26 14:40:19"),
            createdAt: new Date("2022-08-26 14:40:19"),
            deletedAt: new Date("2022-08-26 14:40:19"),
          },
        },
      },
      mockedTaskRepositoryResponses: {
        updateTask: false,
        getTask: {
          id: 1,
          userId: 1,
          summary: "Whatever 2",
          dateCompleted: new Date("2022-08-26 14:40:19"),
          isCompleted: false,
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
        },
      },
      mockedUserRepositoryResponses: {
        getUserDetail: {
          id: 1,
          roleId: 2,
          firstName: "Manager",
          lastName: "Whatever",
          email: "some@email.com",
          password: "password",
          createdAt: new Date("2022-08-26 14:40:19"),
          updatedAt: new Date("2022-08-26 14:40:19"),
          deletedAt: new Date("2022-08-26 14:40:19"),
        }
      },
      expectedOutput: true,
    },
  ],
};

export default taskMockResource;
