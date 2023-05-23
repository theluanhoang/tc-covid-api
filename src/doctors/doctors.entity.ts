import { Column, Entity } from 'typeorm';
import { EDoctorRole } from './interfaces/doctors.interface';
import { BaseEntity } from 'src/shares/base.entity';

@Entity('doctors')
export class User extends BaseEntity {
  @Column({ nullable: true, name: 'id_card' })
  idCard: string;

  @Column()
  address: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true, name: 'full_name' })
  fullName: string;

  @Column({ nullable: true, name: 'date_of_birth' })
  dateOfBirth: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ enum: EDoctorRole, default: EDoctorRole.HEALTH_CHECKUP_NURSE })
  role: EDoctorRole;
}
