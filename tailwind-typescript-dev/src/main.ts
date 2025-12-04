import Alpine from 'alpinejs';

window.Alpine = Alpine;

interface HambergerData {
  isOpen: Boolean;
  handleClick(): void;
}

Alpine.data(
  'hamberger',
  (): HambergerData => ({
    isOpen: false,

    handleClick() {
      this.isOpen = !this.isOpen;
    },
  })
);

Alpine.start();
