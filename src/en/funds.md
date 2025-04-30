---
layout: layouts/base.njk
title: Funds
---

# Funds

Xecut&nbsp;&mdash; a **non-profit** project
that cannot exist without financial support
from its members and visitors.

Cash donations can be left in the special box
located in the hackspace.
For non-cash transfers, please contact the administrators
of the <a target="_blank" href="{{ config.links.chat }}">chat</a>.

## Monthly Expenses

Expense Category     | Amount
:------------------- | -----------:
Space Rent           | {{ funds.monthly.rent | formatCurrency: funds.monthly.currency }}
Utility Bills        | {{ funds.monthly.bils | formatCurrency: funds.monthly.currency }}
**Total**            | **{{ funds.monthly | sumObjectValues | formatCurrency: funds.monthly.currency }}**
