'use strict';

(function () {

  var dataWizards = {
    COUNT: 4,
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var popup = document.querySelector('.setup');
  var setupSimilarWizards = document.querySelector('.setup-similar');
  var similarListElement = popup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  cloneWizards();
  openPopup();

  function cloneWizards() {
    var similarWizards = generateWizards();
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < similarWizards.length; i++) {
      fragment.appendChild(getWizard(similarWizards[i]));
    }
    similarListElement.appendChild(fragment);
  }

  function getWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  function generateWizards() {
    var wizards = [];
    for (var i = 0; i < dataWizards.COUNT; i++) {
      wizards.push({
        names: arrayRandElement(dataWizards.NAMES),
        surnames: arrayRandElement(dataWizards.SURNAMES),
        coatColor: arrayRandElement(dataWizards.COAT_COLOR),
        eyesColor: arrayRandElement(dataWizards.EYES_COLOR)
      });
    }
    return wizards;
  }

  function openPopup() {
    popup.classList.remove('hidden');
    setupSimilarWizards.classList.remove('hidden');
  }


  function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

})();
