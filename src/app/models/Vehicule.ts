import { Personne } from './Personne';

export class Vehicule {
    vehiculeId: string;
    registration: string;
    brand: string;
    type: string;
    rumberCertificat: string;
    comercialDenomination: string;
    location: string;
    color: string;
    tint: string;
    variant: string;
    dateFirstRegistration: Date;
    datePurchase: Date;
    person: Personne;
  }