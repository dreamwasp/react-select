/** @jsx jsx */
import { Ref } from 'react';
import { jsx } from '@emotion/react';

export type DummyInputProps = JSX.IntrinsicElements['input'] & {
  /** Reference to the internal element */
  readonly innerRef: Ref<HTMLInputElement>;
}

export default function DummyInput({
  innerRef,
  ...props
}: DummyInputProps) {
  return (
    <input
      ref={innerRef}
      {...props}
      css={{
        label: 'dummyInput',
        // get rid of any default styles
        background: 0,
        border: 0,
        // important! this hides the flashing cursor
        caretColor: 'transparent',
        fontSize: 'inherit',
        outline: 0,
        padding: 0,
        // important! without `width` browsers won't allow focus
        width: 1,

        // remove cursor on desktop
        color: 'transparent',

        // remove cursor on mobile whilst maintaining "scroll into view" behaviour
        left: -100,
        opacity: 0,
        position: 'relative',
        transform: 'scale(0)',
      }}
    />
  );
}