import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css']
})
export class MatchAddComponent implements OnInit {
  addMatchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private matchService: MatchService) { }

  ngOnInit() {
    this.addMatchForm = this.formBuilder.group({
      player1name: ['', Validators.required],
      player1score: ['', Validators.min(0)],
      player2name: ['', Validators.required],
      player2score: ['', Validators.min(0)],
    })
  }

  onSubmit() {
    this.matchService.add(
      this.addMatchForm.value
    );
  }

}
