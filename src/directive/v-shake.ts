export const VShake = {
  mounted(el: any, binding: any) {
    // const { value } = binding;
    // const { shake } = value;
    // const { shakeTime = 1, shakeDistance = 10, shakeDelay = 100 } = shake;
    // const shakeClass = `shake-${shakeTime} shake-${shakeDistance} shake-${shakeDelay}`;
    el.addEventListener('click', () => {
      el.classList.add('apply-shake');
      setTimeout(() => {
        el.classList.remove('apply-shake');
      }, 1000);
    });
  }
}