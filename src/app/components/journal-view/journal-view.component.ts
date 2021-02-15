import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal-view',
  templateUrl: './journal-view.component.html',
  styleUrls: ['./journal-view.component.css'],
})
export class JournalViewComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  constructor(journal: JournalService) {
  }
}
