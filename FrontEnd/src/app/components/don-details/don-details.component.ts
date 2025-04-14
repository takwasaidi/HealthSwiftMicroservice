import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonDTO } from 'src/app/models/DonDTO';
import { DonService } from 'src/app/services/Don.service';

@Component({
  selector: 'app-don-details',
  templateUrl: './don-details.component.html',
  styleUrls: ['./don-details.component.css']
})
export class DonDetailsComponent {
  donData?: DonDTO;

  constructor(
    private donService: DonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.donService.getDonWithDemandes(id).subscribe(data => {
      this.donData = data;
    });
  }
}
