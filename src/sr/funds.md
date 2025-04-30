---
layout: layouts/base.njk
title: Funds
---

# Funds

Xecut&nbsp;&mdash; **neprofitni** projekat
čije postojanje nije moguće bez finansijske podrške
članova i posetilaca.

Donacije u gotovini mogu se ostaviti u posebnoj kutiji
koja se nalazi u hakerspejsu.
Za beskontaktna plaćanja, molimo vas da kontaktirate administratore
<a target="_blank" href="{{ config.links.chat }}">četa</a>.

## Monthly Expenses

Stavka troška          | Iznos
:----------------------| -----------:
Zakup prostora         | {{ funds.monthly.rent | formatCurrency: funds.monthly.currency }}
Komunalni računi       | {{ funds.monthly.bills | formatCurrency: funds.monthly.currency }}
**Ukupno**             | **{{ funds.monthly | sumObjectValues | formatCurrency: funds.monthly.currency }}**
