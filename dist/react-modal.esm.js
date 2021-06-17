import { ModalStack, useModals } from '@mattjennings/react-modal-stack';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Box, Close } from 'theme-ui';
import { useResponsiveValue } from '@theme-ui/match-media';
import { TouchScrollable } from 'react-scrolllock';

var ModalContext = /*#__PURE__*/React.createContext({});
function useModal() {
  return useContext(ModalContext);
}

var MotionBox = /*#__PURE__*/motion(Box);
function Backdrop(props) {
  var _useModal = useModal(),
      skipAnimations = _useModal.skipAnimations,
      isFullScreen = _useModal.isFullScreen;

  if (isFullScreen) {
    return null;
  }

  return React.createElement(MotionBox, Object.assign({
    "aria-hidden": "true",
    variant: "modals.backdrop",
    custom: {
      skip: skipAnimations
    },
    variants: {
      enter: {
        opacity: 1,
        transition: {
          duration: 0.2
        }
      },
      exit: function exit(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            skip = _ref.skip;

        if (skip) {
          return {
            transition: {
              duration: 0.2
            }
          };
        }

        return {
          opacity: 0,
          transition: {
            duration: 0.2
          }
        };
      }
    },
    animate: "enter",
    initial: skipAnimations ? false : 'exit',
    exit: "exit"
  }, props));
}

function AnimatedModalStack(props) {
  return React.createElement(ModalStack, Object.assign({
    renderModals: AnimatedModals
  }, props));
}

