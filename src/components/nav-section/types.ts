import { StackProps, ListItemButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

export type INavItem = {
  item: NavListProps;
  depth: number;
  open?: boolean;
  active?: boolean;
  isExternalLink?: boolean;
};

export type NavItemProps = INavItem & ListItemButtonProps;

export type NavListProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  isNotVisible?: string;
  roles?: string[];
  children?: any;
  status?: number; 
};

export interface NavSectionProps extends StackProps {
  data: {
    subheader: {
      title?: string;
      roles?: string[];
    };
    items: NavListProps[];
  }[];
}
