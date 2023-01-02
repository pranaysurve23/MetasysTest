import { Placement } from '@popperjs/core';
import {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Popper } from '../popper';
import { popperMargin, StyledTooltip } from './styled';

export type TooltipProps = {
  children: ReactElement<{ ref?: Ref<unknown> }>; // Needs to be able to hold a ref.
  content?: ReactNode;
  placement?: Placement;
  disabled?: boolean;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
};

export const Tooltip: FC<TooltipProps> = ({
  children,
  content = '',
  placement = 'top',
  disabled = false,
  openDelay = 500,
  closeDelay = 10,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  disabled = disabled || !content;
  // Timer for open/close tooltip
  const openTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    return () => {
      clearTimeout(openTimer.current as any);
      clearTimeout(closeTimer.current as any);
    };
  }, []);

  // Child ref
  const [childNode, setChildNode] = useState<HTMLElement | undefined>();
  const childrenWithRef = useMemo(() => {
    return cloneElement(children, { ref: setChildNode });
  }, [children, setChildNode]);

  // Add enter/leave listeners to the child via its' ref
  useEffect(() => {
    if (childNode && !disabled) {
      let touchEventInProgress = false;
      const handleOpen = () => {
        clearTimeout(openTimer.current as any);
        clearTimeout(closeTimer.current as any);
        openTimer.current = setTimeout(() => {
          setOpen(true);
        }, openDelay);
      };
      const handleClose = () => {
        clearTimeout(openTimer.current as any);
        clearTimeout(closeTimer.current as any);
        closeTimer.current = setTimeout(() => {
          touchEventInProgress = false;
          setOpen(false);
        }, closeDelay);
      };
      const handleMouseEnter = () => {
        if (touchEventInProgress) {
          return;
        }
        handleOpen();
      };
      const handleMouseLeave = () => {
        handleClose();
      };
      const handleTouchStart = () => {
        touchEventInProgress = true;
        handleOpen();
      };
      const handleTouchEnd = () => {
        handleClose();
      };

      childNode.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      childNode.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      childNode.addEventListener('touchstart', handleTouchStart, { passive: true });
      childNode.addEventListener('touchend', handleTouchEnd, { passive: true });
      return () => {
        childNode.removeEventListener('mouseenter', handleMouseEnter);
        childNode.removeEventListener('mouseleave', handleMouseLeave);
        childNode.removeEventListener('touchstart', handleTouchStart);
        childNode.removeEventListener('touchend', handleTouchEnd);
      };
    } else {
      setOpen(false);
    }
  }, [childNode, disabled]);

  return (
    <>
      {childrenWithRef}
      {childNode && (
        <Popper anchorEl={childNode} placement={placement} open={open} margin={popperMargin}>
          <StyledTooltip className={className}>{content}</StyledTooltip>
        </Popper>
      )}
    </>
  );
};
