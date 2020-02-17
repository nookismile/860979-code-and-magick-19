'use strict';

(function () {

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');

  var setupSimilarWizards = document.querySelector('.setup-similar');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };


  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', function (evt) {
      if (evt.key === ESC_KEY) {
        closePopup();
      }
    });

    var onEscPress('keydown', function (evt) {
      if (evt.key === ESC_KEY && evt.target !== userNameInput) {
        closePopup();
      }
    });
  };

  var closePopup = function () {
    setup.classList.add('hidden');
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });

  userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validaty.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-ex символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов';)
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  var dataWizards = {
    COUNT: 4,
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
  };

  cloneWizards();
  //  openPopup();

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

  //  function openPopup() {
  //    popup.classList.remove('hidden');
  //    setupSimilarWizards.classList.remove('hidden');
  //  }


  function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

})();
