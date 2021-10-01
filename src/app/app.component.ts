import { Component } from '@angular/core';
import data from '../assets/dyscrasias.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VTM Resonance Generator';

  resonanceProbability = "standard";

  resonanceList = ["Phlegmatic", "Melancholic", "Choleric", "Sanguine"]

  selectedResonance = -1;

  intensityProbability = "standard"

  rolledIntensity = -1;

  intensityList = ["No Resonance", "Fleeting Resonance", "Intense Resonance", "Acute Resonance"]

  disciplineList = ["Auspex and Dominate", "Fortitude and Obfuscate", "Celerity and Potence", "Blood Sorcery and Presence"]

  resonanceNotSelected = false;

  dyscrasiaList = data;

  rolledDyscrasia = -1;

  rollResonance() {
    if (this.resonanceProbability === "standard") {
      let resonance = Math.floor(Math.random() * 10);
      if (resonance < 3)
        this.selectedResonance = 0;
      else if (resonance < 6)
        this.selectedResonance = 1;
      else if (resonance < 8)
        this.selectedResonance = 2;
      else
        this.selectedResonance = 3;
    }
    else {
      this.selectedResonance = Math.floor(Math.random() * 4);
    }
    if(this.rolledIntensity === 3) {
      this.generateDyscrasia()
    }
  }

  resonanceSelected(){
    if(this.rolledIntensity === 3) {
      this.generateDyscrasia()
    }
  }

  rollIntensity() {
    if(this.selectedResonance === -1) {
      this.resonanceNotSelected = true;
      return;
    }
    else
      this.resonanceNotSelected = false;
    
    let intensity = Math.floor(Math.random() * 10);
    if (this.intensityProbability === "standard") {
      if (intensity < 5)
        this.rolledIntensity = 0;
      else if (intensity < 8)
        this.rolledIntensity = 1;
      else {
        let dyscrasia = Math.floor(Math.random() * 10);
        if (dyscrasia < 8)
          this.rolledIntensity = 2;
        else {
          this.rolledIntensity = 3;
          this.generateDyscrasia();
        }
      }
    }
    else {
      if (intensity < 4)
        this.rolledIntensity = 0;
      else if (intensity < 7)
        this.rolledIntensity = 1;
      else {
        let dyscrasia = Math.floor(Math.random() * 10);
        if (dyscrasia < 6)
          this.rolledIntensity = 2;
        else {
          this.rolledIntensity = 3;
          this.generateDyscrasia();
        }
      }
    }
  }

  generateDyscrasia() {
    this.rolledDyscrasia = Math.floor(Math.random() * this.dyscrasiaList[this.rolledIntensity].length);
  }
}