function AnimatedModals(_ref) {
  var stack = _ref.stack,
      closeModal = _ref.closeModal;

  // Lags slightly behind the `stack` so that we can animate the dismissal of modals
  var _useState = useState(stack),
      displayedStack = _useState[0],
      setDisplayedStack = _useState[1];

  var _useState2 = useState(false),
      skipAnimations = _useState2[0],
      setSkipAnimations = _useState2[1];

  var _useState3 = useState(false),
      isOpen = _useState3[0],
      setOpen = _useState3[1];

  useEffect(function () {
    // if we're opening the first modal
    if (stack.length === 1 && displayedStack.length === 0) {
      setOpen(true);
      setDisplayedStack(stack);
    } else {
      var _stack$props$skipAnim, _stack, _stack$props, _displayedStack, _displayedStack$props;

      // else we are adding or dismissing a modal
      // if either the previous or current modal should skip animations
      var _skipAnimations = (_stack$props$skipAnim = stack == null ? void 0 : (_stack = stack[stack.length - 1]) == null ? void 0 : (_stack$props = _stack.props) == null ? void 0 : _stack$props.skipAnimations) != null ? _stack$props$skipAnim : displayedStack == null ? void 0 : (_displayedStack = displayedStack[displayedStack.length - 1]) == null ? void 0 : (_displayedStack$props = _displayedStack.props) == null ? void 0 : _displayedStack$props.skipAnimations;

      if (_skipAnimations) {
        setDisplayedStack(stack);
        setOpen(true);
        setSkipAnimations(true);
      } else {
        setSkipAnimations(false);
        setOpen(false);
      }
    }
  }, [stack]); // after displayedStack has updated, check whether the current modal should skip animations
  // (incase we transitioned from an animated modal to a skipped animation modal)

  useEffect(function () {
    var _displayedStack2, _displayedStack2$prop;

    setSkipAnimations(displayedStack == null ? void 0 : (_displayedStack2 = displayedStack[displayedStack.length - 1]) == null ? void 0 : (_displayedStack2$prop = _displayedStack2.props) == null ? void 0 : _displayedStack2$prop.skipAnimations);
  }, [displayedStack]);
  return React.createElement(React.Fragment, null, React.createElement(AnimatePresence, null, stack.length > 0 && React.createElement(Backdrop, null)), displayedStack.map(function (modal, index) {
    var open = index === displayedStack.length - 1 && isOpen;
    return React.createElement(modal.component, Object.assign({
      key: index,
      open: open,
      Backdrop: null,
      onClose: closeModal,
      onAnimationComplete: function onAnimationComplete() {
        var _modal$props;

        // set open state for next modal
        if (stack.length > 0) {
          setOpen(true);
        } else {
          setOpen(false);
        } // update displayed stack
        // setTimeout is a hack to prevent a warning about updating state
        // in an unmounted component (I can't figure out why it happens, or why this fixes it)


        setTimeout(function () {
          return setDisplayedStack(stack);
        });
        (_modal$props = modal.props) == null ? void 0 : _modal$props.onAnimationComplete == null ? void 0 : _modal$props.onAnimationComplete();
      },
      skipAnimations: skipAnimations
    }, modal.props));
  }));
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["allowClose", "closeOnOutsideClick", "Backdrop", "children", "fullScreen", "maxWidth", "onClose", "open", "skipAnimations", "sx", "variant", "width", "animations"];
var MotionBox$1 = /*#__PURE__*/motion(Box);
function Modal(_ref) {
  var _ref$allowClose = _ref.allowClose,
      allowClose = _ref$allowClose === void 0 ? true : _ref$allowClose,
      _ref$closeOnOutsideCl = _ref.closeOnOutsideClick,
      closeOnOutsideClick = _ref$closeOnOutsideCl === void 0 ? true : _ref$closeOnOutsideCl,
      _ref$Backdrop = _ref.Backdrop,
      BackdropComponent = _ref$Backdrop === void 0 ? Backdrop : _ref$Backdrop,
      children = _ref.children,
      _ref$fullScreen = _ref.fullScreen,
      fullScreen = _ref$fullScreen === void 0 ? "xs" : _ref$fullScreen,
      maxWidth = _ref.maxWidth,
      onClose = _ref.onClose,
      open = _ref.open,
      _ref$skipAnimations = _ref.skipAnimations,
      skipAnimations = _ref$skipAnimations === void 0 ? false : _ref$skipAnimations,
      sx = _ref.sx,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "auto" : _ref$width,
      animations = _ref.animations,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useModals = useModals(),
      closeModal = _useModals.closeModal;

  var modalAnimations = useMemo(function () {
    return enhanceAnimations(animations);
  }, [animations]);
  var isFullScreen = useResponsiveValue(getBreakpoints(fullScreen));
  var animation = useResponsiveValue([isFullScreen ? modalAnimations.fullScreen : modalAnimations["default"], isFullScreen ? modalAnimations.fullScreen : modalAnimations["default"], modalAnimations["default"]]);

  function handleClose() {
    if (onClose) {
      onClose();
    } else if (closeModal) {
      closeModal();
    }
  }

  var contextValue = useMemo(function () {
    return {
      allowClose: allowClose,
      onClose: onClose,
      skipAnimations: skipAnimations,
      isFullScreen: isFullScreen
    };
  }, [allowClose, onClose, skipAnimations, isFullScreen]);
  return React.createElement(ModalContext.Provider, {
    value: contextValue
  }, React.createElement(AnimatePresence, {
    custom: {
      skip: skipAnimations
    }
  }, open && React.createElement(TouchScrollable, null, React.createElement(Box, {
    sx: {
      zIndex: "modal",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center"
    },
    onClick: closeOnOutsideClick ? handleClose : undefined
  }, BackdropComponent && React.createElement(BackdropComponent, null), React.createElement(MotionBox$1, Object.assign({
    "aria-modal": "true",
    variants: animation,
    animate: "enter",
    exit: "exit",
    initial: skipAnimations ? false : 'exit',
    variant: isFullScreen ? "modals." + variant + "FullScreen" : "modals." + variant,
    sx: _extends({
      width: isFullScreen ? null : width,
      maxWidth: isFullScreen ? null : maxWidth
    }, sx != null ? sx : {}),
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    }
  }, props), typeof children === "function" ? children(contextValue) : children)))));
}

