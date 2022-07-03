const BonusCalculator = require('./BonusCalculator');

class ScoreCalculator {

  addBonus(scores) {
    this.total = 0;
    const bonusCalculator = new BonusCalculator(scores);
    bonusCalculator.findSparesAndStrikes();
    this.total = bonusCalculator.addSpareBonus(this.total);
    this.total = bonusCalculator.addStrikeBonus(this.total);
  }

  giveTotal(scores) {
    scores.map((frame) => { 
      this.total += frame.reduce((total, amount) => total += amount) 
    });

    console.log(this.total);
  
    return this.total;
  }

  isGutterGame() {
    return this.total == 0;
  }

  isPerfectGame() {
    return this.total == 300;
  }
}

module.exports = ScoreCalculator;
