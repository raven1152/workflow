import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.scss'],
})
export class JournalEntriesComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  constructor(journal: JournalService) {
  }
}
