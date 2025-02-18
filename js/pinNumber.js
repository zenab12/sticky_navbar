  changeBulletToStar(input) {
    input.value = '*';
  }

  moveFocus(event, nextInput) {
    const input = event.target;
    const inputValue = input.value;
    const pattern = /^\d$/;

    this.changeBulletToStar(input);
    if (!pattern.test(inputValue)) {
      input.value = '';
      return;
    }

    if (inputValue !== '' && nextInput) {
      nextInput.focus();
    } else {
      event.preventDefault();
    }
  }

  moveFocusToPrev(event, prevInput) {
    const input = event.target;
    const inputValue = input.value;
    if (['Backspace', 'Delete'].includes(event.key)) {
      if (inputValue === '' && prevInput) {
        prevInput.focus();
      }
    }
  }
