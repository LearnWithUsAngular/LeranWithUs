import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
//import {
//  TooltipOptions
//} from "ng2-tooltip-directive";
//export const MyDefaultTooltipOptions: TooltipOptions = {
//  'show-delay' : 300
//};
const mobileAnimations = [
  trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('0.3s ease-in-out', style({transform: 'translateX(0%)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)', opacity: 1 }),
      animate('0.3s ease-in-out', style({transform: 'translateX(100%)', opacity: 0}))
    ])
  ])
];

const desktopAnimations = [
  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0 }),
      animate('0.3s ease-in', style({transform: 'translateX(0%)', opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1 }),
      animate('0.3s ease-in', style({transform: 'translateX(-100%)', opacity: 0}))
    ])
  ])
];

export function getAnimations() {
  const isMobile = matchMedia("(max-width: 1080px)").matches;

  return isMobile ? mobileAnimations : desktopAnimations;
}