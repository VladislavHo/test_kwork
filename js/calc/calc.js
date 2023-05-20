export default class SavingsCalculator {
  constructor() {
    this.rangeMonth = document.getElementById('range__month');
    this.numberMonth = document.getElementById('number__month');
    this.rangeSaving = document.getElementById('range__saving');
    this.numberSaving = document.getElementById('number__saving');
    this.resultContainer = document.querySelector('.saving__calc-info');
    this.selectInterest = document.getElementById('saving__calc-select__interest');

    this.setupEventListeners();
    this.calculateResult();
  }

  setupEventListeners() {
    this.numberMonth.addEventListener('input', () => {
      const number = parseInt(this.numberMonth.value);
      this.rangeMonth.value = number;
      this.calculateResult();
    });

    this.rangeMonth.addEventListener('input', () => {
      const selectedValue = parseInt(this.rangeMonth.value);
      this.numberMonth.value = selectedValue;
      this.calculateResult();
    });

    this.numberSaving.addEventListener('input', () => {
      const number = parseInt(this.numberSaving.value);
      this.rangeSaving.value = number;
      this.calculateResult();
    });

    this.rangeSaving.addEventListener('input', () => {
      const selectedValue = parseInt(this.rangeSaving.value);
      this.numberSaving.value = selectedValue;
      this.calculateResult();
    });

    this.selectInterest.addEventListener('change', () => {
      this.calculateResult();
    });
  }

  calculateResult() {
    const months = parseInt(this.rangeMonth.value);
    const savings = parseInt(this.rangeSaving.value);
    const interestRate = parseFloat(this.selectInterest.value);

    const interest = (savings * interestRate * months) / (12 * 100);
    const totalAmount = savings + interest;
    const interestRateYearly = (interest / savings) * (12 / months) * 100;

    const resultElements = this.resultContainer.getElementsByTagName('b');
    resultElements[0].textContent = totalAmount.toFixed(2);
    resultElements[1].textContent = interestRateYearly.toFixed(2);
    resultElements[2].textContent = interest.toFixed(2);
  }
}