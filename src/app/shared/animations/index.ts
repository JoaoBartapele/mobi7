import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const Animations = {
  rotateOnClick: [
    trigger('rotateOnClick', [
      state('true', style({ transform: 'rotate(150deg)', display: 'none' })),
      state('false', style({ transform: 'rotate(0)', display: 'block' })),
      transition('false <=> true', [animate('200ms ease-in')]),
    ]),
  ],
};