function enhanceAnimations(animations) {
  var defaultAnimations = {
    "default": {
      enter: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.2,
          ease: "easeInOut"
        }
      },
      exit: {
        opacity: 0,
        scale: 0.75,
        transition: {
          duration: 0.2,
          ease: "easeInOut"
        }
      }
    },
    fullScreen: {
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut"
        }
      },
      exit: {
        opacity: 0,
        y: "100vh",
        transition: {
          ease: "easeInOut"
        }
      }
    }
  };
  return {
    fullScreen: animations != null && animations.fullScreen ? {
      enter: animations.fullScreen.enter,
      exit: function exit(custom) {
        var _animations$fullScree, _animations$fullScree2, _animations$fullScree3;

        if (custom === void 0) {
          custom = {};
        }

        if (custom.skip) {
          return {
            transition: {
              duration: 0
            }
          };
        }

        return typeof (animations == null ? void 0 : (_animations$fullScree = animations.fullScreen) == null ? void 0 : _animations$fullScree.exit) === 'function' ? //@ts-ignore
        (_animations$fullScree2 = animations.fullScreen) == null ? void 0 : _animations$fullScree2.exit(custom) : (_animations$fullScree3 = animations.fullScreen) == null ? void 0 : _animations$fullScree3.exit;
      }
    } : defaultAnimations.fullScreen,
    "default": animations != null && animations["default"] ? {
      enter: animations["default"].enter,
      exit: function exit(custom) {
        var _animations$default, _animations$default2, _animations$default3;

        if (custom === void 0) {
          custom = {};
        }

        if (custom.skip) {
          return {
            transition: {
              duration: 0
            }
          };
        }

        return typeof (animations == null ? void 0 : (_animations$default = animations["default"]) == null ? void 0 : _animations$default.exit) === 'function' ? //@ts-ignore
        (_animations$default2 = animations["default"]) == null ? void 0 : _animations$default2.exit(custom) : (_animations$default3 = animations["default"]) == null ? void 0 : _animations$default3.exit;
      }
    } : defaultAnimations["default"]
  };
}

function getBreakpoints(value) {
  switch (value) {
    case true:
      return [true, true, true, true, true, true];

    case false:
      return [false, false, false, false, false];

    case "xs":
      return [true, false, false, false, false];

    case "sm":
      return [true, true, false, false, false];

    case "md":
      return [true, true, true, false, false];

    case "lg":
      return [true, true, true, true, false];
  }
}

var ModalContent = /*#__PURE__*/React.forwardRef(function ModalContent(props, ref) {
  return React.createElement(Box, Object.assign({
    variant: "modals.content"
  }, props, {
    ref: ref
  }));
});

var ModalFooter = /*#__PURE__*/React.forwardRef(function ModalFooter(props, ref) {
  return React.createElement(Box, Object.assign({
    variant: "modals.footer"
  }, props, {
    ref: ref
  }));
});

var _excluded$1 = ["children", "CloseButton"];
var ModalTitle = /*#__PURE__*/React.forwardRef(function ModalTitle(_ref, ref) {
  var children = _ref.children,
      CloseButton = _ref.CloseButton,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var _useModal = useModal(),
      allowClose = _useModal.allowClose,
      onClose = _useModal.onClose;

  return React.createElement(Box, Object.assign({
    variant: "modals.title"
  }, props, {
    ref: ref
  }), children, allowClose && (CloseButton ? React.createElement(CloseButton, {
    onClick: onClose
  }) : React.createElement(Close, {
    sx: {
      height: 6,
      width: 6,
      '&:hover': {
        cursor: 'pointer'
      }
    },
    onClick: onClose
  })));
});

var modalTheme = {
  modals: {
    // Modal components
    backdrop: {
      zIndex: "backdrop",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.3)"
    },
    content: {
      px: '1rem',
      flexGrow: 1,
      overflowY: 'scroll'
    },
    footer: {
      minHeight: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: '1rem'
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 16,
      px: '1rem'
    },
    // Modal variants
    "default": {
      backgroundColor: 'background',
      borderRadius: 'lg',
      boxShadow: "md",
      display: "flex",
      flexDirection: "column",
      maxHeight: "80vh",
      minHeight: '16rem',
      minWidth: '16rem',
      maxWidth: 'min(90vw, 64rem)',
      position: "absolute",
      top: ["25%", "10%", "10%"],
      zIndex: "modal"
    },
    defaultFullScreen: {
      backgroundColor: 'background',
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      minHeight: '100vh',
      maxHeight: '100vh',
      height: "fill-available",
      position: "absolute",
      top: 0,
      width: "100vw",
      zIndex: "modal"
    }
  },
  zIndices: {
    backdrop: 100,
    modal: 110
  }
};
function withModalTheme(theme) {
  var _theme$modals, _theme$zIndices;

  return _extends({}, theme, {
    modals: _extends({}, modalTheme.modals, (_theme$modals = theme == null ? void 0 : theme.modals) != null ? _theme$modals : {}),
    zIndices: _extends({}, modalTheme.zIndices, (_theme$zIndices = theme == null ? void 0 : theme.zIndices) != null ? _theme$zIndices : [])
  });
}

export { AnimatedModalStack, Backdrop, Modal, ModalContent, ModalFooter, ModalTitle, modalTheme, useModal, withModalTheme };
//# sourceMappingURL=react-modal.esm.js.map
