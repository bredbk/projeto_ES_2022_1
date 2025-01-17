import { Router } from "express";
import multer from "multer";

import { CreateExamController } from "@modules/exams/useCases/createExam/CreateExamController";
import { DeleteExamController } from "@modules/exams/useCases/deleteExam/DeleteExamController";
import { ListExamsController } from "@modules/exams/useCases/listExams/ListExamsController";
import { UpdateExamController } from "@modules/exams/useCases/updateExam/UpdateExamController";
import { UpdateExamAttachmentController } from "@modules/exams/useCases/updateExamAttachment/UpdateExamAttachmentController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import uploadConfig from "@config/upload";
import { GetExamByIdController } from "@modules/exams/useCases/GetExamById/GetExamByIdController";

const examsRoutes = Router();

const uploadAttachment = multer(uploadConfig);

const createExamController = new CreateExamController();
const listExamsController = new ListExamsController();
const deleteExamController = new DeleteExamController();
const updateExamController = new UpdateExamController();
const updateExamAttachmentController = new UpdateExamAttachmentController();
const getExamByIdController = new GetExamByIdController();

examsRoutes.post("/", ensureAuthenticated, createExamController.handle);
examsRoutes.get("/", ensureAuthenticated, listExamsController.handle);
examsRoutes.delete("/:id", ensureAuthenticated, deleteExamController.handle);
examsRoutes.put("/:id", ensureAuthenticated, updateExamController.handle);
examsRoutes.patch(
  "/attachment/:id",
  ensureAuthenticated,
  uploadAttachment.single("exam"),
  updateExamAttachmentController.handle
);
examsRoutes.get("/:id", ensureAuthenticated, getExamByIdController.handle);

export { examsRoutes };
