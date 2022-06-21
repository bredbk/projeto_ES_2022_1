import { Teacher } from "@modules/teachers/infra/typeorm/entities/Teacher";
import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListTeachersUseCase {
  constructor(
    @inject("TeachersRepository")
    private teachersRepository: ITeachersRepository
  ) {}

  async execute(): Promise<Teacher[]> {
    const teachers = await this.teachersRepository.getAll();
    return teachers;
  }
}

export { ListTeachersUseCase };
