import { Router } from "express";
import { CreateExamRequestController } from "@modules/examsRequest/useCases/createExamRequest/CreateExamRequestController";
import { DeleteExamRequestController } from "@modules/examsRequest/useCases/deleteExamRequest/DeleteExamRequestController";
import { ListExamRequestsController } from "@modules/examsRequest/useCases/listExamsRequest/ListExamRequestsController";
import { UpdateExamRequestController } from "@modules/examsRequest/useCases/updateExamRequest/UpdateExamRequestController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { GetExamRequestByIdController } from "@modules/examsRequest/useCases/GetExamRequestById/GetExamRequestByIdController";

const examRequestsRoutes = Router();

const createExamRequest = new CreateExamRequestController();
const listExamRequests = new ListExamRequestsController();
const deleteExamRequest = new DeleteExamRequestController();
const updateExamRequest = new UpdateExamRequestController();
const getExamRequestByIdController = new GetExamRequestByIdController();

examRequestsRoutes.post("/", ensureAuthenticated, createExamRequest.handle);
examRequestsRoutes.get("/", ensureAuthenticated, listExamRequests.handle);
examRequestsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  deleteExamRequest.handle
);
examRequestsRoutes.put("/:id", ensureAuthenticated, updateExamRequest.handle);
examRequestsRoutes.get(
  "/:id",
  ensureAuthenticated,
  getExamRequestByIdController.handle
);

export { examRequestsRoutes };
