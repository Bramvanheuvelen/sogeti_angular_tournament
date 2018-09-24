import { Injectable } from '@angular/core';
import { Match } from './match';
import { MATCHES } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matches: Match[] = MATCHES;

  constructor() { }

  getMatches(): Match[] {
    return this.matches;
  }

  add(match: Match): Match {
    match.date = new Date();
    this.matches.push(match);
    return match;
  }
}

