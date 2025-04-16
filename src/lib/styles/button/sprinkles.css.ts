import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

const properties = defineProperties({
  properties: {
    backgroundColor: ['pink', 'yellow'],
    color: ['black', 'white'],
    padding: ['8px', '12px', '16px'],
    margin: ['0', '8px', '16px'],
    display: ['block', 'inline-block', 'flex'],
    justifyContent: ['center', 'space-between'],
    textAlign: ['left', 'center', 'right'],
    fontWeight: ['normal', 'bold'],
    fontSize: ['14px', '16px', '18px'],
    width: ['100%', 'auto'],
    borderRadius: ['0px', '4px', '8px'],
    cursor: ['pointer'],
  },
  shorthands: {
    p: ['padding'],
    m: ['margin'],
    txtaaaa: ['textAlign'],
  },
})

export const sprinkles = createSprinkles(properties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
