/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { JSPrimitive, Primitive } from '@yagomarinho/ts-toolkit'

export function isPrimitive(value: unknown): value is Primitive {
  return (
    value == null ||
    ['string', 'number', 'boolean', 'undefined'].includes(typeof value)
  )
}

export function isJsPrimitive(value: unknown): value is JSPrimitive {
  return (
    value === null || (typeof value !== 'object' && typeof value !== 'function')
  )
}
