import { DemandeDTO } from "./DemandeDTO";

export interface DonDTO {
    id: number;
    montant: string;
    dateRemise: string;
    type: string;
    campagne: any; // ou `CampagneDTO` si tu le définis
    demandes: DemandeDTO[];
  }