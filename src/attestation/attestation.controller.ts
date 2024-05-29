import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttestationService } from './attestation.service';
import { CreateAttestationDto } from './dto/create-attestation.dto';
import { UpdateAttestationDto } from './dto/update-attestation.dto';

@Controller('attestation')
export class AttestationController {
  constructor(private readonly attestationService: AttestationService) {}

  @Post()
  create(@Body() createAttestationDto: CreateAttestationDto) {
    return this.attestationService.create(createAttestationDto);
  }

  @Get()
  findAll() {
    return this.attestationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attestationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttestationDto: UpdateAttestationDto) {
    return this.attestationService.update(+id, updateAttestationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attestationService.remove(+id);
  }
}
