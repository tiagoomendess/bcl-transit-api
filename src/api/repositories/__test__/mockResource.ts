const mockResource = {
  RoleRepository: {
    createRole: {
      POSITIVE_CASE_INPUT: {
        name: "Admin",
        description: "Admin",
        slug: "admin",
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        name: "Admin",
        description: "Admin",
        slug: "admin",
        createdAt: "2022-08-26 14:40:19",
        updatedAt: "2022-08-26 14:40:19",
        deletedAt: null,
      },
    },
    getRoles: {
      POSITIVE_CASE_OUTPUT: [
        {
          id: 1,
          name: "Admin",
          description: "Admin",
          slug: "admin",
          createdAt: "2022-08-26 14:40:19",
          updatedAt: "2022-08-26 14:40:19",
          deletedAt: null,
        },
      ],
    },
    getRoleBySlug: {
      POSITIVE_CASE_INPUT: {
        slug: "admin",
      },
      MODEL_OPTIONS: {
        where: {
          slug: "admin",
        },
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        name: "Admin",
        description: "Admin",
        slug: "admin",
        createdAt: "2022-08-26 14:40:19",
        updatedAt: "2022-08-26 14:40:19",
        deletedAt: null,
      },
    },
  },
  UserRepository: {
    createUser: {
      POSITIVE_CASE_INPUT: {
        email: "user@mail.com",
        password:
          "$2b$05$bnaCGMUl/IYffmo9zku7c.AVDpdkJZPt.ZEIXsKULeQglPDyRU7Di",
        firstName: "John",
        lastName: "Doe",
        roleId: 1,
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        email: "user@mail.com",
        password:
          "$2b$05$bnaCGMUl/IYffmo9zku7c.AVDpdkJZPt.ZEIXsKULeQglPDyRU7Di",
        firstName: "John",
        lastName: "Doe",
        roleId: 1,
        createdAt: "2022-08-26 14:40:19",
        updatedAt: "2022-08-26 14:40:19",
        deletedAt: null,
      },
    },
    getUsers: {
      MODEL_OPTIONS: {
        attributes: ["id", "roleId", "firstName", "lastName", "email"],
      },
      POSITIVE_CASE_OUTPUT: [
        {
          id: 1,
          email: "user@mail.com",
          firstName: "John",
          lastName: "Doe",
          roleId: 1,
        },
      ],
    },
    getUserDetail: {
      POSITIVE_CASE_INPUT: {
        userId: 1,
      },
      MODEL_OPTIONS: {
        attributes: ["id", "firstName", "lastName", "email"],
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        email: "user@mail.com",
        firstName: "John",
        lastName: "Doe",
        role: {
          id: 1,
          name: "Admin",
          description: "Admin",
          slug: "admin",
          createdAt: "2022-08-26 14:40:19",
          updatedAt: "2022-08-26 14:40:19",
          deletedAt: null,
        },
      },
    },
    getUserByEmail: {
      POSITIVE_CASE_INPUT: {
        email: "user@mail.com",
      },
      MODEL_OPTIONS: {
        where: {
          email: "user@mail.com",
        },
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        email: "user@mail.com",
        password:
          "$2b$05$bnaCGMUl/IYffmo9zku7c.AVDpdkJZPt.ZEIXsKULeQglPDyRU7Di",
        firstName: "John",
        lastName: "Doe",
        roleId: 1,
        createdAt: "2022-08-26 14:40:19",
        updatedAt: "2022-08-26 14:40:19",
        deletedAt: null,
      },
    },
    updateUser: {
      POSITIVE_CASE_INPUT: {
        userId: 1,
        payload: {
          email: "user@mail.com",
          firstName: "John",
          lastName: "Doe",
          roleId: 1,
        },
      },
      MODEL_OPTIONS: {
        where: {
          id: 1,
        },
      },
      POSITIVE_MODEL_OUTPUT: [1],
      POSITIVE_CASE_OUTPUT: true,
    },
    deleteUser: {
      POSITIVE_CASE_INPUT: {
        userId: 1,
      },
      MODEL_OPTIONS: {
        where: {
          id: 1,
        },
      },
      POSITIVE_MODEL_OUTPUT: 1,
      POSITIVE_CASE_OUTPUT: true,
    },
  },
  TaskRepository: {
    createTask: {
      POSITIVE_CASE_INPUT: {
        summary: "This is an example of summary",
        userId: 1,
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        summary: "This is an example of summary",
        userId: 1,
        completedAt: undefined,
        createdAt: "2022-08-26 14:40:19",
        updatedAt: "2022-08-26 14:40:19",
        deletedAt: null,
      },
    },
    getAllTasks: {
      MODEL_OPTIONS: {
        attributes: [
          "id",
          "userId",
          "summary",
          "dateCompleted",
          "updatedAt",
          "createdAt",
        ],
      },
      POSITIVE_CASE_OUTPUT: [
        {
          id: 1,
          summary: "This is an example of summary",
          userId: 1,
          completedAt: undefined,
          createdAt: "2022-08-26 14:40:19",
          updatedAt: "2022-08-26 14:40:19",
        },
      ],
    },
    getUserTasks: {
      MODEL_OPTIONS: {
        attributes: [
          "id",
          "userId",
          "summary",
          "dateCompleted",
          "updatedAt",
          "createdAt",
        ],
        where: {
          userId: 99,
        },
      },
      POSITIVE_CASE_OUTPUT: [
        {
          id: 1,
          summary: "This is an example of summary",
          userId: 99,
          completedAt: undefined,
          createdAt: "2022-08-26 14:40:19",
          updatedAt: "2022-08-26 14:40:19",
        },
      ],
    },
    getTask: {
      POSITIVE_CASE_INPUT: {
        taskId: 1,
      },
      MODEL_OPTIONS: {
        attributes: [
          "id",
          "userId",
          "summary",
          "dateCompleted",
          "updatedAt",
          "createdAt",
        ],
      },
      POSITIVE_CASE_OUTPUT: {
        id: 1,
        summary: "This is an example of summary for the test getTask(1)",
        userId: 99,
        completedAt: undefined,
        createdAt: "2022-08-26 14:40:19",
        updatedAt: "2022-08-26 14:40:19",
      },
    },
    updateTask: {
      POSITIVE_CASE_INPUT: {
        taskId: 1,
        payload: {
          summary: "Updated summary",
          dateCompleted: new Date("2022-08-26 14:40:19"),
          isCompleted: true,
          userId: 2,
          updatedAt: new Date("2022-08-26 14:40:19"),
          createdAt: new Date("2022-08-26 14:40:19"),
        },
      },
      MODEL_OPTIONS: {
        where: {
          id: 1,
        },
      },
      POSITIVE_MODEL_OUTPUT: [1],
      POSITIVE_CASE_OUTPUT: true,
    },
    deleteTask: {
      POSITIVE_CASE_INPUT: {
        taskId: 66,
      },
      NEGATIVE_CASE_INPUT: {
        taskId: 9999,
      },
      MODEL_OPTIONS: {
        where: {
          id: 66,
        },
      },
      NEGATIVE_MODEL_OPTIONS: {
        where: {
          id: 9999,
        },
      },
      POSITIVE_MODEL_OUTPUT: 1,
      NEGATIVE_MODEL_OUTPUT: 0,
      POSITIVE_CASE_OUTPUT: true,
      NEGATIVE_CASE_OUTPUT: false,
    },
  },
};

export default mockResource;
