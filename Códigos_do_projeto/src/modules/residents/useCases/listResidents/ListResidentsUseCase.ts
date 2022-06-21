import { Resident } from "@modules/residents/infra/typeorm/entitites/Resident";
import { IResidentsRepository } from "@modules/residents/repositories/IResidentsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListResidentsUseCase {
  constructor(
    @inject("ResidentsRepository")
    private residentsRepository: IResidentsRepository
  ) {}

  async execute(): Promise<Resident[]> {
    const residents = await this.residentsRepository.getAll();
    return residents;
  }
}

export { ListResidentsUseCase };
