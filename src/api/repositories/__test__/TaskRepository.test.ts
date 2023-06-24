import mockResource from "./mockResource";
import Task from "../../models/Task";
import TaskRepository from "../TaskRepository";

jest.mock("../../models/Task");

const MockedTask = jest.mocked(Task, true);

describe("TaskRepository", () => {
  describe("TaskRepository.__createTask", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return task created", async () => {
      //arrange
      const mockInput =
        mockResource.TaskRepository.createTask.POSITIVE_CASE_INPUT;
      const mockOutput =
        mockResource.TaskRepository.createTask.POSITIVE_CASE_OUTPUT;
      MockedTask.create.mockResolvedValue(mockOutput);

      //act
      const result = await TaskRepository.createTask(mockInput);

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.create).toHaveBeenCalledTimes(1);
      expect(MockedTask.create).toBeCalledWith(mockInput);
    });
  });

  describe("UserRepository.__getAllTasks", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return list of all the tasks", async () => {
      //arrange
      const mockModelOptions =
        mockResource.TaskRepository.getAllTasks.MODEL_OPTIONS;
      const mockOutput: any =
        mockResource.TaskRepository.getAllTasks.POSITIVE_CASE_OUTPUT;

      MockedTask.findAll.mockResolvedValue(mockOutput);

      //act
      const result = await TaskRepository.getAllTasks();

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.findAll).toHaveBeenCalledTimes(1);
      expect(MockedTask.findAll).toBeCalledWith(mockModelOptions);
    });
  });

  describe("UserRepository.__getUserTasks", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return list of tasks for the user 99", async () => {
      //arrange
      const mockModelOptions =
        mockResource.TaskRepository.getUserTasks.MODEL_OPTIONS;
      const mockOutput: any =
        mockResource.TaskRepository.getUserTasks.POSITIVE_CASE_OUTPUT;

      MockedTask.findAll.mockResolvedValue(mockOutput);

      //act
      const result = await TaskRepository.getUserTasks(99);

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.findAll).toHaveBeenCalledTimes(1);
      expect(MockedTask.findAll).toBeCalledWith(mockModelOptions);
    });
  });

  describe("UserRepository.__getTask", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return a single task", async () => {
      //arrange
      const mockInput = mockResource.TaskRepository.getTask.POSITIVE_CASE_INPUT;
      const mockModelOptions =
        mockResource.TaskRepository.getTask.MODEL_OPTIONS;
      const mockOutput: any =
        mockResource.TaskRepository.getTask.POSITIVE_CASE_OUTPUT;

      MockedTask.findByPk.mockResolvedValue(mockOutput);

      //act
      const result = await TaskRepository.getTask(mockInput.taskId);

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.findByPk).toHaveBeenCalledTimes(1);
      expect(MockedTask.findByPk).toBeCalledWith(
        mockInput.taskId,
        mockModelOptions
      );
    });

    it("should return null", async () => {
      //arrange
      const mockInput = mockResource.TaskRepository.getTask.POSITIVE_CASE_INPUT;
      const mockModelOptions =
        mockResource.TaskRepository.getTask.MODEL_OPTIONS;
      const mockOutput: any = null;

      MockedTask.findByPk.mockResolvedValue(mockOutput);

      //act
      const result = await TaskRepository.getTask(mockInput.taskId);

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.findByPk).toHaveBeenCalledTimes(1);
      expect(MockedTask.findByPk).toBeCalledWith(1, mockModelOptions);
    });
  });

  describe("UserRepository.__updateUser", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return update task with success", async () => {
      //arrange
      const mockInput =
        mockResource.TaskRepository.updateTask.POSITIVE_CASE_INPUT;
      const mockModelOptions =
        mockResource.TaskRepository.updateTask.MODEL_OPTIONS;
      const mockModelOutput: any =
        mockResource.TaskRepository.updateTask.POSITIVE_MODEL_OUTPUT;
      const mockOutput =
        mockResource.TaskRepository.updateTask.POSITIVE_CASE_OUTPUT;

      MockedTask.update.mockResolvedValue(mockModelOutput);

      //act
      const result = await TaskRepository.updateTask(
        mockInput.taskId,
        mockInput.payload
      );

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.update).toHaveBeenCalledTimes(1);
      expect(MockedTask.update).toBeCalledWith(
        mockInput.payload,
        mockModelOptions
      );
    });
  });

  describe("UserRepository.__deleteUser", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return delete task with success", async () => {
      //arrange
      const mockInput =
        mockResource.TaskRepository.deleteTask.POSITIVE_CASE_INPUT;
      const mockModelOptions =
        mockResource.TaskRepository.deleteTask.MODEL_OPTIONS;
      const mockModelOutput: any =
        mockResource.TaskRepository.deleteTask.POSITIVE_MODEL_OUTPUT;
      const mockOutput =
        mockResource.TaskRepository.deleteTask.POSITIVE_CASE_OUTPUT;

      MockedTask.destroy.mockResolvedValue(mockModelOutput);

      //act
      const result = await TaskRepository.deleteTask(mockInput.taskId);

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.destroy).toHaveBeenCalledTimes(1);
      expect(MockedTask.destroy).toBeCalledWith(mockModelOptions);
    });

    it("should return delete task without success", async () => {
      //arrange
      const mockInput =
        mockResource.TaskRepository.deleteTask.NEGATIVE_CASE_INPUT;
      const mockModelOptions =
        mockResource.TaskRepository.deleteTask.NEGATIVE_MODEL_OPTIONS;
      const mockModelOutput: any = null;
      const mockOutput =
        mockResource.TaskRepository.deleteTask.NEGATIVE_CASE_OUTPUT;

      MockedTask.destroy.mockResolvedValue(mockModelOutput);

      //act
      const result = await TaskRepository.deleteTask(mockInput.taskId);

      //assert
      expect(result).toEqual(mockOutput);
      expect(MockedTask.destroy).toHaveBeenCalledTimes(1);
      expect(MockedTask.destroy).toBeCalledWith(mockModelOptions);
    });
  });
});
