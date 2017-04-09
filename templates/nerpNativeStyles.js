/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpNativeStyles'

// ------------------------------------
// OUTPUT
// ------------------------------------
import { applicationStyles } from 'navigate to themes directory'

export default {
  ...applicationStyles.screen
}


// ------------------------------------
// INPUT
// ------------------------------------
import { applicationStyles } from '${1:navigate to themes directory}'

export default {
  ...applicationStyles.screen${2}
}


// ------------------------------------
// GENERATED
// ------------------------------------
import { applicationStyles } from \'${1:navigate to themes directory}\'\n\nexport default {\n\t...applicationStyles.screen${2}\n}\n
