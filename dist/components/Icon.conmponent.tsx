import classnames from '../../utilities/classnames';
import icons from './icons.json';
import { FC, HTMLAttributes } from 'react';

export type TIcon = keyof typeof icons;


export interface IIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: TIcon;
  size?: number;
  className?: string;
}

const Icon: FC<IIconProps> = ({ icon, size = 24, className, ...props }) => {
  const iconData = icons[icon]

  if (!iconData) {
    console.warn(`Icon ${icon} not found.`);
    return null;
  }

  return (
    <svg
      key={icon}
      {...props}
      fill='none'
      viewBox={`0 0 24 24`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={classnames("Icon", className)}
    >
      <path stroke="currentColor" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' d={iconData} />
    </svg>
  );
};

export default Icon;