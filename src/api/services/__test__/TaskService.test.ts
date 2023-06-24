import mockResource from "./taskMockResource";

import TaskService from "../TaskService";
import TaskRepository from "../../repositories/TaskRepository";
import UserRepository from "../../repositories/UserRepository";

// A slightly different approach

jest.mock("../../repositories/TaskRepository");
jest.mock("../../repositories/UserRepository");
const MockedTaskRepository = jest.mocked(TaskRepository, true);
const MockedUserRepository = jest.mocked(UserRepository, true);

describe("TaskService", () => {
  describe("TaskService.__createTask", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    mockResource.createTask.forEach((useCase) => {
      it(useCase.name, async () => {
        // arrange
        MockedTaskRepository.createTask.mockResolvedValue(
          useCase.mockedTaskRepositoryResponses.createTask
        );
        MockedUserRepository.getUserDetail.mockResolvedValue(
          useCase.mockedUserRepositoryResponses.getUserDetail
        );

        // act and assert
        if (useCase.errorMessage) {
          try {
            await TaskService.createTask(
              useCase.input.payload,
              useCase.input.userData
            );
          } catch (e) {
            expect(e.message).toEqual(useCase.errorMessage);
          }
        } else {
          const result = await TaskService.createTask(
            useCase.input.payload,
            useCase.input.userData
          );
          expect(result).toEqual(useCase.expectedOutput);
        }
      });
    });
  });

  describe("TaskService.__updateTask", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    mockResource.updateTask.forEach((useCase) => {
      it(useCase.name, async () => {
        // arrange
        MockedTaskRepository.getTask.mockResolvedValue(
          useCase.mockedTaskRepositoryResponses.getTask
        );
        MockedTaskRepository.updateTask.mockResolvedValue(
          useCase.mockedTaskRepositoryResponses.updateTask
        );
        MockedUserRepository.getUserDetail.mockResolvedValue(
          useCase.mockedUserRepositoryResponses.getUserDetail
        );

        // act and assert
        if (useCase.errorMessage) {
          try {
            await TaskService.updateTask(
              useCase.input.taskId,
              useCase.input.payload,
              useCase.input.userData
            );
          } catch (e) {
            expect(e.message).toEqual(useCase.errorMessage);
          }
        } else {
          const result = await TaskService.updateTask(
            useCase.input.taskId,
            useCase.input.payload,
            useCase.input.userData
          );
          expect(result).toEqual(useCase.expectedOutput);
        }
      });
    });
  });
});
