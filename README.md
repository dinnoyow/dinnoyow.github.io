# Namings
- Use snake_case for files and folders

# CSS Custom Size Namings
- Specify width size using "w" + "amount" + "unit". Example: w2em
- For height, change "w" with "h"
- If sizing is both, but the values are different, start with width first and then height, spaced by "-". Example: w2em-h3em
- if sizing is both and the values are the same, use "s" for square followed by the amount and unit. Example: s5em
- CSS sizing naming can be replaced with words for commonly used sizings, such as header-size or footer-size.

# CSS Custom Color Namings
- Colors are divided by types: background (bg), border (bd) and text (tx).
- Each types are divided by categories: main, sub, and accent (acc).
- Each categories are divided by versions which is tracked by numbers.
- If the color includes both background, border, and text, write "all"
- If the color includes just two of the bg, bd, or tx, write: "bgbd" or "bgtx" or "bdtx" 
- Examples: "bg-main-3" "bd-sub-1" "tx-acc-1" "bgtx-main-2" "all-acc-4"

# CSS Custom Border Namings
- For uniform border sizes, use "bd" + thickness amount + unit. Example: bd2px
- For non-uniform border sizes, before "bd", add "t", "r", "b", and "l" for top, right, bottom, and left, in that order. Example: "tbd2px" "tbbd3px"
- For paralel lines borders, use "v" for vertical borders and "h" for horizontal borders. Example: "hbd2px" or "vbd1px"
- For rounded corners, use "r" instead of "bd". Example: "r4px"
- Border namings can be replaced with words for commonly used border design, such as "main-bd" or "sub-bd"