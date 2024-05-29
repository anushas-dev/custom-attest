import { Injectable } from '@nestjs/common';
import { CreateAttestationDto } from './dto/create-attestation.dto';
import { UpdateAttestationDto } from './dto/update-attestation.dto';

@Injectable()
export class AttestationService {
  create(createAttestationDto: CreateAttestationDto) {
    return 'This action adds a new attestation';
  }

  findAll() {
    return `This action returns all attestation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attestation`;
  }

  update(id: number, updateAttestationDto: UpdateAttestationDto) {
    return `This action updates a #${id} attestation`;
  }

  remove(id: number) {
    return `This action removes a #${id} attestation`;
  }
}
