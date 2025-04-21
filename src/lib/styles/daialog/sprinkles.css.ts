// sprinkles.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

const spacing = {
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '32px',
  6: '48px',
}

const colors = {
  primary: '#FF6347',
  secondary: '#FFD700',
  background: 'rgba(0, 0, 0, 0.5)',
  white: '#FFFFFF',
}

const borderRadius = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '16px',
}

const boxShadow = {
  light: '0 4px 8px rgba(0, 0, 0, 0.1)',
  medium: '0 10px 20px rgba(0, 0, 0, 0.15)',
}

export const sprinkles = createSprinkles(
  defineProperties({
    properties: {
      padding: spacing,
      backgroundColor: colors,
      borderColor: colors,
      borderRadius,
      boxShadow,
      position: {
        fixed: 'fixed',
      },
      inset: {
        0: '0',
      },
      display: {
        flex: 'flex',
      },
      justifyContent: {
        center: 'center',
      },
      alignItems: {
        center: 'center',
      },
      width: {
        '90%': '90%',
      },
      maxWidth: {
        '600px': '600px',
      },
    },
  }),
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
